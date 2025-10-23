import React, { useState } from 'react';
import { Menu, Search, Bell, User, BarChart3, Ticket, TrendingUp, X, LogIn } from 'lucide-react';

const Navbar: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false); // This would come from auth context

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="bg-background border-b border-border">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" role="navigation" aria-label="Main navigation">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <h1 className="text-xl font-bold text-foreground flex items-center gap-2">
                            Doo-shen
                        </h1>
                    </div>

                    {/* Desktop Navigation - Only show when logged in */}
                    {isLoggedIn && (
                        <div className="hidden md:block">
                            <ul className="ml-10 flex items-baseline space-x-4" role="menubar">
                                <li role="none">
                                    <a
                                        href="#"
                                        className="text-foreground hover:text-primary focus:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2"
                                        role="menuitem"
                                        aria-current="page"
                                    >
                                        <BarChart3 className="h-4 w-4" />
                                        Dashboard
                                    </a>
                                </li>
                                <li role="none">
                                    <a
                                        href="#"
                                        className="text-foreground hover:text-primary focus:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2"
                                        role="menuitem"
                                    >
                                        <Ticket className="h-4 w-4" />
                                        Tickets
                                    </a>
                                </li>
                                <li role="none">
                                    <a
                                        href="#"
                                        className="text-foreground hover:text-primary focus:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2"
                                        role="menuitem"
                                    >
                                        <TrendingUp className="h-4 w-4" />
                                        Reports
                                    </a>
                                </li>
                            </ul>
                        </div>
                    )}

                    {/* Desktop Actions */}
                    <div className="hidden md:flex items-center gap-4">
                        {isLoggedIn ? (
                            <>
                                <button
                                    className="text-foreground hover:text-primary focus:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 p-2 rounded-md transition-colors"
                                    aria-label="Search"
                                >
                                    <Search className="h-5 w-5" aria-hidden="true" />
                                </button>
                                <button
                                    className="text-foreground hover:text-primary focus:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 p-2 rounded-md transition-colors relative"
                                    aria-label="Notifications"
                                >
                                    <Bell className="h-5 w-5" aria-hidden="true" />
                                    <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">3</span>
                                </button>
                                <button
                                    className="text-foreground hover:text-primary focus:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 p-2 rounded-md transition-colors"
                                    aria-label="User profile"
                                >
                                    <User className="h-5 w-5" aria-hidden="true" />
                                </button>
                            </>
                        ) : (
                            <button
                                className="bg-primary text-primary-foreground hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2"
                                aria-label="Login"
                            >
                                <LogIn className="h-4 w-4" />
                                Login
                            </button>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            className="text-foreground hover:text-primary focus:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 p-2 rounded-md transition-colors"
                            aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
                            aria-expanded={isMobileMenuOpen}
                            aria-controls="mobile-menu"
                            onClick={toggleMobileMenu}
                        >
                            {isMobileMenuOpen ? (
                                <X className="h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Menu className="h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden" id="mobile-menu">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-border">
                            {/* Mobile Navigation Links - Only show when logged in */}
                            {isLoggedIn && (
                                <div className="space-y-1">
                                    <a
                                        href="#"
                                        className="text-foreground hover:text-primary focus:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 block px-3 py-2 rounded-md text-base font-medium transition-colors flex items-center gap-2"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        <BarChart3 className="h-4 w-4" />
                                        Dashboard
                                    </a>
                                    <a
                                        href="#"
                                        className="text-foreground hover:text-primary focus:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 block px-3 py-2 rounded-md text-base font-medium transition-colors flex items-center gap-2"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        <Ticket className="h-4 w-4" />
                                        Tickets
                                    </a>
                                    <a
                                        href="#"
                                        className="text-foreground hover:text-primary focus:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 block px-3 py-2 rounded-md text-base font-medium transition-colors flex items-center gap-2"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        <TrendingUp className="h-4 w-4" />
                                        Reports
                                    </a>
                                </div>
                            )}

                            {/* Mobile Actions */}
                            <div className="pt-4 pb-3 border-t border-border">
                                <div className="flex items-center justify-between px-3">
                                    {isLoggedIn ? (
                                        <div className="flex items-center gap-3">
                                            <button
                                                className="text-foreground hover:text-primary focus:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 p-2 rounded-md transition-colors"
                                                aria-label="Search"
                                            >
                                                <Search className="h-5 w-5" aria-hidden="true" />
                                            </button>
                                            <button
                                                className="text-foreground hover:text-primary focus:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 p-2 rounded-md transition-colors relative"
                                                aria-label="Notifications"
                                            >
                                                <Bell className="h-5 w-5" aria-hidden="true" />
                                                <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">3</span>
                                            </button>
                                            <button
                                                className="text-foreground hover:text-primary focus:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 p-2 rounded-md transition-colors"
                                                aria-label="User profile"
                                            >
                                                <User className="h-5 w-5" aria-hidden="true" />
                                            </button>
                                        </div>
                                    ) : (
                                        <button
                                            className="bg-primary text-primary-foreground hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2 w-full justify-center"
                                            aria-label="Login"
                                        >
                                            <LogIn className="h-4 w-4" />
                                            Login
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Navbar;
