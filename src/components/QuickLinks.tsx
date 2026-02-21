import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen, Target, Layers, Clock, Users, Mail } from "lucide-react";

const links = [
  { icon: BookOpen, label: "About Us", desc: "Our story & values", to: "/about", color: "bg-ausp-blue/10 text-ausp-blue" },
  { icon: Target, label: "Mission", desc: "Vision & goals", to: "/mission", color: "bg-ausp-gold/10 text-ausp-gold" },
  { icon: Layers, label: "Focus Areas", desc: "Strategic pillars", to: "/focus-areas", color: "bg-ausp-blue-light/10 text-ausp-blue-light" },
  { icon: Users, label: "Programs", desc: "Departments & initiatives", to: "/programs", color: "bg-secondary/20 text-secondary" },
  { icon: Clock, label: "Timeline", desc: "2025-26 roadmap", to: "/timeline", color: "bg-ausp-blue/10 text-ausp-blue" },
  { icon: Mail, label: "Contact", desc: "Get in touch", to: "/contact", color: "bg-ausp-gold/10 text-ausp-gold" },
];

const QuickLinks = () => (
  <section className="py-12 bg-muted/50">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {links.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
          >
            <Link
              to={item.to}
              className="group flex flex-col items-center text-center p-5 rounded-xl bg-card border border-border hover:shadow-card hover:border-ausp-blue/30 transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                <item.icon className="w-5 h-5" />
              </div>
              <span className="font-semibold text-sm text-foreground">{item.label}</span>
              <span className="text-xs text-muted-foreground mt-1">{item.desc}</span>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default QuickLinks;
