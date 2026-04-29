export const Footer = () => {
    return (
        <footer className="bg-dark border-t border-gray-dark py-3.5 px-6 flex justify-between items-center text-xs">
            <span className="tracking-[0.15em] text-white font-medium">NUBE DE HILO</span>
            <span className="text-[10px] text-gray-500">Hecho con amor · Colombia</span>
            <div className="flex gap-3">
                <a href="https://www.instagram.com/nubedehilos/" target="_blank" rel="noopener noreferrer" className="bg-transparent text-gray-500 border rounded-md px-2 py-1 text-[11px] tracking-wide hover:text-gold hover:border-gold transition cursor-pointer">Instagram</a>

                <a href="https://wa.me/573123456789" target="_blank" rel="noopener noreferrer" className="bg-transparent text-gray-500 border border-gray-500 rounded-md px-2 py-1 text-[11px] tracking-wide hover:text-gold hover:border-gold transition cursor-pointer">WhatsApp</a>
            </div>
        </footer>
    );
};