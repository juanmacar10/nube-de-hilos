

export interface Product {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
    visible: boolean;
    basePrice: number;
    onSale: boolean;
    salePrice?: number;
}