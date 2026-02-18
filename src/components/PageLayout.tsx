import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-1">{children}</main>
    <FooterSection />
  </div>
);

export default PageLayout;
