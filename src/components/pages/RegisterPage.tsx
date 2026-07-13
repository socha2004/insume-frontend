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
            <div className="flex items-center flex-col gap-4">
                <h1>Cadastro no Sistema</h1>
                <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Nome" onChange={(e) => setNome(e.target.value)} />
                    <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Senha" onChange={(e) => setSenha(e.target.value)} />
                    {error && <p>{error}</p>}
                    <button type="submit">Cadastrar</button>
                    <Link to="/login">Já tem uma conta? Faça login</Link>
                </form>
            </div>
        </div>
    )
}