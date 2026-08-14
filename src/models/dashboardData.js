// ============================================================
// MODEL
// Pure data + derived calculations. No React, no UI concerns.
// This is the single source of truth for the manuscript data.
// ============================================================

export const YEARS = [2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030];

export const HOUSEHOLDS = [25962, 26370, 26794, 27205, 27631, 28065, 28505, 28953, 29408, 29869];

// Epoxy demand (liters) — historical (2021-2025) + projected (2026-2030)
export const EPOXY_DEMAND = [84380, 85700, 87080, 88420, 89801, 91210, 92640, 94100, 95580, 97074];

// NightBright demand (liters) — only projected, 2026-2030
export const NIGHTBRIGHT_DEMAND = [null, null, null, null, null, 769995, 782064, 794394, 806886, 819499];

// Supply by competitor (liters) — historical then projected
export const COMPETITORS = ["Emerald", "Tanry", "Glasshauz", "TJ", "Daet Bicol"];

export const SUPPLY_DATA = {
  Emerald: [742, 764, 787, 810, 835, 860, 886, 913, 940, 968],
  Tanry: [803, 827, 852, 877, 904, 931, 959, 988, 1018, 1049],
  Glasshauz: [612, 624, 637, 649, 662, 676, 690, 704, 718, 733],
  TJ: [845, 870, 896, 923, 951, 980, 1009, 1039, 1070, 1102],
  "Daet Bicol": [505, 510, 515, 520, 526, 531, 536, 541, 547, 552],
};

// Production capacity (liters) — only projected, 2026-2030
export const CAPACITY = [null, null, null, null, null, 16224, 17035, 17887, 18781, 19720];

// Survey results
export const SURVEY_WILLINGNESS = { Yes: 122, No: 8 };
export const AVG_LITERS_PER_HOUSEHOLD = 9;

export const CHART_COLORS = {
  households: "#3b82c4",        // steady, neutral — population growth
  epoxyDemand: "#94a3a0",       // muted — the ordinary incumbent product
  nightBrightDemand: "#1f9d4c", // NightBright's signature color, deep enough to read on white
  gap: "#e8a23d",
  capacity: "#1f9d4c",          // NightBright's own capacity — stays on-brand
  marketShare: "#e15873",
  survey: ["#1f9d4c", "#dce6dd"],
  competitors: ["#e15873", "#e8a23d", "#c9a227", "#3b82c4", "#8b5cf6"],
};

/** Sum every competitor's supply for a given year index. */
function totalSupplyForYear(yearIndex) {
  return COMPETITORS.reduce((sum, comp) => sum + SUPPLY_DATA[comp][yearIndex], 0);
}

export const TOTAL_SUPPLY = YEARS.map((_, i) => totalSupplyForYear(i));

export const GAP = YEARS.map((_, i) =>
  NIGHTBRIGHT_DEMAND[i] === null ? null : NIGHTBRIGHT_DEMAND[i] - TOTAL_SUPPLY[i]
);

export const MARKET_SHARE = YEARS.map((_, i) =>
  CAPACITY[i] === null || GAP[i] === null ? null : (CAPACITY[i] / GAP[i]) * 100
);

/**
 * One denormalized row per year, ready for Recharts.
 * This is the shape every chart component consumes.
 */
export const fullDashboardData = YEARS.map((year, idx) => {
  const row = {
    year,
    households: HOUSEHOLDS[idx],
    epoxyDemand: EPOXY_DEMAND[idx],
    nightBrightDemand: NIGHTBRIGHT_DEMAND[idx],
    totalSupply: TOTAL_SUPPLY[idx],
    gap: GAP[idx],
    capacity: CAPACITY[idx],
    marketShare: MARKET_SHARE[idx],
  };
  COMPETITORS.forEach((comp) => {
    row[comp] = SUPPLY_DATA[comp][idx];
  });
  return row;
});

export const surveyChartData = [
  { name: "Willing to buy", value: SURVEY_WILLINGNESS.Yes },
  { name: "Not willing", value: SURVEY_WILLINGNESS.No },
];

export const MIN_YEAR = YEARS[0];
export const MAX_YEAR = YEARS[YEARS.length - 1];
