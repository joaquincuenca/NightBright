import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { CHART_COLORS } from "../../models/dashboardData";

const tooltipStyle = {
  background: "#ffffff",
  border: "1px solid #dce6dd",
  borderRadius: 8,
  color: "#16201b",
};

export default function HouseholdChart({ data }) {
  return (
    <div className="card-glow p-4">
      <h2 className="font-display text-base font-semibold mb-3" style={{ color: "var(--ink)" }}>
        Household Population
      </h2>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#dce6dd" />
          <XAxis dataKey="year" stroke="#5c6b60" tick={{ fill: "#5c6b60", fontSize: 12 }} />
          <YAxis stroke="#5c6b60" tick={{ fill: "#5c6b60", fontSize: 12 }} />
          <Tooltip contentStyle={tooltipStyle} formatter={(v) => v.toLocaleString()} />
          <Legend wrapperStyle={{ color: "#5c6b60", fontSize: 12 }} />
          <Line
            type="monotone"
            dataKey="households"
            stroke={CHART_COLORS.households}
            name="Total Households"
            strokeWidth={2}
            dot={{ r: 3 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}