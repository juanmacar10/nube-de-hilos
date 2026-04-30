// src/components/layout/Footer.tsx
import { WHATSAPP_NUMBER } from '../../config/constants';

export const Footer = () => {
    const handleWhatsApp = () => {
        const message = 'Hola, vengo de la página web de Nube de Hilo. Me gustaría hacer una consulta.';
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
    };

    const handleInstagram = () => {
        window.open('https://www.instagram.com/juanmacar15', '_blank');
    };

    return (
        <footer className="bg-dark border-t border-gray-dark py-4 px-3 sm:px-6 flex justify-between items-center text-xs sm:text-sm">
            <span className="tracking-[0.15em] text-white font-medium">NUBE DE HILO</span>
            <div className="flex gap-3">
                <button
                    onClick={handleInstagram}
                    className="bg-transparent text-gray-500 border rounded-md px-2 py-1 text-[11px] tracking-wide hover:text-gold hover:border-gold transition cursor-pointer"
                >
                    Instagram
                </button>
                <button
                    onClick={handleWhatsApp}
                    className="bg-transparent text-gray-500 border border-gray-500 rounded-md px-2 py-1 text-[11px] tracking-wide hover:text-gold hover:border-gold transition cursor-pointer"
                >
                    WhatsApp
                </button>
            </div>
        </footer>
    );
};