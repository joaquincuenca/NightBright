import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { CHART_COLORS } from "../../models/dashboardData";

const tooltipStyle = {
  background: "#141821",
  border: "1px solid #262d3a",
  borderRadius: 8,
  color: "#eaedf2",
};

export default function MarketShareChart({ data }) {
  return (
    <div className="card-glow p-4">
      <h2 className="font-display text-base font-semibold mb-3" style={{ color: "var(--text)" }}>
        Market Share (%)
      </h2>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#262d3a" />
          <XAxis dataKey="year" stroke="#8891a0" tick={{ fill: "#8891a0", fontSize: 12 }} />
          <YAxis domain={[0, 5]} stroke="#8891a0" tick={{ fill: "#8891a0", fontSize: 12 }} />
          <Tooltip contentStyle={tooltipStyle} formatter={(v) => `${v?.toFixed(2)}%`} />
          <Legend wrapperStyle={{ color: "#8891a0", fontSize: 12 }} />
          <Line
            type="monotone"
            dataKey="marketShare"
            stroke={CHART_COLORS.marketShare}
            strokeWidth={2}
            name="Market Share"
            dot={{ r: 3 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}