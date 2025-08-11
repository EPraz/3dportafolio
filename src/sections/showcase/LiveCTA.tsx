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
  const cls = size === "sm" ? "h-9 px-3" : "h-10 px-4";

  if (liveEnabled) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="btn-primary-live"
      >
        <button id={id} className={cls}>
          Live
        </button>
      </a>
    );
  }

  // Variante deshabilitada (mismo look & feel, sin interacción)
  return (
    <div className="pointer-events-none opacity-75 ">
      <button id={`${id}-disabled`} className={cls}>
        Live
      </button>
    </div>
  );
};

export default LiveCTA;
