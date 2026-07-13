import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface Usuario {
  id: string;
  nome: string;
  email: string;
}

interface AuthContextData {
  usuario: Usuario | null;
  isAuthenticated: boolean;
  loading: boolean; // importante pra saber se ainda tá checando o auth inicial
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextData | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [loading, setLoading] = useState(true);

  // Ao montar a aplicação, tenta recuperar sessão salva
  useEffect(() => {
    async function loadStoredAuth() {
      const token = localStorage.getItem("@Insume:token");
      const storedUser = localStorage.getItem("@Insume:user");

      if (token && storedUser) {
        // Aqui você pode validar o token com a API se quiser garantir que ainda é válido
        setUsuario(JSON.parse(storedUser));
      }
      setLoading(false);
    }

    loadStoredAuth();
  }, []);

  async function login(email: string, password: string) {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/session`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error("Credenciais inválidas");
    }

    const { token, user: loggedUser } = await response.json();

    localStorage.setItem("@Insume:token", token);
    localStorage.setItem("@Insume:user", JSON.stringify(loggedUser));

    setUsuario(loggedUser);
  }

  function logout() {
    localStorage.removeItem("@Insume:token");
    localStorage.removeItem("@Insume:user");
    setUsuario(null);
  }

  return (
    <AuthContext.Provider
      value={{ usuario, isAuthenticated: !!usuario, loading, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// Hook customizado pra facilitar o consumo
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
}