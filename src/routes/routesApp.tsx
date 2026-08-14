import { Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";

import { PrivacyPage, Home, Stock, LoginPage, NewInsume, Category, NewCategory, EditCategory, DeleteCategory, DeleteInsumo, AuthPage } from "../components"
import { EditInsumo } from "../components/pages/Insumo/EditInsumo";
import { RegisterPage } from "../components/pages/Auth/RegisterPage";


export const routesApp = () => {
    return (
        <Routes>
            <Route element={<AuthPage />}>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
            </Route>
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route element={<PrivateRoute />}>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Navigate to="/" />} />

                <Route path="/stock" element={<Stock />} />
                <Route path="/new-insume" element={<NewInsume />} />

                <Route path="/category" element={<Category />} />
                <Route path="/new-category" element={<NewCategory />} />
                <Route path="/edit-category/:id" element={<EditCategory />} />
                <Route path="/delete-category/:id" element={<DeleteCategory />} />

                <Route path="/edit-insume/:id" element={<EditInsumo />} />

                <Route path="/delete-insume/:id" element={<DeleteInsumo />} />
            </Route>
        </Routes>
    )
}