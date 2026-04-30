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
                    <span className="absolute top-2 left-2 bg-gold text-soft-black text-[10px] font-medium px-2 py-0.5 rounded tracking-wide z-10">
                        OFERTA
                    </span>
                )}
            </div>
            <div className="p-2.5 flex-1 flex flex-col">
                <p className="text-xs font-medium text-soft-black mb-0.5">{product.name}</p>
                <p className="text-[10px] text-gray-medium mb-1.5 leading-tight line-clamp-2">{product.description}</p>
                <div className="flex items-center gap-1.5 mb-2">
                    <span className="text-sm font-medium text-gold font-serif">${finalPrice.toLocaleString('es-CO')}</span>
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