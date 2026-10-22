import { useEffect, useState } from "react";
import Loader from "@/components/Loader";
import { SITE } from "@/content/site";

const MIN_VISIBLE_MS = 1200;
const FADE_MS = 500;

// Full-screen splash shown while the site first loads, then faded out
const PageLoader = () => {
  const [phase, setPhase] = useState<"visible" | "fading" | "done">("visible");

  useEffect(() => {
    const startedAt = performance.now();
    let fadeTimer: ReturnType<typeof setTimeout>;
    let doneTimer: ReturnType<typeof setTimeout>;

    const hide = () => {
      const wait = Math.max(0, MIN_VISIBLE_MS - (performance.now() - startedAt));
      fadeTimer = setTimeout(() => {
        setPhase("fading");
        doneTimer = setTimeout(() => setPhase("done"), FADE_MS);
      }, wait);
    };

    if (document.readyState === "complete") hide();
    else window.addEventListener("load", hide, { once: true });

    return () => {
      window.removeEventListener("load", hide);
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center gap-10 bg-hero-gradient transition-opacity duration-500 ${
        phase === "fading" ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <Loader />
      <div className="text-center">
        <p className="font-display text-2xl font-bold text-primary-foreground">{SITE.shortName}</p>
        <p className="text-sm text-primary-foreground/60 mt-1">{SITE.tagline}</p>
      </div>
    </div>
  );
};

export default PageLoader;
