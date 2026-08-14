import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { CHART_COLORS } from "../../models/dashboardData";

const tooltipStyle = {
  background: "#ffffff",
  border: "1px solid #dce6dd",
  borderRadius: 8,
  color: "#16201b",
};

export default function DemandChart({ data }) {
  return (
    <div className="card-glow p-4">
      <h2 className="font-display text-base font-semibold mb-3" style={{ color: "var(--ink)" }}>
        Paint Demand — Epoxy vs NightBright
      </h2>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#dce6dd" />
          <XAxis dataKey="year" stroke="#5c6b60" tick={{ fill: "#5c6b60", fontSize: 12 }} />
          <YAxis stroke="#5c6b60" tick={{ fill: "#5c6b60", fontSize: 12 }} />
          <Tooltip contentStyle={tooltipStyle} formatter={(v) => v?.toLocaleString() ?? "N/A"} />
          <Legend wrapperStyle={{ color: "#5c6b60", fontSize: 12 }} />
          <Bar dataKey="epoxyDemand" fill={CHART_COLORS.epoxyDemand} name="Epoxy Paint Demand" radius={[3, 3, 0, 0]} />
          <Bar
            dataKey="nightBrightDemand"
            fill={CHART_COLORS.nightBrightDemand}
            name="NightBright Demand"
            radius={[3, 3, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}