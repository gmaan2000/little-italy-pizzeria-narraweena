import { useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import narraweenaData from '../data/narraweena.json';
import manlyData from '../data/manly.json';

export default function BranchSelector() {
    const navigate = useNavigate();
    const logoRef = useRef(null);
    const titleRef = useRef(null);
    const leftRef = useRef(null);
    const rightRef = useRef(null);
    const dividerRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
        tl.fromTo(logoRef.current, { scale: 0.5, opacity: 0, rotation: -10 }, { scale: 1, opacity: 1, rotation: 0, duration: 1 })
            .fromTo(titleRef.current.children, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.12 }, '-=0.4')
            .fromTo(dividerRef.current, { scaleX: 0 }, { scaleX: 1, duration: 0.6, ease: 'power2.inOut' }, '-=0.2')
            .fromTo([leftRef.current, rightRef.current],
                { opacity: 0, y: 40 },
                { opacity: 1, y: 0, duration: 0.8, stagger: 0.15 },
                '-=0.4'
            );
    }, []);

    return (
        <div className="min-h-screen relative overflow-hidden flex flex-col">

            {/* Full-screen background image */}
            <div className="absolute inset-0">
                <img
                    src="/assets/bg-footer.png"
                    alt=""
                    className="w-full h-full object-cover"
                    style={{ objectPosition: 'center 20%' }}
                />
                {/* Watermark cover on bg-footer */}
                <div className="absolute bottom-0 right-0 w-32 h-24 pointer-events-none"
                    style={{ background: 'linear-gradient(135deg, transparent 40%, rgba(0,0,0,0.9) 100%)' }} />
                {/* Dark base overlay */}
                <div className="absolute inset-0 bg-black/55" />
            </div>

            {/* Top: Logo + Title */}
            <div className="relative z-10 flex flex-col items-center pt-10 pb-6 px-4">
                <img
                    ref={logoRef}
                    src="/assets/logo-modernized.png"
                    alt="Little Italy Pizzeria"
                    className="w-20 h-20 object-contain drop-shadow-2xl mb-4 rounded-full"
                />
                <div ref={titleRef} className="text-center">
                    <p className="font-accent text-primary text-3xl md:text-4xl leading-tight">Authentic Italian</p>
                    <h1 className="text-white font-heading text-5xl md:text-7xl lg:text-8xl tracking-wider leading-[0.9]">
                        Little Italy
                    </h1>
                    <p className="font-heading text-primary text-xl md:text-2xl tracking-[0.25em] uppercase mt-1">
                        Pizzeria
                    </p>
                </div>
                <div ref={dividerRef} className="w-48 h-px bg-gradient-to-r from-transparent via-gold to-transparent mt-5 origin-center" />
                <p className="text-white/40 font-body text-xs md:text-sm mt-4 tracking-wider uppercase">
                    Sydney's Northern Beaches since 1995 — Choose your location
                </p>
            </div>

            {/* Split panels */}
            <div className="relative z-10 flex flex-col md:flex-row flex-1 min-h-0">

                {/* LEFT — Narraweena: Olive Green */}
                <div
                    ref={leftRef}
                    onClick={() => navigate('/narraweena')}
                    className="group relative flex-1 flex flex-col justify-end overflow-hidden cursor-pointer min-h-[45vh] md:min-h-0"
                >
                    {/* Character image */}
                    <img
                        src={narraweenaData.cardImage}
                        alt="Narraweena"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        style={{ objectPosition: 'center 15%' }}
                    />

                    {/* Veo watermark cover */}
                    <div className="absolute bottom-0 right-0 w-28 h-20 pointer-events-none"
                        style={{ background: 'linear-gradient(135deg, transparent 35%, rgba(46,61,24,0.98) 100%)' }} />

                    {/* Olive gradient overlay */}
                    <div
                        className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-75"
                        style={{ background: 'linear-gradient(to top, rgba(46,61,24,0.95) 0%, rgba(74,97,40,0.7) 45%, rgba(74,97,40,0.2) 100%)' }}
                    />

                    {/* Vertical gold divider (desktop) */}
                    <div className="hidden md:block absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-gold/50 to-transparent z-10" />

                    {/* Logo watermark */}
                    <img src="/assets/logo-modernized.png" alt="" className="absolute top-6 left-6 w-28 h-28 object-contain opacity-[0.10] pointer-events-none select-none -rotate-12 rounded-full mix-blend-screen z-10" />

                    {/* Content */}
                    <div className="relative z-10 p-8 md:p-10">
                        <span className="inline-block px-3 py-1 rounded-full text-xs font-heading tracking-[0.2em] uppercase border border-white/25 text-white/60 mb-4">
                            Takeaway & Delivery
                        </span>
                        <p className="font-accent text-3xl md:text-4xl leading-tight mb-1" style={{ color: '#A8C86A' }}>
                            Narraweena
                        </p>
                        <h2 className="text-white font-heading text-4xl md:text-5xl lg:text-6xl tracking-wider leading-tight mb-3">
                            The Original
                        </h2>
                        <p className="text-white/55 font-body text-sm max-w-xs leading-relaxed mb-6">
                            Our Northern Beaches home since 1995. Authentic Italian, quick &amp; easy.
                        </p>
                        <div className="flex items-center gap-3 group-hover:gap-5 transition-all duration-300">
                            <span className="font-heading text-sm tracking-[0.2em] uppercase text-white">Enter</span>
                            <div className="w-8 h-8 rounded-full border border-white/40 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                                <ArrowRight className="w-4 h-4 text-white" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT — Manly: Burgundy Red */}
                <div
                    ref={rightRef}
                    onClick={() => navigate('/manly')}
                    className="group relative flex-1 flex flex-col justify-end overflow-hidden cursor-pointer min-h-[45vh] md:min-h-0"
                >
                    {/* Character image */}
                    <img
                        src={manlyData.cardImage}
                        alt="Manly"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        style={{ objectPosition: 'center 15%' }}
                    />

                    {/* Veo watermark cover */}
                    <div className="absolute bottom-0 right-0 w-28 h-20 pointer-events-none"
                        style={{ background: 'linear-gradient(135deg, transparent 35%, rgba(107,8,8,0.98) 100%)' }} />

                    {/* Crimson gradient overlay */}
                    <div
                        className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-75"
                        style={{ background: 'linear-gradient(to top, rgba(107,8,8,0.95) 0%, rgba(154,15,15,0.7) 45%, rgba(154,15,15,0.2) 100%)' }}
                    />

                    {/* Logo watermark */}
                    <img src="/assets/logo-modernized.png" alt="" className="absolute bottom-8 right-8 w-32 h-32 object-contain opacity-[0.10] pointer-events-none select-none rotate-6 rounded-full mix-blend-screen z-10" />

                    {/* Content */}
                    <div className="relative z-10 p-8 md:p-10">
                        <span className="inline-block px-3 py-1 rounded-full text-xs font-heading tracking-[0.2em] uppercase border border-white/25 text-white/60 mb-4">
                            Dine-In · Bar · Takeaway
                        </span>
                        <p className="font-accent text-3xl md:text-4xl leading-tight mb-1" style={{ color: '#F0A0A0' }}>
                            Manly
                        </p>
                        <h2 className="text-white font-heading text-4xl md:text-5xl lg:text-6xl tracking-wider leading-tight mb-3">
                            By the Beach
                        </h2>
                        <p className="text-white/55 font-body text-sm max-w-xs leading-relaxed mb-6">
                            Dine in, sip an Aperol, and enjoy Italian flavours by Manly Beach.
                        </p>
                        <div className="flex items-center gap-3 group-hover:gap-5 transition-all duration-300">
                            <span className="font-heading text-sm tracking-[0.2em] uppercase text-white">Enter</span>
                            <div className="w-8 h-8 rounded-full border border-white/40 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                                <ArrowRight className="w-4 h-4 text-white" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer note */}
            <div className="relative z-10 flex items-center justify-center gap-3 py-3">
                <div className="flex gap-1">
                    <div className="w-4 h-0.5 rounded-full" style={{ backgroundColor: '#4A6128' }} />
                    <div className="w-4 h-0.5 rounded-full bg-gold/50" />
                    <div className="w-4 h-0.5 rounded-full" style={{ backgroundColor: '#7B1A1A' }} />
                </div>
                <p className="text-white/25 text-xs font-body">
                    © {new Date().getFullYear()} Little Italy Pizzeria · Northern Beaches, Sydney
                </p>
            </div>
        </div>
    );
}
