import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Phone, MapPin, Clock, Star, ArrowRight, Menu as MenuIcon, X, Pizza, ChefHat, Heart, Instagram, Facebook } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// UTILS
function cn(...inputs) {
    return twMerge(clsx(inputs));
}

gsap.registerPlugin(ScrollTrigger);

// --- COMPONENTS ---

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={cn(
            "fixed top-0 left-0 right-0 z-50 transition-all duration-700 h-24 flex items-center",
            scrolled ? "bg-secondary/95 backdrop-blur-xl h-20 shadow-2xl border-b border-white/5" : "bg-transparent"
        )}>
            <div className="container mx-auto px-8 flex justify-between items-center">
                <div className="flex items-center gap-6 group cursor-pointer">
                    <div className="relative h-16 w-16 overflow-hidden rounded-full border border-white/20 bg-white/10 backdrop-blur-md">
                        <img src="/assets/logo-modernized.png" alt="Little Italy Logo" className="h-full w-full object-cover scale-105" />
                    </div>
                    <div className="flex flex-col">
                        <span className="font-serif font-black text-3xl tracking-tighter text-white">Little Italy</span>
                        <span className="text-[10px] uppercase tracking-[0.4em] text-primary font-bold">Pizzeria Narraweena</span>
                    </div>
                </div>

                <div className="hidden lg:flex items-center gap-12">
                    {['Menu', 'Our Story', 'Ingredients', 'Location'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase().replace(' ', '-')}`}
                            className="text-xs font-bold uppercase tracking-[0.2em] text-white/70 hover:text-primary transition-all duration-300 relative group"
                        >
                            {item}
                            <span className="absolute -bottom-2 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
                        </a>
                    ))}
                    <div className="h-4 w-px bg-white/20 mx-4" />
                    <a href="tel:+61299827777" className="btn-magnetic bg-primary text-white text-xs font-black uppercase tracking-widest px-10 py-4 rounded-full shadow-[0_10px_30px_rgba(196,30,58,0.3)] hover:shadow-[0_15px_40px_rgba(196,30,58,0.5)] transition-all">
                        Reserve Your Slice
                    </a>
                </div>

                <button className="lg:hidden text-white p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <X size={32} /> : <MenuIcon size={32} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={cn(
                "fixed inset-0 bg-secondary z-[60] flex flex-col items-center justify-center gap-12 transition-all duration-700 lg:hidden px-8",
                mobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
            )}>
                <button className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors" onClick={() => setMobileMenuOpen(false)}>
                    <X size={48} strokeWidth={1} />
                </button>

                <div className="flex flex-col items-center gap-8">
                    {['Menu', 'Our Story', 'Ingredients', 'Location'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase().replace(' ', '-')}`}
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-5xl font-serif text-white/40 hover:text-white transition-all italic"
                        >
                            {item}
                        </a>
                    ))}
                </div>

                <div className="w-full max-w-sm h-px bg-white/10" />

                <a href="tel:+61299827777" className="bg-primary text-white text-xl font-black uppercase tracking-widest px-12 py-6 rounded-full shadow-2xl">
                    Call to Order
                </a>
            </div>
        </nav>
    );
};

