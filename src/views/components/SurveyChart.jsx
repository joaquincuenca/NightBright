import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { CHART_COLORS } from "../../models/dashboardData";

const tooltipStyle = {
  background: "#141821",
  border: "1px solid #262d3a",
  borderRadius: 8,
  color: "#eaedf2",
};

export default function SurveyChart({ data, avgLitersPerHousehold }) {
  return (
    <div className="card-glow p-4">
      <h2 className="font-display text-base font-semibold mb-3" style={{ color: "var(--text)" }}>
        Survey: Willingness to Buy
      </h2>
      <div className="flex justify-center">
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              outerRadius={80}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={entry.name} fill={CHART_COLORS.survey[index % CHART_COLORS.survey.length]} />
              ))}
            </Pie>
            <Tooltip contentStyle={tooltipStyle} formatter={(v) => `${v} respondents`} />
            <Legend wrapperStyle={{ color: "#8891a0", fontSize: 12 }} />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <p className="text-center text-sm mt-1" style={{ color: "var(--text-muted)" }}>
        Average purchase: <span className="font-mono">{avgLitersPerHousehold} liters</span> per household per year
      </p>
    </div>
  );
}