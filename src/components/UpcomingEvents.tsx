import { motion } from "framer-motion";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const events = [
  {
    date: "15 Mar",
    year: "2025",
    title: "Pan-African Student Summit",
    location: "Addis Ababa, Ethiopia",
    type: "Summit",
  },
  {
    date: "02 Apr",
    year: "2025",
    title: "Agenda 2063 Innovation Challenge",
    location: "Virtual",
    type: "Competition",
  },
  {
    date: "18 May",
    year: "2025",
    title: "Continental Scholarship Awards",
    location: "Nairobi, Kenya",
    type: "Awards",
  },
  {
    date: "10 Jul",
    year: "2025",
    title: "Annual General Assembly",
    location: "Accra, Ghana",
    type: "Assembly",
  },
];

const UpcomingEvents = () => (
  <section className="py-14 bg-background">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-3 gap-10">
        {/* Left column */}
        <div className="lg:col-span-1">
          <p className="text-sm font-semibold text-ausp-gold uppercase tracking-wider mb-1">
            Calendar
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Upcoming Events
          </h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Join fellow African students at our landmark events across the continent and virtually.
          </p>
          <Link
            to="/timeline"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gold-gradient text-foreground font-semibold text-sm hover:opacity-90 transition-all"
          >
            View Full Calendar <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Right column — events list */}
        <div className="lg:col-span-2 space-y-4">
          {events.map((ev, i) => (
            <motion.div
              key={ev.title}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-5 p-4 rounded-xl bg-card border border-border hover:shadow-card hover:border-ausp-blue/20 transition-all group"
            >
              <div className="w-16 h-16 shrink-0 rounded-xl bg-ausp-blue/10 flex flex-col items-center justify-center">
                <span className="text-lg font-bold text-ausp-blue leading-none">{ev.date.split(" ")[0]}</span>
                <span className="text-[10px] font-semibold text-ausp-blue uppercase">{ev.date.split(" ")[1]}</span>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-foreground group-hover:text-ausp-blue transition-colors truncate">
                  {ev.title}
                </h4>
                <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {ev.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> {ev.year}
                  </span>
                </div>
              </div>
              <span className="hidden sm:inline-block px-3 py-1 rounded-full text-xs font-medium bg-ausp-gold/10 text-ausp-gold">
                {ev.type}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default UpcomingEvents;
