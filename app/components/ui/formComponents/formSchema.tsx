import { z } from "zod";

const phoneRegex = new RegExp(/^(\+?[\d\s]+)?(\d{3}|\(?\d+\))?(-?\s?\d)+$/);
export const FormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  number: z.string().regex(phoneRegex, "Invalid Number!"),
});
