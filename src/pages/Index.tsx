import PageLayout from "@/components/PageLayout";
import HeroSection from "@/components/HeroSection";
import { Link } from "react-router-dom";
import leaderPreston from "@/assets/leader-preston.png";
import leaderHajara from "@/assets/leader-hajara.png";
import leaderNeema from "@/assets/leader-neema.png";
import missionHero from "@/assets/mission-hero.jpg";
import conferenceBg from "@/assets/conference-nairobi.jpg";
import { useEffect, useRef, useState } from "react";
import {
  BookOpen, Users, Lightbulb, Award, Crown, Rocket, GraduationCap, Heart,
  ArrowRight, Globe, Star, Target,
  MapPin, Calendar, Quote, ChevronLeft, ChevronRight
} from "lucide-react";
import {
  homeCampaigns,
  homePillars,
  homeTestimonials,
  homeUpcomingEvents,
  homeValues,
} from "@/content/homeContent";
import { ROUTES } from "@/content/routes";
import { useNewsList } from "@/api/news";

const useVisible = (threshold = 0.15) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
};

const focusAreas = [
  { icon: Crown, title: "Leadership & Governance", description: "Building visionary and responsible leaders equipped with governance skills." },
  { icon: Rocket, title: "Entrepreneurship & Innovation", description: "Promoting youth entrepreneurship and fostering global partnerships." },
  { icon: GraduationCap, title: "Education & Skills", description: "Strengthening academic and professional capacity through learning programs." },
  { icon: Heart, title: "Cultural Empowerment", description: "Promoting African identity, unity, and cultural pride among youth." },
];

