import summitPoster from "@/assets/alf-summit-2026.jpg";

export interface FeaturedEvent {
  id: string;
  title: string;
  category: string;
  description: string;
  location: string;
  start_date: string;
  end_date: string;
  image: string;
  url: string;
}

// Events AUSP takes part in that are not managed in the events table
export const featuredEvents: FeaturedEvent[] = [
  {
    id: "alf-summit-2026",
    title: "Africa Leaders & Founders Bootcamp & Summit 2.0",
    category: "Conferences & Summits",
    description:
      "A five-day Pan-African programme — a 4-day bootcamp plus a 1-day summit — for emerging leaders, founders and changemakers. Organized by UniGlobe Access and Smallholder Africa, in partnership with AUSP.",
    location: "Nairobi, Kenya",
    start_date: "2026-11-17",
    end_date: "2026-11-21",
    image: summitPoster,
    url: "https://uniglobeaccess.com/africa-leaders-founders",
  },
];
