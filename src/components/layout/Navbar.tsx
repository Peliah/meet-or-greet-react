import React from 'react';

const Navbar: React.FC = () => {
    return (
        <header className="bg-background border-b border-border">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" role="navigation" aria-label="Main navigation">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <h1 className="text-xl font-bold text-foreground">
                            Ticket Manager
                        </h1>
                    </div>
                    <div className="hidden md:block">
                        <ul className="ml-10 flex items-baseline space-x-4" role="menubar">
                            <li role="none">
                                <a
                                    href="#"
                                    className="text-foreground hover:text-primary focus:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                                    role="menuitem"
                                    aria-current="page"
                                >
                                    Dashboard
                                </a>
                            </li>
                            <li role="none">
                                <a
                                    href="#"
                                    className="text-foreground hover:text-primary focus:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                                    role="menuitem"
                                >
                                    Tickets
                                </a>
                            </li>
                            <li role="none">
                                <a
                                    href="#"
                                    className="text-foreground hover:text-primary focus:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                                    role="menuitem"
                                >
                                    Reports
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="md:hidden">
                        <button
                            className="text-foreground hover:text-primary focus:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 p-2 rounded-md transition-colors"
                            aria-label="Open mobile menu"
                            aria-expanded="false"
                            aria-controls="mobile-menu"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
