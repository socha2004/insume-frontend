import React from "react";

export const LoginPage = () => {
    return (
        <div>
            <h1>Login no Sistema</h1>

            <div>
                <form>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button type="submit">Login</button>
                    <a href="/register">Ainda não tem uma conta? Cadastre-se</a>
                </form>
            </div>

        </div>
    )
}