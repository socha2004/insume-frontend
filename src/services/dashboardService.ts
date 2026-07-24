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
};