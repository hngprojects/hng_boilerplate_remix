import { useNavigate } from "@remix-run/react";
import { ChevronRight } from "lucide-react";
import { useState } from "react";

import { Alert } from "~/components/ui/alert";
import { Button } from "~/components/ui/button";
import { Form } from "~/components/ui/form";
import { Input } from "~/components/ui/input";

const Breadcrumbs: React.FC<{ currentPage: string }> = ({ currentPage }) => {
  const getClassName = (page: string) =>
    page === currentPage
      ? "text-gray-400 cursor-default"
      : "hover:text-brand-600";

  return (
    <nav
      aria-label="breadcrumb"
      className="mb-4 flex flex-wrap items-center space-x-2 text-sm text-gray-600 sm:flex"
    >
      <a
        href="#"
        onClick={(event) => event.preventDefault()}
        className={getClassName("Email")}
      >
        Email
      </a>
      <ChevronRight className="h-6 w-4" />
      <a
        href="#"
        onClick={(event) => event.preventDefault()}
        className={getClassName("New Template")}
      >
        New Template
      </a>
      <ChevronRight className="h-6 w-4" />
      <a
        href="#"
        onClick={(event) => event.preventDefault()}
        className={getClassName("Generate with HTML")}
      >
        Generate with HTML
      </a>
    </nav>
  );
};

const GenerateEmailTemplate: React.FC = () => {
  const [link, setLink] = useState("");
  const [error, setError] = useState<string | undefined>();
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!link.endsWith(".html")) {
      setError("Please enter a valid .html file link.");
      return;
    }

    navigate(`/preview?link=${encodeURIComponent(link)}`);
  };

  return (
    <div className="container mx-auto p-4" style={{ marginTop: "60px" }}>
      <div className="flex justify-center sm:flex-grow">
        <div className="w-full max-w-2xl">
          <Breadcrumbs currentPage="Generate with HTML" />
          <h1 className="mb-4 text-2xl font-bold">
            Generate New Email Template
          </h1>
          <p className="mb-8 text-[#0A0A0A]">
            Paste your HTML code below to generate your email template.
          </p>

          <Form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="flex-grow">
                <label
                  htmlFor="link"
                  className="mb-2 block text-sm font-medium text-[#0F172A]"
                >
                  HTML Link
                </label>
                <Input
                  id="link"
                  type="url"
                  placeholder="Enter your link here"
                  value={link}
                  onChange={(event) => setLink(event.target.value)}
                  className="mt-1 block h-full w-full border-[#CBD5E1] text-[#94A3B8] focus:border-transparent focus:outline-none"
                  required
                />
              </div>
              <div className="h-full flex-shrink-0">
                <Button
                  type="submit"
                  className="mt-7 h-full rounded-md bg-[#F97316] px-4 py-2 text-white"
                >
                  Generate
                </Button>
              </div>
            </div>
            {error && <p className="text-center text-red-600">{error}</p>}
          </Form>

          <Alert
            title="Tips"
            type="info"
            className="mt-8 border-[#F97113] bg-[#f6e1d3]"
          >
            <h1 className="mb-2 font-bold text-[#F97113]">
              Tips on Acceptable HTML Links
            </h1>
            <ul className="m-3 list-disc space-y-2 pl-4 text-[#0A0A0A]/40">
              <li>
                Ensure the link points directly to an HTML file containing the
                complete template.
              </li>
              <li>
                The link should be accessible without requiring login or
                permissions.
              </li>
              <li>
                Use static HTML pages that do not include dynamic content or
                scripts.
              </li>
              <li>Ensure the HTML content is well-structured and valid.</li>
            </ul>
          </Alert>
        </div>
      </div>
    </div>
  );
};

export default GenerateEmailTemplate;
