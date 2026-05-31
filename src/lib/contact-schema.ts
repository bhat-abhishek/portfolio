import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email"),
  subject: z.string().trim().min(1, "Please add a subject").max(150),
  message: z
    .string()
    .trim()
    .min(10, "Message should be at least 10 characters")
    .max(3000),
  // honeypot — humans never see this field; if it's filled, the request is a bot
  company: z.string().optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
