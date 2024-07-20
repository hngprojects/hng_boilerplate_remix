import React from "react";

interface Props {
  label: string;
  name: string;
  value: string;
  placeholder?: string;
  disabled?: boolean;
  error?: string | null;
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  style?: React.CSSProperties;
}

export const TextAreaField: React.FC<Props> = ({
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
            className="h-[80px] w-full text-wrap rounded-md border border-[#DC2626] bg-white px-2 outline-0 placeholder:text-sm placeholder:text-[#C2C2C2]"
          />
        </div>
        {error && <span className="text-xs text-[#DC2626]">* {error}</span>}
      </div>
    </div>
  );
};

export default TextAreaField;