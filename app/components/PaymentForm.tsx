import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z, ZodType } from "zod";

import { Button } from "./ui/button";
import { Input } from "./ui/input";

type PaymentDetails = {
  fullname: string;
  cardholderName: string;
  cardNumber: string;
  expiryDate: string;
  securityCode: string;
};

type PaymentFormProperties = {
  setShowSecondForm: React.Dispatch<React.SetStateAction<boolean>>;
};

const PaymentForm = (properties: PaymentFormProperties) => {
  const setShowSecondForm = properties.setShowSecondForm;

  const schema: ZodType<PaymentDetails> = z.object({
    fullname: z.string().min(5).max(30),
    cardholderName: z.string().min(5).max(40),
    cardNumber: z
      .string()
      .regex(
        /^(?:4\d{3}(?: \d{4}){2} (?:\d{4})?|5[1-5]\d{2}(?: \d{4}){3}|3[47]\d{2} \d{6} \d{5}|6(?:01{2}|5\d{2})(?: \d{4}){3})$/,
        "Invalid Card Number Format",
      ),
    expiryDate: z.string().regex(/^(0[1-9]|1[0-2])\/(\d{2})$/),
    securityCode: z.string().regex(/^\d{3,4}$/),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, touchedFields },
  } = useForm<PaymentDetails>({
    resolver: zodResolver(schema),
  });

  const submitPaymentData = (data: PaymentDetails) => {
    reset();
    console.log(data);
    setShowSecondForm(false);
  };

  return (
    <form onSubmit={handleSubmit(submitPaymentData)}>
      <div className="mb-4 rounded-md border border-gray-200 bg-[#fafafa]">
        <div className="flex gap-2 p-3">
          <input
            type="radio"
            name="radioGroup"
            id=""
            value={"Debit/Credit Card"}
            className="h-5 w-5 border bg-white checked:border-primary checked:accent-primary"
          />
          <label htmlFor="" className="text-gray-600">
            Debit/Credit Card
          </label>
        </div>
        <hr />
        <div className="flex gap-2 p-3">
          <input
            type="radio"
            name="radioGroup"
            id=""
            value={"Paypal"}
            className="h-5 w-5 border accent-primary checked:bg-white"
          />
          <label htmlFor="" className="text-gray-600">
            Paypal
          </label>
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="fullname" className="mb-1 block">
          Full Name
        </label>
        <Input
          type="text"
          placeholder="John Smith"
          className={
            touchedFields.fullname && errors.fullname == undefined
              ? "h-[50px] w-full border-primary focus:ring-primary"
              : "h-[50px] w-full focus:ring-primary"
          }
          {...register("fullname")}
        />
        {touchedFields.fullname && errors.fullname && (
          <p>{errors.fullname.message}</p>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="cardholderName" className="mb-1 block">
          Cardholder Name
        </label>
        <Input
          type="text"
          className={
            touchedFields.cardholderName && errors.cardholderName == undefined
              ? "h-[50px] w-full border-primary focus:ring-primary"
              : "h-[50px] w-full focus:ring-primary"
          }
          placeholder="John Smith"
          {...register("cardholderName")}
        />
        {errors.cardholderName && <p>{errors.cardholderName.message}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="cardNumber" className="mb-1 block">
          Card Number
        </label>
        <Input
          type="text"
          className={
            touchedFields.cardNumber && errors.cardNumber == undefined
              ? "h-[50px] w-full border-primary focus:ring-primary"
              : "h-[50px] w-full focus:ring-primary"
          }
          placeholder="4253 5435 3455 3455"
          {...register("cardNumber")}
          inputMode="numeric"
        />
        {errors.cardNumber && <p>{errors.cardNumber.message}</p>}
      </div>
      <div className="mb-4 flex w-full justify-between gap-3">
        <div className="w-5/6">
          <label htmlFor="expiryDate">Expiry Date</label>
          <Input
            type="text"
            pattern="[0-9]{2}/[0-9]{2}"
            placeholder="MM/YY"
            {...register("expiryDate")}
            className={
              touchedFields.expiryDate && errors.expiryDate == undefined
                ? "h-[50px] w-full border-primary focus:ring-primary"
                : "h-[50px] w-full focus:ring-primary"
            }
          />
          {errors.expiryDate && <p>{errors.expiryDate.message}</p>}
        </div>
        <div className="w-5/6">
          <label htmlFor="securityCode">Security Code</label>
          <Input
            type="number"
            pattern="[0-9]{3}"
            placeholder="CVV"
            {...register("securityCode")}
            className={
              touchedFields.securityCode && errors.securityCode == undefined
                ? "h-[50px] w-full border-primary focus:ring-primary"
                : "h-[50px] w-full focus:ring-primary"
            }
          />
          {errors.securityCode && <p>{errors.securityCode.message}</p>}
        </div>
      </div>
      <div>
        <Button className="m-auto w-full">Confirm and Pay</Button>
        <small className="text-gray-800">
          Your subscription will renew automatically every month as one payment
          of $800. <br />
          Cancel it anytime from your subscription settings. By clicking
          &quot;Confirm and Pay&quot;, you agree to the
          <span className="text-primary"> Terms and Conditions</span>
        </small>
      </div>
    </form>
  );
};

export default PaymentForm;
