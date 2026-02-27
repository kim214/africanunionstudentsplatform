import logo from "@/assets/ausp-logo.png";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Mission", href: "/mission" },
  { label: "Focus Areas", href: "/focus-areas" },
  { label: "Programs", href: "/programs" },
  { label: "Timeline", href: "/timeline" },
  { label: "Contact", href: "/contact" },
];

const FooterSection = () => (
  <footer className="bg-hero-gradient text-primary-foreground">
    <div className="container mx-auto px-4 py-16">
      <div className="grid md:grid-cols-4 gap-12">
        {/* Brand */}
        <div>
          <Link to="/" className="flex items-center gap-3 mb-6">
            <img src={logo} alt="AUSP" className="w-14 h-14 rounded-full" />
            <div>
              <h3 className="font-display text-xl font-bold">AUSP</h3>
              <p className="text-sm text-primary-foreground/60">Educate • Connect • Empower</p>
            </div>
          </Link>
          <p className="text-sm text-primary-foreground/60 leading-relaxed">
            A Pan-African, community-based organization connecting intellectual African students across the continent and the Diaspora since 2020.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display text-lg font-bold mb-6">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors py-1"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-display text-lg font-bold mb-6">Contact Us</h4>
          <div className="flex flex-col gap-4">
            <a href="mailto:info@ausp.org" className="flex items-center gap-3 text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              <Mail className="w-4 h-4 text-secondary" /> info@ausp.org
            </a>
            <a href="tel:+254000000000" className="flex items-center gap-3 text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              <Phone className="w-4 h-4 text-secondary" /> +254 000 000 000
            </a>
            <span className="flex items-center gap-3 text-sm text-primary-foreground/60">
              <MapPin className="w-4 h-4 text-secondary" /> Nairobi, Kenya
            </span>
          </div>
          <div className="flex items-center gap-4 mt-6">
            <a href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Get Involved */}
        <div>
          <h4 className="font-display text-lg font-bold mb-6">Get Involved</h4>
          <p className="text-sm text-primary-foreground/60 mb-4">
            Ready to join the movement? Connect with AUSP and be part of Africa's transformation.
          </p>
          <Link to="/contact" className="inline-block px-6 py-3 rounded-lg bg-gold-gradient text-foreground font-semibold text-sm shadow-gold hover:opacity-90 transition-opacity">
            Join AUSP Today
          </Link>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-primary-foreground/40">
          © 2025 African Union Students' Platform. All rights reserved.
        </p>
        <p className="text-sm text-primary-foreground/40">
          Aligned with AU Agenda 2063 & UN Agenda 2030
        </p>
      </div>
    </div>
  </footer>
);

export default FooterSection;
