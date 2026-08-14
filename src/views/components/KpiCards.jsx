import React from "react";

const CARDS = [
  { key: "demand", label: "Demand, latest year", unit: "liters", accent: "var(--glow-deep)" },
  { key: "totalSupply", label: "Total supply", unit: "liters", accent: "var(--blue)" },
  { key: "gap", label: "Demand–supply gap", unit: "liters", accent: "var(--amber)" },
  { key: "marketShare", label: "Market share", unit: "of total gap", accent: "var(--rose)", isPercent: true },
];

export default function KpiCards({ kpis }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      {CARDS.map((card) => {
        const value = kpis[card.key];
        const display =
          value == null ? "N/A" : card.isPercent ? `${value.toFixed(2)}%` : value.toLocaleString();

        return (
          <div key={card.key} className="card-glow p-4" style={{ borderTop: `3px solid ${card.accent}` }}>
            <p className="text-xs uppercase tracking-wide mb-1" style={{ color: "var(--ink-muted)" }}>
              {card.label}
            </p>
            <p className="font-mono text-2xl font-semibold" style={{ color: "var(--ink)" }}>
              {display}
            </p>
            <p className="text-xs mt-1" style={{ color: "var(--ink-muted)" }}>
              {card.unit}
            </p>
          </div>
        );
      })}
    </div>
  );
}