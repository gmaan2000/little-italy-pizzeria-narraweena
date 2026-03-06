import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useBranch from '../hooks/useBranch';
import menuData from '../data/menu.json';

gsap.registerPlugin(ScrollTrigger);

export default function MenuSection() {
    const branch = useBranch();
    const [activeCategory, setActiveCategory] = useState(0);
    const sectionRef = useRef(null);
    const headingRef = useRef(null);
    const cardsRef = useRef(null);

    const foodCategories = menuData.categories;
    const barCategories = branch?.features.includes('bar') ? menuData.barMenu.categories : [];
    const allCategories = [...foodCategories, ...barCategories];

    useEffect(() => {
        if (!sectionRef.current) return;
        gsap.fromTo(headingRef.current,
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } }
        );
    }, []);

    useEffect(() => {
        if (!cardsRef.current) return;
        const items = cardsRef.current.querySelectorAll('.menu-card');
        gsap.fromTo(items,
            { y: 30, opacity: 0, scale: 0.95 },
            { y: 0, opacity: 1, scale: 1, duration: 0.5, stagger: 0.06, ease: 'power2.out' }
        );
    }, [activeCategory]);

    if (!branch) return null;
    const currentCategory = allCategories[activeCategory];
    const theme = branch.theme;

    // Italian flag pinstripes — green / white / red, animated slow scroll
    const stripesBg = `repeating-linear-gradient(
        180deg,
        transparent 0px,
        transparent 48px,
        rgba(74,97,40,0.3) 48px,
        rgba(74,97,40,0.3) 53px,
        transparent 53px,
        transparent 59px,
        #FFFFFF 59px,
        #FFFFFF 64px,
        transparent 64px,
        transparent 70px,
        rgba(154,15,15,0.25) 70px,
        rgba(154,15,15,0.25) 75px,
        transparent 75px,
        transparent 120px
    )`;

    const stripesRef = useRef(null);

    // Animate stripes — slow vertical drift
    useEffect(() => {
        if (!stripesRef.current) return;
        gsap.to(stripesRef.current, {
            backgroundPositionY: '120px',
            duration: 12,
            ease: 'none',
            repeat: -1,
        });
    }, []);

    return (
        <section ref={sectionRef} id="menu" className="relative py-20 md:py-32 px-4 md:px-8 overflow-hidden bg-cream">
            {/* Animated stripe layer */}
            <div
                ref={stripesRef}
                className="absolute inset-0 pointer-events-none"
                style={{ backgroundImage: stripesBg }}
            />
            {/* Decorative shapes */}
            <div className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2"
                style={{ backgroundColor: `${theme.color}08` }} />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl pointer-events-none translate-x-1/3 translate-y-1/3" />

            {/* Top decorative line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent" />

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Heading */}
                <div ref={headingRef} className="text-center mb-14">
                    <p className="font-accent text-3xl md:text-4xl mb-2" style={{ color: theme.color }}>Buon Appetito</p>
                    <h2 className="text-text-dark tracking-wider">Our Menu</h2>
                    <div className="w-20 h-[2px] mx-auto my-6" style={{ backgroundColor: theme.color }} />
                    <p className="text-text-muted font-body max-w-lg mx-auto mt-4 text-sm leading-relaxed">
                        Traditional Italian recipes made with the freshest ingredients.
                        {branch.features.includes('bar') && ' Plus our curated selection of Italian wines, beers, and cocktails.'}
                    </p>
                </div>

                {/* Category Tabs — Marcello pill style */}
                <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
                    {allCategories.map((cat, i) => (
                        <button
                            key={cat.name}
                            onClick={() => setActiveCategory(i)}
                            className={`px-6 py-2.5 rounded-full font-heading text-sm tracking-[0.15em] uppercase transition-all duration-300 cursor-pointer ${activeCategory === i
                                ? 'text-white shadow-lg scale-105'
                                : 'bg-white text-text-muted border border-cream-dark hover:border-transparent hover:text-white'
                                }`}
                            style={activeCategory === i
                                ? { backgroundColor: theme.color, boxShadow: `0 4px 15px ${theme.color}40` }
                                : undefined
                            }
                            onMouseEnter={e => { if (activeCategory !== i) { e.currentTarget.style.backgroundColor = theme.color; e.currentTarget.style.color = 'white'; } }}
                            onMouseLeave={e => { if (activeCategory !== i) { e.currentTarget.style.backgroundColor = ''; e.currentTarget.style.color = ''; } }}
                        >
                            {cat.name}
                        </button>
                    ))}
                </div>

                {/* Menu Items — Card Grid */}
                <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {currentCategory?.items.map((item, idx) => (
                        <div
                            key={`${currentCategory.name}-${item.name}`}
                            className="menu-card group relative bg-white rounded-3xl overflow-hidden border border-cream-dark hover:border-primary/20 transition-all duration-500 cursor-pointer hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1"
                        >
                            {/* Image */}
                            <div className="relative h-52 overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent" />

                                {/* Price badge — circular like Marcello */}
                                <div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-primary text-white flex flex-col items-center justify-center shadow-lg shadow-primary/30">
                                    <span className="text-[10px] font-body leading-none">from</span>
                                    <span className="font-heading text-xl tracking-wider leading-none">${item.price}</span>
                                </div>

                                {/* "Popular" badge for first item in each category */}
                                {idx === 0 && (
                                    <div className="absolute top-4 left-4 bg-gold text-charcoal px-3 py-1 rounded-full font-heading text-[10px] tracking-[0.15em] uppercase shadow-md">
                                        Popular
                                    </div>
                                )}
                            </div>

                            {/* Text */}
                            <div className="p-6">
                                <h4 className="text-text-dark font-heading text-lg tracking-wider group-hover:text-primary transition-colors duration-300 mb-2">
                                    {item.name}
                                </h4>
                                <p className="text-text-muted font-body text-xs leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bar note */}
                {branch.features.includes('bar') && (
                    <div className="text-center mt-10">
                        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-primary/5 border border-primary/10">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            <span className="text-primary font-body text-xs tracking-wide">Bar service available for dine-in at {branch.name}</span>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
