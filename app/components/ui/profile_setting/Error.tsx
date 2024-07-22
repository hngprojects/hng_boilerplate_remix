import { firstLetterToUppercase } from "~/components/ui/profile_setting/firstLetterToUppercase";

interface ErrorInterface {
  error: string | undefined;
}

function Error({ error }: ErrorInterface) {
  return (
    <p className="text-sm font-normal text-[#dc2626]">
      {firstLetterToUppercase(error)}
    </p>
  );
}

export default Error;
