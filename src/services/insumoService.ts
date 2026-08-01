import { api } from "./api";

export interface insumoServiceData {
    insumo: object;
}

export interface CreateInsumoDTO {
    nome: string;
    quantidade: number;
    unidadeMedida: string;
    estoqueMinimo: number;
    dataValidade: string;
    marca: string;
    observação: string;
    idCategoria: number | string;
    idUsuario: number | string;
}

export const insumoService = {
  async getInsumos(): Promise<insumoServiceData> {
    return api("/api/Insumo", {
        method: "GET",
        skipAuth: false
    });
  },

  async createInsumo(data: CreateInsumoDTO){
    return api("/api/Insumo", {
        method: "POST",
        body: data,
        skipAuth: false
    });
  }
}