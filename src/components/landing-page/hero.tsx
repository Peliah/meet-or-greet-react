import React from 'react';
import wavyBackground from '../../assets/wave-black.svg';
import { Button } from '../ui/button';
import { AvatarCircles } from './avatar-circles';

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
            <div className="max-w-7xl mx-auto z-10 flex flex-col items-center justify-center md:w-3/5 w-full px-4 sm:px-6 md:px-8 lg:px-20 gap-6 sm:gap-8 md:gap-10 mix-blend-difference">
                <AvatarCircles />
                <div className="w-full text-white flex flex-col gap-3 sm:gap-4 text-center items-center justify-center">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-9xl font-black text-foreground text-slate-200 leading-tight mix-blend-difference">
                        Doo-shen: Sell Tickets, Grow Events.
                    </h1>
                    <p className="text-sm sm:text-base md:text-lg text-foreground text-slate-200 leading-relaxed mix-blend-difference max-w-4xl">
                        Doo-shen is a ticket management system that allows you to manage your tickets efficiently and effectively.
                    </p>
                    <Button className="bg-white hover:bg-gray-100 px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold">
                        Get Started
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
