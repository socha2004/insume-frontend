import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AuthProvider } from './context/AuthContext.tsx'
import { BrowserRouter } from 'react-router-dom'
import { routesApp } from "./routes/routesApp.tsx"
// import App from './App.tsx'
import './styles/index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <BrowserRouter>
      <AuthProvider>
        {routesApp()}
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
