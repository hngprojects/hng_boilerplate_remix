import Error from "./Error";
import Heading from "./Heading";

interface TextAreaTypes {
  placeholder?: string;
  name: string;
  value: string;
  error: string | undefined;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  register: object;
}

function TextArea({
  placeholder,
  name,
  value,
  setValue,
  error,
  register,
}: TextAreaTypes) {
  return (
    <div className="flex w-full flex-col gap-2">
      <Heading>bio</Heading>
      <textarea
        className={`w-full resize-none rounded-md border-[1px] ${error ? "border-[#dc2626]" : "border-border"} px-2.5 py-2 focus:outline-none`}
        rows={3}
        placeholder={placeholder}
        name={name}
        {...register}
        value={value}
        onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
          setValue(event.currentTarget.value)
        }
      ></textarea>
      {error && <Error error={error} />}
    </div>
  );
}

export default TextArea;
