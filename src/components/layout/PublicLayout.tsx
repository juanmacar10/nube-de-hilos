import { Header } from './Header';
import { Footer } from './Footer';
import { Outlet } from 'react-router-dom';

export const PublicLayout = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};