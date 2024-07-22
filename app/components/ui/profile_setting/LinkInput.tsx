import { Link } from "lucide-react";
import { useState } from "react";

interface Properties {
  register: object;
}

function LinkInput({ register }: Properties) {
  const [value, setValue] = useState<string>("");
  return (
    <div className="flex w-full flex-row items-center gap-1.5 rounded-md border-[1px] border-border px-2.5 py-2">
      <Link color="#94a3b8" />
      <input
        className="w-full rounded-md px-2.5 py-2 focus:outline-none"
        name="social-link"
        id={`social_link_${Math.ceil(Math.random() + 1)}`}
        type="text"
        placeholder="Link to social platform"
        {...register}
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
      />
    </div>
  );
}

export default LinkInput;
