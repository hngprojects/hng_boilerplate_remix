import { Form } from "@remix-run/react";
import { ArrowBigRight, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { FaInstagram, FaTwitter } from "react-icons/fa";

type ActionData = {
  errors?: {
    name?: string;
    email?: string;
    message?: string;
  };
  success?: boolean;
};

interface ContactFormProperties {
  actionData?: ActionData;
}

interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export default function ContactForm({ actionData }: ContactFormProperties) {
  const [formState, setFormState] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormState((previous) => ({ ...previous, [name]: value }));
    setErrors((previous) => ({ ...previous, [name]: "" }));
  };

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};
    if (!formState.name.trim()) newErrors.name = "Name is required.";
    if (!formState.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      newErrors.email = "Email address is invalid.";
    }
    if (!formState.phone.trim()) newErrors.phone = "Phone is required.";
    if (!formState.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Simulate a successful form submission
    setFormState({ name: "", email: "", phone: "", message: "" });
    setErrors({});
    setIsSubmitted(true);
  };

  return (
    <div className="mt-10">
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-2xl font-bold md:text-6xl">Contact Our Team</h1>
        <p className="text-base font-normal md:text-2xl">
          Let’s Build Your Project Together
        </p>
      </div>
      <div className="mx-5 my-12 flex flex-col gap-10 md:mx-32 md:my-24 lg:flex-row lg:gap-40">
        <div className="w-full rounded border bg-gray-100 p-8">
          {actionData?.errors && (
            <div className="mb-4 text-red-500">
              {Object.values(actionData.errors).filter(Boolean).join(", ")}
            </div>
          )}
          {actionData?.success && (
            <div className="mb-4 text-green-500">
              Form submitted successfully!
            </div>
          )}
          {isSubmitted && (
            <div className="mb-4 text-green-500">
              Form submitted successfully!
            </div>
          )}
          <Form method="post" action="/contact" onSubmit={handleSubmit}>
            <div className="mb-8">
              <label htmlFor="name" className="mb-3 block text-left">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formState.name}
                onChange={handleChange}
                placeholder="Enter full name"
                className="h-16 w-full rounded border border-gray-100 p-5 text-base font-normal outline-none"
                required
              />
              {errors.name && <p className="text-red-500">{errors.name}</p>}
            </div>
            <div className="mb-8">
              <label htmlFor="email" className="mb-3 block text-left">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formState.email}
                onChange={handleChange}
                placeholder="Enter email address"
                className="h-16 w-full rounded border border-gray-100 p-5 text-base font-normal outline-none"
                required
              />
              {errors.email && <p className="text-red-500">{errors.email}</p>}
            </div>
            <div className="mb-8">
              <label htmlFor="phone" className="mb-3 block text-left">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={formState.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
                className="h-16 w-full rounded border border-gray-100 p-5 text-base font-normal outline-none"
                required
              />
              {errors.phone && <p className="text-red-500">{errors.phone}</p>}
            </div>
            <div className="mb-8">
              <label htmlFor="message" className="mb-3 block text-left">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                value={formState.message}
                onChange={handleChange}
                placeholder="Message..."
                className="h-28 w-full rounded border border-gray-100 p-5 text-base font-normal outline-none"
                required
              />
              {errors.message && (
                <p className="text-red-500">{errors.message}</p>
              )}
            </div>
            <button
              type="submit"
              className="flex h-16 w-full items-center justify-center gap-4 rounded bg-orange-500 py-4 text-xs text-white"
            >
              <Mail className="h-4 w-4" /> Send
            </button>
          </Form>
        </div>
        <div className="w-full">
          <div className="mb-4 rounded border bg-gray-100 p-5 md:p-8">
            <h1 className="mb-4 text-xl font-bold md:text-2xl">
              United Kingdom
            </h1>
            <p className="mb-4 text-sm font-bold md:text-base">
              Business hours: 8am - 6pm
            </p>
            <p className="mb-4 flex items-center gap-2 text-base font-normal md:gap-4 md:text-xl">
              <MapPin className="h-6 w-6 rounded bg-[#525252] px-1 py-1 text-white md:h-8 md:w-8 md:px-2 md:py-2" />
              10111, hornchurch, london, United kingdom
            </p>
            <p className="mb-4 flex items-center gap-2 text-base font-normal md:gap-4 md:text-xl">
              <Phone className="h-6 w-6 rounded bg-[#525252] px-1 py-1 text-white md:h-8 md:w-8 md:px-2 md:py-2" />
              +4403989898787
            </p>
            <p className="mb-4 flex items-center gap-2 text-base font-normal md:gap-4 md:text-xl">
              <Mail className="h-6 w-6 rounded bg-[#525252] px-1 py-1 text-white md:h-8 md:w-8 md:px-2 md:py-2" />
              Email: supportteam@gmail.com
            </p>
            <p className="mb-4 flex items-center gap-2 text-base font-normal md:gap-4 md:text-xl">
              <FaTwitter className="h-6 w-6 rounded bg-[#525252] px-1 py-1 text-white md:h-8 md:w-8 md:px-2 md:py-2" />
              Twitter @boilerplate23
            </p>
            <p className="mb-4 flex items-center gap-2 text-base font-normal md:gap-4 md:text-xl">
              <FaInstagram className="h-6 w-6 rounded bg-[#525252] px-1 py-1 text-white md:h-8 md:w-8 md:px-2 md:py-2" />
              Instagram @boilerplate234
            </p>
            <p className="mb-4 flex items-center gap-2 text-base font-normal md:gap-4 md:text-xl">
              <Linkedin className="h-6 w-6 rounded bg-[#525252] px-1 py-1 text-white md:h-8 md:w-8 md:px-2 md:py-2" />
              Linkedin @boilerplate34
            </p>
          </div>
          <div className="rounded border bg-gray-100 p-5 md:p-8">
            <h1 className="mb-2 flex items-center justify-between text-xl font-bold text-orange-500 md:mb-4 md:text-2xl">
              FAQs
              <ArrowBigRight className="text-orange-500" />
            </h1>
            <p className="text-base font-normal md:text-xl">
              See and get answers to the most frequent asked questions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
