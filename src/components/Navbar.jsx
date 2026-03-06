import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import useBranch from '../hooks/useBranch';

export default function Navbar() {
    const branch = useBranch();
    const navigate = useNavigate();
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => setIsOpen(false), [location]);

    const navLinksLeft = [
        { label: 'Menu', href: '#menu' },
        { label: 'Our Story', href: '#story' },
    ];

    const navLinksRight = [
        { label: 'Location', href: '#location' },
        { label: 'Order', href: '#order' },
    ];

    const scrollToSection = (hash) => {
        setIsOpen(false);
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            {/* Announcement Bar */}
            <div className="announcement-bar hidden md:block fixed top-0 left-0 right-0 z-[60]"
                style={branch ? { backgroundColor: branch.theme.colorDark } : undefined}>
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <span className="text-white/50">Sydney's Northern Beaches</span>
                    </div>
                    {branch && (
                        <a href={`tel:${branch.phone.replace(/\s/g, '')}`}
                            className="flex items-center gap-1.5 text-primary-light hover:text-white transition-colors">
                            <Phone className="w-3 h-3" />
                            {branch.phone}
                        </a>
                    )}
                    {!branch && (
                        <span className="text-primary-light">Free Delivery Available</span>
                    )}
                </div>
            </div>

            {/* Main Navbar */}
            <nav className={`fixed left-0 right-0 z-50 transition-all duration-500 md:top-[32px] top-0 ${scrolled
                    ? 'backdrop-blur-md shadow-lg shadow-black/5 py-3'
                    : 'bg-transparent py-5'
                }`}
                style={scrolled && branch ? {
                    backgroundColor: `color-mix(in srgb, ${branch.theme.color} 6%, rgba(255,255,255,0.95))`
                } : undefined}>
                <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
                    {/* Left nav links (desktop) */}
                    <div className="hidden lg:flex items-center gap-8 flex-1">
                        {navLinksLeft.map(link => (
                            <button
                                key={link.label}
                                onClick={() => scrollToSection(link.href)}
                                className={`font-heading text-sm tracking-[0.2em] uppercase transition-colors duration-300 ${scrolled ? 'text-text-dark hover:text-primary' : 'text-white/90 hover:text-primary'
                                    }`}
                            >
                                {link.label}
                            </button>
                        ))}
                    </div>

                    {/* Center Logo */}
                    <button onClick={() => navigate('/')} className="flex items-center gap-3 group lg:flex-none">
                        <img
                            src="/assets/logo-modernized.png"
                            alt="Little Italy"
                            className="w-11 h-11 object-contain transition-transform duration-300 group-hover:scale-110 rounded-full"
                        />
                        <div>
                            <span className={`font-heading text-xl tracking-[0.15em] block leading-tight transition-colors ${scrolled ? 'text-text-dark' : 'text-white'
                                }`}>Little Italy</span>
                            {branch && (
                                <span className="text-primary text-[10px] font-heading tracking-[0.3em] uppercase">{branch.name}</span>
                            )}
                        </div>
                    </button>

                    {/* Right nav links (desktop) */}
                    <div className="hidden lg:flex items-center gap-8 flex-1 justify-end">
                        {navLinksRight.map(link => (
                            <button
                                key={link.label}
                                onClick={() => scrollToSection(link.href)}
                                className={`font-heading text-sm tracking-[0.2em] uppercase transition-colors duration-300 ${scrolled ? 'text-text-dark hover:text-primary' : 'text-white/90 hover:text-primary'
                                    }`}
                            >
                                {link.label}
                            </button>
                        ))}

                        {branch && (
                            <button
                                onClick={() => navigate('/')}
                                className={`text-xs font-body flex items-center gap-1.5 transition-colors duration-300 border rounded-full px-4 py-1.5 ${scrolled
                                        ? 'text-text-muted hover:text-primary border-text-muted/30 hover:border-primary'
                                        : 'text-white/60 hover:text-white border-white/30'
                                    }`}
                            >
                                <MapPin className="w-3 h-3" />
                                Switch Location
                            </button>
                        )}
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`lg:hidden p-2 transition-colors ${scrolled ? 'text-text-dark' : 'text-white'}`}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile menu */}
                <div className={`lg:hidden absolute top-full left-0 right-0 bg-white/98 backdrop-blur-lg border-t border-cream-dark shadow-xl transition-all duration-300 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
                    }`}>
                    <div className="px-6 py-6 space-y-4">
                        {[...navLinksLeft, ...navLinksRight].map(link => (
                            <button
                                key={link.label}
                                onClick={() => scrollToSection(link.href)}
                                className="block text-text-dark hover:text-primary font-heading text-2xl tracking-[0.15em] uppercase transition-colors w-full text-left"
                            >
                                {link.label}
                            </button>
                        ))}

                        <hr className="border-cream-dark" />

                        {branch && (
                            <button
                                onClick={() => navigate('/')}
                                className="block text-text-muted hover:text-primary font-body text-sm w-full text-left flex items-center gap-2"
                            >
                                <MapPin className="w-4 h-4" />
                                Switch to {branch.id === 'narraweena' ? 'Manly' : 'Narraweena'}
                            </button>
                        )}

                        {branch && (
                            <a
                                href={`tel:${branch.phone.replace(/\s/g, '')}`}
                                className="btn-primary w-full justify-center text-sm"
                            >
                                <Phone className="w-4 h-4" />
                                Call {branch.phone}
                            </a>
                        )}
                    </div>
                </div>
            </nav>
        </>
    );
}
