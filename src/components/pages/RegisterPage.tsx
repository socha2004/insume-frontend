import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from '../../context/AuthContext'

export const RegisterPage = () => {
    const { register } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");

    const from = (location.state as any)?.from?.pathname || "/";

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        try {
            await register(nome, email, senha);
            navigate(from, { replace: true });
        } catch (err) {
            setError("Não foi possível criar a conta");
        }
    }

    return (
        <div className="h-screen flex items-center justify-center">
            <div className="flex items-center flex-col gap-4 shadow-sm p-4 rounded-md">
                <h1 className="text-2xl">Cadastro no Sistema</h1>
                <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
                    <input required type="text" placeholder="Nome" onChange={(e) => setNome(e.target.value)} className="border-black p-2 rounded-md" />
                    <input required type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} className="border-black p-2 rounded-md" />
                    <input required type="password" placeholder="Senha" onChange={(e) => setSenha(e.target.value)} className="border-black p-2 rounded-md" />
                    {error && <p className="text-red-500">{error}</p>}
                    <button type="submit" className="bg-brand-success text-white py-2 px-4 rounded-md hover:bg-brand-secondary hover:text-black transition-colors">
                        Cadastrar
                    </button>
                    <Link to="/login" className="text-blue-500 hover:underline">
                        Já tem uma conta? Faça login
                    </Link>
                </form>
            </div>
        </div>
    )
}