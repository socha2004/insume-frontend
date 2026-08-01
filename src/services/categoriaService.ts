import { api } from "./api";

export interface categoriaServiceData {
    categoria: object;
}

export interface CreateCategoriaDTO {
    titulo: string;
    UsuarioId: number | string;
}

export interface UpdateCategoriaDTO {
    titulo: string;
}

export const categoriaService = {
    async getCategoria() : Promise<categoriaServiceData> {
        return api("/api/Categoria", {
            method: "GET",
            skipAuth: false
        });
    },   
    async getCategoriaId(id) : Promise<categoriaServiceData> {
        return api(`/api/Categoria/${id}`, {
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
    },

    async updateCategoria(id: number, data: UpdateCategoriaDTO) {
        return api(`/api/Categoria/${id}`, {
            method: "PUT",
            body: data,
            skipAuth: false
        });
    },

    async deleteCategoria(id: number) {
        return api(`/api/Categoria/${id}`, {
            method: "DELETE",
            skipAuth: false
        });
    }
}
