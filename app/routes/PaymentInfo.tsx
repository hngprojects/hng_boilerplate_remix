import { Check } from "lucide-react";
import React from "react";

import PaymentPage from "../components/paymentpage/PaymentPage";

const paymentPlans = [
  {
    name: "Free",
    price: "$0",
    description: "Ideal for growing needs who want more features.",
    features: ["10 Projects", "Up to 10 subscribers", "Advanced analytics"],
    details: {
      projectManagement: {
        projects: "Up to 5",
        fileUpload: "10gb",
        userAccount: "1",
        teams: "1",
      },
      sharingCollaboration: {
        integration: true,
        guestAccess: true,
        pageAnalysis: true,
        taskManagement: true,
      },
      support: {
        prioritySupport: true,
        customerSupport: false,
      },
      managementSecurity: "Free",
    },
  },
  {
    name: "Basic",
    price: "$20",
    description: "Ideal for growing needs who want more features.",
    features: [
      "100 Projects",
      "Up to 50 subscribers",
      "Advanced analytics",
      "24-hour support",
    ],
    details: {
      projectManagement: {
        projects: "Up to 5",
        fileUpload: "20gb",
        userAccount: "10",
        teams: "Unlimited",
      },
      sharingCollaboration: {
        integration: true,
        guestAccess: true,
        pageAnalysis: true,
        taskManagement: true,
      },
      management: {
        teamSecurity: true,
        dataBackup: true,
        compliance: true,
      },
      support: {
        prioritySupport: true,
        customerSupport: true,
      },
      managementSecurity: "Basic",
    },
  },
  {
    name: "Advanced",
    price: "$50",
    description: "Designed for power users and maximum functionalities.",
    features: [
      "200 Projects",
      "Up to 100 subscribers",
      "Advanced analytics",
      "24-hour support",
      "Marketing advisor",
    ],
    details: {
      projectManagement: {
        projects: "Up to 5",
        fileUpload: "50gb",
        userAccount: "50",
        teams: "Unlimited",
      },
      sharingCollaboration: {
        integration: true,
        guestAccess: true,
        pageAnalysis: true,
        taskManagement: true,
      },
      management: {
        teamSecurity: true,
        dataBackup: true,
        compliance: true,
      },
      support: {
        prioritySupport: true,
        customerSupport: true,
      },
      managementSecurity: "Advanced",
    },
  },
  {
    name: "Premium",
    price: "$100",
    description: "Perfect for users who want more features.",
    features: [
      "300 Projects",
      "Up to 500 subscribers",
      "Advanced analytics",
      "24-hour support",
      "Marketing advisor",
    ],
    details: {
      projectManagement: {
        projects: "Unlimited",
        fileUpload: "Unlimited",
        userAccount: "Unlimited",
        teams: "Unlimited",
      },
      sharingCollaboration: {
        integration: true,
        guestAccess: true,
        pageAnalysis: true,
        taskManagement: true,
      },
      management: {
        teamSecurity: true,
        dataBackup: true,
        compliance: true,
      },
      support: {
        prioritySupport: true,
        customerSupport: true,
      },
      managementSecurity: "Premiuim",
    },
  },
];

const handleUpgrade = async (planName: string) => {
  try {
    const response = await fetch("/api/upgrade-plan", {
      method: "POST",
      body: JSON.stringify({ planName }),
      headers: { "Content-Type": "application/json" },
    });
    const result = await response.json();
    if (result.success) {
      alert("Plan upgraded successfully!");
    } else {
      alert("Failed to upgrade plan.");
    }
  } catch (error) {
    console.error("Error upgrading plan:", error);
    alert("An error occurred while upgrading the plan.");
  }
};

