import React from "react";

export default function YearRangeFilter({
  minYear,
  maxYear,
  minYearBound,
  maxYearBound,
  onMinChange,
  onMaxChange,
  onReset,
}) {
  return (
    <div className="card-glow p-5 mb-6">
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        <div className="flex-1">
          <label className="block text-sm font-medium mb-2" style={{ color: "var(--ink)" }}>
            Year range —{" "}
            <span className="font-mono" style={{ color: "var(--glow-deep)" }}>
              {minYear}–{maxYear}
            </span>
          </label>

          <div className="flex items-center gap-4 mt-1">
            <span className="font-mono text-xs w-8" style={{ color: "var(--ink-muted)" }}>
              From
            </span>
            <input
              type="range"
              min={minYearBound}
              max={maxYearBound}
              value={minYear}
              onChange={(e) => onMinChange(e.target.value)}
              className="w-full h-1.5 rounded-lg appearance-none cursor-pointer"
              style={{ background: "var(--surface-alt)" }}
            />
            <span className="font-mono text-sm w-12 text-center" style={{ color: "var(--glow-deep)" }}>
              {minYear}
            </span>
          </div>

          <div className="flex items-center gap-4 mt-2">
            <span className="font-mono text-xs w-8" style={{ color: "var(--ink-muted)" }}>
              To
            </span>
            <input
              type="range"
              min={minYearBound}
              max={maxYearBound}
              value={maxYear}
              onChange={(e) => onMaxChange(e.target.value)}
              className="w-full h-1.5 rounded-lg appearance-none cursor-pointer"
              style={{ background: "var(--surface-alt)" }}
            />
            <span className="font-mono text-sm w-12 text-center" style={{ color: "var(--glow-deep)" }}>
              {maxYear}
            </span>
          </div>
        </div>

        <button
          onClick={onReset}
          className="px-4 py-2 rounded-md text-sm font-medium transition-colors"
          style={{
            background: "var(--surface-alt)",
            color: "var(--glow-deep)",
            border: "1px solid var(--border)",
          }}
        >
          Reset range
        </button>
      </div>
    </div>
  );
}