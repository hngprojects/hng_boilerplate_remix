import z from "zod";

import { FormSchema } from "./formSchema";

// import { toast } from "./use-toast"

export function submit(data: z.infer<typeof FormSchema>) {
  console.log("submited", data);
  // toast({
  //   title: "You submitted the following values:",
  //   description: (
  //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
  //       <code className="text-white">{JSON.stringify(data, null, 2)}</code>
  //     </pre>
  //   ),
  // })
}
