import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabaseClient";

export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string | null;
  content: string | null;
  image_url: string | null;
  published_at: string | null;
}

export const NEWS_QUERY_KEYS = {
  all: ["news"] as const,
  bySlug: (slug: string) => ["news", slug] as const,
};

export function useNewsList() {
  return useQuery({
    queryKey: NEWS_QUERY_KEYS.all,
    queryFn: async () => {
      const { data, error } = await supabase
        .from("news_articles")
        .select("id, slug, title, excerpt, image_url, published_at")
        .order("published_at", { ascending: false })
        .limit(24);

      if (error) throw error;
      return (data ?? []) as NewsArticle[];
    },
  });
}

export function useNewsArticle(slug: string | undefined) {
  return useQuery({
    queryKey: slug ? NEWS_QUERY_KEYS.bySlug(slug) : ["news", "detail"],
    enabled: Boolean(slug),
    queryFn: async () => {
      const { data, error } = await supabase
        .from("news_articles")
        .select("id, slug, title, excerpt, content, image_url, published_at")
        .eq("slug", slug)
        .maybeSingle();

      if (error) throw error;
      return (data ?? null) as NewsArticle | null;
    },
  });
}

