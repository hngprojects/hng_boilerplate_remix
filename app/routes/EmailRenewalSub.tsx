import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
// import { render } from "@react-email/render";
// import nodemailer from "nodemailer";
import Subscription from "../components/EmailRenewal";
import SVG from "../../public/pana.png";


// export const meta: MetaFunction = () => {
//   return {
//     title: "Subscription Page",
//     description: "Manage your subscriptions",
//   };
// };


interface SubscriptionProps {
  title: string;
  name: string;
  image: string;
  email: string;
  renewalDate: string;
  renewalPrice: string;
  renewalPeriod: string;
  reviewSubscriptionLink: string;
  renewSubscriptionLink: string;
}

export const loader = async () => {

  const data = {
  title: " Subscription Renewal Reminder",
  name: "John Doe",
  image:  SVG ,
  email: "help@boilerplate.com",
  renewalDate: "17th September, 2024",
  renewalPrice: "$20.89",
  renewalPeriod: "Bi-monthly",
  reviewSubscriptionLink: "",
  renewSubscriptionLink: "Renew Subscription"
};

 return json(data);
};


//   const emailHtml = render(<Subscription {...data} />);

//   const transporter = nodemailer.createTransport({
//     service: 'Gmail',
//     auth: {
//       user: 'your-email@gmail.com',
//       pass: 'your-email-password',
//     },
//   });

//   await transporter.sendMail({
//     from: 'your-email@gmail.com',
//     to: data.email,
//     subject: data.title,
//     html: emailHtml,
//   });

//   return json(data);
// };

export default function Index() {
  const data = useLoaderData<SubscriptionProps>();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Subscription {...data} />
    </div>
  );
}


