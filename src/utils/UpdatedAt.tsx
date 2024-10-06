export function timeAgo(date: string): string {
    const now: Date = new Date();
    const past: Date = new Date(date);
    const seconds: number = Math.floor((now.getTime() - past.getTime()) / 1000);

    // Define los intervalos en segundos
    const intervals: { [key: string]: number } = {
        year: 31536000,
        month: 2592000,
        week: 604800,
        day: 86400,
        hour: 3600,
        minute: 60,
        second: 1,
    };

    // Itera sobre los intervalos y calcula el tiempo transcurrido
    for (const key in intervals) {
        const interval: number = Math.floor(seconds / intervals[key]);
        if (interval >= 1) {
            return `updated ${interval} ${key}${interval > 1 ? 's' : ''} ago`;
        }
    }

    return 'updated just now';
}