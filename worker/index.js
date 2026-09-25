import { KNOWLEDGE } from "./knowledge.js";

// Add your deployed GitHub Pages URL here once you know it, plus localhost
// for testing. Requests from any other origin are rejected.
const ALLOWED_ORIGINS = [
  "https://manojlamichhane-ml.github.io",
  "http://localhost:3000",
];

const SYSTEM_PROMPT = `You are a friendly, concise portfolio assistant answering questions about Manoj Lamichhane, based only on the information below. You are not Manoj himself — refer to him in the third person.

Rules:
- Answer only using the information provided below. If something isn't covered, say you don't have that detail and suggest the visitor use the Contact section or email Manoj directly.
- Keep answers conversational and fairly short (2-5 sentences) unless the visitor asks for detail.
- Never make up dates, numbers, or facts not present below.
- If asked something unrelated to Manoj or his work, politely redirect to what you can help with.

INFORMATION ABOUT MANOJ:
${KNOWLEDGE}`;

function corsHeaders(origin) {
  const allowed = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  return {
    "Access-Control-Allow-Origin": allowed,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";
    const headers = corsHeaders(origin);

    if (request.method === "OPTIONS") {
      return new Response(null, { headers });
    }

    if (request.method !== "POST") {
      return new Response("Method not allowed", { status: 405, headers });
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return new Response(JSON.stringify({ error: "Invalid JSON" }), {
        status: 400,
        headers: { ...headers, "Content-Type": "application/json" },
      });
    }

    const { message, history } = body;
    if (!message || typeof message !== "string") {
      return new Response(JSON.stringify({ error: "Missing message" }), {
        status: 400,
        headers: { ...headers, "Content-Type": "application/json" },
      });
    }

    // history: array of {role: "user"|"assistant", content: string}, optional,
    // capped so a long conversation can't blow up token usage.
    const priorMessages = Array.isArray(history) ? history.slice(-10) : [];

    const anthropicRes = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": env.ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 500,
        system: SYSTEM_PROMPT,
        messages: [...priorMessages, { role: "user", content: message }],
      }),
    });

    if (!anthropicRes.ok) {
      const errText = await anthropicRes.text();
      return new Response(
        JSON.stringify({ error: "Upstream error", detail: errText }),
        { status: 502, headers: { ...headers, "Content-Type": "application/json" } }
      );
    }

    const data = await anthropicRes.json();
    const reply = data.content?.[0]?.text || "Sorry, I couldn't generate a reply.";

    return new Response(JSON.stringify({ reply }), {
      headers: { ...headers, "Content-Type": "application/json" },
    });
  },
};
