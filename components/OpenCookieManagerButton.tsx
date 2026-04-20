"use client";

export default function OpenCookieManagerButton({ className }: { className?: string }) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event("openCookieManager"))}
      className={className}
    >
      Gestisci cookie
    </button>
  );
}
