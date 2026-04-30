import { useRef, useState } from 'react';
import { ProductCard } from '../../components/products/ProductCard';
import { useProducts } from '../../hooks/useProducts';
import { WHATSAPP_NUMBER } from '../../config/constants';

export const HomePage = () => {
    const productsSectionRef = useRef<HTMLDivElement>(null);
    const { products, isLoading } = useProducts();
    const [filter, setFilter] = useState<'all' | 'sale'>('all');

    const scrollToProducts = () => {
        productsSectionRef.current?.scrollIntoView();
    };

    // Filtrar productos visibles y según oferta
    const visibleProducts = products.filter(p => p.visible === true);
    const filteredProducts = filter === 'all'
        ? visibleProducts
        : visibleProducts.filter(p => p.onSale === true);

    return (
        <div className="bg-offwhite overflow-hidden shadow-sm">
            {/* Hero section - siempre visible */}
            <div className="bg-dark text-center py-10 px-6 border-b border-gray-dark">
                <p className="text-[10px] text-gold tracking-[0.2em] mb-2">ARTESANAL · ÚNICO · HECHO A MANO</p>
                <h1 className="text-2xl font-medium text-white leading-tight tracking-wide mb-2">
                    Mochilas tejidas<br /><span className="text-gold font-serif">en crochet</span>
                </h1>
                <p className="text-xs text-gray-medium max-w-xs mx-auto mb-4 leading-relaxed">
                    Cada pieza es única, tejida a mano con dedicación y estilo propio.
                </p>
                <button
                    onClick={scrollToProducts}
                    className="bg-transparent text-gold border border-gold rounded-md px-5 py-2 text-[11px] tracking-wide hover:bg-gold/10 transition cursor-pointer"
                >
                    VER COLECCIÓN
                </button>
            </div>

            {/* Listado de productos - aquí va el loader condicional */}
            <div ref={productsSectionRef} className="p-5 scroll-mt-4">
                <div className="flex justify-between items-center mb-4">
                    <p className="text-[11px] font-medium tracking-wide text-soft-black">COLECCIÓN</p>
                    <div className="flex gap-2">
                        <button
                            onClick={() => setFilter('all')}
                            className={`text-[10px] px-2 py-0.5 border rounded transition ${filter === 'all'
                                    ? 'border-gold text-gold bg-white'
                                    : 'border-gray-light text-gray-medium hover:border-gray-400'
                                }`}
                        >
                            Todas
                        </button>
                        <button
                            onClick={() => setFilter('sale')}
                            className={`text-[10px] px-2 py-0.5 border rounded transition ${filter === 'sale'
                                    ? 'border-gold text-gold bg-white'
                                    : 'border-gray-light text-gray-medium hover:border-gray-400'
                                }`}
                        >
                            Ofertas
                        </button>
                    </div>
                </div>

                {/* Loader solo en el área de productos */}
                {isLoading ? (
                    <div className="flex justify-center items-center py-12">
                        <div className="text-center">
                            <div className="w-8 h-8 border-3 border-gold border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
                            <p className="text-gray-medium text-xs">Cargando productos...</p>
                        </div>
                    </div>
                ) : filteredProducts.length === 0 ? (
                    <div className="text-center py-10">
                        <p className="text-gray-medium text-sm">
                            {filter === 'sale'
                                ? 'No hay productos en oferta en este momento.'
                                : 'No hay productos disponibles.'}
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-10 md:px-10">
                        {filteredProducts.map(product => (
                            <ProductCard key={product.id} product={product} whatsappNumber={WHATSAPP_NUMBER} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};