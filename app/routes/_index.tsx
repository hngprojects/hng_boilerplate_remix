import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { useState } from "react";

import { Button } from "~/components/ui/button";
import CardPlatform from "~/components/ui/card/card-platform";
import OtpAuth from "~/components/ui/otp/OtpAuth";
import { Input } from "~/types/otpauth";
import ForgotPassword from "~/components/ForgotPasswordPage/ForgotPasswordPage";

// export const meta: MetaFunction = () => {
//   return [
//     { title: "New Remix App" },
//     { name: "description", content: "Welcome to Remix!" },
//   ];
// };

// const handleSubmit = (values: Input[]) => {
//   console.log({ values });
// };

export default function Index() {
  const [openModal, setOpenModal] = useState(false);


  return (
    <>
        <ForgotPassword></ForgotPassword>
    </>
  );
}
