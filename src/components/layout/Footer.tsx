import React from 'react';
import { HelpCircle, Mail, BookOpen, Github, Twitter, Linkedin, Ticket, Link, BarChart3, TrendingUp } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-background border-t border-border mt-auto" role="contentinfo">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <section>
                        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                            Doo-shen
                        </h3>
                        <p className="text-muted-foreground text-sm">
                            A ticket management system for efficient workflow management.
                        </p>
                        <div className="flex gap-4 mt-4">
                            <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
                                <Github className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Twitter">
                                <Twitter className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
                                <Linkedin className="h-5 w-5" />
                            </a>
                        </div>
                    </section>
                    <section>
                        <h4 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
                            <Link className="h-4 w-4" />
                            Quick Links
                        </h4>
                        <nav aria-label="Footer navigation">
                            <ul className="space-y-2">
                                <li>
                                    <a
                                        href="#"
                                        className="text-muted-foreground hover:text-primary focus:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 text-sm transition-colors flex items-center gap-2"
                                    >
                                        <BarChart3 className="h-4 w-4" />
                                        Dashboard
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-muted-foreground hover:text-primary focus:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 text-sm transition-colors flex items-center gap-2"
                                    >
                                        <Ticket className="h-4 w-4" />
                                        Tickets
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-muted-foreground hover:text-primary focus:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 text-sm transition-colors flex items-center gap-2"
                                    >
                                        <TrendingUp className="h-4 w-4" />
                                        Reports
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </section>
                    <section>
                        <h4 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
                            <HelpCircle className="h-4 w-4" />
                            Support
                        </h4>
                        <nav aria-label="Support navigation">
                            <ul className="space-y-2">
                                <li>
                                    <a
                                        href="#"
                                        className="text-muted-foreground hover:text-primary focus:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 text-sm transition-colors flex items-center gap-2"
                                    >
                                        <HelpCircle className="h-4 w-4" />
                                        Help Center
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-muted-foreground hover:text-primary focus:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 text-sm transition-colors flex items-center gap-2"
                                    >
                                        <Mail className="h-4 w-4" />
                                        Contact Us
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-muted-foreground hover:text-primary focus:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 text-sm transition-colors flex items-center gap-2"
                                    >
                                        <BookOpen className="h-4 w-4" />
                                        Documentation
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </section>
                </div>
                <div className="mt-8 pt-8 border-t border-border">
                    <p className="text-center text-muted-foreground text-sm">
                        © {new Date().getFullYear()} doo-shen. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
