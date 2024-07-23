import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@remix-run/react";
import { useForm } from "react-hook-form";
import { z, ZodType } from "zod";

import { Button } from "./ui/button";
import { Input } from "./ui/input";

type StateProperties = {
  setShowSecondForm: React.Dispatch<React.SetStateAction<boolean>>;
};

const DetailsForm = (properties: StateProperties) => {
  const setShowSecondForm = properties.setShowSecondForm;
  type FormData = {
    country: string;
    fullname: string;
  };

  const schema: ZodType<FormData> = z.object({
    country: z.string().min(2).max(30),
    fullname: z.string().min(5).max(30),
  });

  const { register, handleSubmit } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const submitData = (data: FormData) => {
    setShowSecondForm(true);
    console.log(data);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit(submitData)}>
        <div className="mb-4">
          <label htmlFor="country" className="mb-1 block">
            Country
          </label>
          <Input
            type="text"
            placeholder="Nigeria"
            className="focus:ring-none ring-inset-0 h-[40px] w-full rounded-md border border-gray-400"
            {...register("country")}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="fullname" className="mb-1 block">
            Full Name
          </label>
          <Input
            type="text"
            placeholder="John Smith"
            className="h-[40px] w-full rounded-md border border-gray-400"
            {...register("fullname")}
          />
        </div>
        <div className="mb-4 flex items-center gap-2">
          <Input type="radio" name="companyStatus" id="" className="h-4 w-5" />
          <label htmlFor="companyStatus">Are you a company?</label>
        </div>
        <div>
          <Button className="m-auto h-[40px] w-full" type="submit">
            Continue
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default DetailsForm;
