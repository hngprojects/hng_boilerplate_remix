import { ActionFunction, json, MetaFunction } from "@remix-run/node";
import { Form, Link, useActionData } from "@remix-run/react";
import { useState } from "react";

import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";

interface FormData {
  companyName: string;
  companyEmail: string;
  industry: string;
  organizationType: string;
  country: string;
  state: string;
  address: string;
  lga: string;
}

interface FormErrors {
  companyName?: string;
  companyEmail?: string;
  industry?: string;
  organizationType?: string;
  country?: string;
  state?: string;
  address?: string;
  lga?: string;
}

export const meta: MetaFunction = () => {
  return [{ title: "Sign Up" }];
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData) as unknown as FormData;

  const errors = validateForm(data);
  if (Object.keys(errors).length > 0) {
    return json({ errors }, { status: 400 });
  }

  return json({ success: true });
};

const validateForm = (data: FormData): FormErrors => {
  const errors: FormErrors = {};
  if (!data.companyName) {
    errors.companyName = "Company name is required.";
  }
  if (!data.companyEmail) {
    errors.companyEmail = "Company email is required.";
  } else if (/\S+@\S+\.\S+/.test(data.companyEmail)) {
    delete errors.companyEmail;
  } else {
    errors.companyEmail = "Email address is invalid.";
  }
  if (!data.industry) {
    errors.industry = "Industry is required.";
  }
  if (!data.organizationType) {
    errors.organizationType = "Organization type is required.";
  }
  if (!data.country) {
    errors.country = "Country is required.";
  }
  if (!data.state) {
    errors.state = "State is required.";
  }
  if (!data.address) {
    errors.address = "Address is required.";
  }
  if (!data.lga) {
    errors.lga = "LGA is required.";
  }
  return errors;
};

