import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-primary/10 via-transparent to-primary/5">
            <Navbar />
            <main className="flex-1" role="main">
                <div className="w-full">
                    {children}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
