import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getProducts, addProduct, updateProduct, deleteProduct } from '../services/productService';
import type { Product } from '../types';

export const useProducts = () => {
    const queryClient = useQueryClient();

    // Query para obtener todos los productos
    const productsQuery = useQuery({
        queryKey: ['products'],
        queryFn: getProducts,
    });

    // Mutación para agregar producto
    const addMutation = useMutation({
        mutationFn: addProduct,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['products'] });
        },
    });

    // Mutación para actualizar producto
    const updateMutation = useMutation({
        mutationFn: ({ id, data }: { id: string; data: Partial<Product> }) =>
            updateProduct(id, data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['products'] });
        },
    });

    // Mutación para eliminar producto
    const deleteMutation = useMutation({
        mutationFn: deleteProduct,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['products'] });
        },
    });

    return {
        products: productsQuery.data ?? [],
        isLoading: productsQuery.isLoading,
        isError: productsQuery.isError,
        refresh: () => productsQuery.refetch(),
        addProduct: addMutation.mutate,
        updateProduct: updateMutation.mutate,
        deleteProduct: deleteMutation.mutate,
        isAdding: addMutation.isPending,
        isUpdating: updateMutation.isPending,
        isDeleting: deleteMutation.isPending,
    };
};