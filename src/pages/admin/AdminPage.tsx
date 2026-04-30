import { useState } from 'react';
import { useProducts } from '../../hooks/useProducts';
import type { Product } from '../../types';

type ProductInput = Omit<Product, 'id' | 'createdAt' | 'updatedAt'>;

export const AdminPage = () => {
    const { products, isLoading, addProduct, updateProduct, deleteProduct } = useProducts();
    const [editingId, setEditingId] = useState<string | null>(null);
    const [showForm, setShowForm] = useState(false);
    const [form, setForm] = useState({
        name: '',
        description: '',
        imageUrl: '',
        basePrice: '',
        salePrice: '',
        onSale: false,
        visible: true,
    });

    const resetForm = () => {
        setEditingId(null);
        setForm({
            name: '',
            description: '',
            imageUrl: '',
            basePrice: '',
            salePrice: '',
            onSale: false,
            visible: true,
        });
        setShowForm(false);
    };

    const openAddForm = () => {
        resetForm();
        setShowForm(true);
    };

    const editProduct = (product: Product) => {
        setEditingId(product.id);
        setForm({
            name: product.name,
            description: product.description,
            imageUrl: product.imageUrl,
            basePrice: product.basePrice.toString(),
            salePrice: product.salePrice?.toString() || '',
            onSale: product.onSale || false,
            visible: product.visible,
        });
        setShowForm(true);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const basePriceNum = Number(form.basePrice);
        if (!form.name || !form.description || isNaN(basePriceNum) || basePriceNum <= 0) {
            alert('El precio base debe ser un número mayor a 0');
            return;
        }

        const productData: ProductInput = {
            name: form.name,
            description: form.description,
            imageUrl: form.imageUrl,
            basePrice: basePriceNum,
            visible: form.visible,
            onSale: false,
        };

        const salePriceNum = form.salePrice ? Number(form.salePrice) : undefined;
        if (salePriceNum && salePriceNum > 0) {
            productData.onSale = true;
            productData.salePrice = salePriceNum;
        }

        if (editingId) {
            updateProduct({ id: editingId, data: productData });
        } else {
            addProduct(productData);
        }
        resetForm();
    };

    const deleteHandler = (id: string) => {
        if (confirm('¿Eliminar esta mochila?')) deleteProduct(id);
    };

    const totalProducts = products.length;
    const visibleCount = products.filter(p => p.visible).length;
    const onSaleCount = products.filter(p => p.onSale).length;

    if (isLoading) return <div className="text-center mt-10">Cargando...</div>;

    return (
        <div className="max-w-5xl mx-auto">
            {/* Estadísticas (igual que antes) */}
            <div className="grid grid-cols-3 gap-2 mb-4">
                <div className="bg-white border border-gray-light rounded-md p-3">
                    <p className="text-[10px] text-gray-500">Total mochilas</p>
                    <p className="text-2xl font-medium">{totalProducts}</p>
                </div>
                <div className="bg-white border border-gray-light rounded-md p-3">
                    <p className="text-[10px] text-gray-500">Visibles</p>
                    <p className="text-2xl font-medium text-gold">{visibleCount}</p>
                </div>
                <div className="bg-white border border-gray-light rounded-md p-3">
                    <p className="text-[10px] text-gray-500">En oferta</p>
                    <p className="text-2xl font-medium text-amber-700">{onSaleCount}</p>
                </div>
            </div>

            {/* Encabezado y botón */}
            <div className="flex justify-between items-center mb-3">
                <p className="text-xs font-medium tracking-wide">INVENTARIO</p>
                <button onClick={openAddForm} className="bg-gold text-soft-black px-3 py-1.5 rounded-md text-[11px] font-medium cursor-pointer">
                    + Agregar mochila
                </button>
            </div>

            {/* Formulario condicional */}
            {showForm && (
                <div className="border border-dashed border-gold rounded-lg p-4 bg-amber-50/20 mb-4">
                    <p className="text-xs font-medium text-amber-800 mb-3">{editingId ? 'Editar mochila' : 'Agregar nueva mochila'}</p>
                    <form onSubmit={handleSubmit} className="space-y-3">
                        {/* Campos del formulario (iguales) */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <input
                                type="text"
                                placeholder="Nombre"
                                value={form.name}
                                onChange={e => setForm({ ...form, name: e.target.value })}
                                className="text-xs p-2 border rounded-md"
                                required
                            />
                            <input
                                type="text"
                                placeholder="URL de imagen"
                                value={form.imageUrl}
                                onChange={e => setForm({ ...form, imageUrl: e.target.value })}
                                className="text-xs p-2 border rounded-md"
                                required
                            />
                            <input
                                type="text"
                                inputMode="numeric"
                                placeholder="Precio base"
                                value={form.basePrice}
                                onChange={e => setForm({ ...form, basePrice: e.target.value })}
                                className="text-xs p-2 border rounded-md"
                                required
                            />
                            <input
                                type="number"
                                placeholder="Precio oferta (opcional)"
                                value={form.salePrice}
                                onChange={e => setForm({ ...form, salePrice: e.target.value })}
                                className="text-xs p-2 border rounded-md"
                            />
                        </div>
                        <textarea
                            placeholder="Descripción"
                            value={form.description}
                            onChange={e => setForm({ ...form, description: e.target.value })}
                            rows={2}
                            className="text-xs p-2 border rounded-md w-full"
                            required
                        />
                        <div className="flex justify-between items-center">
                            <label className="flex items-center gap-2 text-xs">
                                <input type="checkbox" checked={form.visible} onChange={e => setForm({ ...form, visible: e.target.checked })} className="accent-gold" />
                                Visible en la página
                            </label>
                        </div>
                        <div className="flex gap-10 justify-center ">
                            <button type="button" onClick={resetForm} className="text-xs text-gray-500 underline cursor-pointer">Cancelar</button>
                            <button type="submit" className="bg-gold text-soft-black px-4 py-1.5 rounded-md text-xs font-medium cursor-pointer">
                                {editingId ? 'Actualizar' : 'Guardar'}
                            </button>
                        </div>
                    </form>
                </div>
            )}

            {/* Listado */}
            <div className="space-y-2 mb-6">
                {products.map(product => (
                    <div key={product.id} className="bg-white border border-gray-light rounded-lg p-3 flex flex-col sm:grid sm:grid-cols-[40px_1fr_auto] gap-2 sm:gap-2 items-start sm:items-center">
                        {/* Misma estructura que antes */}
                        <div className="w-10 h-10 bg-amber-50 rounded-md flex items-center justify-center shrink-0">
                            {product.imageUrl ? (
                                <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover rounded-md" />
                            ) : (
                                <svg width="20" height="20" viewBox="0 0 44 50" className="w-6 h-6"><ellipse cx="22" cy="28" rx="16" ry="18" fill="#b5a590" stroke="#8c7a68" strokeWidth="1.5" /><rect x="14" y="8" width="16" height="6" rx="3" fill="#b5a590" stroke="#8c7a68" strokeWidth="1.5" /></svg>
                            )}
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center gap-2 flex-wrap">
                                <p className="text-sm font-medium">{product.name}</p>
                                {product.visible ? <span className="bg-green-100 text-green-800 text-[10px] px-2 py-0.5 rounded-full border border-green-600">visible</span> : <span className="bg-gray-100 text-gray-500 text-[10px] px-2 py-0.5 rounded-full border border-gray-300">oculta</span>}
                                {product.onSale && <span className="bg-amber-50 text-amber-700 text-[10px] px-2 py-0.5 rounded-full border border-gold">oferta</span>}
                            </div>
                            <p className="text-[10px] text-gray-500">
                                ${product.basePrice.toLocaleString()}
                                {product.onSale && product.salePrice && ` → $${product.salePrice.toLocaleString()}`}
                                {' · '}{product.description.slice(0, 40)}...
                            </p>
                        </div>
                        <div className="flex gap-1 self-end sm:self-auto">
                            <button onClick={() => editProduct(product)} className="border border-gray-300 rounded px-2 py-1 text-[10px] hover:bg-gray-50 cursor-pointer">Editar</button>
                            <button onClick={() => deleteHandler(product.id)} className="border border-red-200 text-red-600 rounded px-2 py-1 text-[10px] hover:bg-red-50 cursor-pointer">Eliminar</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};