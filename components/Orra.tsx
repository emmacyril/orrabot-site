import type { CSSProperties } from "react";

const BODY = "M10 70C10 41 27 22 43 21C46.5 21 48.6 22.6 50 24.6C51.4 22.6 53.5 21 57 21C73 22 90 41 90 70C90 84 79 89 50 89C21 89 10 84 10 70Z";

/** Rendered once in the layout; <Orra/> references these symbols. */
export function OrraSprite() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
      <defs>
        <symbol id="orra" viewBox="0 0 100 100">
          <path d={BODY} fill="currentColor" />
          <ellipse cx="33" cy="33" rx="9" ry="3.6" fill="#fff" opacity=".35" transform="rotate(-30 33 33)" />
          <ellipse cx="40" cy="56" rx="9.5" ry="10.5" fill="#fff" /><ellipse cx="41.4" cy="57.6" rx="6.6" ry="7.6" fill="#2A0F08" /><circle cx="43.6" cy="53.4" r="2.3" fill="#fff" />
          <ellipse cx="60" cy="56" rx="9.5" ry="10.5" fill="#fff" /><ellipse cx="61.4" cy="57.6" rx="6.6" ry="7.6" fill="#2A0F08" /><circle cx="63.6" cy="53.4" r="2.3" fill="#fff" />
          <path d="M46.5 69 Q50 72 53.5 69" fill="none" stroke="#2A0F08" strokeWidth="2.2" strokeLinecap="round" />
        </symbol>
        <symbol id="orra-face" viewBox="0 0 100 100">
          <path d={BODY} fill="currentColor" />
          <ellipse cx="40" cy="56" rx="9.5" ry="10.5" fill="#2A0F08" /><circle cx="43" cy="52.6" r="2.6" fill="#fff" />
          <ellipse cx="60" cy="56" rx="9.5" ry="10.5" fill="#2A0F08" /><circle cx="63" cy="52.6" r="2.6" fill="#fff" />
          <path d="M45 70 Q50 74.5 55 70" fill="none" stroke="#2A0F08" strokeWidth="2.6" strokeLinecap="round" />
        </symbol>
      </defs>
    </svg>
  );
}

export function Orra({ color, className, face = false, style }: { color: string; className?: string; face?: boolean; style?: CSSProperties }) {
  return (
    <svg className={className} style={{ color, ...style }} aria-hidden="true">
      <use href={face ? "#orra-face" : "#orra"} />
    </svg>
  );
}
