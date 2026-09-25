"use client";

export default function ChatNavLink() {
  return (
    <a
      href="#chat"
      onClick={(e) => {
        e.preventDefault();
        window.dispatchEvent(new CustomEvent("open-chat-widget"));
      }}
      style={{ color: "var(--color-accent)" }}
    >
      CHAT WITH ME
    </a>
  );
}
