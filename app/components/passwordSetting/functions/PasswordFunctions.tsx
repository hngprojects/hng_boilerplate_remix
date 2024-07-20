import { useState } from "react";

type FormData = {
  [key: string]: string;
};

export const usePasswordFunctions = () => {
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    current_password: "",
    new_password: "",
    confirmed_new_password: "",
  });
  const [newPasswordValidations, setNewPasswordValidations] = useState({
    containsNumber: false,
    containsUppercase: false,
    isLengthValid: false,
  });
  const [isFocused, setIsFocused] = useState(false);
  const [isWeakPassword, setIsWeakPassword] = useState(false);
  const [requirementsMetCount, setRequirementsMetCount] = useState(0);
  const [passwordMatchError, setPasswordMatchError] = useState(false);
  const [currentPasswordValid, setCurrentPasswordValid] = useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "new_password") {
      const containsNumber = /\d/.test(value);
      const containsUppercase = /[A-Z]/.test(value);
      const isLengthValid = value.length >= 8;

      setNewPasswordValidations({
        containsNumber,
        containsUppercase,
        isLengthValid,
      });

      // Calculate number of requirements met
      const count = [containsNumber, containsUppercase, isLengthValid].filter(
        Boolean
      ).length;
      setRequirementsMetCount(count);

      setIsFocused(value.length > 0);

      setPasswordMatchError(false);
    }

    if (name === "confirmed_new_password") {
      // Check if confirmed password matches new password
      if (value !== formData.new_password) {
        setPasswordMatchError(true);
      } else {
        setPasswordMatchError(false);
      }
    }
  };

  const changeVisibility = (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => {
    event.preventDefault();
    setPasswordIsVisible(!passwordIsVisible);
  };
  const clearForm = () => {
    setFormData({
      current_password: "",
      new_password: "",
      confirmed_new_password: "",
    });

    setIsFocused(false)
  };
  return {
    passwordIsVisible,
    formData,
    handleChange,
    changeVisibility,
    newPasswordValidations,
    isFocused,
    requirementsMetCount,
    currentPasswordValid,
    setCurrentPasswordValid,
    isWeakPassword,
    setIsWeakPassword,
    clearForm,
    passwordMatchError, // Expose password match error state
  };
};
