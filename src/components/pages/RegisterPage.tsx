import React from 'react';
import { Link } from 'react-router-dom';

export const RegisterPage = () => {
    return (
        <div className="h-screen flex items-center justify-center">
            <div className="flex items-center flex-col gap-4">
                <h1>Cadastro no Sistema</h1>
                <form className="flex flex-col gap-2">
                    <input type="text" placeholder="Nome" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Senha" />
                    <button type="submit">Cadastrar</button>
                    <Link to="/login">Já tem uma conta? Faça login</Link>
                </form>
            </div>
        </div>
    )
}