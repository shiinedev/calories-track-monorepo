import z from "zod";
export declare const MealTypeSchema: z.ZodEnum<{
    breakfast: "breakfast";
    lunch: "lunch";
    dinner: "dinner";
    snack: "snack";
}>;
export declare const FoodAnalysisSchema: z.ZodObject<{
    foodName: z.ZodString;
    calories: z.ZodNumber;
    fat: z.ZodNumber;
    protein: z.ZodNumber;
    carbs: z.ZodNumber;
    mealType: z.ZodEnum<{
        breakfast: "breakfast";
        lunch: "lunch";
        dinner: "dinner";
        snack: "snack";
    }>;
}, z.z.core.$strip>;
export type MealType = z.infer<typeof MealTypeSchema>;
export type FoodAnalysisResult = z.infer<typeof FoodAnalysisSchema>;
export declare const saveFoodEntrySchema: z.ZodObject<{
    foodName: z.ZodString;
    calories: z.ZodNumber;
    fat: z.ZodNumber;
    protein: z.ZodNumber;
    carbs: z.ZodNumber;
    mealType: z.ZodEnum<{
        breakfast: "breakfast";
        lunch: "lunch";
        dinner: "dinner";
        snack: "snack";
    }>;
    storageKey: z.ZodString;
}, z.z.core.$strip>;
export type SaveFoodEntryResult = z.infer<typeof saveFoodEntrySchema>;
//# sourceMappingURL=food.schema.d.ts.map