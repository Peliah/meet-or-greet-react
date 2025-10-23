import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-background border-t border-border mt-auto" role="contentinfo">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <section>
                        <h3 className="text-lg font-semibold text-foreground mb-4">
                            Ticket Manager
                        </h3>
                        <p className="text-muted-foreground text-sm">
                            A robust ticket management system for efficient workflow management.
                        </p>
                    </section>
                    <section>
                        <h4 className="text-sm font-semibold text-foreground mb-4">
                            Quick Links
                        </h4>
                        <nav aria-label="Footer navigation">
                            <ul className="space-y-2">
                                <li>
                                    <a
                                        href="#"
                                        className="text-muted-foreground hover:text-primary focus:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 text-sm transition-colors"
                                    >
                                        Dashboard
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-muted-foreground hover:text-primary focus:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 text-sm transition-colors"
                                    >
                                        Tickets
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-muted-foreground hover:text-primary focus:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 text-sm transition-colors"
                                    >
                                        Reports
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </section>
                    <section>
                        <h4 className="text-sm font-semibold text-foreground mb-4">
                            Support
                        </h4>
                        <nav aria-label="Support navigation">
                            <ul className="space-y-2">
                                <li>
                                    <a
                                        href="#"
                                        className="text-muted-foreground hover:text-primary focus:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 text-sm transition-colors"
                                    >
                                        Help Center
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-muted-foreground hover:text-primary focus:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 text-sm transition-colors"
                                    >
                                        Contact Us
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-muted-foreground hover:text-primary focus:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 text-sm transition-colors"
                                    >
                                        Documentation
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </section>
                </div>
                <div className="mt-8 pt-8 border-t border-border">
                    <p className="text-center text-muted-foreground text-sm">
                        © 2024 Ticket Manager. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
