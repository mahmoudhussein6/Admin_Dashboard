export interface Analytics {
    title: string;
    value: string | number;
    icon: string;
    trend?: string;
    trendDirection?: 'up' | 'down';
    iconColor?: string;
}
