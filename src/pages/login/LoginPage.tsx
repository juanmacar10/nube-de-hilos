import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase/config';

export const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/admin');
        } catch {
            setError('Credenciales incorrectas');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-offwhite">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm border border-gray-light">
                <h2 className="text-2xl font-medium text-center text-dark mb-6">Acceso Admin</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full border border-gray-light rounded-md px-3 py-2 text-sm focus:outline-none focus:border-gold"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full border border-gray-light rounded-md px-3 py-2 text-sm focus:outline-none focus:border-gold"
                        required
                    />
                    {error && <p className="text-red-500 text-xs">{error}</p>}
                    <button
                        type="submit"
                        className="w-full bg-gold text-soft-black py-2 rounded-md font-medium hover:bg-amber-700 transition"
                    >
                        Ingresar
                    </button>
                </form>
            </div>
        </div>
    );
};