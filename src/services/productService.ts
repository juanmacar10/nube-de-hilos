import { db } from '../firebase/config';
import { collection, addDoc, updateDoc, deleteDoc, doc, getDocs, query, orderBy } from 'firebase/firestore';
import type { Product } from '../types';

const COLLECTION = 'products';

export const getProducts = async (): Promise<Product[]> => {
    const q = query(collection(db, COLLECTION), orderBy('createdAt', 'desc'));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Product));
};

export const addProduct = async (product: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newProduct = { ...product, createdAt: new Date(), updatedAt: new Date() };
    const docRef = await addDoc(collection(db, COLLECTION), newProduct);
    return { id: docRef.id, ...newProduct };
};

export const updateProduct = async (id: string, product: Partial<Product>) => {
    const docRef = doc(db, COLLECTION, id);
    await updateDoc(docRef, { ...product, updatedAt: new Date() });
};

export const deleteProduct = async (id: string) => {
    await deleteDoc(doc(db, COLLECTION, id));
};