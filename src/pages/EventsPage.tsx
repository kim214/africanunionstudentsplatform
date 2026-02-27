import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { MapPin } from "lucide-react";
import { useEventsList } from "@/api/events";

const EventsPage = () => {
  const { data, isLoading, error } = useEventsList();

  return (
    <PageLayout>
      <PageHero
        badge="Events"
        title="Upcoming"
        highlight="Events"
        description="Join AUSP convenings, summits, and flagship gatherings that connect youth and students across Africa and the Diaspora."
      />

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          {isLoading && (
            <p className="text-center text-muted-foreground text-sm">Loading events...</p>
          )}
          {error && (
            <p className="text-center text-destructive text-sm">
              Unable to load events at the moment. Please try again later.
            </p>
          )}
          {!isLoading && !error && (
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {(data ?? []).map((ev) => {
                const start = ev.start_date ? new Date(ev.start_date) : null;
                const day = start ? start.getDate().toString().padStart(2, "0") : "";
                const month = start
                  ? start.toLocaleDateString(undefined, { month: "short" })
                  : "";

                return (
                  <div
                    key={ev.id}
                    className="group bg-card rounded-2xl shadow-card border border-border hover:border-primary/30 overflow-hidden transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex">
                      <div className="w-20 shrink-0 bg-blue-gradient flex flex-col items-center justify-center text-primary-foreground p-4">
                        <span className="text-2xl font-bold font-display">{day}</span>
                        <span className="text-xs uppercase tracking-wider">{month}</span>
                      </div>
                      <div className="p-5 flex-1">
                        <h3 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors leading-tight">
                          {ev.title}
                        </h3>
                        {ev.description && (
                          <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                            {ev.description}
                          </p>
                        )}
                        {ev.location && (
                          <span className="inline-flex items-center gap-1 text-xs text-primary font-medium">
                            <MapPin className="w-3 h-3" /> {ev.location}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </PageLayout>
  );
};

export default EventsPage;

