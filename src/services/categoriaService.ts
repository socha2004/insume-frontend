import { api } from "./api";

export interface categoriaServiceData {
    categoria: object;
}

export interface CreateCategoriaDTO {
    titulo: string;
    UsuarioId: number | string;
}

export const categoriaService = {
    async getCategoria() : Promise<categoriaServiceData> {
        return api("/api/Categoria", {
            method: "GET",
            skipAuth: false
        });
    },   

    async createCategoria(data: CreateCategoriaDTO) {
        return api("/api/Categoria", {
            method: "POST",
            body: data,
            skipAuth: false
        });
    }
}
