import FooterCookieConsent from "~/components/ui/footerCookieConsent";
const Home: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline max-w-[1440px] mx-auto">
        Home Page
      </h1>

      <FooterCookieConsent />
    </div>
  );
};

export default Home;
