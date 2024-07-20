import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "~/components/ui/alert-dialog";

import { fields } from "./fieldArray";
import { usePasswordFunctions } from "./functions/PasswordFunctions";
import PasswordField from "./PasswordField";
import { useEffect, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Link} from "@remix-run/react";
import { ActionFunctionArgs } from "@remix-run/node";

type FormData = {
  [key: string]: string;
};

export default function PasswordSettingPage(props: FormData) {
  const {
    passwordIsVisible,
    formData,
    handleChange,
    changeVisibility,
    newPasswordValidations,
    isFocused,
    currentPasswordValid,
    setCurrentPasswordValid,
    clearForm,
    requirementsMetCount,
    
    passwordMatchError,
  } = usePasswordFunctions();

  //Checking if all my form fields are valid
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handleCurrentPasswordValidation = () => {
    const storedPassword = "stored_password";

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
  }, [formData.current_password]);

  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    
    try {
      const formData = new FormData(e.currentTarget);
      
      const request = new Request('/path-to-your-action-endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData as any), 
      });
      
      const params = {}; 
      const context = {}; 
      
      const response = await action({ request, context, params });
      
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
    <div className="p-8 w-[100%] 2xl:w-[70.9%] flex flex-col gap-[32px] leading-[19.2px] text-[14px]">
      <form method="post"
        className="flex flex-col gap-6 w-full"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="flex flex-col">
          <h2 className="text-2xl font-semibold">Password setting</h2>
          <p>Reset your password for proper security</p>
        </div>
        {fields.map((field) => (
          <div key={field.name}>
            <PasswordField
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
                    className={`h-[3px] w-[100px] bg-[#B6B6B6]  ${
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
                  <p className="text-red-500 text-sm">
                    Password does not match
                  </p>
                )}
              </div>
            )}
            {field.name === "current_password" &&
              currentPasswordValid === false && (
                <p className="text-red-500 pt-2 text-[14px]">
                  Invalid password
                </p>
              )}
          </div>
        ))}
        <div className="w-max flex justify-between items-center gap-4">
          <AlertDialog>
            <AlertDialogTrigger className="w-max">
              <div className="flex gap-6 items-center">
                <Link to="/">
                  <button className="bg-white border border-border py-2 px-4 rounded-md">
                    Cancel
                  </button>
                </Link>
                <button
                  type="submit"
                  disabled={!isFormValid}
                  className={` ${
                    !isFormValid ? "bg-input text-black" : "bg-[#F97316]"
                  } text-white rounded-md py-2 px-4`}
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



export async function action({request}: ActionFunctionArgs) {
  const formData = await request.formData()
  const current_password = formData.get('current_password')
  const new_password = formData.get('new_password')
  const confirmed_new_password = formData.get('confirmed_new_password')

  console.log({current_password, new_password, confirmed_new_password})
  
  return true
}