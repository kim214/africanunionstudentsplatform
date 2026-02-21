import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const newsSlides = [
  {
    id: 1,
    tag: "Announcement",
    title: "Pan-African Student Leadership Summit 2025",
    excerpt:
      "Join over 2,000 student leaders from across Africa for a transformative 3-day summit focused on innovation, governance, and continental unity.",
    date: "March 15, 2025",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    link: "/programs",
  },
  {
    id: 2,
    tag: "Partnership",
    title: "AUSP & African Development Bank Youth Initiative",
    excerpt:
      "A landmark partnership to fund 500 student-led projects aligned with Agenda 2063 across the continent.",
    date: "February 28, 2025",
    image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800&q=80",
    link: "/focus-areas",
  },
  {
    id: 3,
    tag: "Scholarships",
    title: "Continental Merit Scholarship Program Opens",
    excerpt:
      "Applications are now open for fully funded scholarships covering tuition, accommodation, and research grants for outstanding African students.",
    date: "January 20, 2025",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80",
    link: "/programs",
  },
];

const NewsCarousel = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % newsSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setActive((p) => (p - 1 + newsSlides.length) % newsSlides.length);
  const next = () => setActive((p) => (p + 1) % newsSlides.length);

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-sm font-semibold text-ausp-gold uppercase tracking-wider mb-1">
              Stay Informed
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Latest News & Updates
            </h2>
          </div>
          <div className="hidden sm:flex gap-2">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl shadow-card bg-card min-h-[360px] md:min-h-[320px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.45 }}
              className="grid md:grid-cols-2 h-full"
            >
              <div className="relative h-52 md:h-full overflow-hidden">
                <img
                  src={newsSlides[active].image}
                  alt={newsSlides[active].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-ausp-gold text-foreground">
                    {newsSlides[active].tag}
                  </span>
                </div>
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                  <Calendar className="w-4 h-4" />
                  {newsSlides[active].date}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 leading-tight">
                  {newsSlides[active].title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {newsSlides[active].excerpt}
                </p>
                <Link
                  to={newsSlides[active].link}
                  className="inline-flex items-center gap-2 text-ausp-blue font-semibold hover:gap-3 transition-all"
                >
                  Read More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slide indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 md:left-auto md:right-10 md:bottom-10 md:translate-x-0">
            {newsSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === active ? "w-8 bg-ausp-gold" : "w-2 bg-border"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsCarousel;
