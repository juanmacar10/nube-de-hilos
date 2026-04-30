import type { Product } from '../../types';

interface Props {
    product: Product;
    whatsappNumber: string;
}

export const ProductCard = ({ product, whatsappNumber }: Props) => {
    const isOnSale = product.onSale && product.salePrice !== undefined;
    const finalPrice = isOnSale ? product.salePrice : product.basePrice;
    const originalPrice = product.basePrice;

    const handleWhatsApp = () => {
        const message = `Hola, quiero comprar la mochila "${product.name}". Precio: $${finalPrice}`;
        const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <div className="bg-white border border-gray-light rounded-lg overflow-hidden flex flex-col ">
            {/* Contenedor imagen con relación 4:5 */}
            <div className="relative w-full aspect-3/4 flex items-center justify-center">
                {/* Aquí luego pondrás <img src={product.imageUrl} /> */}
                <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover" />
                {isOnSale && (
                    <div className="absolute top-2 left-2 flex items-center gap-0.5 bg-gold rounded px-2 py-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.996 10h.015M11 16h.015" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 13h8" /><circle cx="1.5" cy="1.5" r="1.5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" transform="matrix(1 0 0 -1 16 8)" /><path strokeWidth="1.5" d="M2.774 11.144c-1.003 1.12-1.024 2.81-.104 4a34 34 0 0 0 6.186 6.186c1.19.92 2.88.899 4-.104a92 92 0 0 0 8.516-8.698a1.95 1.95 0 0 0 .47-1.094c.164-1.796.503-6.97-.902-8.374s-6.578-1.066-8.374-.901a1.95 1.95 0 0 0-1.094.47a92 92 0 0 0-8.698 8.515Z" /></g></svg>
                        <span className=" text-soft-black text-[10px] font-medium tracking-wide z-10">
                            OFERTA
                        </span>
                    </div>
                )}
            </div>
            <div className="p-2.5 flex-1 flex flex-col">
                <p className="text-xs font-medium text-soft-black mb-0.5">{product.name}</p>
                <p className="text-[10px] text-gray-medium mb-1.5 leading-tight line-clamp-2">{product.description}</p>
                <div className="flex items-center gap-1.5 mb-2">
                    <span className="text-sm font-medium text-gold font-serif">${finalPrice?.toLocaleString('es-CO')}</span>
                    {isOnSale && (
                        <span className="text-[10px] text-gray-medium line-through font-serif">${originalPrice.toLocaleString('es-CO')}</span>
                    )}
                </div>
                <button
                    onClick={handleWhatsApp}
                    className="w-full bg-gray-light text-soft-black rounded-md py-2 text-xs font-medium hover:bg-gold transition cursor-pointer mt-auto"
                >
                    Comprar por WhatsApp
                </button>
            </div>
        </div>
    );
};