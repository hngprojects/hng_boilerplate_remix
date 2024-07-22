import type { MetaFunction } from "@remix-run/node";

import BlogPost from "~/components/BlogPost";
import HeroSection from "~/components/HeroSection";
import Footer from "~/components/ui/footer";
import Header from "~/components/ui/header";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div>
      <Header />
      <HeroSection />
      <BlogPost />
      <Footer />
    </div>
  );
}
