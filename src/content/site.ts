import { ROUTES } from "@/content/routes";

export const SITE = {
  name: "African Union Students' Platform",
  shortName: "AUSP",
  tagline: "Educate • Connect • Empower",
  email: "info@ausp.africa",
  phone: "+260 97 3313044,",
  location: "Nairobi, Kenya",
  social: {
    facebook: "https://www.facebook.com/ausp.africa",
    twitter: "https://twitter.com/ausp_africa",
    linkedin: "https://www.linkedin.com/company/african-university-student-platform/",
    instagram: "https://www.instagram.com/ausp_intl/",
  },
  nav: [
    { label: "Home", to: ROUTES.home },
    {
      label: "Who We Are",
      children: [
        { label: "About Us", to: ROUTES.whoWeAre.about },
        { label: "Mission & Vision", to: ROUTES.whoWeAre.mission },
        { label: "Timeline", to: ROUTES.whoWeAre.timeline },
      ],
    },
    {
      label: "What We Do",
      children: [
        { label: "Focus Areas", to: ROUTES.whatWeDo.focusAreas },
        { label: "Programs", to: ROUTES.whatWeDo.programs },
      ],
    },
    { label: "Where We Work", to: ROUTES.whereWeWork },
    { label: "Events", to: ROUTES.events },
    { label: "News", to: ROUTES.news },
    { label: "Resources", to: ROUTES.resources },
    { label: "Contact", to: ROUTES.contact },
  ],
} as const;

