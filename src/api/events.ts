import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabaseClient";

export interface EventItem {
  id: string;
  title: string;
  description: string | null;
  location: string | null;
  start_date: string | null;
  end_date: string | null;
}

export const EVENTS_QUERY_KEYS = {
  all: ["events"] as const,
};

export function useEventsList() {
  return useQuery({
    queryKey: EVENTS_QUERY_KEYS.all,
    queryFn: async () => {
      const { data, error } = await supabase
        .from("events")
        .select("id, title, description, location, start_date, end_date")
        .order("start_date", { ascending: true });

      if (error) throw error;
      return (data ?? []) as EventItem[];
    },
  });
}

