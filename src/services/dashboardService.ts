import {api} from './api'

export interface dashboardServiceData {
    insumo: object;
}

export const dashboardService = {
  async getDashboard(): Promise<dashboardServiceData> {
    return api("/api/Insumo", {
        method: "GET",
        skipAuth: false
    });
  },

  async getCategorias(): Promise<dashboardServiceData> {
    return api("/api/Categoria", {
        method: "GET",
        skipAuth: false
    });
  }
};