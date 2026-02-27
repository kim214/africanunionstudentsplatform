export const ROUTES = {
  home: "/",
  whoWeAre: {
    about: "/who-we-are/about-us",
    mission: "/who-we-are/mission-vision",
    timeline: "/who-we-are/timeline",
  },
  whatWeDo: {
    focusAreas: "/what-we-do/focus-areas",
    programs: "/what-we-do/programs",
  },
  whereWeWork: "/where-we-work",
  events: "/events",
  news: "/news",
  resources: "/resources",
  contact: "/contact",
  join: "/join",
  donate: "/donate",
  ministry: (slug: string) => `/ministry/${slug}`,
} as const;

