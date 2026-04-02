import { z } from "zod";
export declare const registerSchema: z.ZodObject<{
    username: z.ZodString;
    password: z.ZodString;
    email: z.ZodEmail;
    onBoardingCompleted: z.ZodDefault<z.ZodBoolean>;
    dailyColorieTarget: z.ZodNumber;
}, z.core.$strip>;
export declare const loginSchema: z.ZodObject<{
    email: z.ZodEmail;
    password: z.ZodString;
}, z.core.$strip>;
export type LoginSchema = z.infer<typeof loginSchema>;
export type RegisterSchema = z.infer<typeof registerSchema>;
//# sourceMappingURL=auth.schema.d.ts.map