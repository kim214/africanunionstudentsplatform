import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Calendar,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Globe,
  Sparkles,
  Users,
  Target,
  BadgeCheck,
} from "lucide-react";

import leadershipBg from "@/assets/hero-leadership.jpg";
import campaign2 from "@/assets/campaign-2.png";
import unityBg from "@/assets/hero-unity.jpg";
import { ROUTES } from "@/content/routes";

// ─────────────────────────────────────────────────────────────
// SLIDES
// ─────────────────────────────────────────────────────────────
const slides = [
  {
    id: "conference",
    layout: "conference",
    badge: "3rd Annual",
    title: "International Pan-African",
    highlight: "Youth Conference 2026",
    theme: "Pan African Youth for a Just, Inclusive & Sustainable Africa.",
    description:
      "Join Africa’s boldest young innovators, leaders, entrepreneurs and policy thinkers for a transformative continental experience.",
    meta: [
      {
        icon: Calendar,
        text: "OCTOBER 21ST – 23RD, 2026",
      },
      {
        icon: MapPin,
        text: "CENTRAL BANK OF KENYA – INSTITUTE OF MONETARY STUDIES, NAIROBI",
      },
    ],
    
    deadline: "15th SEPT",
    ctaLabel: "Learn More",
    ctaTo: "https://africa-woad-ten.vercel.app/",
  },

  {
    id: "educate",
    layout: "default",
    image: leadershipBg,
    badge: "Educate • Connect • Empower",
    title: "African Union",
    highlight: "Students' Platform",
    description:
      "A vibrant Pan-African ecosystem empowering students and young professionals through innovation, leadership, education, and continental collaboration.",
    ctaLabel: "Discover AUSP",
    ctaTo: ROUTES.whoWeAre?.about ?? "#",
    secondaryLabel: "Our Programs",
    secondaryTo: ROUTES.whatWeDo?.programs ?? "#",
  },

  {
    id: "unity",
    layout: "default",
    image: unityBg,
    badge: "Agenda 2063 & SDGs",
    title: "Building Africa’s Future",
    highlight: "Together",
    description:
      "Creating a generation of visionary African leaders equipped with creativity, technology, and collaboration to shape the future of the continent.",
    ctaLabel: "View Mission",
    ctaTo: ROUTES.whoWeAre?.mission ?? "#",
    secondaryLabel: "Focus Areas",
    secondaryTo: ROUTES.whatWeDo?.focusAreas ?? "#",
  },
];

// ─────────────────────────────────────────────────────────────
// AFRICA MAP
// ─────────────────────────────────────────────────────────────
const AfricaDots = () => (
  <div className="absolute inset-0 opacity-20 pointer-events-none">
    <svg
      viewBox="0 0 500 500"
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      {Array.from({ length: 45 }).map((_, row) =>
        Array.from({ length: 35 }).map((_, col) => {
          const x = col * 14 + 20;
          const y = row * 12 + 10;

          const dx = col - 17;
          const dy = row - 22;

          const inside =
            dx * dx * 0.6 + dy * dy * 0.35 < 130 &&
            !(row < 5 && col < 8) &&
            !(row < 3 && col > 28) &&
            !(row > 35 && (col < 10 || col > 22));

          if (!inside) return null;

          return (
            <circle
              key={`${row}-${col}`}
              cx={x}
              cy={y}
              r={1.8}
              fill="#FFD700"
              opacity={0.2 + Math.random() * 0.4}
            />
          );
        })
      )}
    </svg>
  </div>
);

