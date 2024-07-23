import { Link } from "@remix-run/react";
import {
  useRef,
  useState,
  type ChangeEvent,
  type FC,
  type KeyboardEventHandler,
  type MouseEventHandler,
} from "react";
import { twMerge } from "tailwind-merge";

import { Input, OtpAuthProperties } from "~/types/otpauth";
import { Button } from "../button";

const OtpAuth: FC<OtpAuthProperties> = ({
  isModalOpen = false,
  inputs = [],
  setIsModalOpen,
  handleSubmit,
}) => {
  const [inputValues, setInputValues] = useState<Input[]>(inputs);
  const inputReferences = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange =
    (index: number) => (event: ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      if (/^\d?$/.test(value)) {
        const newInputs = [...inputValues];
        newInputs[index].value = value;

        setInputValues(newInputs);
        if (value && index < inputReferences.current.length - 1) {
          inputReferences.current[index + 1]?.focus();
        }
      }
    };

  const handleClose: MouseEventHandler<HTMLDivElement> = () => {
    if (setIsModalOpen) {
      setIsModalOpen(false);
    }
  };

  const handleSubmitForm: MouseEventHandler<HTMLButtonElement> = () => {
    if (handleSubmit) {
      handleSubmit(inputValues);
    }
  };

  const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = (event) => {
    if (event.key === "Escape" && setIsModalOpen) {
      setIsModalOpen(false);
    }
  };

  const modalClass = twMerge(
    "animate-in fade-in zoom-in duration-300",
    isModalOpen ? "visible opacity-100" : "invisible opacity-0",
  );

  const modalContentClass = twMerge(
    "fixed top-[50%] left-[50%] max-h-[85vh] delay-150 animate-in fade-in zoom-in duration-300 w-[95%] sm:max-w-[470px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none ",
    isModalOpen ? "opacity-100 scale-100" : "opacity-0 scale-95",
  );

  return (
    <main className={modalClass}>
      <div>
        <div
          tabIndex={0}
          onKeyDown={handleKeyDown}
          role="button"
          onClick={handleClose}
          className="bg-blackA6 fixed inset-0 backdrop-brightness-75 animate-in animate-out"
        />
        <div className={modalContentClass}>
          <h3 className="text-mauve12 mb-4 text-center text-3xl font-semibold text-primary">
            Sign up
          </h3>
          <div className="mb-8 text-center text-sm text-[#64748B]">
            <p className="mb-1">Choose your sign-up method:</p>
            <ul className="list-inside list-disc space-y-1">
              <li>Use the temporary sign-in code sent to your mail or</li>
              <li>Continue with email and password</li>
            </ul>
          </div>

          <p className="mb-8 text-center text-sm text-primary">
            Please paste (or type) your 6-digit code:{" "}
          </p>

          <div className="mb-8 flex justify-between">
            {inputValues.map((input, index) => {
              return (
                <input
                  ref={(element) => (inputReferences.current[index] = element)}
                  name={input.name}
                  value={input.value}
                  onChange={handleChange(index)}
                  key={index}
                  className={`fomt-medium inline-flex min-h-[40px] min-w-[40px] rounded-md text-center text-lg text-primary outline-none sm:h-[60px] sm:w-[60px] ${
                    input.value ? "border-[#EF4444]" : "border-border"
                  } border`}
                  id={input.name}
                  inputMode="numeric"
                  pattern="[0-9]*"
                  tabIndex={index}
                />
              );
            })}
          </div>
          {inputValues.every((input) => input.value.length === 1) && (
            <div className="mb-8">
              <Button
                size={"lg"}
                onClick={handleSubmitForm}
                className="w-full rounded-sm bg-[#F97316] text-white"
              >
                Continue
              </Button>
            </div>
          )}
          <div className="max-w-sm text-center text-[#64748B]">
            <div className="mb-3">
              <p className="text-xs leading-5">
                Would you rather use email and password?
              </p>
              <Link to={"#"} className="text-xs font-semibold text-[#F97316]">
                Continue with email and password
              </Link>
            </div>
            <p className="text-[10px] leading-5">
              We would process your data as set forth in our
              <Link to="#" className="font-semibold text-[#F97316]">
                {" "}
                Terms of Use, Privacy Policy
              </Link>
              and{" "}
              <Link to="#" className="font-semibold text-[#F97316]">
                Data Processing Agreement
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default OtpAuth;
