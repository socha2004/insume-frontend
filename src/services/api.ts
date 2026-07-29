interface ApiOptions extends RequestInit {
  skipAuth?: boolean; // pra endpoints que não precisam de token, tipo login/registro
}

async function api(endpoint: string, options: ApiOptions = {}) {
  const { skipAuth, headers, ...restOptions } = options;

  const token = localStorage.getItem("@Insume:token");

  const finalHeaders: HeadersInit = {
    "Content-Type": "application/json",
    ...headers,
  };

  // equivalente ao interceptor de REQUEST do axios
  if (token && !skipAuth) {
    finalHeaders["Authorization"] = `Bearer ${token}`;
  }

  const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}${endpoint}`, {
    ...restOptions,
    body:
      restOptions.body &&
        typeof restOptions.body !== "string"
        ? JSON.stringify(restOptions.body)
        : restOptions.body,
    headers: finalHeaders,
  });

  // equivalente ao interceptor de RESPONSE do axios
  if (response.status === 401 && !skipAuth) {
    localStorage.removeItem("@Insume:token");
    localStorage.removeItem("@Insume:user");
    window.location.href = "/login";
    throw new Error("Sessão expirada");
  }

  if (!response.ok) {
    const errorData = await response.json().catch(() => null);
    throw new Error(errorData?.mensagem || "Erro na requisição");
  }

  // se a resposta não tiver corpo (ex: 204 No Content), evita erro no .json()
  const contentType = response.headers.get("content-type");
  if (contentType && contentType.includes("application/json")) {
    return response.json();
  }

  return null;
}

export { api };