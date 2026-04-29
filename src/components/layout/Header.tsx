// src/components/layout/Header.tsx
import { NavLink } from 'react-router-dom';

export const Header = () => {
    return (
        <header className="bg-dark border-b border-gray-dark h-13 px-6 flex items-center justify-around">
            <nav className="flex gap-5">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `text-[10px] tracking-widest ${isActive ? 'text-gold' : 'text-gray-medium'}`
                    }
                >
                    COLECCIÓN
                </NavLink>
                <NavLink
                    to="/nosotros"
                    className={({ isActive }) =>
                        `text-[10px] tracking-widest ${isActive ? 'text-gold' : 'text-gray-medium'}`
                    }
                >
                    NOSOTROS
                </NavLink>
                <NavLink
                    to="/contacto"
                    className={({ isActive }) =>
                        `text-[10px] tracking-widest ${isActive ? 'text-gold' : 'text-gray-medium'}`
                    }
                >
                    CONTACTO
                </NavLink>
            </nav>
            <div className="text-lg tracking-[0.18em] text-white font-medium">NUBE DE HILO</div>
        </header>
    );
};