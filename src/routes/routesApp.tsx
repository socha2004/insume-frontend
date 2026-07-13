import { Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";

import { Home } from "../components"
import { LoginPage } from "../components"

export const routesApp = () => {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route element={<PrivateRoute />}>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Route>
        </Routes>
    )
}