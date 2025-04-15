import { z } from "zod";

export const inputSchema = z.object({
  counterProv: z.number().max(34).min(1),
});

export type InputSchema = z.infer<typeof inputSchema>;