const PaymentInfoPage: React.FC = () => {
  return (
    <div className="flex flex-col space-y-10 bg-white p-8">
      <h1 className="text-2xl font-bold md:text-4xl">Current Plan</h1>
      <div className="free h-auto w-full rounded-md bg-orange-50">
        <div className="py-8 pl-6">
          <h2 className="text-xl font-bold md:text-2xl">Free</h2>
          <p className="w-9/12 p-1 text-xs md:text-sm">
            Your account is on a free 90-day trial of our free plan, through
            September 27th. Upgrade anytime to stay on this plan when your trial
            ends. <span className="text-gray-500">$0/month</span>
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <h2 className="mb-4 text-xl font-bold">
          Subscribe to your desired plan
        </h2>
        <div className="flex flex-col md:flex-row">
          {paymentPlans.map((plan) => (
            <PaymentPage
              key={plan.name}
              plan={plan}
              onUpgrade={handleUpgrade}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col rounded-md bg-orange-50 p-10 md:flex-row">
        <h2 className="w-1/5 text-xl font-bold">Highlights</h2>
        <div className="flex w-full flex-col justify-between md:flex-row">
          {paymentPlans.map((plan, index) => (
            <div key={index}>
              <h3 className="mt-2 block pb-2 text-lg font-semibold md:hidden">
                {plan.name}
              </h3>
              <ul className="list-disc space-y-6 pl-5">
                {plan.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10">
        <div className="">
          <h3 className="bg-orange-50 p-4 text-base font-semibold md:text-xl">
            Project Management
          </h3>
          <table className="w-full table-auto border border-slate-200 p-6">
            <tbody>
              <tr>
                <td className="border-b border-b-slate-300 p-2 text-sm md:text-base">
                  Projects
                </td>
                {paymentPlans.map((plan, index) => (
                  <td
                    key={index}
                    className="border-b border-b-slate-300 p-4 text-xs md:text-sm"
                  >
                    {plan.details.projectManagement.projects}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="border-b border-b-slate-300 p-2 text-sm md:text-base">
                  File Upload
                </td>
                {paymentPlans.map((plan, index) => (
                  <td
                    key={index}
                    className="border-b border-b-slate-300 p-4 text-xs md:text-sm"
                  >
                    {plan.details.projectManagement.fileUpload}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="border-b border-b-slate-300 p-2 text-sm md:text-base">
                  User Account
                </td>
                {paymentPlans.map((plan, index) => (
                  <td
                    key={index}
                    className="border-b border-b-slate-300 p-4 text-xs md:text-sm"
                  >
                    {plan.details.projectManagement.userAccount}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="border-b border-b-slate-300 p-2 text-sm md:text-base">
                  Teams
                </td>
                {paymentPlans.map((plan, index) => (
                  <td key={index} className="p-4 text-xs md:text-sm">
                    {plan.details.projectManagement.teams}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <h3 className="bg-orange-50 p-4 text-base font-semibold md:text-xl">
            Sharing and Collaboration
          </h3>
          <table className="w-full table-auto border border-slate-200 p-6">
            <tbody>
              <tr className="border-b border-b-slate-300 py-4">
                <td className="p-2">Integration</td>
                {paymentPlans.map((plan, index) => (
                  <td key={index} className="p-4">
                    {plan.details.sharingCollaboration.pageAnalysis ? (
                      <Check />
                    ) : (
                      ""
                    )}
                  </td>
                ))}
              </tr>
              <tr className="border-b border-b-slate-300 py-4">
                <td className="p-2">Guest Access</td>
                {paymentPlans.map((plan, index) => (
                  <td key={index} className="p-4">
                    {plan.details.sharingCollaboration.pageAnalysis ? (
                      <Check />
                    ) : (
                      ""
                    )}
                  </td>
                ))}
              </tr>
              <tr className="border-b border-b-slate-300 py-4">
                <td className="p-2">Page Analysis</td>
                {paymentPlans.map((plan, index) => (
                  <td key={index} className="p-4">
                    {plan.details.sharingCollaboration.pageAnalysis ? (
                      <Check />
                    ) : (
                      ""
                    )}
                  </td>
                ))}
              </tr>
              <tr className="border-b border-b-slate-300">
                <td className="p-2">Task Management</td>
                {paymentPlans.map((plan, index) => (
                  <td key={index} className="p-4">
                    {plan.details.sharingCollaboration.pageAnalysis ? (
                      <Check />
                    ) : (
                      ""
                    )}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h3 className="bg-orange-50 p-4 text-base font-bold md:text-xl">
            Management and security
          </h3>
          <table className="w-full table-auto border border-slate-200 p-6">
            <tbody>
              <tr className="border-b border-b-slate-300 py-4">
                <td className="p-2">Team Security</td>
                {paymentPlans.map((plan, index) => (
                  <td key={index} className="p-4">
                    {plan.details.management?.teamSecurity ? <Check /> : ""}
                  </td>
                ))}
              </tr>
              <tr className="border-b border-b-slate-300 py-4">
                <td className="p-2">Data Backup</td>
                {paymentPlans.map((plan, index) => (
                  <td key={index} className="p-4">
                    {plan.details.management?.dataBackup ? <Check /> : ""}
                  </td>
                ))}
              </tr>
              <tr className="border-b border-b-slate-300 py-4">
                <td className="p-2">HIPPA Compliance</td>
                {paymentPlans.map((plan, index) => (
                  <td key={index} className="p-4">
                    {plan.details.management?.compliance ? <Check /> : ""}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <h3 className="bg-orange-50 p-4 text-base font-bold md:text-xl">
            Support
          </h3>
          <table className="w-full table-auto border border-slate-200 p-6">
            <tbody>
              <tr className="border-b border-b-slate-300 py-4">
                <td className="p-2">Priority Support</td>
                {paymentPlans.map((plan, index) => (
                  <td key={index} className="p-4">
                    {plan.details.support?.prioritySupport ? <Check /> : ""}
                  </td>
                ))}
              </tr>
              <tr className="border-b border-b-slate-300 py-4">
                <td className="p-2">HIPPA Compliance</td>
                {paymentPlans.map((plan, index) => (
                  <td key={index} className="p-4">
                    {plan.details.support?.customerSupport ? <Check /> : ""}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentInfoPage;
