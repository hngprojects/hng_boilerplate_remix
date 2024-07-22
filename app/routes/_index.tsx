import type { MetaFunction } from "@remix-run/node";
import { useState } from "react";
import AddUserContent from "~/components/modal/addUserModal";
import { Button } from "~/components/ui/button";
import Modal from "~/components/modal/modal";
import CardPlatform from "~/components/ui/card/card-platform";
import OtpAuth from "~/components/ui/otp/OtpAuth";
import { Input } from "~/types/otpauth";

import FindSection from "~/components/pages/home/FindSection";
import HeroSection from "~/components/pages/home/HeroSection";
import HowSection from "~/components/pages/home/HowSection";
import TestimonialsSection from "~/components/pages/home/TestimonialsSection";
import UsersSection from "~/components/pages/home/UsersSection";

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