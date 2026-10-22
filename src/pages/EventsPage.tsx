import { useMemo, useState } from "react";
import PageLayout from "@/components/PageLayout";
import { ArrowUpRight, CalendarDays, MapPin, Search, SlidersHorizontal, X } from "lucide-react";
import { useEventsList } from "@/api/events";
import { featuredEvents } from "@/content/eventsContent";

type TimeFilter = "all" | "today" | "week" | "month" | "upcoming" | "past";
type Status = "upcoming" | "ongoing" | "past";

interface EventCard {
  id: string;
  title: string;
  category: string;
  description: string | null;
  location: string | null;
  start: Date | null;
  end: Date | null;
  image?: string;
  url?: string;
}

const timeFilters: { key: TimeFilter; label: string }[] = [
  { key: "all", label: "All" },
  { key: "today", label: "Today" },
  { key: "week", label: "This Week" },
  { key: "month", label: "This Month" },
  { key: "upcoming", label: "Upcoming" },
  { key: "past", label: "Past" },
];

const DAY_MS = 86_400_000;

// Date-only strings ("2026-11-17") are read as local dates, not UTC midnight
const parseDate = (value: string | null) => {
  if (!value) return null;
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
  const date = m ? new Date(+m[1], +m[2] - 1, +m[3]) : new Date(value);
  return Number.isNaN(date.getTime()) ? null : date;
};

const endOfDay = (d: Date) => new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1).getTime() - 1;

const formatRange = (start: Date | null, end: Date | null) => {
  if (!start) return "Date to be announced";
  const full = (d: Date) => d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
  if (!end || end.toDateString() === start.toDateString()) return full(start);
  if (start.getMonth() === end.getMonth() && start.getFullYear() === end.getFullYear()) {
    return `${start.getDate()}–${full(end)}`;
  }
  return `${start.toLocaleDateString("en-GB", { day: "numeric", month: "short" })} – ${full(end)}`;
};

const getStatus = (ev: EventCard, todayStart: number): Status | null => {
  if (!ev.start) return null;
  const endMs = endOfDay(ev.end ?? ev.start);
  if (endMs < todayStart) return "past";
  if (ev.start.getTime() <= todayStart + DAY_MS - 1) return "ongoing";
  return "upcoming";
};

// True when the event's date range overlaps [from, to]
const overlaps = (ev: EventCard, from: number, to: number) =>
  !!ev.start && ev.start.getTime() <= to && endOfDay(ev.end ?? ev.start) >= from;

const statusStyles: Record<Status, { label: string; className: string }> = {
  upcoming: { label: "Upcoming", className: "bg-emerald-700 text-white" },
  ongoing: { label: "Happening now", className: "bg-secondary text-secondary-foreground" },
  past: { label: "Past", className: "bg-foreground text-background" },
};

