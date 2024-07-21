import { z } from "zod";

const phoneRegex = /^\+\d{10,13}$/;

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
    .regex(phoneRegex, "Invalid phone number format [+(234) 701 4788 808]")
    .max(14, "Maximum number of characters reached"),
  name: z
    .string({
      required_error: "Please enter your name.",
    })
    .max(256, "Maximum number of characters reached"),
  message: z.string({
    required_error: "Please provide your message.",
  }),
});
