import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1 px-4 sm:px-6 lg:px-8 py-8" role="main">
                <div className="max-w-7xl mx-auto">
                    {children}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
