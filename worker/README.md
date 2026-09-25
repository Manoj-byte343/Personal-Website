# Deploying the chat assistant

This folder is a small, separate program (a Cloudflare Worker) that powers
the chat widget on your site. It runs independently of your GitHub Pages
site — GitHub Pages only serves static files and can't run this itself,
which is why it needs its own free hosting.

## What it does

When someone types a question into your chat widget, the widget sends it
here. This Worker adds your background info (from `knowledge.js`) as
context, sends the question to Claude's API, and sends the answer back.
Your Anthropic API key stays secret on Cloudflare's servers — it's never
visible to website visitors.

## One-time setup

1. **Get an Anthropic API key.** Go to https://console.anthropic.com,
   sign up, and create an API key under Settings → API Keys. Add a small
   amount of credit (a few dollars covers a lot of visitor questions —
   see the earlier cost discussion: usage-based, typically a few dollars
   a month at low traffic). Copy the key somewhere safe — you'll paste it
   once and won't see it again.

2. **Install the Cloudflare CLI (Wrangler).** In PowerShell, anywhere:
   ```
   npm install -g wrangler
   ```

3. **Log in to Cloudflare.** This opens a browser window to sign up (free)
   or sign in:
   ```
   wrangler login
   ```

4. **Deploy the Worker.** From inside this `worker` folder:
   ```
   cd worker
   wrangler deploy
   ```
   This prints a URL like `https://portfolio-chat.your-subdomain.workers.dev`
   — copy it.

5. **Add your API key as a secret** (still inside the `worker` folder):
   ```
   wrangler secret put ANTHROPIC_API_KEY
   ```
   Paste your key when prompted and press Enter. This attaches it securely
   to the already-deployed Worker — no redeploy needed.

6. **Connect the frontend to the Worker.** Open `lib/chatConfig.js` in the
   main project (one folder up from here) and replace the placeholder URL
   with the real one from step 4.

7. **Update the allowed origin.** Open `worker/index.js` and check that
   `ALLOWED_ORIGINS` includes your actual GitHub Pages URL (it's already
   set to `https://manoj-byte343.github.io` — update this if your username
   or repo name ever changes). If you change this file, redeploy with
   `wrangler deploy` from inside `worker`.

8. **Commit and push** the updated `lib/chatConfig.js` (and `worker/`
   folder) to GitHub as usual — the chat widget will go live with your
   next deploy.

## Updating what the chatbot knows

Edit `worker/knowledge.js` — it's plain text describing your background.
After editing, redeploy with `wrangler deploy` from inside `worker`. This
file is separate from `data/content.js` (which drives the visible page)
because the Worker doesn't have access to your Next.js app at runtime —
keep the two in sync by hand when you update your info.

## Cost and limits

- Cloudflare Workers: free tier covers 100,000 requests/day — far more
  than a personal site needs.
- Anthropic API: usage-based, billed per question. Using Haiku (a fast,
  inexpensive model) keeps this to a small fraction of a cent per
  conversation. Set a spending cap in the Anthropic console if you want a
  hard ceiling.
