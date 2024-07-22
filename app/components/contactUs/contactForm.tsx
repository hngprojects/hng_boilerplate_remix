import { Form } from "@remix-run/react";
import { Mail } from "lucide-react";
import React, { useState } from "react";

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
    <div className="w-full rounded border bg-gray-100 p-8">
      {actionData?.errors && (
        <div className="mb-4 text-red-500">
          {Object.values(actionData.errors).filter(Boolean).join(", ")}
        </div>
      )}
      {actionData?.success && (
        <div className="mb-4 text-green-500">Form submitted successfully!</div>
      )}
      {isSubmitted && (
        <div className="mb-4 text-green-500">Form submitted successfully!</div>
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
            className="h-40 w-full rounded border border-gray-100 p-5 text-base font-normal outline-none"
            required
          />
          {errors.message && <p className="text-red-500">{errors.message}</p>}
        </div>
        <button
          type="submit"
          className="flex h-16 w-full items-center justify-center gap-4 rounded bg-orange-500 py-4 text-xs text-white"
        >
          <Mail className="h-4 w-4" /> Send
        </button>
      </Form>
    </div>
  );
}
