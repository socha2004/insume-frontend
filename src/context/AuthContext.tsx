import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface Usuario {
  id: string;
  nome: string;
  email: string;
}

interface AuthContextData {
  usuario: Usuario | null;
  isAuthenticated: boolean;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (nome: string, email: string, password: string) => Promise<void>;
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

  async function login(email: string, senha: string) {
    const response = await fetch(import.meta.env.VITE_AUTH_ENDPOINT + "/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, senha }),
    });

    if (!response.ok) {
      throw new Error("Credenciais inválidas");
    }

    const data = await response.json();
    // data = { id, nome, email, token }

    const { token, ...loggedUser } = data;
    // loggedUser = { id: 1, nome: "Eugenio Socha", email: "eugenio@email.com" }

    localStorage.setItem("@Insume:token", token);
    localStorage.setItem("@Insume:user", JSON.stringify(loggedUser));

    setUsuario(loggedUser);
  }

  async function register(nome: string, email: string, password: string) {
    const response = await fetch(import.meta.env.VITE_AUTH_ENDPOINT + "/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome, email, password }),
    });

    if (!response.ok) {
      // tenta ler a mensagem de erro que a API mandar (ex: "email já cadastrado")
      const errorData = await response.json().catch(() => null);
      throw new Error(errorData?.message || "Não foi possível criar a conta");
    }

    const data = await response.json();
    const { token, ...loggedUser } = data;

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
      value={{ usuario, isAuthenticated: !!usuario, loading, login, register, logout }}
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