import { useEffect, useRef } from 'react';
import { Phone, ShoppingBag, CalendarCheck, ArrowDown } from 'lucide-react';
import gsap from 'gsap';
import useBranch from '../hooks/useBranch';

export default function Hero() {
    const branch = useBranch();
    const heroRef = useRef(null);
    const textRef = useRef(null);
    const mediaRef = useRef(null);

    useEffect(() => {
        if (!textRef.current) return;

        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
        tl.fromTo(textRef.current.children,
            { y: 60, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.9, stagger: 0.12 }
        );

        if (mediaRef.current) {
            tl.fromTo(mediaRef.current,
                { x: 80, opacity: 0 },
                { x: 0, opacity: 1, duration: 1, ease: 'power2.out' },
                '-=0.6'
            );
        }
    }, [branch]);

    if (!branch) return null;
    const isDineIn = branch.type === 'dine-in';
    const theme = branch.theme;

    return (
        <section ref={heroRef} className="relative min-h-screen flex items-stretch overflow-hidden">

            {/* Left side — Text Content */}
            <div className="relative z-10 w-full lg:w-1/2 flex items-center bg-cream px-6 md:px-12 lg:px-20 py-32">
                {/* Branch-colored ambient blobs */}
                <div className="absolute top-20 right-0 w-64 h-64 rounded-full blur-3xl pointer-events-none opacity-20"
                    style={{ backgroundColor: theme.color }} />
                <div className="absolute bottom-20 left-10 w-40 h-40 rounded-full blur-2xl pointer-events-none opacity-10"
                    style={{ backgroundColor: theme.colorLight }} />

                <div ref={textRef} className="relative max-w-xl">
                    {/* Script tagline */}
                    <p className="font-accent text-4xl md:text-5xl mb-4" style={{ color: theme.color }}>
                        {isDineIn ? 'Benvenuti' : 'We deliver'}
                    </p>

                    {/* Massive Heading */}
                    <h1 className="text-text-dark text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-heading tracking-wider leading-[0.9] mb-2">
                        Little<br />Italy
                    </h1>
                    <p className="font-heading text-2xl md:text-3xl tracking-[0.2em] uppercase mb-6" style={{ color: theme.color }}>
                        Pizzeria — {branch.name}
                    </p>

                    {/* Thin separator */}
                    <div className="w-16 h-[2px] mb-6" style={{ backgroundColor: theme.color }} />

                    {/* Description */}
                    <p className="text-text-muted font-body text-base md:text-lg max-w-md leading-relaxed mb-10">
                        {branch.description}
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        {isDineIn ? (
                            <>
                                <a href={`tel:${branch.phone.replace(/\s/g, '')}`}
                                    className="inline-flex items-center justify-center gap-2 px-10 py-4 text-white font-heading uppercase tracking-[0.15em] text-base rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
                                    style={{ backgroundColor: theme.color }}>
                                    <CalendarCheck className="w-5 h-5" />
                                    Book a Table
                                </a>
                                <button
                                    onClick={() => document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="inline-flex items-center justify-center gap-2 px-10 py-4 border-2 font-heading uppercase tracking-[0.15em] text-base rounded-full transition-all duration-300 hover:scale-105 active:scale-95"
                                    style={{ borderColor: theme.color, color: theme.color }}>
                                    <ShoppingBag className="w-5 h-5" />
                                    View Menu
                                </button>
                            </>
                        ) : (
                            <>
                                <a href={`tel:${branch.phone.replace(/\s/g, '')}`}
                                    className="inline-flex items-center justify-center gap-2 px-10 py-4 text-white font-heading uppercase tracking-[0.15em] text-base rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
                                    style={{ backgroundColor: theme.color }}>
                                    <Phone className="w-5 h-5" />
                                    Call to Order
                                </a>
                                <a href={branch.uberEatsUrl} target="_blank" rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 px-10 py-4 border-2 font-heading uppercase tracking-[0.15em] text-base rounded-full transition-all duration-300 hover:scale-105 active:scale-95"
                                    style={{ borderColor: theme.color, color: theme.color }}>
                                    <ShoppingBag className="w-5 h-5" />
                                    Uber Eats
                                </a>
                            </>
                        )}
                    </div>

                    {/* Branch badge */}
                    <div className="inline-flex items-center gap-2 mt-10 px-4 py-2 rounded-full border text-sm font-body"
                        style={{ backgroundColor: `${theme.color}12`, borderColor: `${theme.color}25`, color: theme.color }}>
                        <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: theme.color }} />
                        {branch.tagline}
                    </div>
                </div>
            </div>

            {/* Right side — Video Panel */}
            <div ref={mediaRef} className="hidden lg:block w-1/2 relative overflow-hidden">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster={branch.heroImage}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: 'center 15%' }}
                >
                    <source src={branch.heroVideo} type="video/mp4" />
                </video>

                {/* Veo watermark cover */}
                <div className="absolute bottom-0 right-0 w-32 h-24 pointer-events-none z-10"
                    style={{ background: `linear-gradient(135deg, transparent 35%, ${theme.colorDark} 100%)` }} />

                {/* Blend left edge into cream */}
                <div className="absolute inset-y-0 left-0 w-24 pointer-events-none"
                    style={{ background: 'linear-gradient(to right, #F9F7F2, transparent)' }} />

                {/* Branch color vignette at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
                    style={{ background: `linear-gradient(to top, ${theme.colorDark}70, transparent)` }} />

                {/* Since 1995 badge */}
                <div className="absolute bottom-12 left-12 w-32 h-32 rounded-full flex flex-col items-center justify-center text-white shadow-2xl z-10"
                    style={{ backgroundColor: theme.color, boxShadow: `0 25px 50px ${theme.color}50` }}>
                    <span className="font-accent text-2xl leading-tight">Since</span>
                    <span className="font-heading text-3xl tracking-wider">1995</span>
                </div>

                {/* Corner ornament */}
                <div className="absolute top-12 right-12 w-20 h-20 border-r-2 border-t-2 border-white/30 pointer-events-none" />
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-8 lg:left-[25%] lg:-translate-x-1/2 flex flex-col items-center gap-3 text-text-muted z-20">
                <span className="text-[10px] uppercase tracking-[0.3em] font-body">Scroll</span>
                <ArrowDown className="w-4 h-4 animate-bounce" />
            </div>
        </section>
    );
}
