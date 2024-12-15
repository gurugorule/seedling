import { type AnalyticsData } from '@/types/analytics';

export function calculateVideoMetrics(data: AnalyticsData) {
  const totalViews = data.views.reduce((sum, view) => sum + view.count, 0);
  const averageWatchTime = data.watchTime.reduce((sum, time) => sum + time.duration, 0) / data.watchTime.length;
  const engagementRate = (data.interactions / totalViews) * 100;

  return {
    totalViews,
    averageWatchTime,
    engagementRate,
    retention: calculateRetention(data.retention),
  };
}

function calculateRetention(retentionData: number[]) {
  const total = retentionData.reduce((sum, value) => sum + value, 0);
  return retentionData.map(value => (value / total) * 100);
}