import { Phone, ShoppingBag, CalendarCheck, ExternalLink } from 'lucide-react';
import useBranch from '../hooks/useBranch';

export default function OrderCTA() {
    const branch = useBranch();
    if (!branch) return null;
    const isDineIn = branch.type === 'dine-in';
    const theme = branch.theme;

    return (
        <section id="order" className="relative py-24 md:py-36 px-4 overflow-hidden" style={{ backgroundColor: theme.colorDark }}>
            {/* Decorative shapes */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-black/10 rounded-full blur-3xl pointer-events-none translate-x-1/3 translate-y-1/3" />

            {/* Watermark */}
            <img
                src="/assets/logo-modernized.png"
                alt=""
                className="absolute top-1/2 right-8 md:right-16 -translate-y-1/2 w-80 h-80 object-contain opacity-[0.06] pointer-events-none select-none rounded-full"
            />

            {/* Corner ornaments */}
            <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-white/20 pointer-events-none" />
            <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-white/20 pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto text-center">
                <p className="font-accent text-white/90 text-4xl md:text-5xl mb-4">Pronto?</p>
                <h2 className="text-white tracking-wider mb-2 text-5xl md:text-7xl">
                    {isDineIn ? 'Reserve Your Table' : 'Ready to Order?'}
                </h2>
                <div className="w-16 h-[2px] bg-white/40 mx-auto my-6" />
                <p className="text-white/70 font-body mt-4 mb-12 max-w-md mx-auto leading-relaxed text-base">
                    {isDineIn
                        ? 'Book your table for an unforgettable Italian dining experience by the beach. Walk-ins welcome too!'
                        : 'Call ahead for quick pickup or order online through Uber Eats for delivery to your door.'
                    }
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href={`tel:${branch.phone.replace(/\s/g, '')}`}
                        className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-white font-heading uppercase tracking-[0.15em] text-base rounded-full transition-all duration-300 hover:bg-cream hover:scale-105 active:scale-95 shadow-lg"
                        style={{ color: theme.colorDark }}>
                        {isDineIn ? <CalendarCheck className="w-5 h-5" /> : <Phone className="w-5 h-5" />}
                        {isDineIn ? 'Book Now' : 'Call to Order'}
                    </a>
                    <a href={branch.uberEatsUrl} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-10 py-4 border-2 border-white text-white font-heading uppercase tracking-[0.15em] text-base rounded-full transition-all duration-300 hover:bg-white hover:text-primary hover:scale-105 active:scale-95">
                        <ShoppingBag className="w-5 h-5" />
                        Uber Eats
                        <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                </div>

                <p className="text-white/30 font-body text-xs mt-12">
                    {branch.phone} • {branch.address}
                </p>
            </div>
        </section>
    );
}
