import type { MetaFunction } from "@remix-run/node";

import BlogPost from "~/components/BlogPost";
import HeroSection from "~/components/HeroSection";
import Footer from "~/components/ui/footer";
import Header from "~/components/ui/header";
import SuperAdminNavBar from "~/components/SuperAdminNavBar/SuperAdminNavbar";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div>
      <SuperAdminNavBar />
      <Header />
      <HeroSection />
      <BlogPost />
      <Footer />
    </div>
  );
}
