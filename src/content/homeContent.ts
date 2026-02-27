import {
  BookOpen,
  Users,
  Lightbulb,
  Globe,
  Shield,
  Sparkles,
  Star,
  Target,
  Handshake,
} from "lucide-react";

import campaign1 from "@/assets/campaign-1.jpg";
import campaign2 from "@/assets/campaign-2.png";
import campaign3 from "@/assets/campaign-3.jpg";
import campaign4 from "@/assets/campaign-4.jpg";
import campaign5 from "@/assets/campaign-5.jpg";
import campaign6 from "@/assets/campaign-6.jpg";

import ministryGlobalAffairs from "@/assets/policy.png";
import ministryFinance from "@/assets/ministry-finance.jpg";
import ministryProjects from "@/assets/youthengagement.png";
import { ROUTES } from "@/content/routes";

export const homePillars = [
  {
    icon: BookOpen,
    image: ministryGlobalAffairs,
    title: "Policy & Advocacy",
    description:
      "AUSP facilitates the collective participation and engagement of young people in official, formal and informal avenues of policy design, implementation, monitoring, and review at continental and global levels.",
    link: ROUTES.whatWeDo.focusAreas,
  },
  {
    icon: Users,
    image: ministryFinance,
    title: "Movement Building",
    description:
      "AUSP consolidates student voices through grassroots organisation linkages to build a strong youth movement on the continent through national consortium platforms across 55+ nations.",
    link: ROUTES.whatWeDo.programs,
  },
  {
    icon: Lightbulb,
    image: ministryProjects,
    title: "Youth Engagement",
    description:
      "Impactful youth engagement recognises and seeks to change the power structures that prevent young people from being considered as key stakeholders and drivers of their own needs and priorities.",
    link: ROUTES.whoWeAre.mission,
  },
] as const;

export const homeValues = [
  {
    icon: Globe,
    title: "Unity in Diversity",
    description:
      "Embracing Africa's cultural richness, promoting solidarity and shared purpose.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "Upholding honesty, transparency, and responsibility in all actions.",
  },
  {
    icon: Sparkles,
    title: "Innovation",
    description: "Encouraging bold thinking to transform ideas into real solutions.",
  },
  {
    icon: Star,
    title: "Leadership & Service",
    description:
      "Nurturing visionary leaders who serve with humility and inspire action.",
  },
  {
    icon: Target,
    title: "Professionalism",
    description:
      "Committing to excellence and discipline, ensuring high standards.",
  },
  {
    icon: Handshake,
    title: "Pan-Africanism",
    description:
      "Collective responsibility in advancing Africa's development and Agenda 2063.",
  },
] as const;

export const homeCampaigns = [
  { image: campaign1, title: "Pan-African Youth Conference" },
  { image: campaign2, title: "Leadership Workshop Series" },
  { image: campaign3, title: "Advocacy & Policy Forum" },
  { image: campaign4, title: "Cultural Heritage Festival" },
  { image: campaign5, title: "Community Outreach Program" },
  { image: campaign6, title: "Innovation & Tech Hub" },
] as const;

export const homeTestimonials = [
  {
    quote:
      "AUSP has been instrumental in connecting young African leaders across borders. The platform has given us a voice at the continental level and the tools to drive real change in our communities.",
    name: "Amina Diallo",
    role: "Student Leader, Senegal",
  },
  {
    quote:
      "Through AUSP's mentorship programs, I was able to develop my leadership skills and connect with like-minded youth from across the continent. It's truly a transformative experience.",
    name: "David Okello",
    role: "Youth Advocate, Uganda",
  },
  {
    quote:
      "The International Pan-African Youth Conference was a life-changing experience. Meeting thousands of passionate young Africans reaffirmed my belief in Africa's bright future.",
    name: "Fatima Zara",
    role: "Entrepreneur, Nigeria",
  },
] as const;

export const homeUpcomingEvents = [
  {
    date: { day: "15", month: "Oct" },
    title: "International Pan-African Youth Conference 2026",
    description:
      "Join thousands of young African leaders, innovators, and changemakers for the most anticipated Pan-African youth gathering of the year in Nairobi, Kenya.",
    location: "Nairobi, Kenya",
  },
  {
    date: { day: "20", month: "Jun" },
    title: "AUSP Leadership Summit 2026",
    description:
      "A continental summit bringing together AUSP chapters from across 55+ nations to discuss strategy, share best practices, and plan for the future.",
    location: "Addis Ababa, Ethiopia",
  },
  {
    date: { day: "05", month: "Mar" },
    title: "Youth Innovation Challenge 2026",
    description:
      "An innovation challenge inviting young Africans to develop solutions addressing Africa's most pressing challenges through technology and creativity.",
    location: "Virtual",
  },
] as const;

export const homeNewsItems = [
  {
    image: campaign1,
    date: { day: "15", month: "Feb" },
    title: "AUSP Launches New Chapter in 5 Additional Countries",
    excerpt:
      "The African Union Students' Platform continues to expand its reach across the continent, with new chapters established in Mozambique, Madagascar, Cameroon, Senegal, and Morocco.",
  },
  {
    image: campaign3,
    date: { day: "28", month: "Jan" },
    title: "AUSP Delegation Attends AU Summit in Addis Ababa",
    excerpt:
      "A delegation of AUSP leaders participated in the African Union Summit, advocating for greater youth inclusion in continental policy-making processes.",
  },
  {
    image: campaign6,
    date: { day: "10", month: "Dec" },
    title: "Innovation Hub Partners with Leading African Universities",
    excerpt:
      "AUSP's Innovation Hub has secured partnerships with 12 leading African universities to create a continent-wide network for student entrepreneurs and innovators.",
  },
] as const;