const Hero = () => {
    const heroRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();
            tl.from(".hero-title span", {
                y: 100,
                opacity: 0,
                duration: 1.5,
                stagger: 0.15,
                ease: "expo.out",
                delay: 0.5
            })
                .from(".hero-subtitle", {
                    y: 30,
                    opacity: 0,
                    duration: 1,
                    ease: "power3.out"
                }, "-=1")
                .from(".hero-cta-btn", {
                    scale: 0.8,
                    opacity: 0,
                    duration: 1.2,
                    ease: "elastic.out(1, 0.5)",
                    stagger: 0.2
                }, "-=0.8");

            gsap.to(".hero-bg-img", {
                scale: 1.15,
                duration: 25,
                ease: "none",
                repeat: -1,
                yoyo: true
            });
        }, heroRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={heroRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 z-0 overflow-hidden">
                <video
                    src="/assets/Pizza_Making_Video_for_Website.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-cover saturate-[1.1] contrast-[1.1] scale-110"
                />
                <div className="absolute inset-0 bg-secondary/40 backdrop-blur-[2px]" />
                <div className="absolute inset-0 bg-gradient-to-b from-secondary/60 via-transparent to-secondary" />
            </div>

            <div className="relative z-10 container mx-auto px-8 text-center">
                <div className="hero-subtitle flex items-center justify-center gap-4 mb-8">
                    <div className="h-px w-12 bg-primary/50" />
                    <span className="text-white/80 text-xs md:text-sm font-bold uppercase tracking-[0.6em]">Narraweena's Italian Soul</span>
                    <div className="h-px w-12 bg-primary/50" />
                </div>

                <h1 className="hero-title text-white text-6xl md:text-[10rem] font-serif leading-[0.85] tracking-tighter italic mb-12">
                    <span className="block overflow-hidden">Ancient Recipes</span>
                    <span className="block overflow-hidden text-primary not-italic font-black mt-4">Modern Heart.</span>
                </h1>

                <div className="hero-cta-btn flex flex-wrap gap-8 items-center justify-center mt-12">
                    <a href="tel:+61299827777" className="btn-magnetic group bg-primary text-white px-12 py-6 rounded-full text-lg font-black uppercase tracking-widest shadow-[0_20px_40px_rgba(196,30,58,0.4)] hover:shadow-primary/60 transition-all flex items-center gap-4">
                        <Phone size={24} className="group-hover:rotate-12 transition-transform" />
                        Call to Command
                    </a>
                    <a href="#menu" className="btn-magnetic bg-white/5 backdrop-blur-xl border border-white/20 text-white px-12 py-6 rounded-full text-lg font-bold uppercase tracking-widest hover:bg-white/10 transition-all">
                        Explore La Carta
                    </a>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-4 animate-bounce">
                <span className="text-[10px] text-white/30 uppercase tracking-[0.5em] font-bold vertical-text">Scroll</span>
                <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
            </div>
        </section>
    );
};

