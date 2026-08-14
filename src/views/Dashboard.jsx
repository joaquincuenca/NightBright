import React from "react";
import { useDashboardViewModel } from "../viewmodels/useDashboardViewModel";

import YearRangeFilter from "./components/YearRangeFilter";
import KpiCards from "./components/KpiCards";
import HouseholdChart from "./components/HouseholdChart";
import DemandChart from "./components/DemandChart";
import SupplyChart from "./components/SupplyChart";
import GapCapacityChart from "./components/GapCapacityChart";
import MarketShareChart from "./components/MarketShareChart";
import SurveyChart from "./components/SurveyChart";

export default function Dashboard() {
  const vm = useDashboardViewModel();

  return (
    <div className="min-h-screen p-6" style={{ background: "var(--bg)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <p className="font-mono text-xs tracking-widest uppercase mb-2" style={{ color: "var(--glow-deep)" }}>
            Paint &amp; Glow Co. — Feasibility Study
          </p>
          <h1 className="font-display text-4xl font-semibold glow-underline mb-4" style={{ color: "var(--ink)" }}>
            NightBright Dashboard
          </h1>
          <p className="mt-3" style={{ color: "var(--ink-muted)" }}>
            Interactive visualization of demand, supply, and market opportunity, 2021–2030.
          </p>
        </div>

        <YearRangeFilter
          minYear={vm.minYear}
          maxYear={vm.maxYear}
          minYearBound={vm.minYearBound}
          maxYearBound={vm.maxYearBound}
          onMinChange={vm.handleMinYearChange}
          onMaxChange={vm.handleMaxYearChange}
          onReset={vm.resetRange}
        />

        <KpiCards kpis={vm.kpis} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <HouseholdChart data={vm.filteredData} />
          <DemandChart data={vm.filteredData} />
          <SupplyChart data={vm.filteredData} />
          <GapCapacityChart data={vm.filteredData} />
          <MarketShareChart data={vm.marketShareData} />
          <SurveyChart data={vm.surveyChartData} avgLitersPerHousehold={vm.avgLitersPerHousehold} />
        </div>

        <div
          className="mt-10 text-center text-xs font-mono pt-4"
          style={{ color: "var(--ink-muted)", borderTop: "1px solid var(--border)" }}
        >
          Data sourced from "NightBright Paint Feasibility Manuscript" (2026)
        </div>
      </div>
    </div>
  );
}