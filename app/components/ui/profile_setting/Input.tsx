import React from "react";

import Error from "./Error";
import Heading from "./Heading";

interface InputProperties {
  setValue: React.Dispatch<React.SetStateAction<string>>;
  error: string | undefined;
  placeholder: string;
  label: string;
  value: string;
  type: string;
  name: string;
  register: object;
}

function Input({
  type,
  label,
  placeholder,
  name,
  value,
  setValue,
  error,
  register,
}: InputProperties) {
  return (
    <div className="flex flex-1 flex-col items-start justify-between gap-2">
      <Heading>{label}</Heading>
      <input
        className={`w-full rounded-md border-[1px] ${error ? "border-[#dc2626]" : "border-border"} px-2.5 py-2 focus:outline-none`}
        type={type}
        name={name}
        id={label}
        placeholder={placeholder}
        {...register}
        value={value}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setValue(event.currentTarget.value)
        }
      />

      {error && <Error error={error} />}
    </div>
  );
}

export default Input;
