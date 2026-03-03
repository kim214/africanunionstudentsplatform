import logo from "@/assets/ausp-logo.png";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { SITE } from "@/content/site";
import { ROUTES } from "@/content/routes";

const FooterSection = () => (
  <footer className="bg-hero-gradient text-primary-foreground">
    <div className="container mx-auto px-4 py-16">
      <div className="grid md:grid-cols-4 gap-12">
        {/* Brand */}
        <div>
          <Link to={ROUTES.home} className="flex items-center gap-3 mb-6">
            <img src={logo} alt="AUSP" className="w-14 h-14 rounded-full" />
            <div>
              <h3 className="font-display text-xl font-bold">{SITE.shortName}</h3>
              <p className="text-sm text-primary-foreground/60">{SITE.tagline}</p>
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
            {SITE.nav
              .map((item) => ("children" in item ? item.children : [item]))
              .flat()
              .map((link) => (
              <Link
                key={link.to}
                to={link.to}
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
            <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              <Mail className="w-4 h-4 text-secondary" /> {SITE.email}
            </a>
            <a href={`tel:${SITE.phone.replace(/\s+/g, "")}`} className="flex items-center gap-3 text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              <Phone className="w-4 h-4 text-secondary" /> {SITE.phone}
            </a>
            <span className="flex items-center gap-3 text-sm text-primary-foreground/60">
              <MapPin className="w-4 h-4 text-secondary" /> {SITE.location}
            </span>
          </div>
          <div className="flex items-center gap-4 mt-6">
            {SITE.social.facebook && (
              <a href={SITE.social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
            )}
            {SITE.social.twitter && (
              <a href={SITE.social.twitter} target="_blank" rel="noreferrer" aria-label="Twitter" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            )}
            {SITE.social.linkedin && (
              <a href={SITE.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            )}
            {SITE.social.instagram && (
              <a href={SITE.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Get Involved */}
        <div>
          <h4 className="font-display text-lg font-bold mb-6">Get Involved</h4>
          <p className="text-sm text-primary-foreground/60 mb-4">
            Ready to join the movement? Connect with AUSP and be part of Africa's transformation.
          </p>
          <div className="flex flex-col gap-3">
            <Link to={ROUTES.join} className="inline-block px-6 py-3 rounded-lg bg-gold-gradient text-foreground font-semibold text-sm shadow-gold hover:opacity-90 transition-opacity text-center">
              Join AUSP Today
            </Link>
            <Link to={ROUTES.donate} className="inline-block px-6 py-3 rounded-lg border border-primary-foreground/20 text-primary-foreground font-semibold text-sm hover:bg-primary-foreground/10 transition-colors text-center">
              Donate Now
            </Link>
          </div>
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
