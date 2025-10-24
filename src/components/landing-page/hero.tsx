import React from 'react';
import wavyBackground from '../../assets/wave-black.svg';
import { Button } from '../ui/button';

const Hero: React.FC = () => {
    return (
        <section className="relative min-h-screen flex w-full">
            <div className="absolute inset-0 z-0">
                <img
                    src={wavyBackground}
                    alt="Wavy background"
                    className="w-full h-full object-cover"
                    aria-hidden="true"
                />
            </div>
            <div className="max-w-7xl mx-auto z-10 flex justify-between w-full px-20 gap-10">
                <div className="w-2/3 text-white flex flex-col gap-4 items-start justify-center">
                    <h1 className="text-9xl font-black text-foreground text-slate-200 leading-tight">
                        Doo-shen: Sell Tickets, Grow Events.
                    </h1>
                    <p className="text-lg text-foreground text-slate-200 leading-relaxed">
                        Doo-shen is a ticket management system that allows you to manage your tickets efficiently and effectively.
                    </p>
                    <Button className="bg-white">
                        Get Started
                    </Button>

                </div>
                <div className="w-1/3">

                </div>
            </div>
        </section>
    );
};

export default Hero;
