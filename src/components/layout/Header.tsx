// src/components/layout/Header.tsx
import { NavLink } from 'react-router-dom';

export const Header = () => {
    return (
        <header className="bg-dark border-b border-gray-dark h-13 px-2 flex items-center justify-around">
            <nav className="flex gap-5">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `text-[10px] tracking-widest ${isActive ? 'text-gold border-b border-gold' : 'text-gray-medium'}`
                    }
                >
                    COLECCIÓN
                </NavLink>
                <NavLink
                    to="/nosotros"
                    className={({ isActive }) =>
                        `text-[10px] tracking-widest ${isActive ? 'text-gold border-b border-gold' : 'text-gray-medium'}`
                    }
                >
                    NOSOTROS
                </NavLink>
                <NavLink
                    to="/contacto"
                    className={({ isActive }) =>
                        `text-[10px] tracking-widest ${isActive ? 'text-gold border-b border-gold' : 'text-gray-medium'}`
                    }
                >
                    CONTACTO
                </NavLink>
            </nav>
            <div className="text-[13px] tracking-[0.18em] text-white font-medium sm:text-[20px]">NUBE DE HILOS</div>
        </header>
    );
};