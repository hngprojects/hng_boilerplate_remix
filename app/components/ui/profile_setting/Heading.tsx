import { firstLetterToUppercase } from "~/components/ui/profile_setting/firstLetterToUppercase";

interface HeadingTypes {
  children: string;
}

function Heading({ children }: HeadingTypes) {
  return (
    <p className="text-sm font-medium text-[#0f172a]">
      {firstLetterToUppercase(children)}
    </p>
  );
}

export default Heading;
