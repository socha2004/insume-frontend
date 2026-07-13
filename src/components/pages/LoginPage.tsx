import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from '../../context/AuthContext';

export const LoginPage = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const from = (location.state as any)?.from?.pathname || "/";

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        try {
            await login(email, password);
            navigate(from, { replace: true });
        } catch (err) {
            setError("Email ou senha inválidos");
        }
    }
    return (
        <div className="h-screen flex items-center justify-center">
            <div className="flex items-center flex-col gap-4">
                <h1>Login no Sistema</h1>
                <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {error && <p>{error}</p>}
                    <button type="submit">Login</button>
                    <Link to="/register">Ainda não tem uma conta? Cadastre-se</Link>
                </form>
            </div>

        </div>
    )
}