import { Link } from "@remix-run/react";
import { CheckCircle2, Eye, EyeOff } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "~/components/ui/alert-dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

type FormFields = {
  newPassword: string;
  confirmPassword: string;
  currentPassword: string;
};

export default function PasswordSetting() {
  //creating useState to store requirement states
  const [caseIsValid, setCaseIsValid] = useState(false);
  const [inputType, setInputType] = useState("password");
  const [numberInclude, setNunberInclude] = useState(false);
  const [stringIsValid, setStringIsValid] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [displayRequiremenList, setDisplayRequiremenList] = useState(false);

  const { register, handleSubmit, watch, reset } = useForm<FormFields>({
    defaultValues: {
      currentPassword: "storedPassword123",
    },
  });
  const watchForNewPassword = watch("newPassword", "");
  const watchForConfirmPassword = watch("confirmPassword", "");
  const watchForCurrentPassword = watch("currentPassword");

  //Toggle submit diasbled to true if all field have value more than 8
  const isFormDisabled =
    watchForNewPassword.length < 8 ||
    watchForConfirmPassword.length < 8 ||
    watchForCurrentPassword.length < 8 ||
    passwordMatch === false;

  useEffect(() => {
    const isPasswordMatch = watchForConfirmPassword === watchForNewPassword;
    setPasswordMatch(isPasswordMatch);
  }, [watchForConfirmPassword, watchForNewPassword]);

  useEffect(() => {
    //Validting password whenever it changes
    const validatePassword = () => {
      const hasNumber = /\d/.test(watchForNewPassword);
      const hasUpperCase = /[A-Z]/.test(watchForNewPassword);
      const hasMinLength = watchForNewPassword.length >= 8;

      if (hasMinLength) {
        setStringIsValid(true);
      } else setStringIsValid(false);

      if (hasNumber) {
        setNunberInclude(true);
      } else setNunberInclude(false);

      if (hasUpperCase) {
        setCaseIsValid(true);
      } else setCaseIsValid(false);
    };
    validatePassword();
  }, [watchForNewPassword]);

  const isCurrentPasswordCorrect =
    watchForCurrentPassword === "storedPassword123";

  //Server logic for form submission
  async function onSubmit(data: FormFields) {
    try {
      const response = await fetch("/api/update-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // Form submission successful
        // You can display a success message or perform any other actions
        console.log("Password updated successfully");
      } else {
        // Form submission failed
        // You can display an error message or perform any other actions
        console.log("Failed to update password");
        //this will return a not found because the route does not exist
      }
    } catch (error) {
      // Handle network errors or other errors
      console.error("Error updating password:", error);
    }
  }

  return (
    <div>
      <form
        className="flex w-full flex-col gap-8 px-8 py-8 text-[14px] md:w-[674px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-2">
          <h3 className="text-[24px] font-semibold">Password setting</h3>
          <p>Update password for enhanced account security</p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="cuurent-password">Current Password:</label>
            <div className="relative flex items-center">
              <Input
                className="rounded-radius relative p-4 text-[#939393] focus-visible:ring-0"
                {...register("currentPassword", {
                  required: true,
                })}
                type={inputType}
              />
              <Button
                className="absolute right-[1em] bg-transparent text-[#939393] hover:bg-transparent"
                onClick={() => {
                  inputType === "password"
                    ? setInputType("text")
                    : setInputType("password");
                }}
              >
                {inputType === "password" ? (
                  <Eye className="text-6" />
                ) : (
                  <EyeOff className="text-6" />
                )}
              </Button>
            </div>
            {isCurrentPasswordCorrect === true ? (
              ""
            ) : (
              <p className="text-red-400">Invalid password</p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="new-password">New Password:</label>
            <div className="relative flex items-center">
              <Input
                className="rounded-radius relative text-[#939393] focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                {...register("newPassword")}
                onFocus={() => setDisplayRequiremenList(true)}
                type={inputType}
                {...register("newPassword", {
                  required: true,
                })}
              />
              <Button
                className="absolute right-[1em] bg-transparent text-[#939393] hover:bg-transparent"
                onClick={() => {
                  inputType === "password"
                    ? setInputType("text")
                    : setInputType("password");
                }}
              >
                {inputType === "password" ? (
                  <Eye className="text-6" />
                ) : (
                  <EyeOff className="text-6" />
                )}
              </Button>
            </div>
          </div>
          {displayRequiremenList && (
            <>
              <div className="flex gap-4">
                <span
                  className={`h-[3px] w-[100px] ${caseIsValid ? "bg-green-400" : "bg-input"}`}
                ></span>
                <span
                  className={`h-[3px] w-[100px] ${numberInclude ? "bg-green-400" : "bg-input"}`}
                ></span>
                <span
                  className={`h-[3px] w-[100px] ${stringIsValid ? "bg-green-400" : "bg-input"}`}
                ></span>
              </div>
              <ul className="flex flex-col gap-2 py-6">
                <p>Weak Password.Must contain: </p>
                <li className="flex items-center gap-2">
                  <span>
                    <CheckCircle2
                      className={`${caseIsValid ? "text-green-400" : "text-input"}`}
                    />
                  </span>
                  <span>At least 1 uppercase</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>
                    <CheckCircle2
                      className={`${numberInclude ? "text-green-400" : "text-input"}`}
                    />
                  </span>
                  <span>At least 1 Number</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>
                    <CheckCircle2
                      className={`${stringIsValid ? "text-green-400" : "text-input"}`}
                    />
                  </span>
                  <span>At least 8 characters</span>
                </li>
              </ul>
            </>
          )}
          <div className="flex flex-col gap-2">
            <label htmlFor="confirm-password">Confirm New Password:</label>
            <div className="relative flex items-center">
              <Input
                className={`${passwordMatch ? "border-input" : "border-error"} rounded-radius relative text-[#939393] focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0`}
                {...register("confirmPassword", {
                  required: true,
                })}
                type={inputType}
              />
              <Button
                className="absolute right-[1em] bg-transparent text-[#939393] hover:bg-transparent"
                onClick={() => {
                  inputType === "password"
                    ? setInputType("text")
                    : setInputType("password");
                }}
              >
                {inputType === "password" ? (
                  <Eye className="text-6" />
                ) : (
                  <EyeOff className="text-6" />
                )}
              </Button>
            </div>
          </div>
          {passwordMatch ? (
            ""
          ) : (
            <p className="py-4 text-red-400">Passwords do not match</p>
          )}
        </div>
        <div className="flex items-center gap-6">
          <Link to={"/"}>
            <Button className="text-default rounded-md border border-ring bg-transparent px-4 py-2">
              Cancel
            </Button>
          </Link>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                disabled={isFormDisabled}
                type="submit"
                className="rounded-md bg-primary px-4 py-2 text-white"
              >
                Update Password
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>
                  Password Successfully Updated!
                </AlertDialogTitle>
                <AlertDialogDescription>
                  Your password has been successfully updated! You can now log
                  in with your new password.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel className="border-none">
                  <Button
                    onClick={() => {
                      reset();
                      setDisplayRequiremenList(false);
                    }}
                    type="submit"
                    className="rounded-md bg-primary px-4 py-2 text-white"
                  >
                    Continue
                  </Button>
                </AlertDialogCancel>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </form>
    </div>
  );
}
