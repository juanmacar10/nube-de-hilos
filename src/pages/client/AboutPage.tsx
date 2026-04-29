// src/pages/AboutPage.tsx
export const AboutPage = () => {
    return (
        <div className="bg-offwhite overflow-hidden shadow-sm">
            {/* Hero */}
            <div className="bg-dark text-center py-11 px-6 border-b border-gray-dark">
                <p className="text-[10px] text-gold tracking-[0.2em] mb-2.5">NUESTRA HISTORIA</p>
                <h1 className="text-2xl font-medium text-white leading-tight tracking-wide mb-3">
                    Cada mochila cuenta<br /><span className="text-gold">una historia</span>
                </h1>
                <div className="w-8 h-px bg-gold mx-auto my-3" />
                <p className="text-xs text-gray-medium max-w-sm mx-auto leading-relaxed">
                    Somos una marca artesanal nacida en Colombia, donde cada pieza se teje a mano con dedicación, amor y estilo propio. No fabricamos en serie — creamos piezas únicas.
                </p>
            </div>

            {/* Contenido */}
            <div className="p-6 space-y-7">
                {/* Grid: Fundadora + valores */}
                <div className="grid grid-cols-2 gap-2.5">
                    {/* Tarjeta fundadora */}
                    <div className="bg-dark rounded-lg p-5 flex flex-col gap-1.5">
                        <p className="text-[10px] tracking-[0.15em] text-gold">FUNDADORA</p>
                        <div className="w-13 h-13 rounded-full bg-gray-dark border-2 border-gold flex items-center justify-center my-1">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <circle cx="12" cy="8" r="4" stroke="#C9A84C" strokeWidth="1.3" />
                                <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="#C9A84C" strokeWidth="1.3" strokeLinecap="round" />
                            </svg>
                        </div>
                        <p className="text-sm font-medium text-white">Tu nombre</p>
                        <p className="text-[11px] text-gray-medium leading-relaxed">Artesana apasionada por el crochet. Cada diseño nace de una idea y termina en tus manos.</p>
                    </div>

                    {/* Valores */}
                    <div className="flex flex-col gap-2.5">
                        <div className="bg-white border border-gray-light rounded-lg p-4 flex flex-col gap-2">
                            <div className="w-9 h-9 border border-gold rounded-full flex items-center justify-center">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M8 2l1.5 3 3.5.5-2.5 2.5.5 3.5L8 10l-3 1.5.5-3.5L3 5.5l3.5-.5L8 2z" stroke="#C9A84C" strokeWidth="1.1" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <p className="text-xs font-medium text-soft-black">Hecho a mano</p>
                            <p className="text-[10px] text-gray-medium leading-relaxed">Cada mochila se teje pieza a pieza, sin máquinas ni moldes en serie.</p>
                        </div>
                        <div className="bg-white border border-gray-light rounded-lg p-4 flex flex-col gap-2">
                            <div className="w-9 h-9 border border-gold rounded-full flex items-center justify-center">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M8 14s-6-3.5-6-8a6 6 0 0112 0c0 4.5-6 8-6 8z" stroke="#C9A84C" strokeWidth="1.1" />
                                </svg>
                            </div>
                            <p className="text-xs font-medium text-soft-black">Con amor</p>
                            <p className="text-[10px] text-gray-medium leading-relaxed">Cada puntada lleva intención, cuidado y el sello artesanal colombiano.</p>
                        </div>
                    </div>
                </div>

                {/* Proceso de creación */}
                <div>
                    <p className="text-[10px] tracking-[0.2em] text-gold mb-4">CÓMO NACE UNA MOCHILA</p>
                    <div className="flex flex-col">
                        {[
                            { step: 1, title: 'Selección del hilo', desc: 'Elegimos hilos de calidad en colores que siguen las tendencias de cada temporada.' },
                            { step: 2, title: 'Tejido a mano', desc: 'Con aguja de crochet, tejemos punto a punto siguiendo patrones propios y únicos.' },
                            { step: 3, title: 'Acabados y detalles', desc: 'Cada mochila pasa por revisión de calidad y recibe sus detalles finales.' },
                            { step: 4, title: 'Lista para ti', desc: 'La empacamos con cuidado y la enviamos directo a tus manos.' }
                        ].map((item, idx) => (
                            <div key={item.step} className="flex gap-0 items-start">
                                <div className="flex flex-col items-center">
                                    <div className="w-7 h-7 rounded-full bg-dark flex items-center justify-center text-[11px] font-medium text-gold shrink-0">
                                        {item.step}
                                    </div>
                                    {idx < 3 && <div className="w-0.5 h-10 bg-gray-light my-0" />}
                                </div>
                                <div className={`pb-5 pl-3.5 ${idx === 3 ? 'pb-0' : ''}`}>
                                    <p className="text-xs font-medium text-soft-black mb-0.5">{item.title}</p>
                                    <p className="text-[11px] text-gray-medium leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Promesa */}
                <div className="bg-dark rounded-lg p-5 text-center">
                    <p className="text-[10px] tracking-[0.15em] text-gold mb-2">NUESTRA PROMESA</p>
                    <p className="text-sm text-white leading-relaxed max-w-xs mx-auto">
                        "Si no te enamoras de tu mochila, no ha cumplido su propósito. Cada pieza lleva nuestro nombre y nuestra dedicación."
                    </p>
                    <div className="w-7 h-px bg-gold mx-auto mt-3.5" />
                </div>
            </div>
        </div>
    );
};