const FeatureCards = () => {
    // Shuffler
    const [shuffleIndex, setShuffleIndex] = useState(0);
    const popularItems = [
        { name: "Prawn Star", desc: "Garlic prawns, chilli, mozzarella" },
        { name: "Siciliana", desc: "Spicy salami, olives, anchovies" },
        { name: "Margherita", desc: "San Marzano, basil, fior di latte" }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setShuffleIndex(prev => (prev + 1) % popularItems.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    // Typewriter
    const [typedText, setTypedText] = useState("");
    const fullText = "Sourcing only the finest local Narraweena produce...";
    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setTypedText(fullText.slice(0, i));
            i++;
            if (i > fullText.length) i = 0;
        }, 80);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="ingredients" className="py-32 px-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 relative overflow-hidden">
            {/* Large Watermark Logo */}
            <div className="absolute top-1/2 right-0 translate-x-1/3 -translate-y-1/2 z-0 opacity-[0.06] select-none pointer-events-none">
                <img src="/assets/logo-modernized.png" alt="" className="w-[800px] h-auto saturate-0 contrast-150" />
            </div>

            {/* CARD 1: Popular Shuffler */}
            <div className="card-rustic flex flex-col justify-between min-h-[500px] group transition-all duration-500 hover:-translate-y-2 border-primary/5 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] relative z-10">
                <div>
                    <span className="text-primary text-[10px] font-black tracking-[0.3em] uppercase mb-6 block">House Favorites</span>
                    <h3 className="text-4xl text-secondary font-serif italic mb-10">The Most Wanted</h3>
                    <div className="relative h-48 mt-8">
                        {popularItems.map((item, idx) => {
                            const offset = (idx - shuffleIndex + popularItems.length) % popularItems.length;
                            return (
                                <div
                                    key={item.name}
                                    className="absolute inset-0 bg-secondary text-white p-8 rounded-[2rem] transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] shadow-2xl border border-white/5"
                                    style={{
                                        transform: `translateY(${offset * 20}px) scale(${1 - offset * 0.08}) translateZ(${-offset * 100}px)`,
                                        opacity: 1 - offset * 0.4,
                                        zIndex: popularItems.length - offset,
                                        filter: `blur(${offset * 2}px)`
                                    }}
                                >
                                    <p className="font-serif italic text-2xl mb-2 text-primary">{item.name}</p>
                                    <p className="text-white/50 text-xs uppercase tracking-widest font-bold">{item.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="flex items-center justify-between w-full mt-12 pt-8 border-t border-secondary/5">
                    <span className="text-secondary/40 text-xs font-bold uppercase tracking-widest">Rotates Daily</span>
                    <ArrowRight className="text-primary group-hover:translate-x-3 transition-transform duration-500" />
                </div>
            </div>

            {/* CARD 2: Live Feed */}
            <div className="card-rustic flex flex-col justify-between min-h-[500px] bg-secondary text-white border-none shadow-2xl relative overflow-hidden group z-10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl group-hover:bg-primary/20 transition-all duration-700" />
                <div>
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_15px_rgba(196,30,58,1)]" />
                        <span className="text-white/40 text-[10px] font-black uppercase tracking-[0.4em]">Live Selection Feed</span>
                    </div>
                    <h3 className="text-4xl font-serif text-white italic mb-10">Secretly <span className="text-primary not-italic">Local.</span></h3>
                    <p className="font-mono text-primary text-xl leading-relaxed h-32 italic bg-black/20 p-6 rounded-2xl border border-white/5">
                        {typedText}<span className="inline-block w-2 h-6 bg-primary ml-2 animate-pulse" />
                    </p>
                </div>
                <div className="pt-8 border-t border-white/5">
                    <p className="text-white/40 text-sm italic leading-relaxed">
                        Every sunrise, our family hand-selects the Northern Beaches' most vibrant produce. No compromises.
                    </p>
                </div>
            </div>

            {/* CARD 3: Heritage */}
            <div className="card-rustic flex flex-col justify-between min-h-[500px] border-primary/5 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 group z-10">
                <div>
                    <span className="text-primary text-[10px] font-black tracking-[0.3em] uppercase mb-6 block">Our Heritage</span>
                    <h3 className="text-4xl text-secondary font-serif italic mb-10">Family Owned</h3>
                    <div className="space-y-6">
                        {[
                            { icon: ChefHat, title: "Nonna's Legend", desc: "Recipes whispered through 3 generations." },
                            { icon: Heart, title: "Narraweena Soul", desc: "The heartbeat of May Road." },
                            { icon: Star, title: "Elite Craft", desc: "Mastery in every hand-stretch." }
                        ].map((feature, i) => (
                            <div key={i} className="flex gap-6 group/item">
                                <div className="w-14 h-14 rounded-2xl bg-secondary/5 flex items-center justify-center group-hover/item:bg-primary/10 transition-all duration-500 rotate-3 group-hover/item:rotate-0 shadow-sm border border-secondary/5">
                                    <feature.icon size={24} className="text-primary" />
                                </div>
                                <div>
                                    <p className="font-serif italic text-xl text-secondary group-hover/item:text-primary transition-colors">{feature.title}</p>
                                    <p className="text-xs text-secondary/50 leading-relaxed font-medium">{feature.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex items-center justify-between mt-12 pt-8 border-t border-secondary/5">
                    <div className="flex -space-x-4">
                        {[1, 2, 3, 4].map(i => (
                            <img key={i} className="h-10 w-10 rounded-full ring-4 ring-white object-cover shadow-lg" src={`https://i.pravatar.cc/100?img=${i + 20}`} alt="Team" />
                        ))}
                        <div className="h-10 w-10 rounded-full bg-primary text-white text-[10px] font-black ring-4 ring-white flex items-center justify-center shadow-lg">+2</div>
                    </div>
                    <span className="text-[10px] text-secondary/30 uppercase tracking-[0.2em] font-bold">The Family</span>
                </div>
            </div>
        </section>
    );
};

const StackingSections = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const panels = gsap.utils.toArray(".stack-panel");
            panels.forEach((panel, i) => {
                if (i === 0) return;

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: panel,
                        start: "top bottom", // Start transition as next panel enters
                        end: "top top",      // End as next panel is fully visible
                        scrub: true,
                    }
                });

                tl.to(panels[i - 1], {
                    scale: 0.85,
                    opacity: 0.2, // Fade out more aggressively
                    filter: "blur(40px)",
                    y: -100, // Move previous panel up out of the way
                    ease: "none"
                });
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    const steps = [
        { title: "The Tradition", desc: "Recipes that haven't changed in fifty years. We honor the path laid by our ancestors with every pinch of salt.", img: "/assets/artisanal_pizza_oven.png" },
        { title: "The Soul", desc: "Naturally leavened dough, hand-stretched with patience. It's not just food; it's a 48-hour labor of love.", img: "https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?q=80&w=1969&auto=format&fit=crop" },
        { title: "The delivery", desc: "From our family's heat to your table. Authentic Italy, delivered to the heart of Narraweena.", img: "https://images.unsplash.com/photo-1593504049359-74330189a345?q=80&w=2000&auto=format&fit=crop" }
    ];

    return (
        <section ref={sectionRef} className="relative z-20 bg-secondary">
            {steps.map((step, i) => (
                <div key={i} className="stack-panel sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden border-t border-white/5 shadow-[0_-20px_100px_rgba(0,0,0,0.5)]">
                    <img src={step.img} alt={step.title} className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity" />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/20 to-transparent" />

                    <div className="relative z-10 max-w-6xl text-center px-8">
                        <div className="overflow-hidden mb-6">
                            <span className="font-sans text-primary text-xs font-black tracking-[0.5em] uppercase block transform translate-y-0">Heritage Phase 0{i + 1}</span>
                        </div>
                        <h2 className="text-white text-6xl md:text-[12rem] font-serif italic mb-12 tracking-tighter leading-none">{step.title}</h2>
                        <p className="text-white/70 text-lg md:text-3xl max-w-3xl mx-auto leading-relaxed font-light font-serif">
                            "{step.desc}"
                        </p>

                        <div className="mt-16 flex justify-center items-center gap-6">
                            <div className="h-px w-12 bg-white/20" />
                            <div className="h-2 w-2 rounded-full bg-primary shadow-[0_0_10px_rgba(196,30,58,1)]" />
                            <div className="h-px w-12 bg-white/20" />
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
};

const MenuSection = () => {
    const categories = ['All', 'Pizza', 'Pasta', 'Dessert'];
    const [activeCategory, setActiveCategory] = useState('All');

    const menuItems = [
        {
            name: "Prawn Star",
            price: "$26",
            category: "Pizza",
            tags: ["Popular"],
            desc: "Garlic infused prawns, fresh chilli, mozzarella on a hand-stretched base.",
            image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1000&auto=format&fit=crop"
        },
        {
            name: "Boscaiola Pasta",
            price: "$22",
            category: "Pasta",
            tags: ["Creamy"],
            desc: "Creamy mushroom and bacon sauce with fresh fettuccine.",
            image: "/assets/boscaiola-pasta.png"
        },
        {
            name: "Traditional Margherita",
            price: "$19",
            category: "Pizza",
            tags: ["V", "Classic"],
            desc: "San Marzano tomatoes, fresh basil, and local fior di latte.",
            image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?q=80&w=1000&auto=format&fit=crop"
        },
        {
            name: "Tiramisu",
            price: "$12",
            category: "Dessert",
            tags: ["Homemade"],
            desc: "Coffee-soaked ladyfingers layered with rich mascarpone cream.",
            image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=1000&auto=format&fit=crop"
        },
        {
            name: "Siciliana",
            price: "$24",
            category: "Pizza",
            tags: ["Spicy"],
            desc: "Spicy salami, olives, capers, and anchovies.",
            image: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?q=80&w=1000&auto=format&fit=crop"
        },
        {
            name: "Gnocchi Sorrentina",
            price: "$23",
            category: "Pasta",
            tags: ["V"],
            desc: "Homemade potato gnocchi with tomato and melted mozzarella.",
            image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=1000&auto=format&fit=crop"
        }
    ];

    const filteredItems = activeCategory === 'All'
        ? menuItems
        : menuItems.filter(item => item.category === activeCategory);

    const sectionRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".menu-item-card", {
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".menu-grid",
                    start: "top 80%",
                }
            });
        }, sectionRef);
        return () => ctx.revert();
    }, [activeCategory]);

    return (
        <section id="menu" ref={sectionRef} className="py-32 px-8 bg-background relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2 pointer-events-none" />

            {/* Large Watermark Logo */}
            <div className="absolute top-20 right-0 -translate-x-1/4 z-0 opacity-[0.08] select-none pointer-events-none">
                <img src="/assets/logo-modernized.png" alt="" className="w-[600px] h-auto saturate-0 contrast-125" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
                    <div className="max-w-xl">
                        <span className="text-primary font-sans font-bold tracking-[0.2em] uppercase mb-4 block">La Carta</span>
                        <h2 className="text-secondary text-5xl md:text-7xl font-serif italic mb-6">Experience the <span className="text-primary not-italic">Tradition.</span></h2>
                        <p className="text-secondary/60 text-lg leading-relaxed">
                            Every dish is a testament to our three-generation heritage, using only the finest local Narraweena produce and time-honored Italian techniques.
                        </p>
                    </div>

                    <div className="flex bg-secondary/5 p-1 rounded-full backdrop-blur-sm border border-secondary/10">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={cn(
                                    "px-8 py-3 rounded-full text-sm font-bold transition-all duration-300",
                                    activeCategory === cat
                                        ? "bg-primary text-white shadow-lg"
                                        : "text-secondary/50 hover:text-secondary"
                                )}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="menu-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredItems.map((item, i) => (
                        <div key={item.name} className="menu-item-card group cursor-pointer">
                            <div className="relative h-[350px] overflow-hidden rounded-3xl mb-6 shadow-2xl">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="absolute top-6 right-6 flex flex-col gap-2">
                                    {item.tags.map(tag => (
                                        <span key={tag} className="bg-white/90 backdrop-blur-md text-primary text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                    <p className="text-white/80 text-sm leading-relaxed mb-4">{item.desc}</p>
                                    <button className="w-full bg-white text-secondary py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-colors">
                                        View Details
                                    </button>
                                </div>
                            </div>
                            <div className="flex justify-between items-center group-hover:translate-x-2 transition-transform duration-300">
                                <h3 className="text-2xl font-serif text-secondary group-hover:text-primary transition-colors">{item.name}</h3>
                                <span className="text-xl font-sans font-black text-primary">{item.price}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-32 text-center">
                    <div className="inline-block p-1 bg-secondary/5 rounded-full border border-dashed border-secondary/20">
                        <a href="tel:+61299827777" className="btn-magnetic bg-secondary text-white px-16 py-6 rounded-full font-bold text-lg shadow-2xl flex items-center gap-4 group">
                            <Phone className="group-hover:rotate-12 transition-transform" />
                            Order the Full Legend
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

const JoinOurTable = () => {
    return (
        <section id="location" className="py-32 px-8 relative overflow-hidden">
            {/* Background Image Overlay - CLEAN AND UNTINTED */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1593504049359-74330189a345?q=80&w=2000&auto=format&fit=crop"
                    alt="Join Our Table Background"
                    className="w-full h-full object-cover"
                />
                {/* LOCALIZED GRADIENT FOR READABILITY (Affects only the left text area) */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent w-full md:w-3/4 lg:w-1/2" />
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
                {/* Left Side: Content */}
                <div className="space-y-12 drop-shadow-2xl">
                    <div className="space-y-6">
                        <h2 className="text-6xl md:text-8xl font-serif italic text-white leading-none drop-shadow-md">
                            Join our Table
                        </h2>
                        <p className="text-white/90 text-lg md:text-xl leading-relaxed max-w-lg font-serif italic border-l-2 border-primary/50 pl-8 drop-shadow-sm">
                            Located in the heart of Narraweena, we invite you to experience the warmth of a true Italian kitchen. From our family to yours, we serve memories on every plate.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-primary uppercase tracking-[0.2em] font-black text-[10px] drop-shadow-sm">
                                <MapPin size={16} />
                                <span>Our Location</span>
                            </div>
                            <p className="text-white font-medium drop-shadow-sm">
                                54A May Road,<br />Narraweena NSW 2099
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-primary uppercase tracking-[0.2em] font-black text-[10px] drop-shadow-sm">
                                <Clock size={16} />
                                <span>Opening Hours</span>
                            </div>
                            <div className="text-white font-medium drop-shadow-sm">
                                <p>Mon - Sun: 4:00 PM - 9:00 PM</p>
                                <p className="text-xs text-white/50 italic mt-1 font-serif">Tradition served daily</p>
                            </div>
                        </div>
                    </div>

                    <a
                        href="https://maps.google.com/?q=Little+Italy+Pizzeria+Narraweena+54A+May+Road+Narraweena"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-4 text-white hover:text-primary transition-colors font-black uppercase tracking-[0.3em] text-[10px] group drop-shadow-sm"
                    >
                        Find us on the map
                        <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
                    </a>
                </div>

                {/* Right Side: Map */}
                <div className="relative aspect-square md:aspect-video lg:aspect-square rounded-[2rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.1)] group">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3317.211747635232!2d151.2754393!3d-33.7551937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12abec6dcc5ed1%3A0x1e800be839b59667!2sLITTLE%20ITALY%20NARRAWEENA!5e0!3m2!1sen!2sau!4v1772444775538!5m2!1sen!2sau"
                        className="w-full h-full grayscale invert-[0.1] contrast-[1.1] opacity-90 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                    {/* Custom Pin Decoration Layer */}
                    <div className="absolute inset-0 pointer-events-none border-[12px] border-white/40 rounded-[2rem]"></div>
                </div>
            </div>
        </section>
    );
};

const Footer = () => {
    return (
        <footer className="bg-secondary text-white py-20 px-8 relative z-30 overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
                <div className="flex items-center gap-6 group cursor-pointer mt-8">
                    <div className="relative h-28 w-28 overflow-hidden rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
                        <img src="/assets/logo-modernized.png" alt="Little Italy Logo" className="h-full w-full object-cover scale-105" />
                    </div>
                    <div className="flex flex-col">
                        <span className="font-serif font-black text-6xl tracking-tighter text-white">Little Italy</span>
                        <span className="text-[20px] uppercase tracking-[0.4em] text-primary font-bold">Pizzeria Narraweena</span>
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-center md:text-left order-3 md:order-2">
                    <p className="text-[9px] font-black uppercase tracking-[0.4em] text-white/30 leading-loose">
                        &copy; {new Date().getFullYear()} LITTLE ITALY PIZZERIA. ROOTED IN TRADITION, CRAFTED IN NARRAWEENA.
                    </p>
                </div>

                {/* Socials */}
                <div className="flex gap-8 order-2 md:order-3">
                    <a href="#" className="text-white/40 hover:text-white transition-colors">
                        <Instagram size={20} />
                    </a>
                    <a href="#" className="text-white/40 hover:text-white transition-colors">
                        <Facebook size={20} />
                    </a>
                    <a href="#" className="text-white/40 hover:text-white transition-colors">
                        <Pizza size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

// --- MAIN APP ---

const App = () => {
    return (
        <main className="bg-background selection:bg-primary selection:text-white">
            <Navbar />
            <Hero />
            <FeatureCards />
            <div id="our-story">
                <StackingSections />
            </div>
            <MenuSection />
            <JoinOurTable />
            <Footer />
        </main>
    );
};

export default App;
