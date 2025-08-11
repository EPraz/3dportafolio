// components/ShowMoreText.tsx
import { useEffect, useRef, useState } from "react";

type Props = {
  text: string;
  lines?: 1 | 2 | 3 | 4 | 5;
  className?: string;
  buttonClassName?: string;
};

const clampClassMap = {
  1: "line-clamp-1",
  2: "line-clamp-2",
  3: "line-clamp-3",
  4: "line-clamp-4",
  5: "line-clamp-5",
} as const;

export default function ShowMoreText({
  text,
  lines = 3,
  className = "",
  buttonClassName = "",
}: Props) {
  const [open, setOpen] = useState(false);
  const [showToggle, setShowToggle] = useState(false);
  const pRef = useRef<HTMLParagraphElement | null>(null);
  const clampClass = clampClassMap[lines];

  useEffect(() => {
    const el = pRef.current;
    if (!el) return;
    const check = () => {
      if (open) {
        setShowToggle(true);
        return;
      }
      // margen pequeño por subpíxeles
      const overflowing = el.scrollHeight - el.clientHeight > 2;
      setShowToggle(overflowing);
    };
    const ro = new ResizeObserver(check);
    ro.observe(el);
    requestAnimationFrame(check);
    return () => ro.disconnect();
  }, [text, open, lines]);

  const id = `showmore_${Math.random().toString(36).slice(2, 9)}`;

  return (
    <div className={`relative ${className}`}>
      <p id={id} ref={pRef} className={!open ? clampClass : ""}>
        {text}
      </p>

      {!open && showToggle && (
        <span className="pointer-events-none absolute inset-x-0 bottom-6 h-6 bg-gradient-to-t from-[rgba(0,0,0,0.55)] to-transparent" />
      )}

      {showToggle && (
        <button
          type="button"
          aria-expanded={open}
          aria-controls={id}
          onClick={() => setOpen(!open)}
          className={`mt-1 text-xs text-indigo-300 hover:text-indigo-200 underline underline-offset-2 ${buttonClassName}`}
        >
          {open ? "Show less" : "Read more"}
        </button>
      )}
    </div>
  );
}
