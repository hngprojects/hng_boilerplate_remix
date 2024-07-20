/* eslint-disable import/no-named-as-default */
import { useState } from "react";

import { defaultFormError, defaultFormState, FormField } from "../constant";
import TextAreaField from "../textarea";

export default function Bio() {
  const [formState, setFormState] = useState(defaultFormState);
  const [formError, setFormError] = useState(defaultFormError);

  const updateFormData = (key: string, value: string) => {
    if (value.length > 64) {
      setFormError({
        ...formError,
        [key]: "Your bio cannot exceed 64 characters",
      });
    } else {
      setFormError({
        ...formError,
        [key]: undefined,
      });
    }

    setFormState({
      ...formState,
      [key]: value,
    });
  };

  return (
    <div className="p-6 font-sans">
      <TextAreaField
        label="Bio"
        placeholder="A seasoned front-end developer with fulfilling duties."
        name={FormField.bio}
        value={formState[FormField.bio]}
        error={formError[FormField.bio]}
        handleChange={(error: React.ChangeEvent<HTMLTextAreaElement>) =>
          updateFormData(FormField.bio, error.target.value)
        }
      />
    </div>
  );
}
