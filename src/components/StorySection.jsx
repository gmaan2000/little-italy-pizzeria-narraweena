import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function StorySection() {
    const sectionRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        if (!sectionRef.current) return;
        gsap.fromTo(contentRef.current.children,
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.7, stagger: 0.15, scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' } }
        );
    }, []);

    return (
        <section ref={sectionRef} id="story" className="relative py-20 md:py-32 px-4 md:px-8 overflow-hidden">
            {/* Background image */}
            <div
                className="absolute -inset-[15%] bg-cover bg-center"
                style={{ backgroundImage: "url('/assets/Italian culinary charm on gingham__endoftext__.png')" }}
            />
            <div className="absolute inset-0 bg-white/85" />

            {/* Top border */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cream-dark to-transparent" />

            <div className="relative z-10 max-w-7xl mx-auto">
                <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left — Image */}
                    <div className="relative">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/10">
                            <img
                                src="/assets/IMG_1538.jpg"
                                alt="Little Italy Pizzeria interior"
                                className="w-full h-[400px] lg:h-[550px] object-cover"
                            />
                        </div>
                        {/* Floating accent card */}
                        <div className="absolute -bottom-6 -right-4 lg:-right-8 bg-primary text-white p-6 rounded-2xl shadow-xl shadow-primary/30">
                            <p className="font-accent text-3xl leading-tight">3 Generations</p>
                            <p className="font-heading text-xs tracking-[0.2em] uppercase mt-1 text-white/80">of Italian Tradition</p>
                        </div>
                        {/* Decorative corner */}
                        <div className="absolute -top-4 -left-4 w-24 h-24 border-l-2 border-t-2 border-primary/20 rounded-tl-3xl pointer-events-none" />
                    </div>

                    {/* Right — Story text */}
                    <div>
                        <p className="font-accent text-primary text-3xl md:text-4xl mb-2">La Nostra Storia</p>
                        <h2 className="text-text-dark tracking-wider mb-2">Our Story</h2>
                        <div className="w-16 h-[2px] bg-primary mb-8" />

                        <div className="space-y-5 text-text-muted font-body text-base leading-relaxed">
                            <p>
                                Little Italy Pizzeria brings the heart and soul of Italian cooking to Sydney's Northern Beaches.
                                Born from a passion for <em className="text-text-dark font-medium not-italic">la vera cucina italiana</em> — real Italian food — every dish
                                is crafted from traditional family recipes passed down through generations.
                            </p>
                            <p>
                                From our original Narraweena kitchen to our Manly beachside restaurant, we've stayed true
                                to one simple promise: <strong className="text-text-dark font-semibold">fresh ingredients, authentic flavours, and the warmth of Italian hospitality.</strong>
                            </p>
                            <p>
                                Whether you're grabbing a quick takeaway after a long day or sitting down with friends
                                over a bottle of Sangiovese — at Little Italy, you're family.
                            </p>
                        </div>

                        {/* Italian flag divider */}
                        <div className="flex gap-1.5 mt-10">
                            <div className="w-12 h-1 rounded-full bg-green" />
                            <div className="w-12 h-1 rounded-full bg-cream-dark border border-cream-dark" />
                            <div className="w-12 h-1 rounded-full bg-primary" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
