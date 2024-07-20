import React from "react";

interface Properties {
  label: string;
  name: string;
  value: string;
  placeholder?: string;
  disabled?: boolean;
  error?: string | null;
  handleChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  style?: React.CSSProperties;
}

export const TextAreaField: React.FC<Properties> = ({
  label,
  name,
  placeholder,
  disabled,
  value,
  error,
  handleChange,
}) => {
  return (
    <div className="flex flex-col gap-2 text-black">
      <label htmlFor={name} className="text-sm">
        {label}
      </label>
      <div className="flex flex-col gap-1">
        <div className="w-full bg-white text-base text-black outline-0 rounded-md">
          <textarea
            id={name}
            placeholder={placeholder}
            disabled={disabled}
            value={value}
            onChange={handleChange}
            className="w-full h-[80px] border border-[#DC2626] outline-0 bg-white px-2 placeholder:text-[#C2C2C2] placeholder:text-sm rounded-md text-wrap"
          />
        </div>
        {error && <span className="text-xs text-[#DC2626]">* {error}</span>}
      </div>
    </div>
  );
};

export default TextAreaField;