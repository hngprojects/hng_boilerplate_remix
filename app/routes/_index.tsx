import type { MetaFunction } from "@remix-run/node";

import FindSection from "~/components/layout/home/FindSection";
import HeroSection from "~/components/layout/home/HeroSection";
import HowSection from "~/components/layout/home/HowSection";
import TestimonialsSection from "~/components/layout/home/TestimonialsSection";
import UsersSection from "~/components/layout/home/UsersSection";

export const meta: MetaFunction = () => {
  return [
    { title: "Remix Boilerplate" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
      <HeroSection />
      <UsersSection />
      <HowSection />
      <TestimonialsSection />
      <FindSection />
    </>
  );
}
