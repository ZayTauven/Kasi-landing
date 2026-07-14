import * as z from "zod";

export interface ActionResponse<T = unknown> {
  success: boolean;
  message: string;
  errors?: {
    [K in keyof T]?: string[];
  };
  inputs?: T;
}
export const formSchema = z.object({
  name: z.string({ message: "Ce champ est requis" }),
  email: z.string({ message: "Ce champ est requis" }),
  company: z.string({ message: "Ce champ est requis" }).optional(),
  employees: z.string().min(1, "Choisissez un profil").optional(),
  message: z.string({ message: "Ce champ est requis" }),
  agree: z.literal(true, { message: "Ce champ est requis" }),
});
