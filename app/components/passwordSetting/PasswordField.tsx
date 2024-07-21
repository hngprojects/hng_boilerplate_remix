import { Eye, EyeOff } from "lucide-react";
import React from "react";


type PasswordFieldPropperties = {
  changeVisibility: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
  className: string;
  field: {
    name: string;
    label: string;
    placeholder: string;
    id: number;
  };
  formData: { [key: string]: string };
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  passwordIsVisible: boolean;
};

const PasswordField: React.FC<PasswordFieldPropperties> = ({
  className,
  changeVisibility,
  field,
  formData,
  handleChange,
  passwordIsVisible,
}) => {
  return (
    <div className={`flex flex-col gap-2 w-full self-stretch`}>
      <label htmlFor={field.name}>{field.label}</label>
      <div className={`${className} border border-[#939393] w-[100%] md:w-[50%] flex items-center rounded-md bg-[#fffefe] py-3 px-4`}>
        <input
          type={passwordIsVisible ? "text" : "password"}
          placeholder={field.placeholder}
          name={field.name}
          value={formData[field.name] || ''}
          onChange={handleChange}
          className="bg-transparent  outline-none text-[#939393] border-none flex-1"
          required
        />
        <button type="button" onClick={(event) => changeVisibility(event, field.id)}>
          {passwordIsVisible ? <EyeOff className="text-[24px]" /> : <Eye className="text-[24px]" />}
        </button>
      </div>
    </div>
  );
};

export default PasswordField;
