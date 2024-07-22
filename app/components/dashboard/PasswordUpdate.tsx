import { Form } from "@remix-run/react";
import { CircleCheck, Eye, EyeOff } from "lucide-react";
import { useEffect, useState, type ChangeEvent } from "react";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { Button } from "../ui/button";

interface PasswordValues {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

const PasswordUpdate = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showNewPassword, setShowNewPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);
  const [validation, setValidation] = useState({
    hasUppercase: false,
    hasNumber: false,
    hasMinLength: false,
  });
  const [displayValue, setDisplayValue] = useState<PasswordValues>({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [actualValue, setActualValue] = useState<PasswordValues>({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handlePasswordValidation = (value: string) => {
    const hasUppercase = /[A-Z]/.test(value);
    const hasNumber = /\d/.test(value);
    const hasMinLength = value.length >= 8;
    setValidation({
      hasUppercase,
      hasNumber,
      hasMinLength,
    });
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { name, value } = event.target;
    const value_: keyof PasswordValues = name as keyof PasswordValues;

    setActualValue((previousActualValue) => ({
      ...previousActualValue,
      [name]:
        (actualValue[value_] + value.at(-1)).length > value.length
          ? actualValue[value_].slice(0, -1)
          : actualValue[value_] + value.at(-1),
    }));

    setDisplayValue((previousDisplayValue) => ({
      ...previousDisplayValue,
      [name]: "*".repeat(value.length),
    }));
    if (name === "newPassword") {
      handlePasswordValidation(actualValue[value_]);
    }
  };
  const isFormValid = () => {
    return (
      actualValue.currentPassword.length >= 5 &&
      validation.hasUppercase &&
      validation.hasNumber &&
      validation.hasMinLength &&
      actualValue.newPassword === actualValue.confirmPassword
    );
  };
  const handleClick = () => {
    setActualValue({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
    setDisplayValue({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  };
  useEffect(() => {
    const inputs = document.querySelectorAll<HTMLInputElement>(".psw-input");
    for (const element of inputs) {
      element.addEventListener(
        "select",
        function () {
          this.select = () => {};
          this.selectionStart = this.selectionEnd;
        },
        false,
      );
    }
  }, []);
  return (
    <div className="w-full bg-white pl-10">
      <h1 className="mb-1 mt-10 text-2xl font-bold text-[rgba(20,20,20,1)]">
        Password Settings
      </h1>
      <p className="mb-5 text-base text-[rgba(67,67,67,1)]">
        Update password for enhanced account security
      </p>
      <Form className="flex w-2/3 flex-col gap-4 max-md:w-5/6">
        <label className="flex flex-col gap-2">
          <p className="text-base text-[rgba(67,67,67,1)]">Current Password</p>
          <div
            className={`border-[1px] ${actualValue.currentPassword.length < 5 && actualValue.currentPassword.length > 0 ? "border-[rgba(220,38,38,1)]" : "border-[rgba(147,147,147,1)]"} flex select-none items-center justify-between rounded-lg p-1 pr-5`}
          >
            <input
              type="text"
              name="currentPassword"
              value={
                showPassword
                  ? actualValue.currentPassword
                  : displayValue.currentPassword
              }
              onChange={handleChange}
              placeholder="Enter current password"
              className="psw-input hi h-12 w-11/12 !select-none rounded-lg border-none bg-slate-600 bg-transparent px-5 text-[rgba(147,147,147,1)] outline-none"
            />

            {showPassword ? (
              <Eye
                size={24}
                color="rgba(147,147,147,1)"
                onClick={() => setShowPassword(!showPassword)}
              />
            ) : (
              <EyeOff
                size={24}
                color="rgba(147,147,147,1)"
                onClick={() => setShowPassword(!showPassword)}
              />
            )}
          </div>
          {actualValue.currentPassword.length < 5 &&
          actualValue.currentPassword.length > 0 ? (
            <p className="text-sm font-[500] text-[rgba(220,38,38,1)]">
              Invalid password
            </p>
          ) : (
            <></>
          )}
        </label>

        <label className="flex flex-col gap-2">
          <p className="text-base text-[rgba(67,67,67,1)]">New Password</p>
          <div className="flex select-none items-center justify-between rounded-lg border-[1px] border-[rgba(147,147,147,1)] p-1 pr-5">
            <input
              type="text"
              name="newPassword"
              value={
                showNewPassword
                  ? actualValue.newPassword
                  : displayValue.newPassword
              }
              onChange={handleChange}
              placeholder="Enter new password"
              onFocus={() => {
                // setIsFocused(true);
              }}
              className="psw-input hi h-12 w-11/12 !select-none rounded-lg border-none bg-slate-600 bg-transparent px-5 text-[rgba(147,147,147,1)] outline-none"
            />

            {showNewPassword ? (
              <Eye
                size={24}
                color="rgba(147,147,147,1)"
                onClick={() => setShowNewPassword(!showNewPassword)}
              />
            ) : (
              <EyeOff
                size={24}
                color="rgba(147,147,147,1)"
                onClick={() => setShowNewPassword(!showNewPassword)}
              />
            )}
          </div>
          {displayValue.newPassword.length > 0 && (
            <div>
              <div className="flex gap-3">
                <span
                  className={`h-1 w-24 rounded ${actualValue.newPassword.length > 0 ? (validation.hasUppercase ? "bg-[rgba(109,195,71,1)]" : "bg-[rgba(220,38,38,1)]") : "bg-[rgba(182,182,182,1)]"} flex`}
                ></span>
                <span
                  className={`h-1 w-24 rounded ${actualValue.newPassword.length > 0 ? (validation.hasNumber ? "bg-[rgba(109,195,71,1)]" : "bg-[rgba(220,38,38,1)]") : "bg-[rgba(182,182,182,1)]"} flex`}
                ></span>
                <span
                  className={`h-1 w-24 rounded ${actualValue.newPassword.length > 0 ? (validation.hasMinLength ? "bg-[rgba(109,195,71,1)]" : "bg-[rgba(220,38,38,1)]") : "bg-[rgba(182,182,182,1)]"} flex`}
                ></span>
              </div>
              <div className="mt-3 grid gap-2">
                <p className="mb-1 text-sm">Weak password. Must contain;</p>
                <div className="flex gap-2">
                  {validation.hasUppercase ? (
                    <CircleCheck color="rgba(109,195,71,1)" />
                  ) : (
                    <CircleCheck color="rgba(220,38,38,1)" />
                  )}
                  <p className="text-sm">At least 1 uppercase</p>
                </div>
                <div className="flex gap-2">
                  {validation.hasNumber ? (
                    <CircleCheck color="rgba(109,195,71,1)" />
                  ) : (
                    <CircleCheck color="rgba(220,38,38,1)" />
                  )}
                  <p className="text-sm">At least 1 number</p>
                </div>
                <div className="flex gap-2">
                  {validation.hasMinLength ? (
                    <CircleCheck color="rgba(109,195,71,1)" />
                  ) : (
                    <CircleCheck color="rgba(220,38,38,1)" />
                  )}
                  <p className="text-sm">At least 8 characters</p>
                </div>
              </div>
            </div>
          )}
        </label>

        <label className="flex flex-col gap-2">
          <p className="text-base text-[rgba(67,67,67,1)]">Confirm Password</p>
          <div
            className={`border-[1px] ${actualValue.confirmPassword.length > 0 ? (actualValue.newPassword == actualValue.confirmPassword ? "border-[rgba(147,147,147,1)]" : "border-[rgba(220,38,38,1)]") : "border-[rgba(147,147,147,1)]"} flex select-none items-center justify-between rounded-lg p-1 pr-5`}
          >
            <input
              type="text"
              name="confirmPassword"
              value={
                showConfirmPassword
                  ? actualValue.confirmPassword
                  : displayValue.confirmPassword
              }
              onChange={handleChange}
              placeholder="Enter confirm password"
              className="psw-input hi h-12 w-11/12 !select-none rounded-lg border-none bg-slate-600 bg-transparent px-5 text-[rgba(147,147,147,1)] outline-none"
            />

            {showConfirmPassword ? (
              <Eye
                size={24}
                color="rgba(147,147,147,1)"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              />
            ) : (
              <EyeOff
                size={24}
                color="rgba(147,147,147,1)"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              />
            )}
          </div>
          {actualValue.confirmPassword.length > 0 ? (
            actualValue.newPassword != actualValue.confirmPassword && (
              <p className="text-sm font-[500] text-[rgba(220,38,38,1)]">
                Password does not match
              </p>
            )
          ) : (
            <></>
          )}
        </label>

        <AlertDialog>
          <div className="mt-6 flex gap-5">
            <Button
              type="submit"
              variant="outline"
              onClick={handleClick}
              size="default"
              className="h-12 w-24 rounded-lg bg-transparent text-base font-bold text-black"
            >
              Cancel
            </Button>
            <AlertDialogTrigger asChild>
              <Button
                type="submit"
                onClick={handleClick}
                variant="default"
                size="default"
                disabled={!isFormValid()}
                className="h-12 w-44 rounded-lg bg-[rgba(249,115,22,1)] text-base font-bold text-white"
              >
                Update Password
              </Button>
            </AlertDialogTrigger>
          </div>
          <AlertDialogContent className="sm:max-w-md">
            <AlertDialogHeader>
              <AlertDialogTitle>
                Password Successfully Updated!
              </AlertDialogTitle>
              <AlertDialogDescription>
                Your password has been successfully updated! You can now log in
                with your new password.
              </AlertDialogDescription>
            </AlertDialogHeader>

            <AlertDialogFooter className="sm:justify-end">
              <AlertDialogCancel asChild className="flex flex-row-reverse">
                <Button
                  type="button"
                  variant="default"
                  className="bg-[rgba(249,115,22,1)] px-6 font-semibold"
                >
                  Continue
                </Button>
              </AlertDialogCancel>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </Form>
    </div>
  );
};

export default PasswordUpdate;
