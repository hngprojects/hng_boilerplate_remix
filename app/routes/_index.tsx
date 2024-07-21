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
    <>
    <Navbar/>
      <div className="flex gap-6">
      
        <div className="max-w-52 bg-graystyles">
          need's someones else component for this part
        </div>

        <div className="flex flex-col gap-6 my-8">
          <div className="rounded borderstyles max-w-fit flex">
            <button className="text-orange bg-graystyles text-sm text-nowrap font-medium max-w-full p-2">
              New Templates
            </button>
            <button className="text-sm max-w-full text-nowrap p-2">
              Manage Templates
            </button>
          </div>
          <div className="text-black">
            <h4 className="font-bold text-2xl">Create a New Template</h4>
            <p className=" text-base">
              choose an option below to begin crafting your email design.
            </p>
          </div>
          <div  className="flex gap-4 text-sm">
            <ul onClick={()=>navigate('/templatewithhtml')} className="flex items-center createtemplate max-w-72 gap-3 p-3 cursor-pointer">
              <li><img src={getImages[0].open_close.imgLocation} alt="note icon" /></li>
              <li>
                <h4 className="font-semibold">Generate with HTML</h4>
                <p>create an email template by pasting your custom-coded template</p>
              </li>
            </ul>
            <ul className="flex items-center createtemplate max-w-72 gap-3 p-3 cursor-pointer ">
              <li><img src={getImages[0].note_icon.imgLocation} alt="" /></li>
              <li>
                <h4 className="font-semibold">Edit in-built Template</h4>
                <p>create an email template by choosing from our custom template library</p>
              </li>
            </ul>
           
          </div>
        </div>
      </div>
      <FooterCookieConsent />

    </>
  );
}
