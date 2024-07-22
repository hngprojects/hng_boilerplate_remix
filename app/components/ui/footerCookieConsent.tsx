import { Button } from "./button";

const handleAccept = () => {
  console.log("Cookie consent accepted");
};

const handleReject = () => {
  console.log("Cookie consent rejected");
};

const handleSettings = () => {
  console.log("Cookie settings opened");
};

const FooterCookieConsent: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full border-t border-gray-200 bg-white p-6 text-gray-900">
      <div className="flex flex-col items-start space-y-4 md:flex-row md:items-center md:justify-between md:space-x-4 md:space-y-0">
        <p className="flex flex-1 flex-col text-left text-sm">
          <span className="text-sm font-bold sm:text-xl">
            We Value your Privacy
          </span>
          <span className="text-xs sm:text-base">
            Our website uses cookies to enhance your browsing experience,
            provide personalized content, and analyze site traffic. By clicking
            &quot;Accept All&quot;, you consent to our use of cookies.
          </span>
        </p>
        <div className="grid grid-cols-2 place-content-center gap-2 sm:grid-cols-3">
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
