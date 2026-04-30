import { useState } from 'react';
import { useProducts } from '../../hooks/useProducts';
import type { Product } from '../../types';

export const OfertasPage = () => {
    const { products, isLoading, updateProduct } = useProducts();
    const [showForm, setShowForm] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [form, setForm] = useState({
        salePrice: '',
        saleStartDate: '',
        saleEndDate: '',
    });

    const resetForm = () => {
        setSelectedProduct(null);
        setForm({ salePrice: '', saleStartDate: '', saleEndDate: '' });
        setShowForm(false);
    };

    const openNewOfferForm = () => {
        resetForm();
        setShowForm(true);
    };

    const editOffer = (product: Product) => {
        setSelectedProduct(product);
        setForm({
            salePrice: product.salePrice?.toString() || '',
            saleStartDate: product.saleStartDate || '',
            saleEndDate: product.saleEndDate || '',
        });
        setShowForm(true);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedProduct) return;
        const salePriceNum = Number(form.salePrice);
        if (isNaN(salePriceNum) || salePriceNum <= 0) return;

        await updateProduct({
            id: selectedProduct.id,
            data: {
                onSale: true,
                salePrice: salePriceNum,
                saleStartDate: form.saleStartDate || undefined,
                saleEndDate: form.saleEndDate || undefined,
            },
        });
        resetForm();
    };

    const cancelOffer = async (product: Product) => {
        if (confirm('¿Quitar la oferta de esta mochila?')) {
            await updateProduct({
                id: product.id,
                data: {
                    onSale: false,
                    salePrice: undefined,
                    saleStartDate: undefined,
                    saleEndDate: undefined,
                },
            });
        }
    };

    // Estadísticas
    const activeOffers = products.filter(p => p.onSale && p.salePrice);
    const scheduledOffers = products.filter(
        p => p.onSale && p.saleStartDate && new Date(p.saleStartDate) > new Date()
    );
    const activeCount = activeOffers.length;
    const scheduledCount = scheduledOffers.length;
    const avgDiscount =
        activeOffers.reduce((acc, p) => acc + (1 - (p.salePrice || 0) / p.basePrice) * 100, 0) /
        (activeCount || 1);

    if (isLoading) return <div className="text-center mt-10">Cargando...</div>;

    return (
        <div className="max-w-5xl mx-auto">
            {/* Stats */}
            <div className="grid grid-cols-3 gap-2 mb-4">
                <div className="bg-white border border-gray-light rounded-md p-3">
                    <p className="text-[10px] text-gray-500">Ofertas activas</p>
                    <p className="text-2xl font-medium text-gold">{activeCount}</p>
                </div>
                <div className="bg-white border border-gray-light rounded-md p-3">
                    <p className="text-[10px] text-gray-500">Descuento promedio</p>
                    <p className="text-2xl font-medium">{Math.round(avgDiscount)}%</p>
                </div>
                <div className="bg-white border border-gray-light rounded-md p-3">
                    <p className="text-[10px] text-gray-500">Programadas</p>
                    <p className="text-2xl font-medium">{scheduledCount}</p>
                </div>
            </div>

            {/* Lista de ofertas */}
            <div className="flex justify-between items-center mb-3">
                <p className="text-xs font-medium tracking-wide">OFERTAS POR PRODUCTOS</p>
                <button
                    onClick={openNewOfferForm}
                    className="bg-gold text-soft-black px-3 py-1.5 rounded-md text-[11px] font-medium cursor-pointer"
                >
                    + Nueva oferta
                </button>
            </div>

            {/* Formulario (solo se muestra si showForm = true) */}
            {showForm && (
                <div className="border border-dashed border-gold rounded-lg p-4 bg-amber-50/20 mb-4">
                    <p className="text-xs font-medium text-amber-800 mb-3">
                        {selectedProduct
                            ? `Aplicar oferta a "${selectedProduct.name}"`
                            : 'Selecciona un producto'}
                    </p>

                    {!selectedProduct ? (
                        // Paso 1: Seleccionar producto
                        <div>
                            <select
                                className="text-xs p-2 border rounded-md w-full"
                                onChange={e => {
                                    const prod = products.find(p => p.id === e.target.value);
                                    if (prod) setSelectedProduct(prod);
                                }}
                            >
                                <option value="">-- Seleccionar producto --</option>
                                {products
                                    .filter(p => !p.onSale)
                                    .map(p => (
                                        <option key={p.id} value={p.id}>
                                            {p.name} (${p.basePrice})
                                        </option>
                                    ))}
                            </select>
                        </div>
                    ) : (
                        // Paso 2: Formulario de oferta
                        <form onSubmit={handleSubmit} className="space-y-3">
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <p className="text-[10px] text-gray-500 mb-1">Precio con oferta</p>
                                    <input
                                        type="text"
                                        inputMode="numeric"
                                        placeholder="Ej: 85000"
                                        value={form.salePrice}
                                        onChange={e => setForm({ ...form, salePrice: e.target.value })}
                                        className="text-xs p-2 border rounded-md w-full"
                                        required
                                    />
                                </div>
                                <div>
                                    <p className="text-[10px] text-gray-500 mb-1">Descuento calculado</p>
                                    <input
                                        type="text"
                                        readOnly
                                        value={
                                            form.salePrice && selectedProduct
                                                ? `${Math.round((1 - Number(form.salePrice) / selectedProduct.basePrice) * 100)}%`
                                                : '—'
                                        }
                                        className="text-xs p-2 border rounded-md w-full bg-gray-50 text-gold font-medium"
                                    />
                                </div>
                                <div>
                                    <p className="text-[10px] text-gray-500 mb-1">Fecha inicio</p>
                                    <input
                                        type="date"
                                        value={form.saleStartDate}
                                        onChange={e => setForm({ ...form, saleStartDate: e.target.value })}
                                        className="text-xs p-2 border rounded-md w-full"
                                    />
                                </div>
                                <div>
                                    <p className="text-[10px] text-gray-500 mb-1">Fecha fin</p>
                                    <input
                                        type="date"
                                        value={form.saleEndDate}
                                        onChange={e => setForm({ ...form, saleEndDate: e.target.value })}
                                        className="text-xs p-2 border rounded-md w-full"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="flex gap-10">
                                    <button type="button" onClick={resetForm} className="text-xs text-gray-500 underline cursor-pointer">
                                        Cancelar
                                    </button>
                                    <button type="submit" className="bg-gold text-soft-black px-3 py-1.5 rounded-md text-xs font-medium cursor-pointer">
                                        Guardar oferta
                                    </button>
                                </div>
                            </div>
                        </form>
                    )}
                </div>
            )}

            <div className="space-y-3 mb-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0">
                {activeOffers.map(product => {
                    const discountPercent = Math.round(
                        (1 - (product.salePrice || 0) / product.basePrice) * 100
                    );
                    const startDate = product.saleStartDate
                        ? new Date(product.saleStartDate).toLocaleDateString()
                        : '—';
                    const endDate = product.saleEndDate
                        ? new Date(product.saleEndDate).toLocaleDateString()
                        : '—';
                    return (
                        <div key={product.id} className="bg-white border border-gray-light rounded-lg p-3">
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                                <div>
                                    <div className="flex items-center gap-2 flex-wrap">
                                        <p className="text-sm font-medium">{product.name}</p>
                                        <span className="bg-green-100 text-green-800 text-[10px] px-2 py-0.5 rounded-full border border-green-600">
                                            activa
                                        </span>
                                        <span className="bg-amber-50 text-amber-700 text-[10px] px-2 py-0.5 rounded-full border border-gold">
                                            oferta
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2 mt-1 flex-wrap">
                                        <span className="text-lg font-medium text-gold">
                                            ${product.salePrice?.toLocaleString()}
                                        </span>
                                        <span className="text-xs text-gray-400 line-through">
                                            ${product.basePrice.toLocaleString()}
                                        </span>
                                        <span className="bg-amber-50 text-amber-700 text-[9px] px-1.5 py-0.5 rounded">
                                            -{discountPercent}%
                                        </span>
                                    </div>
                                </div>

                            </div>
                            <div className="grid grid-cols-2 gap-2 mt-2 text-xs text-gray-500">
                                <div>Inicio: {startDate}</div>
                                <div>Fin: {endDate}</div>
                            </div>
                            {/* Barra de progreso si tiene fechas */}
                            {product.saleStartDate && product.saleEndDate && (() => {
                                const start = new Date(product.saleStartDate!).getTime();
                                const end = new Date(product.saleEndDate!).getTime();
                                const now = Date.now();
                                const total = end - start;
                                const elapsed = now - start;
                                const percent = Math.min(100, Math.max(0, (elapsed / total) * 100));
                                const daysLeft = Math.ceil((end - now) / (1000 * 60 * 60 * 24));
                                return (
                                    <div className="mt-2">
                                        <div className="flex justify-between text-[9px] text-gray-400 mb-0.5">
                                            <span>Tiempo restante</span>
                                            <span>{daysLeft} días</span>
                                        </div>
                                        <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
                                            <div className="h-full bg-gold rounded-full" style={{ width: `${percent}%` }} />
                                        </div>
                                    </div>
                                );
                            })()}
                            <div className="flex gap-1 mt-2 justify-end">
                                <button
                                    onClick={() => editOffer(product)}
                                    className="border border-gray-300 rounded px-2 py-1 text-[10px] hover:bg-gray-50 cursor-pointer"
                                >
                                    Editar
                                </button>
                                <button
                                    onClick={() => cancelOffer(product)}
                                    className="border border-red-200 text-red-600 rounded px-2 py-1 text-[10px] hover:bg-red-50 cursor-pointer"
                                >
                                    Quitar oferta
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>

            
        </div>
    );
};