// ─────────────────────────────────────────────────────────────
// CONFERENCE SLIDE
// ─────────────────────────────────────────────────────────────
const ConferenceSlide = ({
  slide,
  isTransitioning,
}: {
  slide: (typeof slides)[0];
  isTransitioning: boolean;
}) => {
  return (
    <div
      className={`relative z-10 min-h-screen flex items-center transition-all duration-700 ${
        isTransitioning
          ? "opacity-0 translate-y-6"
          : "opacity-100 translate-y-0"
      }`}
    >
      <AfricaDots />

      {/* Floating blur circles */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-green-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-20 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-10 items-center pt-24 pb-16">
        {/* LEFT */}
        <div className="relative z-10">


          {/* MAIN TITLE */}
          <div className="flex items-end gap-4 mb-6">
            <div className="flex items-start">
              <span className="text-[#FFD700] font-black leading-none text-[6rem] md:text-[8rem] lg:text-[10rem] drop-shadow-2xl">
                3
              </span>

              <span className="text-white font-black text-3xl mt-5 -ml-2">
                rd
              </span>
            </div>

            <div className="w-px h-28 bg-gradient-to-b from-[#FFD700] to-transparent mb-3" />

            <div className="pb-2">
              <h1 className="text-white font-black leading-[0.95] text-[2.2rem] md:text-[3.5rem]">
                Annual International
              </h1>

              <h1 className="text-white font-black leading-[0.95] text-[2.2rem] md:text-[3.5rem]">
                Pan Africa Youth
              </h1>

              <h1 className="text-[#FFD700] font-black leading-[0.95] text-[2.2rem] md:text-[3.5rem]">
                Conference 2026
              </h1>
            </div>
          </div>

          {/* THEME */}
          <div className="relative overflow-hidden rounded-2xl border border-[#FFD700]/20 bg-white/5 backdrop-blur-xl p-5 mb-8 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700]/5 to-transparent" />

            <div className="relative flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#FFD700]/10 border border-[#FFD700]/20 flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5 text-[#FFD700]" />
              </div>

              <div>
                <p className="text-[#FFD700] font-bold text-sm mb-1 uppercase tracking-wide">
                  Conference Theme
                </p>

                <p className="text-white text-lg font-semibold leading-relaxed">
                  {slide.theme}
                </p>
              </div>
            </div>
          </div>

          {/* DESCRIPTION */}
          <p className="text-white/70 text-lg leading-relaxed max-w-2xl mb-8">
            {slide.description}
          </p>

          {/* META */}
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {slide.meta.map((item) => (
              <div
                key={item.text}
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg p-4 hover:border-[#FFD700]/30 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-[#FFD700]/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-[#FFD700]" />
                </div>

                <span className="text-white/90 text-sm leading-relaxed">
                  {item.text}
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-wrap gap-4 mb-10">
            <Link
              to={slide.ctaTo}
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-[#0a2e14] font-black text-lg transition-all hover:scale-105 shadow-[0_0_40px_rgba(255,215,0,0.3)]"
              style={{
                background:
                  "linear-gradient(135deg,#FFD700 0%,#FFC107 45%,#FFA500 100%)",
              }}
            >
              {slide.ctaLabel}

              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              to={slide.secondaryTo}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-lg text-white font-bold hover:bg-white/10 hover:border-[#FFD700]/30 transition-all"
            >
              {slide.secondaryLabel}
            </Link>
          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          {/* Decorative lines */}
          <div className="absolute -top-8 -left-8 w-32 h-32 border-l-4 border-t-4 border-[#FFD700]/30 rounded-tl-[3rem]" />

          <div className="absolute -bottom-8 -right-8 w-32 h-32 border-r-4 border-b-4 border-[#FFD700]/30 rounded-br-[3rem]" />

          {/* Deadline badge */}
          <div className="absolute top-5 right-5 z-30 w-32 h-32 rounded-full border-[3px] border-[#FFD700] bg-[#071a0c]/90 backdrop-blur-xl flex flex-col items-center justify-center shadow-[0_0_40px_rgba(255,215,0,0.3)]">
            <span className="text-[#FFD700] text-[10px] font-black uppercase tracking-[0.2em] text-center leading-tight">
              Registration
              <br />
              Deadline
            </span>

            <span className="text-white font-black text-2xl mt-2">
              {slide.deadline}
            </span>
          </div>

          {/* IMAGE */}
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_0_60px_rgba(0,0,0,0.4)]">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#071a0c]/60 via-transparent to-[#FFD700]/10 z-10" />

            <img
              src={campaign2}
              alt="Conference attendees"
              className="w-full h-[720px] object-cover hover:scale-105 transition-transform duration-[4000ms]"
            />

            {/* Floating card */}
            <div className="absolute bottom-6 left-6 z-20 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl px-5 py-4 max-w-sm">
              <div className="flex items-center gap-2 mb-2">
                <BadgeCheck className="w-5 h-5 text-[#FFD700]" />

                <span className="text-[#FFD700] font-bold text-sm uppercase tracking-wide">
                  Continental Gathering
                </span>
              </div>

              <p className="text-white text-sm leading-relaxed">
                Experience networking, innovation showcases, policy dialogue,
                leadership workshops and youth empowerment at a continental
                scale.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────────
// DEFAULT SLIDE
// ─────────────────────────────────────────────────────────────
const DefaultSlide = ({
  slide,
  isTransitioning,
}: {
  slide: (typeof slides)[number];
  isTransitioning: boolean;
}) => (
  <div
    className={`relative z-10 min-h-screen flex items-center justify-center transition-all duration-700 ${
      isTransitioning
        ? "opacity-0 translate-y-5"
        : "opacity-100 translate-y-0"
    }`}
  >
    {/* Background image */}
    {"image" in slide && slide.image && (
      <div className="absolute inset-0">
        <img
          src={slide.image}
          alt=""
          className="w-full h-full object-cover scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#071a0c]/90 via-[#071a0c]/75 to-[#071a0c]/80" />
      </div>
    )}

    {/* Floating blur */}
    <div className="absolute top-20 left-20 w-80 h-80 rounded-full bg-[#FFD700]/10 blur-3xl" />
    <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-green-500/10 blur-3xl" />

    <div className="container mx-auto px-6 relative z-10">
      <div className="max-w-4xl">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#FFD700]/20 bg-white/5 backdrop-blur-xl text-[#FFD700] text-sm font-bold tracking-wide uppercase mb-8">
          <Sparkles className="w-4 h-4" />
          {slide.badge}
        </div>

        {/* Heading */}
        <h1 className="text-white font-black leading-[0.95] text-[3rem] md:text-[5rem] lg:text-[6rem] mb-6">
          {slide.title}
          <br />
          <span className="text-[#FFD700]">{slide.highlight}</span>
        </h1>

        {/* Description */}
        <p className="text-white/70 text-lg md:text-xl leading-relaxed max-w-3xl mb-10">
          {slide.description}
        </p>

        {/* CTA */}
        <div className="flex flex-wrap gap-5">
          <Link
            to={slide.ctaTo}
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-[#0a2e14] font-black text-lg transition-all hover:scale-105 shadow-[0_0_40px_rgba(255,215,0,0.3)]"
            style={{
              background:
                "linear-gradient(135deg,#FFD700 0%,#FFC107 45%,#FFA500 100%)",
            }}
          >
            {slide.ctaLabel}

            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            to={slide.secondaryTo ?? "#"}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-lg text-white font-bold hover:bg-white/10 hover:border-[#FFD700]/30 transition-all"
          >
            {slide.secondaryLabel}
          </Link>
        </div>
      </div>
    </div>
  </div>
);

// ─────────────────────────────────────────────────────────────
// MAIN HERO SECTION
// ─────────────────────────────────────────────────────────────
const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning) return;

      setIsTransitioning(true);

      setTimeout(() => {
        setCurrent(index);

        setTimeout(() => {
          setIsTransitioning(false);
        }, 50);
      }, 400);
    },
    [isTransitioning]
  );

  const next = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length);
  }, [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 30000);

    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#071a0c]"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,215,0,0.08),transparent_30%)]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(34,197,94,0.12),transparent_35%)]" />
      </div>

      {/* SLIDES */}
      {slide.layout === "conference" ? (
        <ConferenceSlide
          slide={slide}
          isTransitioning={isTransitioning}
        />
      ) : (
        <DefaultSlide
          slide={slide}
          isTransitioning={isTransitioning}
        />
      )}

      {/* NAVIGATION */}
      <button
        onClick={prev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-40 w-14 h-14 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-white flex items-center justify-center hover:scale-110 hover:border-[#FFD700]/30 transition-all"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={next}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-40 w-14 h-14 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-white flex items-center justify-center hover:scale-110 hover:border-[#FFD700]/30 transition-all"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* INDICATORS */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 flex items-center gap-3">
        {slides.map((s, i) => (
          <button
            key={s.id}
            onClick={() => goTo(i)}
            className={`transition-all duration-500 rounded-full ${
              i === current
                ? "w-14 h-3"
                : "w-3 h-3 bg-white/30 hover:bg-white/50"
            }`}
            style={
              i === current
                ? {
                    background:
                      "linear-gradient(90deg,#FFD700,#FFA500)",
                  }
                : {}
            }
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;