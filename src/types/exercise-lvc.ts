export interface AllLVCResponse {
    adminGetLVCStats: null;
    baseline: number;
    avgByExercise: number;
    avgLovable: number;
    avgValuable: number;
    avgCapable: number;
    previousAvgLovable: number;
    previousAvgValuable: number;
    previousAvgCapable: number;
}

export interface AllExerciseResponse {
    adminGetExerciseStats: null;

    stalledUsers: number;
    avgDaysBetweenExercises: number;
    stalledSentReengage: number;
    reengagedCount: number;
    reengagedPercent: number;
    completionCountByExercise: string;
    currentExerciseCounts: string;
}

export interface AllReflectionsResponse {
    adminGetReflections: null;
    reflections: string[];
    total: number;
    reflectionCountByExercise: number;
}


export interface AdminLVCStats {
    baseline?: string;
    avgByExercise?: string;
    avgLovable?: number | null;
    avgValuable?: number | null;
    avgCapable?: number | null;
    previousAvgLovable?: number | null;
    previousAvgValuable?: number | null;
    previousAvgCapable?: number | null;
}

export interface AdminExerciseStats {
    completionCountByExercise?: string;
    currentExerciseCounts?: string;
    stalledUsers?: number;
    avgDaysBetweenExercises?: number | null;
    stalledSentReengage?: number;
    reengagedCount?: number;
    reengagedPercent?: number | null;
}

export interface AdminReflectionsStats {
    reflections?: string;
    total?: number;
    reflectionCountByExercise?: string;
}