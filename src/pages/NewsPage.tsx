import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { Link } from "react-router-dom";
import { useNewsList } from "@/api/news";

const NewsPage = () => {
  const { data, isLoading, error } = useNewsList();

  return (
    <PageLayout>
      <PageHero
        badge="Updates"
        title="Latest"
        highlight="News"
        description="Highlights and updates from AUSP programs, chapters, and continental engagement."
      />

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          {isLoading && (
            <p className="text-center text-muted-foreground text-sm">Loading news...</p>
          )}
          {error && (
            <p className="text-center text-destructive text-sm">
              Unable to load news at the moment. Please try again later.
            </p>
          )}
          {!isLoading && !error && (
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {(data ?? []).map((news) => (
                <Link
                  key={news.id}
                  to={`/news/${news.slug}`}
                  className="group bg-card rounded-2xl shadow-card border border-border overflow-hidden hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative h-48 overflow-hidden">
                    {news.image_url && (
                      <img
                        src={news.image_url}
                        alt={news.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    )}
                    {news.published_at && (
                      <div className="absolute top-4 left-4 bg-blue-gradient text-primary-foreground rounded-lg px-3 py-1.5 text-center shadow-lg text-xs font-medium">
                        {new Date(news.published_at).toLocaleDateString(undefined, {
                          day: "2-digit",
                          month: "short",
                        })}
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors leading-tight">
                      {news.title}
                    </h3>
                    {news.excerpt && (
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {news.excerpt}
                      </p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </PageLayout>
  );
};

export default NewsPage;

