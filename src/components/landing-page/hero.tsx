import React from 'react';
import wavyBackground from '../../assets/wave.svg';

const Hero: React.FC = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img
                    src={wavyBackground}
                    alt="Wavy background"
                    className="w-full h-full object-cover"
                    aria-hidden="true"
                />
                {/* <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" /> */}
            </div>


        </section>
    );
};

export default Hero;
