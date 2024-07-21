import z from "zod";

import { toast } from "~/components/ui/use-toast";
import { FormSchema } from "./formSchema";

export function submit(data: z.infer<typeof FormSchema>) {
  console.log("submited", data);
  toast({
    title: "You submitted the following values:",
    description: (
      <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
        <code className="text-white">{JSON.stringify(data, undefined, 2)}</code>
      </pre>
    ),
  });
}