const EventsPage = () => {
  const { data, isLoading, error } = useEventsList();
  const [query, setQuery] = useState("");
  const [timeFilter, setTimeFilter] = useState<TimeFilter>("all");
  const [category, setCategory] = useState<string | null>(null);
  const [showMore, setShowMore] = useState(false);

  const events = useMemo<EventCard[]>(
    () => [
      ...featuredEvents.map((ev) => ({
        ...ev,
        start: parseDate(ev.start_date),
        end: parseDate(ev.end_date),
      })),
      ...(data ?? []).map((ev) => ({
        id: ev.id,
        title: ev.title,
        category: "AUSP Events",
        description: ev.description,
        location: ev.location,
        start: parseDate(ev.start_date),
        end: parseDate(ev.end_date),
      })),
    ],
    [data],
  );

  const categories = useMemo(() => [...new Set(events.map((e) => e.category))], [events]);

  const filtered = useMemo(() => {
    const now = new Date();
    const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
    const todayEnd = todayStart + DAY_MS - 1;
    const monthStart = new Date(now.getFullYear(), now.getMonth(), 1).getTime();
    const monthEnd = new Date(now.getFullYear(), now.getMonth() + 1, 1).getTime() - 1;
    const q = query.trim().toLowerCase();

    return events
      .filter((ev) => {
        if (category && ev.category !== category) return false;
        if (q && ![ev.title, ev.description, ev.location, ev.category].some((f) => f?.toLowerCase().includes(q))) {
          return false;
        }
        const status = getStatus(ev, todayStart);
        switch (timeFilter) {
          case "today":
            return overlaps(ev, todayStart, todayEnd);
          case "week":
            return overlaps(ev, todayStart, todayStart + 7 * DAY_MS - 1);
          case "month":
            return overlaps(ev, monthStart, monthEnd);
          case "upcoming":
            return status === "upcoming" || status === "ongoing";
          case "past":
            return status === "past";
          default:
            return true;
        }
      })
      .map((ev) => ({ ...ev, status: getStatus(ev, todayStart) }))
      .sort((a, b) => {
        // Current and upcoming first (soonest first), then past (most recent first)
        const rank = (s: Status | null) => (s === "past" ? 1 : s === null ? 2 : 0);
        if (rank(a.status) !== rank(b.status)) return rank(a.status) - rank(b.status);
        const diff = (a.start?.getTime() ?? 0) - (b.start?.getTime() ?? 0);
        return a.status === "past" ? -diff : diff;
      });
  }, [events, query, timeFilter, category]);

  const hasActiveFilters = query !== "" || timeFilter !== "all" || category !== null;
  const resetFilters = () => {
    setQuery("");
    setTimeFilter("all");
    setCategory(null);
  };

  const chipClass = (active: boolean) =>
    `px-5 py-2.5 rounded-full text-sm md:text-base font-medium border transition-all ${
      active
        ? "bg-ausp-blue-dark text-primary-foreground border-ausp-blue-dark shadow-md"
        : "bg-card text-foreground border-border hover:border-primary/40 hover:bg-accent"
    }`;

  return (
    <PageLayout>
      <section className="min-h-screen bg-[hsl(40_45%_95%)] pt-36 md:pt-40 pb-24">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Header */}
          <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-3 animate-fade-in-up">Events</h1>
          <p className="text-lg text-muted-foreground mb-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Search summits, conferences and workshops hosted and supported by AUSP.
          </p>

          {/* Search */}
          <div className="relative mb-5 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search summits, conferences, and workshops"
              className="w-full h-14 pl-14 pr-5 rounded-2xl bg-card border border-border text-foreground placeholder:text-muted-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition"
            />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2.5 mb-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            {timeFilters.map((f) => (
              <button key={f.key} type="button" onClick={() => setTimeFilter(f.key)} className={chipClass(timeFilter === f.key)}>
                {f.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => setShowMore((v) => !v)}
              aria-expanded={showMore}
              className={`${chipClass(showMore || category !== null)} inline-flex items-center gap-2`}
            >
              <SlidersHorizontal className="w-4 h-4" />
              More filters
              {category && <span className="w-2 h-2 rounded-full bg-secondary" />}
            </button>
          </div>

          {showMore && (
            <div className="mb-4 p-4 rounded-2xl bg-card border border-border shadow-sm animate-fade-in">
              <p className="text-xs uppercase tracking-wider font-semibold text-muted-foreground mb-3">Category</p>
              <div className="flex flex-wrap gap-2">
                <button type="button" onClick={() => setCategory(null)} className={chipClass(category === null)}>
                  All categories
                </button>
                {categories.map((c) => (
                  <button key={c} type="button" onClick={() => setCategory(c)} className={chipClass(category === c)}>
                    {c}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="flex items-center justify-between gap-4 mt-6 mb-6">
            <p className="text-muted-foreground">
              Showing <span className="font-bold text-foreground">{filtered.length}</span>{" "}
              {filtered.length === 1 ? "event" : "events"}
            </p>
            {hasActiveFilters && (
              <button
                type="button"
                onClick={resetFilters}
                className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
              >
                <X className="w-4 h-4" /> Clear filters
              </button>
            )}
          </div>

          {isLoading && <p className="text-sm text-muted-foreground mb-6">Loading more events...</p>}
          {error && (
            <p className="text-sm text-destructive mb-6">
              Some events could not be loaded right now. Please try again later.
            </p>
          )}

          {/* Event cards */}
          {filtered.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((ev, i) => {
                const status = ev.status ? statusStyles[ev.status] : null;
                const Wrapper = ev.url ? "a" : "div";
                const linkProps = ev.url ? { href: ev.url, target: "_blank", rel: "noreferrer" } : {};

                return (
                  <article
                    key={ev.id}
                    className="group flex flex-col bg-card rounded-2xl border border-primary/20 shadow-sm overflow-hidden hover:shadow-xl hover:-translate-y-1 hover:border-primary/40 transition-all duration-300 animate-fade-in-up"
                    style={{ animationDelay: `${0.05 * i}s` }}
                  >
                    {/* Image */}
                    <Wrapper {...linkProps} className="relative block aspect-[16/9] overflow-hidden">
                      {ev.image ? (
                        <img
                          src={ev.image}
                          alt={ev.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full bg-hero-gradient flex flex-col items-center justify-center text-primary-foreground">
                          {ev.start ? (
                            <>
                              <span className="font-display text-5xl font-bold">{ev.start.getDate()}</span>
                              <span className="text-sm uppercase tracking-[0.25em] text-secondary">
                                {ev.start.toLocaleDateString("en-GB", { month: "long", year: "numeric" })}
                              </span>
                            </>
                          ) : (
                            <CalendarDays className="w-12 h-12 text-secondary" />
                          )}
                        </div>
                      )}
                      {status && (
                        <span
                          className={`absolute top-4 left-4 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-md ${status.className}`}
                        >
                          {status.label}
                        </span>
                      )}
                    </Wrapper>

                    {/* Body */}
                    <div className="flex flex-col flex-1 p-6">
                      <p className="text-sm font-semibold text-emerald-700 mb-3">{ev.category}</p>
                      <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 text-sm text-muted-foreground mb-3">
                        <span className="inline-flex items-center gap-1.5">
                          <CalendarDays className="w-4 h-4" /> {formatRange(ev.start, ev.end)}
                        </span>
                        {ev.location && (
                          <span className="inline-flex items-center gap-1.5">
                            <MapPin className="w-4 h-4" /> {ev.location}
                          </span>
                        )}
                      </div>
                      <h2 className="font-display text-xl font-bold text-foreground leading-snug mb-3 group-hover:text-primary transition-colors">
                        {ev.title}
                      </h2>
                      {ev.description && (
                        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-4">{ev.description}</p>
                      )}
                      {ev.url && (
                        <a
                          href={ev.url}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-auto inline-flex items-center gap-1.5 font-semibold text-foreground hover:text-primary transition-colors"
                        >
                          Details <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-20 rounded-2xl border border-dashed border-border bg-card/60">
              <CalendarDays className="w-10 h-10 text-muted-foreground mx-auto mb-4" />
              <p className="font-semibold text-foreground mb-1">No events match your filters</p>
              <p className="text-sm text-muted-foreground mb-5">Try a different search term or time range.</p>
              <button
                type="button"
                onClick={resetFilters}
                className="px-5 py-2.5 rounded-full bg-ausp-blue-dark text-primary-foreground text-sm font-medium hover:opacity-90"
              >
                Show all events
              </button>
            </div>
          )}
        </div>
      </section>
    </PageLayout>
  );
};

export default EventsPage;
