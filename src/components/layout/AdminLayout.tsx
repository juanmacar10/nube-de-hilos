import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/config';

export const AdminLayout = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        await signOut(auth);
        navigate('/login');
    };

    return (
        <div className="min-h-screen bg-offwhite">
            {/* Top bar */}
            <div className="bg-dark h-11 px-4 flex items-center justify-between border-b border-gray-dark">
                <div className="flex items-center gap-2.5">
                    <div className="w-6.5 h-6.5 bg-gold rounded-full flex items-center justify-center text-sm font-medium text-soft-black">A</div>
                    <span className="text-sm font-medium text-white tracking-wide">NUBE DE HILO</span>
                    <span className="text-[10px] text-gray-500 bg-darkgray px-2 py-0.5 rounded border border-gray-dark">admin</span>
                </div>
                <div className="flex gap-3.5 items-center">
                    <span className="text-[10px] text-gray-medium cursor-pointer hover:text-gold">Ver página</span>
                    <button onClick={handleLogout} className="text-[10px] text-gold cursor-pointer">Cerrar sesión</button>
                </div>
            </div>

            <div className="grid grid-cols-[150px_1fr]">
                {/* Sidebar */}
                <aside className="bg-gray-50 border-r border-gray-light p-3 flex flex-col gap-1">
                    <NavLink
                        to="/admin"
                        end
                        className={({ isActive }) =>
                            `flex items-center gap-2 px-3 py-2 rounded-md text-xs ${isActive ? 'bg-dark text-gold' : 'text-gray-700 hover:bg-gray-100'}`
                        }
                    >
                        <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                            <rect x="1" y="1" width="6" height="6" rx="1" fill="currentColor" />
                            <rect x="9" y="1" width="6" height="6" rx="1" fill="currentColor" />
                            <rect x="1" y="9" width="6" height="6" rx="1" fill="currentColor" />
                            <rect x="9" y="9" width="6" height="6" rx="1" fill="currentColor" />
                        </svg>
                        Mochilas
                    </NavLink>
                    <NavLink
                        to="/admin/ofertas"
                        className={({ isActive }) =>
                            `flex items-center gap-2 px-3 py-2 rounded-md text-xs ${isActive ? 'bg-dark text-gold' : 'text-gray-700 hover:bg-gray-100'}`
                        }
                    >
                        <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                            <path d="M2 8h3l2-5 3 9 2-4h2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Ofertas
                    </NavLink>
                </aside>

                {/* Main content */}
                <main className="p-4">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};