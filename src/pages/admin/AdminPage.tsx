import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase/config';

export const AdminPage = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        await signOut(auth);
        navigate('/login');
    };

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-medium text-dark">Panel de Administración</h1>
                <button
                    onClick={handleLogout}
                    className="bg-dark text-white px-4 py-2 rounded-md text-sm hover:bg-gray-800"
                >
                    Cerrar sesión
                </button>
            </div>
            <p className="text-gray-medium">Aquí irá el formulario para agregar/editar mochilas (Fase 2).</p>
        </div>
    );
};