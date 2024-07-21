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
    image: "../public/images/error.svg",
    logo: "../public/images/Logo.svg",

    lin: "../public/images/in.svg",
    ig: "../public/images/ig.svg",
    x: "../public/images/x.svg",
    disc: "../public/images/dis.svg",
    tt: "../public/images/tt.svg",

    email: "johndoe@gmail.com",
    lastActive: "17th June, 2024 / 11:56pm",
    deactivationDate: "20th July, 2024 / 11:56pm",

    // Links
    customerSupport: "supportLink.hng.tech",
    updatePreference: "prefLink.hng.tech",
    unsubscribe: "subscribeLink.hng.tech",

    supportEmail: " support@llaihng.com",
    supportPhone: " (+234)-456-7890",
  });
};


export default function AccountDeactivationEmailRoute() {
  const data = useLoaderData<typeof loader>();

  return (
    <div  className="email-container mx-auto  ">
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
      <Footer 
       lin={data.lin} 
       ig={data.ig} 
       x={data.x} 
       disc={data.disc} 
       tt={data.tt}

       sub={data.unsubscribe}
       cust={data.customerSupport}
       pref={data.updatePreference}
       />
    </div>
  );
}


