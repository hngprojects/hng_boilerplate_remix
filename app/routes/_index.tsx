"use client"
/* eslint-disable import/no-named-as-default */
import type { MetaFunction } from "@remix-run/node";
import { useState } from "react";
import { defaultFormError, defaultFormState, FormField } from "~/components/constant";
import TextAreaField from "~/components/textarea";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {

  const [formState, setFormState] = useState(defaultFormState);
  const [formError, setFormError] = useState(defaultFormError);

  const updateFormData = (key: string, value: string) => {
    if (value.length > 0) {
      setFormError({
        ...formError,
        [key]: null,
      });
    }

    setFormState({
      ...formState,
      [key]: value,
    });
  };

  return (
    <div className="font-sans p-6">
      <TextAreaField
        label="Bio"
        placeholder="A seasoned Frontend developwer with fulfiling duties"
        name={FormField.bio}
        value={formState[FormField.bio]}
        error={formError[FormField.bio]}
        handleChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          updateFormData(FormField.bio, e.target.value)
        }
      />
    </div>
  );
}
