import { ReactNode, useState } from "react";
import { UseFormRegister } from "react-hook-form";

import { Button } from "../button";
import LinkInput from "./LinkInput";

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
  register: UseFormRegister<Inputs>;
}

function Links({ register }: Properties) {
  const [components, setComponents] = useState<ReactNode[]>([
    <LinkInput key={1} register={{ ...register("link1") }} />,
    <LinkInput key={2} register={{ ...register("link2") }} />,
  ]);

  return (
    <div className="flex w-full flex-col items-start gap-4" id="social_links">
      {components.map((component) => component)}
      <Button
        variant="outline"
        onClick={(event) => {
          event.preventDefault();
          setComponents((component) => [
            ...component,
            <LinkInput
              key={component.length + 1}
              register={{ ...register(`link${component.length + 1}`) }}
            />,
          ]);
        }}
      >
        Add URl
      </Button>
    </div>
  );
}

export default Links;
