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
        <div className="bg-white border border-gray-light rounded-lg overflow-hidden">
            {/* Imagen placeholder - luego usarás product.imageUrl */}
            <div className="h-[110px] bg-linear-to-br from-amber-100 to-stone-300 flex items-center justify-center relative">
                <svg width="44" height="50" viewBox="0 0 44 50">
                    <ellipse cx="22" cy="28" rx="16" ry="18" fill="#b5a590" stroke="#8c7a68" strokeWidth="1" />
                    <rect x="14" y="8" width="16" height="6" rx="3" fill="#b5a590" stroke="#8c7a68" strokeWidth="1" />
                    <line x1="22" y1="14" x2="22" y2="28" stroke="#8c7a68" strokeWidth="1" />
                    <ellipse cx="22" cy="28" rx="10" ry="6" fill="none" stroke="#8c7a68" strokeWidth="0.7" strokeDasharray="2,2" />
                </svg>
                {isOnSale && (
                    <span className="absolute top-2 left-2 bg-gold text-soft-black text-[10px] font-medium px-2 py-0.5 rounded tracking-wide">
                        OFERTA
                    </span>
                )}
            </div>
            <div className="p-2.5">
                <p className="text-xs font-medium text-soft-black mb-0.5">{product.name}</p>
                <p className="text-[10px] text-gray-medium mb-1.5 leading-tight">{product.description}</p>
                <div className="flex items-center gap-1.5 mb-2">
                    <span className="text-sm font-medium text-gold">${finalPrice}</span>
                    {isOnSale && (
                        <span className="text-[10px] text-gray-medium line-through">${originalPrice}</span>
                    )}
                </div>
                <button
                    onClick={handleWhatsApp}
                    className="w-full bg-gray-light text-soft-black rounded-md py-2 text-xs font-medium hover:bg-gold transition cursor-pointer"
                >
                    Comprar por WhatsApp
                </button>
            </div>
        </div>
    );
};