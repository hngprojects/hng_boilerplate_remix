import type { MetaFunction } from "@remix-run/node";

import FindSection from "~/components/pages/home/FindSection";
import HeroSection from "~/components/pages/home/HeroSection";
import HowSection from "~/components/pages/home/HowSection";
import TestimonialsSection from "~/components/pages/home/TestimonialsSection";
import UsersSection from "~/components/pages/home/UsersSection";
import SuperAdminNavBar from "~/components/SuperAdminNavBar/SuperAdminNavbar";

export const meta: MetaFunction = () => {
  return [
    { title: "Remix Boilerplate" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div>
      <SuperAdminNavBar />
      <HeroSection />
      <UsersSection />
      <HowSection />
      <TestimonialsSection />
      <FindSection />
    </div>
  );
}
