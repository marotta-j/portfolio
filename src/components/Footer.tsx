import { useState } from "react";
import Confetti from "react-confetti";
import { REPO_URL } from "@/content";

/**
 * Footer with confetti celebration and source link
 */
export function Footer() {
  const [burst, setBurst] = useState(0);
  const [celebrating, setCelebrating] = useState(false);

  return (
    <footer className="grid grid-cols-3 items-center border-t border-border py-8 font-serif text-xs text-muted/60">
      <span>© {new Date().getFullYear()} Joseph Marotta</span>

      <button
        type="button"
        onClick={() => {
          setBurst((n) => n + 1);
          setCelebrating(true);
        }}
        className="justify-self-center rounded-full border border-border px-3 py-1 transition-colors hover:border-accent/40 hover:text-accent"
      >
        click me
      </button>

      <a
        href={REPO_URL}
        target="_blank"
        rel="noreferrer"
        className="justify-self-end transition-colors hover:text-accent"
      >
        source ↗
      </a>

      {celebrating && (
        <Confetti
          key={burst}
          width={window.innerWidth}
          height={window.innerHeight}
          numberOfPieces={220}
          gravity={0.2}
          recycle={false}
          style={{ position: "fixed", zIndex: 50 }}
          onConfettiComplete={() => setCelebrating(false)}
        />
      )}
    </footer>
  );
}
