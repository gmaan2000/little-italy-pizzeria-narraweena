import { useEffect, useRef } from 'react';
import { MapPin, Clock, Phone as PhoneIcon, Navigation, Wine } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useBranch from '../hooks/useBranch';

gsap.registerPlugin(ScrollTrigger);

export default function LocationSection() {
    const branch = useBranch();
    const sectionRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        if (!sectionRef.current || !contentRef.current) return;
        gsap.fromTo(contentRef.current.children,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' } }
        );
    }, [branch]);

    if (!branch) return null;
    const daysOrder = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    const isDineIn = branch.type === 'dine-in';

    return (
        <section ref={sectionRef} id="location" className="relative py-20 md:py-32 px-4 md:px-8 overflow-hidden">
            {/* Background image */}
            <div
                className="absolute inset-0 bg-cover blur-[2px] scale-[1.02]"
                style={{
                    backgroundImage: `url('${branch.id === 'manly' ? '/assets/hero-manly.png' : '/assets/hero-guy-narraweena.png'}')`,
                    backgroundPosition: branch.id === 'manly' ? '70% center' : 'center center',
                    backgroundSize: branch.id === 'manly' ? '180%' : 'cover',
                }}
            />
            <div className="absolute inset-0 bg-cream/80" />

            {/* Top border */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cream-dark to-transparent" />

            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="text-center mb-14">
                    <p className="font-accent text-primary text-3xl md:text-4xl mb-2">Dove Siamo</p>
                    <h2 className="text-text-dark tracking-wider">Find Us</h2>
                    <div className="divider-primary" />
                </div>

                <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Map */}
                    <div className="relative rounded-3xl overflow-hidden shadow-xl h-[350px] lg:h-full min-h-[350px] group">
                        <iframe
                            src={branch.googleMapsEmbed}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title={`Little Italy ${branch.name} Map`}
                            className="grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700"
                        />
                        {/* Decorative frame corners */}
                        <div className="absolute top-3 left-3 w-8 h-8 border-l-2 border-t-2 border-primary/40 pointer-events-none" />
                        <div className="absolute bottom-3 right-3 w-8 h-8 border-r-2 border-b-2 border-primary/40 pointer-events-none" />
                    </div>

                    {/* Info */}
                    <div className="space-y-5">
                        {/* Address card */}
                        <div className="bg-white rounded-2xl p-6 shadow-sm card-hover border border-cream-dark">
                            <div className="flex items-start gap-4">
                                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                                    <MapPin className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-text-dark font-heading text-sm tracking-[0.15em] mb-1 normal-case">Address</h3>
                                    <p className="text-text-dark font-body">{branch.address}</p>
                                    <a href={branch.googleMapsUrl} target="_blank" rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1 text-primary text-sm font-body mt-2 hover:underline">
                                        <Navigation className="w-3.5 h-3.5" />
                                        Get Directions
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Phone card */}
                        <div className="bg-white rounded-2xl p-6 shadow-sm card-hover border border-cream-dark">
                            <div className="flex items-start gap-4">
                                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                                    <PhoneIcon className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-text-dark font-heading text-sm tracking-[0.15em] mb-1 normal-case">Phone</h3>
                                    <a href={`tel:${branch.phone.replace(/\s/g, '')}`}
                                        className="text-text-dark font-body text-lg hover:text-primary transition-colors">
                                        {branch.phone}
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Dine-in features */}
                        {isDineIn && (
                            <div className="bg-white rounded-2xl p-6 shadow-sm card-hover border border-cream-dark">
                                <div className="flex items-start gap-4">
                                    <div className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                                        <Wine className="w-5 h-5 text-gold" />
                                    </div>
                                    <div>
                                        <h3 className="text-text-dark font-heading text-sm tracking-[0.15em] mb-2 normal-case">Dine-In</h3>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="px-3 py-1 rounded-full bg-green/10 text-green text-xs font-body font-medium">40 Seats</span>
                                            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-body font-medium">Indoor & Outdoor</span>
                                            <span className="px-3 py-1 rounded-full bg-gold/10 text-gold text-xs font-body font-medium">Bar Service</span>
                                            <span className="px-3 py-1 rounded-full bg-charcoal/10 text-charcoal text-xs font-body font-medium">Reservations</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Hours card */}
                        <div className="bg-white rounded-2xl p-6 shadow-sm card-hover border border-cream-dark">
                            <div className="flex items-start gap-4">
                                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                                    <Clock className="w-5 h-5 text-primary" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-text-dark font-heading text-sm tracking-[0.15em] mb-3 normal-case">Opening Hours</h3>
                                    <div className="space-y-1.5">
                                        {daysOrder.map(day => (
                                            <div key={day} className="flex justify-between text-sm font-body">
                                                <span className="text-text-muted capitalize">{day}</span>
                                                <span className="text-text-dark font-medium">{branch.hours[day]}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
