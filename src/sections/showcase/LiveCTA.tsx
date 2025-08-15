import type { Status } from "../../contants";

const LiveCTA = ({
  status,
  url,
  id,
  size = "md",
}: {
  status: Status;
  url?: string;
  id: string;
  size?: "sm" | "md";
}) => {
  const liveEnabled = status === "live" && !!url;
  const sizeCls = size === "sm" ? "h-9 px-3 text-sm" : "h-10 px-4";

  if (liveEnabled) {
    return (
      <a
        id={id}
        href={url}
        target="_blank"
        rel="noreferrer noopener"
        className={`inline-flex items-center justify-center rounded-lg
          border border-white/15 text-white/90 hover:bg-white/5 transition
          ${sizeCls} cursor-pointer select-none btn-primary-live`}
      >
        Live
      </a>
    );
  }

  // Deshabilitado (mismo look, sin interacción)
  return (
    <span
      id={`${id}-disabled`}
      aria-disabled="true"
      className={`inline-flex items-center justify-center rounded-lg
        border border-white/10 text-white/50 bg-white/5
        ${sizeCls} cursor-not-allowed select-none`}
    >
      Live
    </span>
  );
};

export default LiveCTA;
