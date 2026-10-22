import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, CalendarDays, Globe2, MapPin, Sparkles, Users } from "lucide-react";
import summitPoster from "@/assets/alf-summit-2026.jpg";
import { ROUTES } from "@/content/routes";

const SUMMIT_URL = "https://uniglobeaccess.com/africa-leaders-founders";
const SUMMIT_START = new Date("2026-11-17T08:00:00+03:00").getTime();
const SUMMIT_END = new Date("2026-11-21T18:00:00+03:00").getTime();

const tagline = ["Learn", "Connect", "Build", "Lead"];

const tracks = ["Leadership", "Entrepreneurship", "Innovation", "Agriculture", "Digital Skills"];

const summitStats = [
  { icon: CalendarDays, value: "5 Days", label: "4-day bootcamp + 1-day summit" },
  { icon: Users, value: "500", label: "Expected delegates" },
  { icon: Globe2, value: "35", label: "Countries in the 2025 edition" },
  { icon: MapPin, value: "Nairobi", label: "Kenya · 17–21 Nov 2026" },
];

// Ticks every second and returns the time left until the summit starts
const useCountdown = (target: number) => {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const timer = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(timer);
  }, []);

  const diff = Math.max(0, target - now);
  return {
    now,
    parts: [
      { label: "Days", value: Math.floor(diff / 86_400_000) },
      { label: "Hours", value: Math.floor(diff / 3_600_000) % 24 },
      { label: "Mins", value: Math.floor(diff / 60_000) % 60 },
      { label: "Secs", value: Math.floor(diff / 1000) % 60 },
    ],
  };
};

