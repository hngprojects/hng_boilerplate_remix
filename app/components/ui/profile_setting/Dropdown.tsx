import * as Select from "@radix-ui/react-select";
import { Control, Controller } from "react-hook-form";

import Error from "./Error";
import Heading from "./Heading";

interface Inputs {
  email: string;
  jobTitle: string;
  bio: string;
  username: string;
  team: string;
  pronoun: string;
  [key: string]: string;
}

interface Properties {
  control: Control<Inputs>;
}

const selectValues = ["He/Him", "She/Her", "Others"];

function Dropdown({ control }: Properties) {
  // const value
  return (
    <Controller
      name="pronoun"
      control={control}
      rules={{ required: "kindly select an appropriate pronoun" }}
      render={({ field, fieldState: { error } }) => {
        return (
          <div className="flex flex-1 flex-col gap-2">
            <Heading>Pronoun</Heading>
            <Select.Root onValueChange={field.onChange} {...field}>
              <Select.SelectTrigger
                className={`${error ? "border-[#dc2626]" : "border-border"} w-full rounded-md border-[1px] px-2.5 py-2 text-left focus:outline-none`}
              >
                <Select.Value placeholder="Select" aria-label={field.value}>
                  {field.value}
                </Select.Value>
              </Select.SelectTrigger>
              <Select.SelectContent
                className={`shadow-[0px_5px_22px_4px_rgba(0, 0, 0, 0.12) overflow-hidden rounded-md border-[1px] border-border bg-background p-0`}
              >
                {selectValues.map((value, index) => (
                  <Select.Item
                    value={value}
                    key={index + 1}
                    className={`relative cursor-default select-none px-2 py-1.5 focus:border-none focus:bg-[#f97316] focus:outline-none`}
                  >
                    <Select.ItemText className="">{value}</Select.ItemText>
                    <Select.ItemIndicator>...</Select.ItemIndicator>
                  </Select.Item>
                ))}
              </Select.SelectContent>
            </Select.Root>
            {error && <Error error={error?.message} />}
          </div>
        );
      }}
    />
  );
}

export default Dropdown;
