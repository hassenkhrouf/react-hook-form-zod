import z from "zod";


export const signupSchema = z
    .object({
      "first-name": z.string().min(1, { message: "First Name is Required" }),
      "last-name": z.string().min(1, { message: "Last Name is Required" }),
      email: z
        .string()
        .min(1, { message: "Email is Required" })
        .email({ message: "Email Not Valid" }),
      password: z
        .string()
        .min(8, { message: "Password is Required & at least 8 characters" }),
      "confirm-password": z
        .string()
        .min(8, { message: "Confirm Password is Required" }),
    })
    .refine((data) => data.password === data["confirm-password"], {
      message: "Passwords do not match",
      path: ["confirm-password"],
    });
  export type ISignup = z.infer<typeof signupSchema>;