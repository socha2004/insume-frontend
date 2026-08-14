import {dashboardService, type dashboardServiceData } from '../services/dashboardService'
import { useState, useEffect } from "react";

interface UseDashboardResult {
  data: dashboardServiceData | null;
  loading: boolean;
  error: string | null;
  categorias: dashboardServiceData | null;
  refetch: () => void;
}

export function useDashboard(): UseDashboardResult {
  const [data, setData] = useState<dashboardServiceData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [categorias, setCategorias] = useState<dashboardServiceData | null>(null);

  async function fetchData() {
    try {
      setLoading(true);
      setError(null);
      const result = await dashboardService.getDashboard();
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro ao carregar dados");
    } finally {
      setLoading(false);
    }
  }

  async function fetchCategorias() {
    try {
      setLoading(true);
      setError(null);
      const result = await dashboardService.getCategorias();
      setCategorias(result.length > 0 ? result : null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro ao carregar dados");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
    fetchCategorias();
  }, []);

  return { data, loading, error, refetch: fetchData, categorias };
}