export default function Signup() {
  const actionData = useActionData<{
    errors?: FormErrors;
    success?: boolean;
  }>();
  const [clientErrors, setClientErrors] = useState<FormErrors>({});
  const [formData, setFormData] = useState<FormData>({
    companyName: "",
    companyEmail: "",
    industry: "",
    organizationType: "",
    country: "",
    state: "",
    address: "",
    lga: "",
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });

    if (name === "companyEmail" && /\S+@\S+\.\S+/.test(value)) {
      const newErrors = { ...clientErrors };
      delete newErrors.companyEmail;
      setClientErrors(newErrors);
    } else if (clientErrors[name as keyof FormErrors]) {
      const newErrors = { ...clientErrors };
      delete newErrors[name as keyof FormErrors];
      setClientErrors(newErrors);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData) as unknown as FormData;
    const errors = validateForm(data);

    if (Object.keys(errors).length > 0) {
      event.preventDefault();
      setClientErrors(errors);
    }

    console.log(data);
  };

  return (
    <>
      <div className="flex items-center justify-center bg-white">
        <div className="max-w-mid mx-[25px] mb-[50px] mt-[80px] h-[1010px] w-[342px] w-full gap-[24px] lg:m-3 lg:mb-[250px] lg:mt-[110px] lg:h-[836px] lg:w-[820px]">
          <h1 className="text-[#141414]-600 mb-6 hidden text-center text-[13px] font-bold lg:block lg:text-[32px]">
            Create Organisation Account
          </h1>
          <h1 className="text-[24px] font-bold lg:hidden">Sign up</h1>
          <p className="text-[#525252]-400 text-[13px] lg:text-center lg:text-[20px]">
            Create an account to get started with us.
          </p>
          <Form method="post" className="gap-[24px]" onSubmit={handleSubmit}>
            <div className="mb-4 p-2">
              <Label
                htmlFor="company_name"
                className="text-[#0A0A0A]-400 block text-[13px] lg:text-[20px]"
              >
                Company Name
              </Label>
              <Input
                id="company_name"
                type="text"
                name="companyName"
                className={`h-[48px] w-full rounded-[8px] border-[1px] px-[16px] py-[12px] lg:h-[64px] lg:pb-[20px] lg:pl-[16px] lg:pr-[24px] lg:pt-[20px] ${formData.companyName ? "border-[#F97316]" : "border-[#CBD5E1]"} mt-2 rounded`}
                placeholder="Enter company's full name"
                required
                value={formData.companyName}
                onChange={handleInputChange}
              />
              {(clientErrors.companyName ||
                actionData?.errors?.companyName) && (
                <p className="text-red-500">
                  {clientErrors.companyName || actionData?.errors?.companyName}
                </p>
              )}
            </div>
            <div className="mb-4">
              <Label
                htmlFor="email"
                className="text-[#0A0A0A]-400 block text-[13px] lg:text-[20px]"
              >
                Company Email Address
              </Label>
              <Input
                id="email"
                type="email"
                name="companyEmail"
                className={`h-[48px] w-full rounded-[8px] border-[1px] px-[16px] py-[12px] lg:h-[64px] lg:pb-[20px] lg:pl-[16px] lg:pr-[24px] lg:pt-[20px] ${formData.companyEmail ? "border-[#F97316]" : "border-[#CBD5E1]"} mt-2 rounded`}
                placeholder="Enter company's email address"
                required
                value={formData.companyEmail}
                onChange={handleInputChange}
              />
              {(clientErrors.companyEmail ||
                actionData?.errors?.companyEmail) && (
                <p className="text-red-500">
                  {clientErrors.companyEmail ||
                    actionData?.errors?.companyEmail}
                </p>
              )}
            </div>
            <div className="mb-4 grid gap-4 lg:grid-cols-2">
              <div>
                <Label
                  htmlFor="industry"
                  className="text-[#0A0A0A]-400 block text-[13px] lg:text-[20px]"
                >
                  Industry
                </Label>
                <select
                  id="industry"
                  name="industry"
                  className={`h-[48px] w-full rounded-[8px] border-[1px] px-[12px] py-[8px] lg:h-[64px] lg:pb-[20px] lg:pl-[16px] lg:pr-[24px] lg:pt-[20px] ${formData.industry ? "border-[#F97316]" : "border-[#CBD5E1]"} mt-2 rounded bg-white`}
                  required
                  value={formData.industry}
                  onChange={handleInputChange}
                >
                  <option value="">Select</option>
                  <option value="Technology">Manufacturing</option>
                  <option value="Technology">Real Estate</option>
                  <option value="Technology"> Retail</option>
                  <option value="Technology">Technology</option>
                </select>
                {(clientErrors.industry || actionData?.errors?.industry) && (
                  <p className="text-red-500">
                    {clientErrors.industry || actionData?.errors?.industry}
                  </p>
                )}
              </div>
              <div>
                <Label
                  htmlFor="organizationType"
                  className="text-[#0A0A0A]-400 block text-[13px] lg:text-[20px]"
                >
                  Organization Type
                </Label>
                <select
                  name="organizationType"
                  id="organizationType"
                  className={`h-[48px] w-full rounded-[8px] border-[1px] px-[12px] py-[8px] lg:h-[64px] lg:pb-[20px] lg:pl-[16px] lg:pr-[24px] lg:pt-[20px] ${formData.organizationType ? "border-[#F97316]" : "border-[#CBD5E1]"} mt-2 rounded bg-white`}
                  required
                  value={formData.organizationType}
                  onChange={handleInputChange}
                >
                  <option value="">Select</option>
                  <option value="Corporation">Corporation</option>
                  <option value="Corporation">Limited Liability</option>
                  <option value="Corporation">LLCs</option>
                  <option value="Corporation">Joint Venture</option>
                </select>
                {(clientErrors.organizationType ||
                  actionData?.errors?.organizationType) && (
                  <p className="text-red-500">
                    {clientErrors.organizationType ||
                      actionData?.errors?.organizationType}
                  </p>
                )}
              </div>
            </div>
            <div className="mb-4">
              <p className="text-[#000000]-500 block text-[24px] lg:text-[28px]">
                Company Address
              </p>
            </div>
            <div className="mb-4 grid gap-4 lg:grid-cols-2">
              <div>
                <Label
                  htmlFor="country"
                  className="text-[#0A0A0A]-400 block text-[13px] lg:text-[20px]"
                >
                  Country
                </Label>
                <select
                  name="country"
                  id="country"
                  className={`h-[48px] w-full rounded-[8px] border-[1px] px-[12px] py-[8px] lg:h-[64px] lg:pb-[20px] lg:pl-[16px] lg:pr-[24px] lg:pt-[20px] ${formData.country ? "border-[#F97316]" : "border-[#CBD5E1]"} mt-2 rounded bg-white`}
                  required
                  value={formData.country}
                  onChange={handleInputChange}
                >
                  <option value="">Select</option>
                  <option value="Nigeria">Nicaragua</option>
                  <option value="Nigeria">Niger</option>
                  <option value="Nigeria">Nigeria</option>
                  <option value="Nigeria">North Macedonia</option>
                </select>
                {(clientErrors.country || actionData?.errors?.country) && (
                  <p className="text-red-500">
                    {clientErrors.country || actionData?.errors?.country}
                  </p>
                )}
              </div>
              <div>
                <Label
                  htmlFor="state"
                  className="text-[#0A0A0A]-400 block text-[13px] lg:text-[20px]"
                >
                  State
                </Label>
                <select
                  name="state"
                  id="state"
                  className={`h-[48px] w-full rounded-[8px] border-[1px] px-[12px] py-[8px] lg:h-[64px] lg:pb-[20px] lg:pl-[16px] lg:pr-[24px] lg:pt-[20px] ${formData.state ? "border-[#F97316]" : "border-[#CBD5E1]"} mt-2 rounded bg-white`}
                  required
                  value={formData.state}
                  onChange={handleInputChange}
                >
                  <option value="">Select</option>
                  <option value="Lagos">Kogi</option>
                  <option value="Lagos">Kwara</option>
                  <option value="Lagos">Lagos</option>
                  <option value="Lagos">Nasarawa</option>
                </select>
                {(clientErrors.state || actionData?.errors?.state) && (
                  <p className="text-red-500">
                    {clientErrors.state || actionData?.errors?.state}
                  </p>
                )}
              </div>
              <div>
                <Label
                  htmlFor="address"
                  className="text-[#0A0A0A]-400 block lg:text-[20px]"
                >
                  Address
                </Label>
                <Input
                  name="address"
                  id="address"
                  className={`h-[48px] w-full rounded-[8px] border-[1px] px-[12px] py-[8px] lg:h-[64px] lg:pb-[20px] lg:pl-[16px] lg:pr-[24px] lg:pt-[20px] ${formData.address ? "border-[#F97316]" : "border-[#CBD5E1]"} mt-2 rounded`}
                  type="text"
                  placeholder="Enter your company address"
                  required
                  value={formData.address}
                  onChange={handleInputChange}
                />
                {(clientErrors.address || actionData?.errors?.address) && (
                  <p className="text-red-500">
                    {clientErrors.address || actionData?.errors?.address}
                  </p>
                )}
              </div>
              <div className="text-[20px] lg:hidden">
                <Label
                  htmlFor="lga"
                  className="text-[#0A0A0A]-400 block text-[13px]"
                >
                  LGA
                </Label>
                <select
                  name="lga"
                  id="lga"
                  className={`h-[48px] w-full rounded-[8px] border-[1px] px-[12px] py-[8px] lg:h-[64px] lg:pb-[20px] lg:pl-[16px] lg:pr-[24px] lg:pt-[20px] ${formData.lga ? "border-[#F97316]" : "border-[#CBD5E1]"} mt-2 rounded bg-white`}
                  required
                  value={formData.lga}
                  onChange={handleInputChange}
                >
                  <option value="">Select</option>
                  <option value="Lagos Island">Lagos Island</option>
                </select>
                {(clientErrors.lga || actionData?.errors?.lga) && (
                  <p className="text-red-500">
                    {clientErrors.lga || actionData?.errors?.lga}
                  </p>
                )}
              </div>
            </div>
            <Button
              type="submit"
              className="mt-4 w-full rounded-[8px] bg-orange-500 px-[16px] py-[8px] text-white lg:h-[64px]"
            >
              Create Account
            </Button>
            <div>
              <p className="mt-[8px] text-center text-[14px] lg:hidden">
                Already Have An Account?
                <Link to="/login" className="mx-2 text-[#F97315]">
                  Login
                </Link>
              </p>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}
