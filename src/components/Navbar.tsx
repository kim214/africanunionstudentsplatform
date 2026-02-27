import { useState, useEffect, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/ausp-logo.png";
import { Mail, Phone, Facebook, Twitter, Linkedin, Instagram, Menu } from "lucide-react";
import { SITE } from "@/content/site";
import { ROUTES } from "@/content/routes";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const showTransparent = isHome && !scrolled;
  const socialLinks = useMemo(() => {
    const { social } = SITE;
    return [
      { key: "facebook", href: social.facebook, icon: Facebook, label: "Facebook" },
      { key: "twitter", href: social.twitter, icon: Twitter, label: "Twitter" },
      { key: "linkedin", href: social.linkedin, icon: Linkedin, label: "LinkedIn" },
      { key: "instagram", href: social.instagram, icon: Instagram, label: "Instagram" },
    ].filter((s) => Boolean(s.href));
  }, []);

  const isActivePath = (to: string) =>
    location.pathname === to || (to !== "/" && location.pathname.startsWith(`${to}/`));

  const triggerClass = cn(
    navigationMenuTriggerStyle(),
    "bg-transparent px-3",
    showTransparent
      ? "text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10 data-[active]:bg-primary-foreground/15 data-[state=open]:bg-primary-foreground/15"
      : "text-foreground hover:bg-accent hover:text-accent-foreground data-[active]:bg-accent data-[state=open]:bg-accent",
  );

  return (
    <>
      {/* Top Contact Bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] bg-foreground shadow-sm">
        <div className="container mx-auto flex items-center justify-between px-4 py-1.5 text-xs text-primary-foreground">
          <div className="flex items-center gap-4">
            <a href={`mailto:${SITE.email}`} className="inline-flex items-center gap-1.5 hover:text-secondary transition-colors">
              <Mail className="w-3 h-3" /> {SITE.email}
            </a>
            <a href={`tel:${SITE.phone.replace(/\s+/g, "")}`} className="hidden sm:inline-flex items-center gap-1.5 hover:text-secondary transition-colors">
              <Phone className="w-3 h-3" /> {SITE.phone}
            </a>
          </div>
          <div className="flex items-center gap-3">
            {socialLinks.map((s) => (
              <a
                key={s.key}
                href={s.href!}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="hover:text-secondary transition-colors"
              >
                <s.icon className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={cn(
          "fixed top-[32px] left-0 right-0 z-50 border-b border-border backdrop-blur-xl transition-colors",
          showTransparent ? "bg-background/40 shadow-none" : "bg-card/95 shadow-card",
        )}
      >
        <div className="container mx-auto flex items-center justify-between py-3 px-4">
          <Link to={ROUTES.home} className="flex items-center gap-3">
            <img src={logo} alt="AUSP logo" className="h-12 w-12 rounded-full object-cover" />
            <div className="hidden sm:block text-left">
              <span className="font-display font-bold text-lg leading-snug text-foreground">
                {SITE.shortName}
              </span>
              <span className="block text-[0.75rem] font-medium text-muted-foreground">
                {SITE.tagline}
              </span>
            </div>
          </Link>

          {/* Desktop */}
          <div className="hidden lg:flex items-center gap-2">
            <NavigationMenu>
              <NavigationMenuList>
                {SITE.nav.map((item) => {
                  if ("children" in item) {
                    const anyActive = item.children.some((c) => isActivePath(c.to));
                    return (
                      <NavigationMenuItem key={item.label}>
                        <NavigationMenuTrigger
                          className={cn(
                            triggerClass,
                            anyActive &&
                              (showTransparent
                                ? "bg-primary-foreground/15 text-primary-foreground"
                                : "bg-accent text-accent-foreground"),
                          )}
                        >
                          {item.label}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="p-2">
                          <ul className="grid gap-1 min-w-[260px]">
                            {item.children.map((child) => (
                              <li key={child.to}>
                                <NavigationMenuLink asChild>
                                  <Link
                                    to={child.to}
                                    className={cn(
                                      "block rounded-md px-3 py-2 text-sm font-medium transition-colors",
                                      isActivePath(child.to)
                                        ? "bg-accent text-accent-foreground"
                                        : "hover:bg-accent hover:text-accent-foreground",
                                    )}
                                  >
                                    {child.label}
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    );
                  }

                  const active = isActivePath(item.to);
                  return (
                    <NavigationMenuItem key={item.to}>
                      <NavigationMenuLink asChild>
                        <Link to={item.to} className={cn(triggerClass, active && (showTransparent ? "bg-primary-foreground/15 text-primary-foreground" : "bg-accent text-accent-foreground"))}>
                          {item.label}
                        </Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  );
                })}
              </NavigationMenuList>
            </NavigationMenu>

            <Link
              to={ROUTES.join}
              className="ml-2 px-5 py-2 rounded-lg bg-gold-gradient text-foreground font-semibold text-sm shadow-gold hover:opacity-90 transition-opacity"
            >
              Join
            </Link>
            <Link
              to={ROUTES.donate}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-semibold border transition-colors",
                showTransparent
                  ? "border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                  : "border-border text-foreground hover:bg-accent",
              )}
            >
              Donate
            </Link>
          </div>

          {/* Mobile */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <button
                  className={`p-2 rounded-md ${showTransparent ? "text-primary-foreground" : "text-foreground"}`}
                  aria-label="Open menu"
                >
                  <Menu className="w-6 h-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[92vw] sm:w-[420px] p-6">
                <SheetHeader className="text-left">
                  <SheetTitle className="flex items-center gap-3">
                    <img src={logo} alt="AUSP logo" className="h-10 w-10 rounded-full object-cover" />
                    <div>
                      <div className="font-display font-bold leading-tight text-sm">{SITE.shortName}</div>
                      <div className="text-[0.7rem] text-muted-foreground">{SITE.tagline}</div>
                    </div>
                  </SheetTitle>
                </SheetHeader>

                <div className="mt-6">
                  <Accordion type="multiple" className="w-full">
                    {SITE.nav.map((item) => {
                      if ("children" in item) {
                        return (
                          <AccordionItem key={item.label} value={item.label}>
                            <AccordionTrigger className="text-sm">{item.label}</AccordionTrigger>
                            <AccordionContent>
                              <div className="flex flex-col gap-1">
                                {item.children.map((child) => (
                                  <Link
                                    key={child.to}
                                    to={child.to}
                                    className={cn(
                                      "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                                      isActivePath(child.to)
                                        ? "bg-accent text-accent-foreground"
                                        : "hover:bg-accent",
                                    )}
                                  >
                                    {child.label}
                                  </Link>
                                ))}
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        );
                      }

                      return (
                        <div key={item.to} className="py-1">
                          <Link
                            to={item.to}
                            className={cn(
                              "block px-3 py-2 rounded-md text-sm font-medium transition-colors",
                              isActivePath(item.to)
                                ? "bg-accent text-accent-foreground"
                                : "hover:bg-accent",
                            )}
                          >
                            {item.label}
                          </Link>
                        </div>
                      );
                    })}
                  </Accordion>

                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <Link
                      to={ROUTES.join}
                      className="px-5 py-3 rounded-lg bg-gold-gradient text-foreground font-semibold shadow-gold text-center"
                    >
                      Join
                    </Link>
                    <Link
                      to={ROUTES.donate}
                      className="px-5 py-3 rounded-lg border border-border text-foreground font-semibold text-center hover:bg-accent transition-colors"
                    >
                      Donate
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
