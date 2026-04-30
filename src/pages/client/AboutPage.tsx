// src/pages/AboutPage.tsx
export const AboutPage = () => {
    return (
        <div className="bg-offwhite overflow-hidden shadow-sm">
            {/* Hero */}
            <div className="bg-dark text-center py-11 px-6 border-b border-gray-dark">
                <p className="text-[10px] text-gold tracking-[0.2em] mb-2.5">NUESTRA HISTORIA</p>
                <h1 className="text-2xl font-medium text-white leading-tight tracking-wide mb-3">
                    Cada mochila cuenta<br /><span className="text-gold font-serif">una historia</span>
                </h1>
                <div className="w-8 h-px bg-gold mx-auto my-3" />
                <p className="text-xs text-gray-medium max-w-sm mx-auto leading-relaxed">
                    Somos una marca artesanal nacida en Curumani-Cesar, donde cada pieza se teje a mano con dedicación, amor y estilo propio. No fabricamos en serie — creamos piezas únicas.
                </p>
            </div>

            {/* Contenido */}
            <div className="p-6 space-y-7">
                {/* Grid: Fundadora + valores */}
                <div className="grid grid-cols-2 gap-2.5">
                    {/* Tarjeta fundadora */}
                    <div className="bg-dark rounded-lg p-5 flex flex-col gap-1.5">
                        <p className="text-[10px] tracking-[0.15em] text-gold">FUNDADORA</p>
                        <div className="">
                            <img src="../src/assets/perfil.png" alt="Fundadora" className="w-30 h-30 sm:w-20 sm:h-20 rounded-full bg-gray-dark border-2 border-gold flex items-center justify-center my-1" />
                        </div>
                        <p className="text-sm font-medium text-white">Noralba Carcamo</p>
                        <p className="text-[11px] text-gray-medium leading-relaxed">Artesana apasionada por el crochet. Cada diseño nace de una idea y termina en tus manos.</p>
                    </div>

                    {/* Valores */}
                    <div className="flex flex-col gap-2.5">
                        <div className="bg-white border border-gray-light rounded-lg p-4 flex flex-col gap-2">
                            <div className="w-9 h-9 border border-gold rounded-full flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#c5a54c" d="m12 11.675l-1.565 1.223q-.131.087-.252.003t-.071-.22l.592-1.985l-1.558-1.13q-.125-.087-.065-.23t.196-.144h1.939l.592-1.973q.05-.136.192-.136t.192.136l.593 1.973h1.932q.137 0 .2.143t-.063.23l-1.563 1.131l.592 1.985q.05.136-.071.22t-.252-.003zm0 8.287l-3.963 1.184q-.385.137-.711-.115T7 20.375v-5.504q-.95-.934-1.475-2.188T5 10q0-2.927 2.036-4.963T12 3t4.964 2.036T19 10q0 1.429-.525 2.683T17 14.87v5.504q0 .404-.326.656t-.71.115zm4.25-5.712Q18 12.5 18 10t-1.75-4.25T12 4T7.75 5.75T6 10t1.75 4.25T12 16t4.25-1.75M8 20.044l4-1.121l4 1.121v-4.33q-.836.615-1.859.95Q13.12 17 12 17t-2.141-.335T8 15.714zm4-2.165" /></svg>
                            </div>
                            <p className="text-xs font-medium text-soft-black">Hecho a mano</p>
                            <p className="text-[10px] text-gray-medium leading-relaxed">Cada mochila se teje pieza a pieza, sin máquinas ni moldes en serie.</p>
                        </div>
                        <div className="bg-white border border-gray-light rounded-lg p-4 flex flex-col gap-2">
                            <div className="w-9 h-9 border border-gold rounded-full flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="#c5a54c" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"><path d="M13 20.303a2.64 2.64 0 0 1-2.59-.335C7.59 17.858 2 13.035 2 8.694C2 5.826 4.105 3.5 7 3.5c1.5 0 3 .5 5 2.5c2-2 3.5-2.5 5-2.5c2.895 0 5 2.326 5 5.194q-.002.648-.157 1.306" /><path d="M14 17s1 0 2 2c0 0 3.177-5 6-6" /></g></svg>
                            </div>
                            <p className="text-xs font-medium text-soft-black">Con amor</p>
                            <p className="text-[10px] text-gray-medium leading-relaxed">Cada puntada lleva intención, cuidado y el sello artesanal curumanilense.</p>
                        </div>
                    </div>
                </div>

                {/* Proceso de creación */}
                <div className="sm:flex sm:flex-col sm:items-center">
                    <p className="text-[15px] tracking-[0.2em] text-gold mb-4">CÓMO NACE UNA MOCHILA</p>
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
                    <p className="text-sm text-white leading-relaxed max-w-xs mx-auto font-serif">
                        "Si no te enamoras de tu mochila, no ha cumplido su propósito. Cada pieza lleva nuestro nombre y nuestra dedicación."
                    </p>
                    <div className="w-7 h-px bg-gold mx-auto mt-3.5" />
                </div>
            </div>
        </div>
    );
};