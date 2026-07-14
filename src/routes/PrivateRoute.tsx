import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Navbar } from "../components";

export function PrivateRoute() {
  const { isAuthenticated, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <div>Carregando...</div>; // ou um spinner/skeleton
  }

  if (!isAuthenticated) {
    // "state" guarda de onde o usuário veio, útil pra redirecionar de volta após o login
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return (
    <>
      <Navbar/>
      <Outlet />
    </>
  ) ;
}