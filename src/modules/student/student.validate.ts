import { z } from "zod";

export const StudentValidationSchema = z.object({
    id: z
        .string()
        .min(1, "ID is required")
        .max(10, "ID must be less than 10 characters"),
    name: z.object({
        firstName: z.string().min(1, "First name is required"),
        middleName: z.string().optional(),
        lastName: z.string().min(1, "Last name is required"),
    }),
    email: z.string().email("Invalid email format"),
    gender: z.enum(["male", "female"], {
        errorMap: () => ({ message: "Gender must be 'male' or 'female'" }),
    }),
    dob: z.string().optional(),
    contactNo: z.string().optional(),
    address: z.string().optional(),
    isActive: z.boolean().default(true),
});

export type StudentType = z.infer<typeof StudentValidationSchema>;
