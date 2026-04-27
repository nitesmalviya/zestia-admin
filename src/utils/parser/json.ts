
export const safeParseJson = <T>(data: string | undefined | null, fallback: T): T => {
    if (!data) return fallback;

    try {
        return JSON.parse(data) as T;
    } catch {
        return fallback;
    }
};