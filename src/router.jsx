import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


import AppLayout from "./views/AppLayout";
import LoginView from './views/auth/LoginView'

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />} />
        <Route path="auth/login" element={<LoginView />} />
        <Route path="*" element={'pagina no encontrada'} />
      </Routes>
    </BrowserRouter>
  );
}
