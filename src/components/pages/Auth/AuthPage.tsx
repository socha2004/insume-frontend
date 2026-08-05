import {Outlet} from "react-router-dom";
import boxIcon from "../../../assets/login/box-icon.svg";
import foodIcon from "../../../assets/login/food-icon.svg";
import menuIcon from "../../../assets/login/menu-icon.svg";
import graphIcon from "../../../assets/login/graphic-icon.svg";

export const AuthPage = () => {
    return (
        <div className="h-screen flex items-center justify-center ">
            <div className="flex justify-between items-center flex-wrap gap-8 w-full h-full">
                <div className="ml-8">
                    <div className="flex items-center gap-2">
                        <img src={boxIcon} alt="Box Icon" width={50} height={50} />
                        <h1 className="text-5xl font-bold">Insume</h1>
                    </div>
                    <br />
                    <p>Seu estoque doméstico, organizado em um só lugar.</p>
                    <br />
                    <ul className="text-gray-600">
                        <li className="flex items-center gap-2">
                            <img src={foodIcon} alt="Food Icon" width={30} height={30} />
                            Controle de produtos
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
            <div className="flex bg-cyan-800 items-center justify-center flex-col gap-4 shadow-sm p-4 w-[40%] h-full">
                <Outlet />
            </div>
        </div>
    )
}