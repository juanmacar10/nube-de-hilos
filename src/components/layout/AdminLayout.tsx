import { Outlet } from 'react-router-dom';

export const AdminLayout = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-dark text-white py-3 px-6 flex justify-between items-center">
                <span className="font-medium tracking-wide">Panel Nube de Hilo</span>
                {/* Aquí podrías poner un botón de logout más adelante */}
            </div>
            <main className="p-6">
                <Outlet />
            </main>
        </div>
    );
};