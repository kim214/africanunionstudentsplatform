import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Newspaper } from "lucide-react";

const newsItems = [
  "🌍 AUSP launches Pan-African Student Leadership Summit 2025 — Applications now open!",
  "📚 New scholarship opportunities available for students across all 55 AU member states",
  "🤝 AUSP partners with African Development Bank for youth empowerment programs",
  "🏆 Agenda 2063 Student Innovation Challenge — Submit your ideas by March 2025",
  "📢 AUSP Annual General Assembly scheduled for July 2025 in Addis Ababa",
  "🎓 Over 5,000 students connected through AUSP mentorship network this year",
];

const NewsTicker = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % newsItems.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-ausp-blue text-primary-foreground overflow-hidden">
      <div className="container mx-auto px-4 flex items-center h-10">
        <div className="flex items-center gap-2 shrink-0 mr-4">
          <Newspaper className="w-4 h-4 text-ausp-gold" />
          <span className="text-xs font-semibold uppercase tracking-wider text-ausp-gold">
            Latest
          </span>
        </div>
        <div className="relative flex-1 h-full flex items-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={current}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="text-sm truncate absolute inset-0 flex items-center"
            >
              {newsItems[current]}
            </motion.p>
          </AnimatePresence>
        </div>
        <div className="flex gap-1 ml-4 shrink-0">
          {newsItems.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-1.5 h-1.5 rounded-full transition-all ${
                i === current ? "bg-ausp-gold w-4" : "bg-primary-foreground/30"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsTicker;
