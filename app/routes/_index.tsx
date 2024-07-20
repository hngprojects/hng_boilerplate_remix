import type { MetaFunction } from "@remix-run/node";
// import fs from "fs/promises"
import * as fs from "fs"
// const fs = require("fs")
import { useEffect } from "react";
import { getImages } from '../lib/utils/utils'
import { useNavigate } from "@remix-run/react";
import Navbar from "~/Components/Navbar/Navbar";

import { useState } from "react";
import { Input } from "~/types/otpauth";
import OtpAuth from "~/Components/ui/otp/OtpAuth";
import {Button} from "~/Components/ui/button";
import FooterCookieConsent from "~/Components/ui/footerCookieConsent";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

const [openModal, setOpenModal] = useState(false);


const handleSubmit = (values: Input[]) => {
  console.log({ values });
};

export default function Index() {

  const navigate = useNavigate();

  return (
  <div>
      <h1 className="text-3xl font-bold underline max-w-[1440px] mx-auto">
        Home Page
      </h1>

      <FooterCookieConsent />
    </div>
  );
}
