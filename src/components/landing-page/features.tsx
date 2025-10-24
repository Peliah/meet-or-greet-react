import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Ticket, BarChart3, Users, Shield, Clock, Zap, Globe, CheckCircle } from 'lucide-react';

const Features: React.FC = () => {
    const features = [
        {
            icon: Ticket,
            title: "Smart Ticket Management",
            description: "Create, assign, and track tickets with intelligent automation and priority management."
        },
        {
            icon: BarChart3,
            title: "Analytics Dashboard",
            description: "Real-time insights and performance metrics to optimize your support operations."
        },
        {
            icon: Users,
            title: "Team Collaboration",
            description: "Seamless communication and task assignment across your support team."
        },
        {
            icon: Shield,
            title: "Secure & Reliable",
            description: "Enterprise-grade security with 99.9% uptime guarantee for your peace of mind."
        },
        {
            icon: Clock,
            title: "24/7 Support",
            description: "Round-the-clock customer support to ensure your events run smoothly."
        },
        {
            icon: Zap,
            title: "Lightning Fast",
            description: "Optimized performance with instant ticket processing and real-time updates."
        },
        {
            icon: Globe,
            title: "Global Reach",
            description: "Sell tickets worldwide with multi-currency support and international payment methods."
        },
        {
            icon: CheckCircle,
            title: "Easy Integration",
            description: "Connect with your existing tools and platforms through our comprehensive API."
        }
    ];

    return (
        <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 sm:mb-16 md:mb-20">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6">
                        Powerful Features
                    </h2>
                    <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        Everything you need to manage tickets, grow your events, and delight your customers.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
                    {features.map((feature, index) => {
                        const IconComponent = feature.icon;
                        return (
                            <Card
                                key={index}
                                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border bg-card/50 backdrop-blur-sm"
                            >
                                <CardHeader className="text-center pb-4">
                                    <div className="mx-auto mb-4 p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                                        <IconComponent className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                                    </div>
                                    <CardTitle className="text-lg sm:text-xl font-semibold text-card-foreground group-hover:text-primary transition-colors duration-300">
                                        {feature.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="text-center pt-0">
                                    <CardDescription className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                                        {feature.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>

                {/* Call to Action */}
                <div className="text-center mt-12 sm:mt-16 md:mt-20">
                    <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl p-8 sm:p-12 border border-primary/20">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">
                            Ready to Get Started?
                        </h3>
                        <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto">
                            Join thousands of event organizers who trust Doo-shen to manage their tickets and grow their events.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-sm sm:text-base font-semibold transition-colors duration-300 flex items-center gap-2">
                                Start Free Trial
                                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                            </button>
                            <button className="border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-sm sm:text-base font-semibold transition-colors duration-300">
                                View Pricing
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