const Countdown = () => {
  const { now, parts } = useCountdown(SUMMIT_START);

  if (now >= SUMMIT_END) return null;

  if (now >= SUMMIT_START) {
    return (
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-secondary/15 border border-secondary/30 text-secondary font-semibold mb-8">
        <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" /> Happening now in Nairobi
      </div>
    );
  }

  return (
    <div className="mb-8">
      <p className="text-xs uppercase tracking-[0.2em] text-primary-foreground/50 font-semibold mb-3">
        Summit starts in
      </p>
      <div className="grid grid-cols-4 gap-2 sm:gap-3 max-w-md">
        {parts.map((p) => (
          <div
            key={p.label}
            className="relative rounded-xl bg-primary-foreground/[0.06] border border-primary-foreground/10 backdrop-blur-md py-3 text-center overflow-hidden"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary/60 to-transparent" />
            <div className="font-display text-2xl sm:text-3xl font-bold text-primary-foreground tabular-nums">
              {String(p.value).padStart(2, "0")}
            </div>
            <div className="text-[10px] sm:text-xs uppercase tracking-wider text-primary-foreground/50 mt-0.5">
              {p.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Featured event at the top of the home page
const EventSpotlight = () => (
  <section id="home" className="relative overflow-hidden bg-hero-gradient pt-32 md:pt-36 pb-12 md:pb-16">
    {/* Backdrop: blurred poster, dot grid and colour glows */}
    <div className="absolute inset-0 pointer-events-none">
      <img src={summitPoster} alt="" className="w-full h-full object-cover scale-110 blur-3xl opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-ausp-blue-dark/70 via-ausp-blue-dark/40 to-ausp-blue-dark/90" />
      <div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(circle,white_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute -top-24 -left-24 w-[28rem] h-[28rem] rounded-full bg-secondary/20 blur-3xl" />
      <div className="absolute top-1/3 -right-32 w-[32rem] h-[32rem] rounded-full bg-primary/30 blur-3xl" />
    </div>

    <div className="relative z-10 container mx-auto px-4">
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Poster */}
        <div className="lg:col-span-7 lg:order-last animate-fade-in-up">
          <div className="relative">
            {/* Glow */}
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-secondary/40 via-primary/30 to-emerald-500/30 blur-2xl opacity-70" />

            <a
              href={SUMMIT_URL}
              target="_blank"
              rel="noreferrer"
              className="group relative block rounded-3xl p-[2px] bg-gradient-to-br from-secondary via-primary-foreground/30 to-primary shadow-2xl"
            >
              <div className="relative rounded-[calc(1.5rem-2px)] overflow-hidden bg-ausp-blue-dark">
                <img
                  src={summitPoster}
                  alt="Africa Leaders & Founders Bootcamp & Summit 2026 — Registration is open now. 17–21 November 2026, Nairobi, Kenya."
                  className="w-full h-auto aspect-[16/9] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ausp-blue-dark/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="absolute bottom-3 right-3 md:bottom-5 md:right-5 inline-flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 rounded-full bg-primary text-primary-foreground text-xs md:text-sm font-bold uppercase tracking-wider shadow-lg ring-2 ring-primary-foreground/80 group-hover:gap-3 transition-all">
                  Join the Journey <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </a>

            {/* Floating date card */}
            <div className="hidden lg:flex absolute -top-6 -left-6 items-center gap-3 rounded-2xl bg-card text-card-foreground shadow-2xl px-4 py-3 animate-float">
              <div className="w-11 h-11 rounded-xl bg-gold-gradient flex flex-col items-center justify-center leading-none">
                <span className="text-[10px] font-bold uppercase text-foreground/80">Nov</span>
                <span className="text-base font-bold text-foreground">17</span>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Save the date</p>
                <p className="text-sm font-bold">17–21 Nov 2026</p>
              </div>
            </div>

            {/* Floating edition card */}
            <div
              className="hidden lg:flex absolute -bottom-6 -left-4 items-center gap-2 rounded-2xl bg-ausp-blue-dark/90 backdrop-blur-xl border border-primary-foreground/15 text-primary-foreground shadow-2xl px-4 py-3 animate-float"
              style={{ animationDelay: "1.5s" }}
            >
              <Sparkles className="w-4 h-4 text-secondary" />
              <span className="text-sm font-semibold">Edition 02 · From Harare to Nairobi</span>
            </div>
          </div>
        </div>

        {/* Intro */}
        <div className="lg:col-span-5 text-primary-foreground animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider">
              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-400" />
              </span>
              Registration open
            </span>
            <span className="px-3 py-1.5 rounded-full bg-primary-foreground/10 border border-primary-foreground/15 text-xs font-semibold uppercase tracking-wider text-primary-foreground/80">
              Featured event
            </span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl xl:text-[3.4rem] font-bold leading-[1.05] mb-4">
            Africa Leaders <span className="text-primary-foreground/60">&</span> Founders
            <span className="block text-gradient-gold mt-1">
              Bootcamp & <span className="whitespace-nowrap">Summit 2.0</span>
            </span>
          </h1>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-5 text-sm md:text-base font-semibold tracking-wide">
            {tagline.map((word, i) => (
              <span key={word} className="inline-flex items-center gap-3">
                {i > 0 && <span className="w-1.5 h-1.5 rounded-full bg-secondary" />}
                <span className={i % 2 ? "text-secondary" : "text-primary-foreground"}>{word}.</span>
              </span>
            ))}
          </div>

          <p className="text-primary-foreground/70 leading-relaxed mb-5 max-w-xl">
            Five days in Nairobi to connect, equip and inspire Africa's next generation of leaders, founders and
            changemakers — organized by UniGlobe Access and Smallholder Africa, in partnership with AUSP.
          </p>

          <div className="flex flex-wrap gap-2 mb-7">
            {tracks.map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-full text-xs font-medium bg-primary-foreground/[0.06] border border-primary-foreground/10 text-primary-foreground/80"
              >
                {t}
              </span>
            ))}
          </div>

          <Countdown />

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={SUMMIT_URL}
              target="_blank"
              rel="noreferrer"
              className="group relative inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gold-gradient text-foreground font-bold shadow-gold hover:scale-[1.03] transition-all overflow-hidden"
            >
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
              <span className="relative">Register Now</span>
              <ArrowUpRight className="relative w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <Link
              to={ROUTES.whoWeAre.about}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-primary-foreground/25 bg-primary-foreground/5 backdrop-blur-md text-primary-foreground font-semibold hover:bg-primary-foreground/10 hover:border-primary-foreground/40 transition-all"
            >
              About AUSP
            </Link>
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div
        className="mt-14 md:mt-16 grid grid-cols-2 lg:grid-cols-4 rounded-2xl bg-primary-foreground/[0.05] border border-primary-foreground/10 backdrop-blur-xl overflow-hidden animate-fade-in-up"
        style={{ animationDelay: "0.3s" }}
      >
        {summitStats.map((s, i) => (
          <div
            key={s.label}
            className={`flex items-center gap-3 md:gap-4 p-4 md:p-6 border-primary-foreground/10 ${i % 2 ? "border-l" : ""} ${i >= 2 ? "border-t lg:border-t-0" : ""} ${i > 0 ? "lg:border-l" : ""}`}
          >
            <div className="shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl bg-secondary/15 border border-secondary/25 flex items-center justify-center">
              <s.icon className="w-5 h-5 md:w-6 md:h-6 text-secondary" />
            </div>
            <div className="min-w-0">
              <div className="font-display text-lg md:text-2xl font-bold text-primary-foreground leading-tight">{s.value}</div>
              <div className="text-[11px] md:text-xs text-primary-foreground/55 leading-snug">{s.label}</div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Kenyan flag accent */}
    <div className="absolute bottom-0 inset-x-0 flex h-1.5">
      <div className="flex-1 bg-black" />
      <div className="flex-1 bg-red-600" />
      <div className="flex-1 bg-emerald-600" />
    </div>
  </section>
);

const HeroSection = () => <EventSpotlight />;

export default HeroSection;
