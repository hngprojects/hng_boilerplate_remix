import { z } from "zod";

export const schema = z.object({
  email: z
    .string({
      required_error: "Please provide an email address.",
    })
    .email("Must follow the format of an email address")
    .max(256, "Maximum number of characters reached"),
  phoneNumber: z
    .string({
      required_error: "Please provide a phone number.",
    })
    .max(11, "Maximum number of characters reached"),
  name: z
    .string({
      required_error: "Please enter your name.",
    })
    .max(256),
  message: z.string({
    required_error: "Please provide your message.",
  }),
});
