
export interface Product {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
    visible: boolean;
    basePrice: number;        // siempre en número (ej: 110000)
    onSale: boolean;          // si está en oferta activa
    salePrice?: number;       // precio con descuento
    saleStartDate?: string;   // ISO date string (YYYY-MM-DD)
    saleEndDate?: string;
    createdAt: Date;
    updatedAt?: Date;
}