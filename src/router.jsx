import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


import AppLayout from "./views/AppLayout";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />} />

        <Route path="*" element={'pagina no encontrada'} />
      </Routes>
    </BrowserRouter>
  );
}
