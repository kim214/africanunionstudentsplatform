import PageLayout from "@/components/PageLayout";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useNewsArticle } from "@/api/news";

const NewsDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data, isLoading, error } = useNewsArticle(slug);

  if (isLoading) {
    return (
      <PageLayout>
        <div className="min-h-[60vh] flex items-center justify-center">
          <p className="text-muted-foreground text-sm">Loading article...</p>
        </div>
      </PageLayout>
    );
  }

  if (error || !data) {
    return (
      <PageLayout>
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-display text-3xl font-bold text-foreground mb-4">News Item Not Found</h1>
            <Link to="/news" className="text-primary hover:underline">
              ← Back to News
            </Link>
          </div>
        </div>
      </PageLayout>
    );
  }

  const dateLabel = data.published_at
    ? new Date(data.published_at).toLocaleDateString(undefined, {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
    : null;

  return (
    <PageLayout>
      <section className="relative pt-40 pb-16 bg-hero-gradient text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          {data.image_url && (
            <img src={data.image_url} alt="" className="w-full h-full object-cover" />
          )}
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <Link
            to="/news"
            className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to News
          </Link>
          {dateLabel && (
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/10 text-primary-foreground/80 text-sm font-semibold mb-6">
              {dateLabel}
            </span>
          )}
          <h1 className="font-display text-3xl md:text-5xl font-bold">
            {data.title}
          </h1>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-card rounded-2xl p-8 shadow-card border border-border space-y-4">
            {data.excerpt && (
              <p className="text-muted-foreground leading-relaxed text-lg">{data.excerpt}</p>
            )}
            {data.content && (
              <p className="text-foreground leading-relaxed text-base whitespace-pre-line">
                {data.content}
              </p>
            )}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default NewsDetailPage;

