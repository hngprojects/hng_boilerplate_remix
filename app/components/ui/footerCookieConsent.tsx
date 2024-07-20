// app/components/ui/FooterCookieConsent.tsx
import React from "react";
import { Button } from "./button"; // Adjust the path if necessary

const FooterCookieConsent: React.FC = () => {
  const handleAccept = () => {
    console.log("Cookie consent accepted");
  };

  const handleReject = () => {
    console.log("Cookie consent rejected");
  };

  const handleSettings = () => {
    console.log("Cookie settings opened");
  };

  return (
    <div className="fixed bottom-0 w-full bg-white text-gray-900 border-t border-gray-200 p-6">
      <div className="flex flex-col md:flex-row items-start md:justify-between md:items-center space-y-4 md:space-y-0 md:space-x-4">
        <p className="text-sm text-left flex-1 flex flex-col">
          <span className="font-bold text-sm sm:text-xl">We Value your Privacy</span>
          <span className="text-xs sm:text-base">
            Our website uses cookies to enhance your browsing experience,
            provide personalized content, and analyze site traffic. By clicking
            "Accept All", you consent to our use of cookies.
          </span>
        </p>
        <div className="grid grid-cols-2 gap-2 place-content-center sm:grid-cols-3">
          <Button variant="outline" onClick={handleSettings}>
            Cookies Settings
          </Button>
          <Button variant="destructive" onClick={handleReject}>
            Reject All
          </Button>
          <Button variant="destructive" onClick={handleAccept}>
            Accept All Cookies
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FooterCookieConsent;
