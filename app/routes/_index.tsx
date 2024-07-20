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
  <div className="font-sans p-4">
      <h1 className="text-3xl">Welcome to Remix</h1>
      <ul className="list-disc mt-4 pl-6 space-y-2">
        <li>
          <a
            className="text-blue-700 underline visited:text-purple-900"
            target="_blank"
            href="https://remix.run/start/quickstart"
            rel="noreferrer"
          >
            5m Quick Start
          </a>
        </li>
        <li>
          <a
            className="text-blue-700 underline visited:text-purple-900"
            target="_blank"
            href="https://remix.run/start/tutorial"
            rel="noreferrer"
          >
            30m Tutorial
          </a>
        </li>
        <Button >Hello</Button>
        <li>
          <a
            className="text-blue-700 underline visited:text-purple-900"
            target="_blank"
            href="https://remix.run/docs"
            rel="noreferrer"
          >
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
}
