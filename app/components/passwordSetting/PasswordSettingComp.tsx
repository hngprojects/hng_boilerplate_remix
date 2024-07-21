import { ActionFunctionArgs } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "~/components/ui/alert-dialog";
import { fields } from "../passwordSetting/fieldArray";
import { usePasswordFunctions } from "../passwordSetting/functions/PasswordFunctions";
import PasswordField from "./PasswordField";

export default function PasswordSettingPage() {
  const {
    changeVisibility,
    clearForm,
    currentPasswordValid,
    formData,
    handleChange,
    isFocused,
    newPasswordValidations,
    passwordMatchError,
    passwordIsVisible,
    setCurrentPasswordValid,
  } = usePasswordFunctions();

  //Checking if all my form fields are valid
  const [, setIsSubmitting] = useState(false);
  const [, setIsWeak] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    // Validate all fields whenever form data changes
    const isValid =
      currentPasswordValid &&
      newPasswordValidations.containsNumber &&
      newPasswordValidations.containsUppercase &&
      newPasswordValidations.isLengthValid &&
      !passwordMatchError;

    setIsFormValid(isValid);
  }, [
    currentPasswordValid,
    newPasswordValidations.containsNumber,
    newPasswordValidations.containsUppercase,
    newPasswordValidations.isLengthValid,
    passwordMatchError,
  ]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleCurrentPasswordValidation = () => {
    const storedPassword = "storedPassword123";

    if (formData.current_password === storedPassword) {
      setCurrentPasswordValid(true);
    } else {
      setCurrentPasswordValid(false);
    }
  };

  useEffect(() => {
    if (formData.current_password) {
      handleCurrentPasswordValidation();
    }
  }, [formData.current_password, handleCurrentPasswordValidation]);

  useEffect(() => {
    if (
      formData.new_password.length > 0 &&
      newPasswordValidations.containsUppercase === false &&
      newPasswordValidations.containsNumber === false &&
      newPasswordValidations.isLengthValid === false
    ) {
      setIsWeak(true);
    } else {
      setIsWeak(false);
    }
  }, [
    formData,
    newPasswordValidations.containsUppercase,
    newPasswordValidations.containsNumber,
    newPasswordValidations.isLengthValid,
  ]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsSubmitting(true);

    try {
      const formData = new FormData(event.currentTarget);

      const request = new Request("/path-to-your-action-endpoint", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData as never),
      });

      const parameters = {};
      const context = {};

      const response = await action({ request, context, params: parameters });

      if (response) {
        //Succes response can be handle here
        console.log(response);
      } else {
        // We can Handle failure state if necessary
      }
    } catch (error) {
      // Handle any errors that occur during form submission
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex w-[100%] flex-col gap-[32px] p-8 text-[14px] leading-[19.2px] 2xl:w-[70.9%]">
      <form
        method="post"
        className="flex w-full flex-col gap-6"
        onSubmit={(event) => handleSubmit(event)}
      >
        <div className="flex flex-col">
          <h2 className="text-2xl font-semibold">Password setting</h2>
          <p>Reset your password for proper security</p>
        </div>
        {fields.map((field) => (
          <div key={field.name}>
            <PasswordField
              className={
                (field.name === "current_password" &&
                  currentPasswordValid === false) ||
                (field.name === "confirmed_new_password" && passwordMatchError)
                  ? "border-red-400 bg-input"
                  : ""
              }
              key={field.name}
              field={field}
              passwordIsVisible={passwordIsVisible}
              formData={formData}
              handleChange={handleChange}
              changeVisibility={changeVisibility}
            />
            {field.name === "new_password" && isFocused && (
              <div className="pt-[10px]">
                <div className="flex items-center gap-4">
                  <span
                    className={`h-[3px] w-[100px] bg-[#B6B6B6] ${
                      newPasswordValidations.containsUppercase
                        ? "bg-green-400"
                        : "bg-[#B6B6B6]"
                    }`}
                  ></span>
                  <span
                    className={`h-[3px] w-[100px] bg-[#B6B6B6] ${
                      newPasswordValidations.containsNumber
                        ? "bg-green-400"
                        : "bg-[#B6B6B6]"
                    }`}
                  ></span>
                  <span
                    className={`h-[3px] w-[100px] bg-[#B6B6B6] ${
                      newPasswordValidations.isLengthValid
                        ? "bg-green-400"
                        : "bg-[#B6B6B6]"
                    }`}
                  ></span>
                </div>

                <ul className="flex flex-col gap-2 py-6">
                  <p>Weak Password.Must contain: </p>
                  <li className="flex items-center gap-2">
                    <span>
                      <CheckCircle2
                        className={`text-[#B6B6B6] ${
                          newPasswordValidations.containsUppercase
                            ? "text-green-400"
                            : ""
                        }`}
                      />
                    </span>
                    <span>At least 1 uppercase</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span>
                      <CheckCircle2
                        className={`text-[#B6B6B6] ${
                          newPasswordValidations.containsNumber
                            ? "text-green-400"
                            : ""
                        }`}
                      />
                    </span>
                    <span>At least 1 Number</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span>
                      <CheckCircle2
                        className={`text-[#B6B6B6] ${
                          newPasswordValidations.isLengthValid
                            ? "text-green-400"
                            : ""
                        }`}
                      />
                    </span>
                    <span>At least 8 characters</span>
                  </li>
                </ul>
              </div>
            )}
            {field.name === "confirmed_new_password" && (
              <div>
                {passwordMatchError && (
                  <p className="text-sm text-red-500">
                    Password does not match
                  </p>
                )}
              </div>
            )}
            {field.name === "current_password" &&
              currentPasswordValid === false && (
                <p className="pt-2 text-[14px] text-red-500">
                  Invalid password
                </p>
              )}
          </div>
        ))}
        <div className="flex w-max items-center justify-between gap-4">
          <AlertDialog>
            <AlertDialogTrigger className="w-max">
              <div className="flex items-center gap-6">
                <Link to="/">
                  <button className="rounded-md border border-border bg-white px-4 py-2">
                    Cancel
                  </button>
                </Link>
                <button
                  type="submit"
                  disabled={!isFormValid}
                  className={` ${
                    isFormValid ? "bg-[#F97316]" : "bg-input text-black"
                  } rounded-md px-4 py-2 text-white`}
                >
                  Update Password
                </button>
              </div>
            </AlertDialogTrigger>
            <AlertDialogContent className="w-[80%]">
              <AlertDialogHeader>
                <AlertDialogTitle>
                  Password succesfully updated
                </AlertDialogTitle>
                <AlertDialogDescription>
                  Your password has been successfully updated! You can now log
                  in with your new password
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogAction onClick={clearForm} className="bg-[#F97316]">
                  Continue
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </form>
    </div>
  );
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const current_password = formData.get("current_password");
  const new_password = formData.get("new_password");
  const confirmed_new_password = formData.get("confirmed_new_password");

  console.log({ current_password, new_password, confirmed_new_password });

  return true;
}
