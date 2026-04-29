// src/pages/ContactPage.tsx
import { WHATSAPP_NUMBER } from '../../config/constants';

export const ContactPage = () => {
    const handleWhatsApp = () => {
        const message = 'Hola, vengo de la página web de Nube de Hilo. Me gustaría hacer una consulta.';
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
    };

    const handleInstagram = () => {
        window.open('https://instagram.com/tu_perfil', '_blank');
    };

    return (
        <div className="bg-offwhite overflow-hidden shadow-sm">
            {/* Hero */}
            <div className="bg-dark text-center py-10 px-6 border-b border-gray-dark">
                <p className="text-[10px] text-gold tracking-[0.2em] mb-2">CONTÁCTANOS</p>
                <h1 className="text-2xl font-medium text-white leading-tight tracking-wide mb-2">
                    Hablemos por<br /><span className="text-gold">WhatsApp</span>
                </h1>
                <div className="w-8 h-px bg-gold mx-auto my-3" />
                <p className="text-xs text-gray-medium max-w-xs mx-auto leading-relaxed">
                    Respondemos rápido. Si tienes dudas sobre tallas, colores o envíos, escríbenos directamente.
                </p>
            </div>

            {/* Contenido */}
            <div className="p-5 space-y-6">
                {/* Tarjetas de contacto */}
                <div className="space-y-2.5">
                    {/* WhatsApp */}
                    <div className="bg-white border border-gray-light rounded-lg p-4 flex gap-3.5 items-start">
                        <div className="w-9 h-9 rounded-full bg-dark border border-gray-dark flex items-center justify-center shrink-0">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                <path d="M17.5 14.5c-.8-.4-1.6-.8-2.3-1.1-.5-.2-1 0-1.3.3l-.7.9c-.2.3-.6.4-.9.2C10.9 13.8 9.2 12 8.2 10.7c-.2-.3-.1-.7.2-.9l.9-.7c.3-.3.5-.8.3-1.3-.3-.7-.7-1.5-1.1-2.3-.3-.6-1-.8-1.5-.5C6.4 5.3 5.5 6 5.2 7c-.5 2.4 1 6 4.3 9.3s6.9 4.8 9.3 4.3c1-.3 1.7-1.2 2-1.8.3-.5.1-1.2-.3-1.3z" stroke="#C9A84C" strokeWidth="1.3" strokeLinecap="round" />
                            </svg>
                        </div>
                        <div className="flex-1">
                            <p className="text-[11px] text-gray-medium mb-0.5">WhatsApp</p>
                            <p className="text-sm font-medium text-soft-black mb-0.5">+57 {WHATSAPP_NUMBER}</p>
                            <p className="text-[10px] text-gray-medium">Lunes a sábado · 9am – 7pm</p>
                            <div className="flex items-center gap-1.5 mt-1">
                                <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                                <span className="text-[10px] text-green-600">En línea ahora</span>
                            </div>
                        </div>
                    </div>

                    {/* Instagram */}
                    <div className="bg-white border border-gray-light rounded-lg p-4 flex gap-3.5 items-start">
                        <div className="w-9 h-9 rounded-full bg-dark border border-gray-dark flex items-center justify-center shrink-0">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                <rect x="3" y="3" width="18" height="18" rx="5" stroke="#C9A84C" strokeWidth="1.3" />
                                <circle cx="12" cy="12" r="4" stroke="#C9A84C" strokeWidth="1.3" />
                                <circle cx="17.5" cy="6.5" r="1" fill="#C9A84C" />
                            </svg>
                        </div>
                        <div className="flex-1">
                            <p className="text-[11px] text-gray-medium mb-0.5">Instagram</p>
                            <p className="text-sm font-medium text-soft-black mb-0.5">@nube_de_hilo</p>
                            <p className="text-[10px] text-gray-medium">Mira nuestras últimas creaciones y novedades en stories.</p>
                        </div>
                    </div>

                    {/* Ubicación */}
                    <div className="bg-white border border-gray-light rounded-lg p-4 flex gap-3.5 items-start">
                        <div className="w-9 h-9 rounded-full bg-dark border border-gray-dark flex items-center justify-center shrink-0">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7z" stroke="#C9A84C" strokeWidth="1.3" />
                                <circle cx="12" cy="9" r="2.5" stroke="#C9A84C" strokeWidth="1.3" />
                            </svg>
                        </div>
                        <div className="flex-1">
                            <p className="text-[11px] text-gray-medium mb-0.5">Ubicación</p>
                            <p className="text-sm font-medium text-soft-black mb-0.5">Curumani-Cesar, Colombia</p>
                            <p className="text-[10px] text-gray-medium">Envíos a todo el país · Recogida en punto disponible.</p>
                        </div>
                    </div>
                </div>

                {/* Botones de acción */}
                <div className="space-y-2">
                    <button onClick={handleWhatsApp} className="w-full bg-gray-light text-soft-black rounded-md py-2.5 text-xs font-medium flex items-center justify-center gap-2 hover:bg-gold transition">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                            <path d="M17.5 14.5c-.8-.4-1.6-.8-2.3-1.1-.5-.2-1 0-1.3.3l-.7.9c-.2.3-.6.4-.9.2C10.9 13.8 9.2 12 8.2 10.7c-.2-.3-.1-.7.2-.9l.9-.7c.3-.3.5-.8.3-1.3-.3-.7-.7-1.5-1.1-2.3-.3-.6-1-.8-1.5-.5C6.4 5.3 5.5 6 5.2 7c-.5 2.4 1 6 4.3 9.3s6.9 4.8 9.3 4.3c1-.3 1.7-1.2 2-1.8.3-.5.1-1.2-.3-1.3z" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                        Escribir por WhatsApp
                    </button>
                    <button onClick={handleInstagram} className="w-full bg-transparent text-soft-black border border-gray-light rounded-md py-2.5 text-xs font-medium flex items-center justify-center gap-2 hover:bg-gray-100 transition">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                            <rect x="3" y="3" width="18" height="18" rx="5" stroke="#1a1a1a" strokeWidth="1.3" />
                            <circle cx="12" cy="12" r="4" stroke="#1a1a1a" strokeWidth="1.3" />
                            <circle cx="17.5" cy="6.5" r="1" fill="#1a1a1a" />
                        </svg>
                        Ver Instagram
                    </button>
                </div>

                {/* FAQ */}
                <div className="bg-white border border-gray-light rounded-lg p-4">
                    <p className="text-[10px] tracking-[0.2em] text-gold mb-3.5">PREGUNTAS FRECUENTES</p>
                    <div className="divide-y divide-gray-light">
                        <div className="py-3 first:pt-0 last:pb-0">
                            <div className="flex justify-between items-start gap-2">
                                <p className="text-xs font-medium text-soft-black">¿Cuánto tarda en llegar mi mochila?</p>
                                <svg width="12" height="12" viewBox="0 0 12 12" className="shrink-0 mt-0.5">
                                    <path d="M2 4l4 4 4-4" stroke="#C9A84C" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <p className="text-[11px] text-gray-medium mt-1.5">Los envíos dentro de Colombia tardan entre 2 y 5 días hábiles según la ciudad.</p>
                        </div>
                        <div className="py-3">
                            <div className="flex justify-between items-start gap-2">
                                <p className="text-xs font-medium text-soft-black">¿Puedo pedir un color personalizado?</p>
                                <svg width="12" height="12" viewBox="0 0 12 12" className="shrink-0 mt-0.5">
                                    <path d="M2 4l4 4 4-4" stroke="#C9A84C" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <p className="text-[11px] text-gray-medium mt-1.5">¡Sí! Escríbenos por WhatsApp y coordinamos los colores disponibles para ti.</p>
                        </div>
                        <div className="py-3">
                            <div className="flex justify-between items-start gap-2">
                                <p className="text-xs font-medium text-soft-black">¿Hacen cambios o devoluciones?</p>
                                <svg width="12" height="12" viewBox="0 0 12 12" className="shrink-0 mt-0.5">
                                    <path d="M2 4l4 4 4-4" stroke="#C9A84C" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <p className="text-[11px] text-gray-medium mt-1.5">Aceptamos cambios dentro de los 5 días siguientes a la entrega si el producto tiene defecto de fabricación.</p>
                        </div>
                        <div className="py-3 last:pb-0">
                            <div className="flex justify-between items-start gap-2">
                                <p className="text-xs font-medium text-soft-black">¿Cuáles son los métodos de pago?</p>
                                <svg width="12" height="12" viewBox="0 0 12 12" className="shrink-0 mt-0.5">
                                    <path d="M2 4l4 4 4-4" stroke="#C9A84C" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <p className="text-[11px] text-gray-medium mt-1.5">Aceptamos transferencia bancaria, Nequi, Daviplata y pago contra entrega en Medellín.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};