"use client";

import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { calculateVideoMetrics } from "@/lib/utils/analytics";
import { useState, useEffect } from "react";

const mockData = {
  views: [
    { date: "2024-01", count: 1200 },
    { date: "2024-02", count: 1800 },
    { date: "2024-03", count: 2400 },
  ],
  watchTime: [
    { date: "2024-01", duration: 45000 },
    { date: "2024-02", duration: 62000 },
    { date: "2024-03", duration: 78000 },
  ],
  interactions: 850,
  retention: [100, 90, 80, 70, 60, 50, 40, 30],
};

export function AnalyticsDashboard() {
  const [metrics, setMetrics] = useState(calculateVideoMetrics(mockData));

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-2">Total Views</h3>
          <p className="text-3xl font-bold">{metrics.totalViews.toLocaleString()}</p>
        </Card>
        
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-2">Avg. Watch Time</h3>
          <p className="text-3xl font-bold">
            {Math.round(metrics.averageWatchTime / 1000)}s
          </p>
        </Card>
        
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-2">Engagement Rate</h3>
          <p className="text-3xl font-bold">
            {metrics.engagementRate.toFixed(1)}%
          </p>
        </Card>
      </div>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Views Over Time</h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={mockData.views}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="hsl(var(--primary))" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
}