import { Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";

import { Home, Stock, LoginPage } from "../components"
import { RegisterPage } from "../components/pages/RegisterPage";

export const routesApp = () => {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            <Route element={<PrivateRoute />}>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Navigate to="/" />} />

                <Route path="/stock" element={<Stock />} />
                <Route path="/new-insume" element={} />
            </Route>
        </Routes>
    )
}