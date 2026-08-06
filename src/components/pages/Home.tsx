import React from 'react'
import { StockResume } from '../../components'

export const Home = () => {
    return (
        <div className="p-4">
            <div>
                <h1 className="text-2xl font-bold text-black text-center">Olá! Bem vindo ao Insume, um controle de seus insumos domésticos!</h1>
            </div>
        
            <main className="mt-4 p-4 rounded-lg bg-white shadow-lg">
                <StockResume />
            </main>
        </div>
    )
}