import z from "zod";

const DogsSchema = z.object({
  name: z.string(),
  age: z.number().int().min(1),
  colors: z.array(z.enum(["brown", "white", "black"])),
});

export const validateDog = (obj: any) => DogsSchema.safeParse(obj);
export const validatePartialDog = (obj: any) =>
  DogsSchema.partial().safeParse(obj);
