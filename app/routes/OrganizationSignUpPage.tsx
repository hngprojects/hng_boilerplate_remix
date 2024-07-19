import { MetaFunction, ActionFunction, json } from "@remix-run/node";
import { Link, Form, useActionData } from "@remix-run/react";
import { useState } from "react";

// Define the types for the form fields
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

  console.log(data);
  
  // Process the valid data (e.g., save to database)
  // ...

  return json({ success: true });
};

const validateForm = (data: FormData): FormErrors => {
  const errors: FormErrors = {};
  if (!data.companyName) {
    errors.companyName = "Company name is required.";
  }
  if (!data.companyEmail) {
    errors.companyEmail = "Company email is required.";
  } else if (!/\S+@\S+\.\S+/.test(data.companyEmail)) {
    errors.companyEmail = "Email address is invalid.";
  } else {
    delete errors.companyEmail;
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
  const actionData = useActionData<{ errors?: FormErrors; success?: boolean }>();
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  
    if (name === 'companyEmail' && /\S+@\S+\.\S+/.test(value)) {
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

    console.log(data)
  };

  return (
    <>
      <div className="flex items-center justify-center">
        <div className="h-[1010px] w-[342px] mt-[80px] bg-white lg:h-[836px] lg:w-[820px] lg:mt-[208px] mx-[25px] lg:m-3 w-full max-w-mid gap-[24px]">
          <h1 className="text-[13px] lg:text-[32px] text-[#141414]-600 mb-6 text-center font-bold hidden lg:block">Create Organisation Account</h1>
          <h1 className="text-[24px] font-bold lg:hidden">Sign up</h1>
          <p className="text-[13px] lg:text-[20px] text-[#525252]-400 lg:text-center">Create an account to get started with us.</p>
          <Form method="post" className="gap-[24px]" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="company_name" className="text-[13px] block text-[#0A0A0A]-400 lg:text-[20px]">Company's Name</label>
              <input
                id="company_name"
                type="text"
                name="companyName"
                className={`rounded-[8px] border-[1px] py-[12px] px-[16px] lg:pt-[20px] lg:pr-[24px] lg:pb-[20px] lg:pl-[16px] h-[48px] lg:h-[64px] w-full ${formData.companyName ? 'border-[#F97316]' : 'border-[#CBD5E1]'} rounded mt-2`}
                placeholder="Enter company's full name"
                required
                value={formData.companyName}
                onChange={handleInputChange}
              />
              {(clientErrors.companyName || actionData?.errors?.companyName) && <p className="text-red-500">{clientErrors.companyName || actionData?.errors?.companyName}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="text-[13px] block text-[#0A0A0A]-400 lg:text-[20px]">Company's Email Address</label>
              <input
                id="email"
                type="email"
                name="companyEmail"
                className={`rounded-[8px] border-[1px] py-[12px] px-[16px] lg:pt-[20px] lg:pr-[24px] lg:pb-[20px] lg:pl-[16px] h-[48px] lg:h-[64px] w-full ${formData.companyEmail ? 'border-[#F97316]' : 'border-[#CBD5E1]'} rounded mt-2`}
                placeholder="Enter company's email address"
                required
                value={formData.companyEmail}
                onChange={handleInputChange}
              />
              {(clientErrors.companyEmail || actionData?.errors?.companyEmail) && <p className="text-red-500">{clientErrors.companyEmail || actionData?.errors?.companyEmail}</p>}
            </div>
            <div className="mb-4 grid lg:grid-cols-2 gap-4">
              <div>
                <label htmlFor="industry" className="text-[13px] block text-[#0A0A0A]-400 lg:text-[20px]">Industry</label>
                <select
                  id="industry"
                  name="industry"
                  className={`rounded-[8px] border-[1px] py-[8px] px-[12px] lg:pt-[20px] lg:pr-[24px] lg:pb-[20px] lg:pl-[16px] h-[48px] lg:h-[64px] w-full ${formData.industry ? 'border-[#F97316]' : 'border-[#CBD5E1]'} rounded mt-2 bg-white`}
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
                {(clientErrors.industry || actionData?.errors?.industry) && <p className="text-red-500">{clientErrors.industry || actionData?.errors?.industry}</p>}
              </div>
              <div>
                <label htmlFor="organizationType" className="text-[13px] block text-[#0A0A0A]-400 lg:text-[20px]">Organization Type</label>
                <select
                  name="organizationType"
                  id="organizationType"
                  className={`rounded-[8px] border-[1px] py-[8px] px-[12px] lg:pt-[20px] lg:pr-[24px] lg:pb-[20px] lg:pl-[16px] h-[48px] lg:h-[64px] w-full ${formData.organizationType ? 'border-[#F97316]' : 'border-[#CBD5E1]'} rounded mt-2 bg-white`}
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
                {(clientErrors.organizationType || actionData?.errors?.organizationType) && <p className="text-red-500">{clientErrors.organizationType || actionData?.errors?.organizationType}</p>}
              </div>
            </div>
            <div className="mb-4">
              <p className="block text-[24px] lg:text-[28px] text-[#000000]-500">Company Address</p>
            </div>
            <div className="mb-4 grid lg:grid-cols-2 gap-4">
              <div>
                <label htmlFor="country" className="text-[13px] block text-[#0A0A0A]-400 lg:text-[20px]">Country</label>
                <select
                  name="country"
                  id="country"
                  className={`rounded-[8px] border-[1px] py-[8px] px-[12px] lg:pt-[20px] lg:pr-[24px] lg:pb-[20px] lg:pl-[16px] h-[48px] lg:h-[64px] w-full ${formData.country ? 'border-[#F97316]' : 'border-[#CBD5E1]'} rounded mt-2 bg-white`}
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
                {(clientErrors.country || actionData?.errors?.country) && <p className="text-red-500">{clientErrors.country || actionData?.errors?.country}</p>}
              </div>
              <div>
                <label htmlFor="state" className="text-[13px] block text-[#0A0A0A]-400 lg:text-[20px]">State</label>
                <select
                  name="state"
                  id="state"
                  className={`rounded-[8px] border-[1px] py-[8px] px-[12px] lg:pt-[20px] lg:pr-[24px] lg:pb-[20px] lg:pl-[16px] h-[48px] lg:h-[64px] w-full ${formData.state ? 'border-[#F97316]' : 'border-[#CBD5E1]'} rounded mt-2 bg-white`}
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
                {(clientErrors.state || actionData?.errors?.state) && <p className="text-red-500">{clientErrors.state || actionData?.errors?.state}</p>}
              </div>
              <div>
                <label htmlFor="address" className="block text-[#0A0A0A]-400 lg:text-[20px]">Address</label>
                <input
                  name="address"
                  id="address"
                  className={`rounded-[8px] border-[1px] py-[8px] px-[12px] lg:pt-[20px] lg:pr-[24px] lg:pb-[20px] lg:pl-[16px] h-[48px] lg:h-[64px] w-full ${formData.address ? 'border-[#F97316]' : 'border-[#CBD5E1]'} rounded mt-2`}
                  type="text"
                  placeholder="Enter your company address"
                  required
                  value={formData.address}
                  onChange={handleInputChange}
                />
                {(clientErrors.address || actionData?.errors?.address) && <p className="text-red-500">{clientErrors.address || actionData?.errors?.address}</p>}
              </div>
              <div className="text-[20px] lg:hidden">
                <label htmlFor="lga" className="text-[13px] block text-[#0A0A0A]-400">LGA</label>
                <select
                  name="lga"
                  id="lga"
                  className={`rounded-[8px] border-[1px] py-[8px] px-[12px] lg:pt-[20px] lg:pr-[24px] lg:pb-[20px] lg:pl-[16px] h-[48px] lg:h-[64px] w-full ${formData.lga ? 'border-[#F97316]' : 'border-[#CBD5E1]'} rounded mt-2 bg-white`}
                  required
                  value={formData.lga}
                  onChange={handleInputChange}
                >
                  <option value="">Select</option>
                  <option value="Lagos Island">Lagos Island</option>
                </select>
                {(clientErrors.lga || actionData?.errors?.lga) && <p className="text-red-500">{clientErrors.lga || actionData?.errors?.lga}</p>}
              </div>
            </div>
            <button
              type="submit"
              className="lg:h-[64px] w-full bg-orange-500 text-white py-[8px] px-[16px] rounded-[8px] mt-4"
            >
              Create Account
            </button>
            <div>
              <p className="text-center mt-[8px] text-[14px] lg:hidden">Already Have An Account?<Link to="/login" className="mx-2 text-[#F97315]">Login</Link></p>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}
