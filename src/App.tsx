import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { HomePage } from './pages/client/HomePage';
import { AboutPage } from './pages/client/AboutPage';
import { ContactPage } from './pages/client/ContactPage';
import { LoginPage } from './pages/login/LoginPage';
import { AdminPage } from './pages/admin/AdminPage';
import type { JSX } from 'react';
import { PublicLayout } from './components/layout/PublicLayout';
import { AdminLayout } from './components/layout/AdminLayout';

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { user, loading } = useAuth();
  if (loading) return <div className="text-center mt-10">Cargando...</div>;
  return user ? children : <Navigate to="/login" />;
};

function AppRoutes() {
  return (
    <Routes>
      {/* Rutas públicas con layout (header/footer) */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/nosotros" element={<AboutPage />} />
        <Route path="/contacto" element={<ContactPage />} />
      </Route>

      {/* Ruta de login sin layout adicional (puedes ponerla aparte) */}
      <Route path="/login" element={<LoginPage />} />

      {/* Rutas de admin con layout propio sin header/footer público */}
      <Route element={<AdminLayout />}>
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminPage />
            </ProtectedRoute>
          }
        />
      </Route>
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;