import { useRef } from 'react';
import { ProductCard } from '../../components/products/ProductCard';
import type { Product } from '../../types';

// Datos mock
const mockProducts: Product[] = [
    {
        id: '1',
        name: 'Mochila Arena',
        description: 'Tejido punto cadeneta, tono natural',
        imageUrl: 'https://i.ibb.co/s96jsdDc/mohcila-de-rayas.png',
        visible: true,
        basePrice: 110000,
        onSale: true,
        salePrice: 85000,
    },
    {
        id: '2',
        name: 'Mochila Noche',
        description: 'Hilo negro con detalles dorados',
        imageUrl: 'https://i.ibb.co/s96jsdDc/mohcila-de-rayas.png',
        visible: true,
        basePrice: 120000,
        onSale: false,
    },
    {
        id: '3',
        name: 'Mochila Gris',
        description: 'Estilo urbano, tejido cruzado',
        imageUrl: 'https://i.ibb.co/s96jsdDc/mohcila-de-rayas.png',
        visible: true,
        basePrice: 95000,
        onSale: false,
    },
    {
        id: '4',
        name: 'Mochila Gris',
        description: 'Estilo urbano, tejido cruzado',
        imageUrl: 'https://i.ibb.co/s96jsdDc/mohcila-de-rayas.png',
        visible: true,
        basePrice: 95000,
        onSale: false,
    },
];

const WHATSAPP_NUMBER = '573000000000';

export const HomePage = () => {
    const productsSectionRef = useRef<HTMLDivElement>(null);

    const scrollToProducts = () => {
        productsSectionRef.current?.scrollIntoView(); // Desplazamiento instantáneo por defecto
    };

    return (
        <div className="bg-offwhite overflow-hidden shadow-sm">
            {/* Hero section */}
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

            {/* Listado de productos */}
            <div ref={productsSectionRef} className="p-5 scroll-mt-4">
                <div className="flex justify-between items-center mb-4">
                    <p className="text-[11px] font-medium tracking-wide text-soft-black">COLECCIÓN</p>
                    <div className="flex gap-2">
                        <span className="text-[10px] text-gray-medium px-2 py-0.5 border border-gray-light rounded cursor-pointer">Todas</span>
                        <span className="text-[10px] text-gold px-2 py-0.5 border border-gold rounded bg-white cursor-pointer">Ofertas</span>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {mockProducts.map(product => (
                        <ProductCard key={product.id} product={product} whatsappNumber={WHATSAPP_NUMBER} />
                    ))}
                </div>
            </div>
        </div>
    );
};