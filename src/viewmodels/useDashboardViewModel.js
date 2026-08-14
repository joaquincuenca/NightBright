import { useMemo, useState, useCallback } from "react";
import {
  fullDashboardData,
  surveyChartData,
  AVG_LITERS_PER_HOUSEHOLD,
  MIN_YEAR,
  MAX_YEAR,
} from "../models/dashboardData";

/**
 * VIEWMODEL
 * Owns all UI state (the year range) and exposes everything the
 * View needs, already derived. The View should never touch the
 * Model directly or compute anything itself.
 */
export function useDashboardViewModel() {
  const [minYear, setMinYear] = useState(MIN_YEAR);
  const [maxYear, setMaxYear] = useState(MAX_YEAR);

  const filteredData = useMemo(
    () => fullDashboardData.filter((d) => d.year >= minYear && d.year <= maxYear),
    [minYear, maxYear]
  );

  const marketShareData = useMemo(
    () => filteredData.filter((d) => d.marketShare !== null),
    [filteredData]
  );

  const latest = filteredData[filteredData.length - 1] ?? fullDashboardData[fullDashboardData.length - 1];

  const kpis = useMemo(
    () => ({
      demand: latest.nightBrightDemand ?? latest.epoxyDemand,
      totalSupply: latest.totalSupply,
      gap: latest.gap,
      marketShare: latest.marketShare,
    }),
    [latest]
  );

  const handleMinYearChange = useCallback(
    (value) => {
      const val = Number(value);
      if (val <= maxYear) setMinYear(val);
    },
    [maxYear]
  );

  const handleMaxYearChange = useCallback(
    (value) => {
      const val = Number(value);
      if (val >= minYear) setMaxYear(val);
    },
    [minYear]
  );

  const resetRange = useCallback(() => {
    setMinYear(MIN_YEAR);
    setMaxYear(MAX_YEAR);
  }, []);

  return {
    minYear,
    maxYear,
    minYearBound: MIN_YEAR,
    maxYearBound: MAX_YEAR,
    filteredData,
    marketShareData,
    surveyChartData,
    avgLitersPerHousehold: AVG_LITERS_PER_HOUSEHOLD,
    kpis,
    handleMinYearChange,
    handleMaxYearChange,
    resetRange,
  };
}
