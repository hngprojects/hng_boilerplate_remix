import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Header from "../components/email-deactivation-template/Header";
import Body from "../components/email-deactivation-template/Body";
import Footer from "../components/email-deactivation-template/Footer";

export let loader = async () => {
  return json({
    cname: "Boilerplate",
    title: "Account Deactivated Due To Inactivity",
    name: "John Doe",
    image: "../public/error.svg",
    logo: "../public/Logo.svg",

    lin: "../public/in.svg",
    ig: "../public/ig.svg",
    x: "../public/x.svg",
    disc: "../public/dis.svg",
    tt: "../public/tt.svg",

    email: "johndoe@gmail.com",
    lastActive: "17th June, 2024 / 11:56pm",
    deactivationDate: "20th July, 2024 / 11:56pm",
    supportEmail: "support@boilerplate.com",
    supportPhone: "+234-456-7890",
  });
};

export default function AccountDeactivationEmailRoute() {
  const data = useLoaderData<typeof loader>();

  return (
    <div className="email-container mx-auto  ">
      <Header logo={data.logo} cname={data.cname} />
      <Body
        name={data.name}
        image={data.image}
        email={data.email}
        title={data.title}
        lastActive={data.lastActive}
        deactivationDate={data.deactivationDate}
        supportEmail={data.supportEmail}
        supportPhone={data.supportPhone}
      />
      <Footer lin={data.lin} ig={data.ig} x={data.x} disc={data.disc} tt={data.tt} />
    </div>
  );
}




// import { json } from "@remix-run/node";
// import { useLoaderData } from "@remix-run/react";
// import Header from "~/components/email/Header";
// import Body from "~/components/email/Body";
// import Footer from "~/components/email/Footer";

// export let loader = async () => {
//   return json({
//     title: "Account Deactivated Due To Inactivity",
//     name: "John Doe",
//     image: "/assets/images/logo.png", // Update the path
//     email: "johndoe@gmail.com",
//     lastActive: "17th June, 2024 / 11:56pm",
//     deactivationDate: "20th July, 2024 / 11:56pm",
//     supportEmail: "support@boilerplate.com",
//     supportPhone: "+234-456-7890",
//   });
// };

// export default function AccountDeactivationEmailRoute() {
//   const data = useLoaderData<typeof loader>();

//   return (
//     <div className="email-container mx-auto p-4 sm:p-6 md:p-8 lg:p-10">
//       <Header image={data.image} title={data.title} />
//       <Body
//         name={data.name}
//         email={data.email}
//         lastActive={data.lastActive}
//         deactivationDate={data.deactivationDate}
//         supportEmail={data.supportEmail}
//         supportPhone={data.supportPhone}
//       />
//       <Footer />
//     </div>
//   );
// }

