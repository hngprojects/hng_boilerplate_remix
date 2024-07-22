import React from "react";

interface PaymentPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  details: {
    projectManagement: {
      projects: string;
      fileUpload: string;
      userAccount: string;
      teams: string;
    };
    sharingCollaboration: {
      integration: boolean;
      guestAccess: boolean;
      pageAnalysis: boolean;
      taskManagement: boolean;
    };
    managementSecurity: string;
    support: {
      prioritySupport: boolean;
      customerSupport: boolean;
    };
  };
}

interface PaymentPageProperties {
  plan: PaymentPlan;
  onUpgrade: (planName: string) => void;
}

const PaymentPage: React.FC<PaymentPageProperties> = ({ plan, onUpgrade }) => (
  <div className="flex w-4/5 flex-col">
    <div className="m-1 space-y-6 rounded-lg bg-white p-4">
      <h2 className="text-xl font-semibold">{plan.name}</h2>
      <p className="text-4xl">
        {plan.price}
        <span className="ml-2 text-xl text-gray-500">/month</span>
      </p>
      <p className="text-sm text-gray-600">{plan.description}</p>
      <button
        className="mt-4 w-full rounded bg-orange-500 p-4 text-white"
        onClick={() => onUpgrade(plan.name)}
      >
        Upgrade
      </button>
    </div>
  </div>
);

export default PaymentPage;
