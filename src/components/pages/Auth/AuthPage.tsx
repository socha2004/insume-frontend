import { Outlet } from "react-router-dom";
import boxIcon from "../../../assets/login/box-icon.svg";
import foodIcon from "../../../assets/login/food-icon.svg";
import menuIcon from "../../../assets/login/menu-icon.svg";
import graphIcon from "../../../assets/login/graphic-icon.svg";

export const AuthPage = () => {
    return (
        <div className="flex flex-col h-screen lg:flex-row  items-center justify-center  ">
            <div className="flex justify-between items-center flex-wrap gap-8 w-full h-[40%] lg:h-full">
                <div className="m-3 lg:ml-8">
                    <div className="flex flex-col gap-2 items-center lg:items-start">
                        <div className="flex items-center gap-2">
                            <img src={boxIcon} alt="Box Icon" width={50} height={50} />
                            <h1 className="text-5xl font-bold">Insume</h1>
                        </div>
                        <br />
                        <p className="text-center text-2xl lg:text-left">Seu estoque doméstico, organizado em um só lugar.</p>
                    </div>

                    <br />
                    <ul className="hidden lg:block  text-gray-600">
                        <li className="flex items-center gap-2">
                            <img src={foodIcon} alt="Food Icon" width={30} height={30} />
                            Controle de insumos
                        </li>
                        <br />
                        <li className="flex items-center gap-2">
                            <img src={menuIcon} alt="Menu Icon" width={30} height={30} />
                            Registro de Categorias
                        </li>
                        <br />
                        <li className="flex items-center gap-2">
                            <img src={graphIcon} alt="Graph Icon" width={30} height={30} />
                            Resumo de estoque
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex w-full lg:w-[40%] bg-cyan-800  lg:items-center lg:justify-center justify-start flex-col gap-4 p-4 h-full shadow-xl/30 shadow-black">
                <Outlet />
            </div>
        </div>
    )
}