import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from '../../../context/AuthContext'
import personIcon from "../../../assets/login/person.svg";
import emailIcon from "../../../assets/login/email.svg";
import passwordIcon from "../../../assets/login/password.svg";
import checkIcon from "../../../assets/login/check.svg";
import {Spinner} from "../../../components";

export const RegisterPage = () => {
    const { register } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmaSenha, setConfirmaSenha] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const from = (location.state as any)?.from?.pathname || "/";

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setLoading(true);
        try {
            if (senha !== confirmaSenha) {
                setError("As senhas não coincidem");
                return;
            }
            await register(nome, email, senha);
            navigate(from, { replace: true });
        } catch (err) {
            setError("Não foi possível criar a conta");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="flex items-center flex-col bg-white gap-4 shadow-sm p-4 w-full rounded-md">
            <h1 className="text-2xl">Cadastro no Sistema</h1>
            <hr className="w-full border-t border-gray-400" />
            <form className="flex flex-col gap-2 w-full" onSubmit={handleSubmit}>
                <label className="font-bold">Nome</label>
                <div className="flex items-center border border-gray-400 rounded-md">
                    <div className="bg-gray-200 p-2 flex items-center rounded-l-md  justify-center h-[41px]">
                        <img src={personIcon} alt="Ícone de pessoa" height={30} width={30}/>
                    </div>
                    <input required type="text" placeholder="Nome" onChange={(e) => setNome(e.target.value)} className="w-full p-2" />
                </div>

                <label className="font-bold">Email</label>
                <div className="flex items-center border border-gray-400 rounded-md">
                    <div className="bg-gray-200 p-2 flex items-center rounded-l-md  justify-center h-[41px]">
                        <img src={emailIcon} alt="Ícone de email" height={30} width={30}/>
                    </div>
                <input required type="email" placeholder="Digite seu e-mail" onChange={(e) => setEmail(e.target.value)} className="w-full p-2" />
                </div>

                <label className="font-bold">Senha</label>
                <div className="flex items-center border border-gray-400 rounded-md">
                    <div className="bg-gray-200 p-2 flex items-center rounded-l-md  justify-center h-[41px]">
                        <img src={passwordIcon} alt="Ícone de senha" height={30} width={30}/>
                    </div>
                    <input required type="password" placeholder="Crie uma senha" onChange={(e) => setSenha(e.target.value)} className="w-full p-2" />
                </div>

                <label className="font-bold">Confirmar Senha</label>
                <div className="flex items-center border border-gray-400 rounded-md">
                    <div className="bg-gray-200 p-2 flex items-center rounded-l-md  justify-center h-[41px]">
                        <img src={checkIcon} alt="Ícone de verificação" height={30} width={30}/>
                    </div>
                    <input required type="password" placeholder="Confirme sua senha" onChange={(e) => setConfirmaSenha(e.target.value)} className="w-full p-2" />
                </div>

                {error && <p className="text-red-500">{error}</p>}
                <button type="submit" className="bg-brand-success text-white py-2 px-4 rounded-md hover:bg-brand-secondary hover:text-black transition-colors">
                   {loading ? <Spinner size="w-5 h-5" color="border-white" /> : "Cadastrar"}
                </button>
                <Link to="/login" className="text-blue-500 hover:underline">
                    Já tem uma conta? Faça login
                </Link>
            </form>
        </div>
    )
}