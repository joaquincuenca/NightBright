import React from "react";
import {
  ComposedChart, Bar, Line, Area, XAxis, YAxis,
  CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from "recharts";
import { CHART_COLORS } from "../../models/dashboardData";

const tooltipStyle = {
  background: "#141821",
  border: "1px solid #262d3a",
  borderRadius: 8,
  color: "#eaedf2",
};

export default function GapCapacityChart({ data }) {
  return (
    <div className="card-glow p-4">
      <h2 className="font-display text-base font-semibold mb-3" style={{ color: "var(--text)" }}>
        Gap &amp; Production Capacity
      </h2>
      <ResponsiveContainer width="100%" height={250}>
        <ComposedChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#262d3a" />
          <XAxis dataKey="year" stroke="#8891a0" tick={{ fill: "#8891a0", fontSize: 12 }} />
          <YAxis yAxisId="left" stroke="#8891a0" tick={{ fill: "#8891a0", fontSize: 12 }} />
          <YAxis yAxisId="right" orientation="right" stroke="#8891a0" tick={{ fill: "#8891a0", fontSize: 12 }} />
          <Tooltip contentStyle={tooltipStyle} formatter={(v) => v?.toLocaleString() ?? "N/A"} />
          <Legend wrapperStyle={{ color: "#8891a0", fontSize: 12 }} />
          <Bar dataKey="gap" fill={CHART_COLORS.gap} yAxisId="left" name="Demand–Supply Gap (liters)" radius={[3, 3, 0, 0]} />
          <Line
            type="monotone"
            dataKey="capacity"
            stroke={CHART_COLORS.capacity}
            strokeWidth={2}
            yAxisId="right"
            name="Production Capacity (liters)"
            dot={{ r: 3 }}
          />
          <Area type="monotone" dataKey="capacity" fill={CHART_COLORS.capacity} fillOpacity={0.15} yAxisId="right" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}