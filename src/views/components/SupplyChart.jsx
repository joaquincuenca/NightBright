import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { COMPETITORS, CHART_COLORS } from "../../models/dashboardData";

const tooltipStyle = {
  background: "#141821",
  border: "1px solid #262d3a",
  borderRadius: 8,
  color: "#eaedf2",
};

export default function SupplyChart({ data }) {
  return (
    <div className="card-glow p-4">
      <h2 className="font-display text-base font-semibold mb-3" style={{ color: "var(--text)" }}>
        Supply by Competitor
      </h2>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#262d3a" />
          <XAxis dataKey="year" stroke="#8891a0" tick={{ fill: "#8891a0", fontSize: 12 }} />
          <YAxis stroke="#8891a0" tick={{ fill: "#8891a0", fontSize: 12 }} />
          <Tooltip contentStyle={tooltipStyle} formatter={(v) => v.toLocaleString()} />
          <Legend wrapperStyle={{ color: "#8891a0", fontSize: 12 }} />
          {COMPETITORS.map((comp, idx) => (
            <Bar key={comp} dataKey={comp} stackId="a" fill={CHART_COLORS.competitors[idx]} name={comp} />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}