const Index = () => {
  const about = useVisible();
  const pillarSection = useVisible();
  const statsSection = useVisible();
  const focus = useVisible();
  const valuesSection = useVisible();
  const campaignSection = useVisible();
  const joinSection = useVisible();
  const eventsSection = useVisible();
  const missionSection = useVisible();
  const testimonialSection = useVisible();
  const newsSection = useVisible();
  const leaderSection = useVisible();
  const { data: newsFromDb } = useNewsList();
  const [testimonialIdx, setTestimonialIdx] = useState(0);

  return (
    <PageLayout>
      <HeroSection />

      {/* ===== ABOUT AUSP ===== */}
      <section className="py-24 bg-background" ref={about.ref}>
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className={`font-display text-3xl md:text-4xl font-bold text-foreground mb-4 ${about.visible ? "animate-fade-in-up" : "opacity-0"}`}>
              AFRICAN UNION STUDENTS' PLATFORM - <span className="text-gradient-gold">AUSP</span>
            </h2>
            <div className={`w-16 h-1 bg-gold-gradient mx-auto mb-6 ${about.visible ? "animate-fade-in-up" : "opacity-0"}`} />
            <h3 className={`font-display text-xl text-muted-foreground mb-6 ${about.visible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "0.1s" }}>
              A Student-Led Independent Pan-African Youth Network
            </h3>
            <p className={`text-muted-foreground leading-relaxed max-w-3xl mx-auto ${about.visible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
              The African Union Students' Platform (AUSP) is an independent Pan-African student network established in 2020 by youth leaders to foster synergy amongst students and youth organisations on the African continent and Diaspora, influence policy and galvanise meaningful youth engagement. Through education, connection, and empowerment, AUSP helps young Africans translate academic knowledge into practical solutions.
            </p>
          </div>
        </div>
      </section>

      {/* ===== THREE PILLARS WITH IMAGES (like AYC) ===== */}
      <section className="py-20 bg-muted/50" ref={pillarSection.ref}>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {homePillars.map((p, i) => (
              <Link
                key={p.title}
                to={p.link}
                className={`group block overflow-hidden rounded-2xl bg-card shadow-card border border-border hover:border-primary/30 hover:-translate-y-2 transition-all duration-300 ${pillarSection.visible ? "animate-fade-in-up" : "opacity-0"}`}
                style={{ animationDelay: `${0.15 * i}s` }}
              >
                <div className="h-52 overflow-hidden">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-gradient flex items-center justify-center mb-4 -mt-12 relative z-10 shadow-lg border-4 border-card">
                    <p.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{p.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{p.description}</p>
                  <span className="inline-flex items-center gap-2 mt-4 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ICON PILLARS ROW ===== */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: BookOpen, title: "Policy & Advocacy", desc: "Influencing continental policy" },
              { icon: Users, title: "Movement Building", desc: "Consolidating student voices" },
              { icon: Lightbulb, title: "Youth Engagement", desc: "Empowering young stakeholders" },
              { icon: Award, title: "Capacity Building", desc: "Developing future leaders" },
            ].map((item, i) => (
              <div key={item.title} className="text-center group">
                <div className="w-16 h-16 rounded-full bg-blue-gradient flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-md">
                  <item.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h4 className="font-display text-sm font-bold text-foreground mb-1">{item.title}</h4>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FACTS / STATS (like AYC) ===== */}
      <section className="py-20 bg-hero-gradient text-primary-foreground relative overflow-hidden" ref={statsSection.ref}>
        <div className="absolute inset-0 opacity-10">
          <img src={conferenceBg} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className={`text-sm uppercase tracking-widest text-secondary font-semibold ${statsSection.visible ? "animate-fade-in-up" : "opacity-0"}`}>
                Some Facts About Us
              </span>
              <h2 className={`font-display text-3xl md:text-4xl font-bold mt-3 mb-6 ${statsSection.visible ? "animate-fade-in-up" : "opacity-0"}`}>
                What does <span className="text-gradient-gold">AUSP</span> do?
              </h2>
              <p className={`text-primary-foreground/70 leading-relaxed ${statsSection.visible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "0.1s" }}>
                The African Union Students' Platform provides a space for student-led and youth-serving organisations on the African Continent and the Diaspora to consolidate their voices to influence policies and decision making, set and drive their own agenda in an inclusive way — aligned with AU Agenda 2063 and UN Agenda 2030.
              </p>
            </div>
            <div className={`grid grid-cols-2 gap-6 ${statsSection.visible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
              {[
                { icon: Globe, value: "55+", label: "Countries" },
                { icon: Users, value: "20+", label: "Programs" },
                { icon: Target, value: "4", label: "Ministries" },
                { icon: Star, value: "2020", label: "Established" },
              ].map((s) => (
                <div key={s.label} className="text-center p-6 rounded-2xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10">
                  <s.icon className="w-8 h-8 text-secondary mx-auto mb-3" />
                  <div className="text-3xl font-bold font-display text-gradient-gold">{s.value}</div>
                  <div className="text-sm text-primary-foreground/60 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOCUS AREAS ===== */}
      <section className="py-24 bg-background" ref={focus.ref}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className={`inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-semibold mb-4 ${focus.visible ? "animate-fade-in-up" : "opacity-0"}`}>
              Strategic Focus
            </span>
            <h2 className={`font-display text-3xl md:text-5xl font-bold text-foreground mb-6 ${focus.visible ? "animate-fade-in-up" : "opacity-0"}`}>
              Main <span className="text-gradient-gold">Focus Areas</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {focusAreas.map((area, i) => (
              <div key={area.title} className={`group flex gap-5 p-6 rounded-2xl bg-card shadow-card border border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 ${focus.visible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: `${0.12 * i}s` }}>
                <div className="shrink-0 w-14 h-14 rounded-xl bg-gold-gradient flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <area.icon className="w-7 h-7 text-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">{area.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{area.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to={ROUTES.whatWeDo.focusAreas} className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
              Explore all focus areas <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== OUR CAMPAIGNS (like AYC gallery) ===== */}
      <section className="py-24 bg-muted/50" ref={campaignSection.ref}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className={`font-display text-3xl md:text-5xl font-bold text-foreground mb-4 ${campaignSection.visible ? "animate-fade-in-up" : "opacity-0"}`}>
              Our <span className="text-gradient-gold">Campaigns</span>
            </h2>
            <p className={`text-muted-foreground max-w-2xl mx-auto ${campaignSection.visible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "0.1s" }}>
              To ensure that we deliver on our mandate, we have mapped out various strategies through advocacy campaigns on different regional and global processes to secure meaningful youth inclusion and participation.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {homeCampaigns.map((c, i) => (
              <div
                key={c.title}
                className={`group relative overflow-hidden rounded-xl aspect-[4/3] ${campaignSection.visible ? "animate-fade-in-up" : "opacity-0"}`}
                style={{ animationDelay: `${0.1 * i}s` }}
              >
                <img src={c.image} alt={c.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-primary-foreground font-semibold text-sm">{c.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== JOIN THE AUSP NETWORK (like AYC) ===== */}
      <section className="py-20 bg-hero-gradient text-primary-foreground" ref={joinSection.ref}>
        <div className="container mx-auto px-4 text-center">
          <h2 className={`font-display text-3xl md:text-5xl font-bold mb-6 ${joinSection.visible ? "animate-fade-in-up" : "opacity-0"}`}>
            JOIN THE AUSP NETWORK <span className="text-gradient-gold">TODAY!</span>
          </h2>
          <p className={`text-lg text-primary-foreground/70 max-w-2xl mx-auto mb-4 ${joinSection.visible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "0.1s" }}>
            We are constantly looking for partnerships, collaborations and creating synergies with student organisations and structures at grassroots, national to regional levels.
          </p>
          <p className={`text-primary-foreground/60 max-w-2xl mx-auto mb-10 ${joinSection.visible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "0.15s" }}>
            At National Level, we organise our engagement through National Consortium structures where all member organisations come together to implement locally led actions.
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center ${joinSection.visible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
            <Link to={ROUTES.join} className="px-8 py-4 rounded-xl bg-gold-gradient text-foreground font-semibold text-lg shadow-gold hover:opacity-90 transition-all hover:scale-105 inline-flex items-center justify-center gap-2">
              Join Now <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to={ROUTES.whatWeDo.programs} className="px-8 py-4 rounded-xl border-2 border-primary-foreground/30 text-primary-foreground font-semibold text-lg hover:bg-primary-foreground/10 transition-all hover:scale-105">
              Explore Programs
            </Link>
          </div>
        </div>
      </section>

      {/* ===== UPCOMING EVENTS (like AYC) ===== */}
      <section className="py-24 bg-background" ref={eventsSection.ref}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className={`font-display text-3xl md:text-5xl font-bold text-foreground mb-4 ${eventsSection.visible ? "animate-fade-in-up" : "opacity-0"}`}>
              Upcoming <span className="text-gradient-gold">Events</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {homeUpcomingEvents.map((ev, i) => (
              <div
                key={ev.title}
                className={`group bg-card rounded-2xl shadow-card border border-border hover:border-primary/30 overflow-hidden transition-all duration-300 hover:-translate-y-1 ${eventsSection.visible ? "animate-fade-in-up" : "opacity-0"}`}
                style={{ animationDelay: `${0.12 * i}s` }}
              >
                <div className="flex">
                  <div className="w-20 shrink-0 bg-blue-gradient flex flex-col items-center justify-center text-primary-foreground p-4">
                    <span className="text-2xl font-bold font-display">{ev.date.day}</span>
                    <span className="text-xs uppercase tracking-wider">{ev.date.month}</span>
                  </div>
                  <div className="p-5 flex-1">
                    <h3 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors leading-tight">{ev.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-3">{ev.description}</p>
                    <span className="inline-flex items-center gap-1 text-xs text-primary font-medium">
                      <MapPin className="w-3 h-3" /> {ev.location}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== OUR MISSION (like AYC with image) ===== */}
      <section className="py-24 bg-muted/50" ref={missionSection.ref}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className={`grid grid-cols-2 gap-4 ${missionSection.visible ? "animate-fade-in-up" : "opacity-0"}`}>
              <img src={missionHero} alt="AUSP Mission" className="rounded-2xl shadow-lg w-full h-64 object-cover" />
              <img src={conferenceBg} alt="AUSP Conference" className="rounded-2xl shadow-lg w-full h-64 object-cover mt-8" />
            </div>
            <div className={missionSection.visible ? "animate-fade-in-up" : "opacity-0"} style={{ animationDelay: "0.15s" }}>
              <span className="text-sm uppercase tracking-widest text-primary font-semibold">Our Mission</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
                The mission of AUSP is to unite African students in action for the <span className="text-gradient-gold">promotion of African unity</span> and development.
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                AUSP subscribes to the ideals and Pan-African vision of the African Union — "An integrated, prosperous and peaceful Africa, driven by its own citizens and representing a dynamic force in the global arena." We nurture a generation of transformative leaders through education, critical thinking, and creativity.
              </p>
              <Link to={ROUTES.whoWeAre.mission} className="inline-flex items-center gap-2 mt-6 text-primary font-semibold hover:gap-3 transition-all">
                Read our full mission <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS (like AYC) ===== */}
      <section className="py-24 bg-background" ref={testimonialSection.ref}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className={`font-display text-3xl md:text-5xl font-bold text-foreground ${testimonialSection.visible ? "animate-fade-in-up" : "opacity-0"}`}>
              <span className="text-gradient-gold">Testimonials</span>
            </h2>
          </div>
          <div className="max-w-3xl mx-auto relative">
            <div className={`bg-card rounded-2xl p-10 shadow-card border border-border text-center ${testimonialSection.visible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "0.1s" }}>
              <Quote className="w-10 h-10 text-secondary/40 mx-auto mb-6" />
              <p className="text-muted-foreground leading-relaxed text-lg italic mb-8">
                "{homeTestimonials[testimonialIdx].quote}"
              </p>
              <h4 className="font-display text-lg font-bold text-foreground">{homeTestimonials[testimonialIdx].name}</h4>
              <p className="text-sm text-muted-foreground">{homeTestimonials[testimonialIdx].role}</p>
            </div>
            <div className="flex justify-center gap-3 mt-6">
              <button
                onClick={() => setTestimonialIdx((testimonialIdx - 1 + homeTestimonials.length) % homeTestimonials.length)}
                className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-accent transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              {homeTestimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setTestimonialIdx(i)}
                  className={`w-3 h-3 rounded-full transition-all ${i === testimonialIdx ? "bg-gold-gradient w-8" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"}`}
                />
              ))}
              <button
                onClick={() => setTestimonialIdx((testimonialIdx + 1) % homeTestimonials.length)}
                className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-accent transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== LATEST NEWS (like AYC) ===== */}
      <section className="py-24 bg-muted/50" ref={newsSection.ref}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className={`font-display text-3xl md:text-5xl font-bold text-foreground ${newsSection.visible ? "animate-fade-in-up" : "opacity-0"}`}>
              Latest <span className="text-gradient-gold">News</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {(newsFromDb ?? []).slice(0, 3).map((news, i) => (
              <Link
                key={news.id}
                to={`/news/${news.slug}`}
                className={`group bg-card rounded-2xl shadow-card border border-border overflow-hidden hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 ${newsSection.visible ? "animate-fade-in-up" : "opacity-0"}`}
                style={{ animationDelay: `${0.12 * i}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  {news.image_url && (
                    <img src={news.image_url} alt={news.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  )}
                  {news.published_at && (
                    <div className="absolute top-4 left-4 bg-blue-gradient text-primary-foreground rounded-lg px-3 py-1.5 text-center shadow-lg text-xs font-medium">
                      {new Date(news.published_at).toLocaleDateString(undefined, { day: "2-digit", month: "short" })}
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors leading-tight">{news.title}</h3>
                  {news.excerpt && (
                    <p className="text-sm text-muted-foreground leading-relaxed">{news.excerpt}</p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== LEADERSHIP ===== */}
      <section className="py-24 bg-background" ref={leaderSection.ref}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className={`font-display text-3xl md:text-5xl font-bold text-foreground mb-6 ${leaderSection.visible ? "animate-fade-in-up" : "opacity-0"}`}>
              Our <span className="text-gradient-gold">Leadership</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto mb-16">
            {[
              { name: "H.E. Preston Simbeya", role: "Founding President", image: leaderPreston },
              { name: "Ms. Hajara Yakub", role: "Executive Secretary", image: leaderHajara },
              { name: "Hon. Neema Godfrey", role: "Prime Minister", image: leaderNeema },
            ].map((leader, i) => (
              <div key={leader.name} className={`group text-center ${leaderSection.visible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: `${0.15 * i}s` }}>
                <div className="relative mx-auto mb-6 w-44 h-44 md:w-52 md:h-52">
                  <div className="absolute inset-0 rounded-full bg-gold-gradient opacity-20 group-hover:opacity-40 blur-xl transition-opacity" />
                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary/40 shadow-xl transition-all duration-300 group-hover:scale-105">
                    <img src={leader.image} alt={leader.name} className="w-full h-full object-cover object-top" />
                  </div>
                </div>
                <h3 className="font-display text-xl font-bold text-foreground">{leader.name}</h3>
                <p className="text-sm text-muted-foreground mt-1 font-medium">{leader.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== VALUES ===== */}
      <section className="py-24 bg-muted/50" ref={valuesSection.ref}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className={`font-display text-3xl md:text-5xl font-bold text-foreground mb-6 ${valuesSection.visible ? "animate-fade-in-up" : "opacity-0"}`}>
              What We <span className="text-gradient-gold">Stand For</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {homeValues.map((v, i) => (
              <div key={v.title} className={`group text-center bg-card rounded-2xl p-8 shadow-card border border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 ${valuesSection.visible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: `${0.1 * i}s` }}>
                <div className="w-14 h-14 rounded-xl bg-blue-gradient flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                  <v.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="py-20 bg-hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Ready to Shape <span className="text-gradient-gold">Africa's Future?</span>
          </h2>
          <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto mb-10">
            Join AUSP and become part of a growing community of young African leaders, innovators, and changemakers across 55+ nations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={ROUTES.join} className="px-8 py-4 rounded-xl bg-gold-gradient text-foreground font-semibold text-lg shadow-gold hover:opacity-90 transition-all hover:scale-105 inline-flex items-center justify-center gap-2">
              Join AUSP Today <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to={ROUTES.whatWeDo.programs} className="px-8 py-4 rounded-xl border-2 border-primary-foreground/30 text-primary-foreground font-semibold text-lg hover:bg-primary-foreground/10 transition-all hover:scale-105">
              Explore Programs
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;
