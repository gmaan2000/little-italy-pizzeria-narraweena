import { useNavigate } from 'react-router-dom';
import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react';
import narraweenaData from '../data/narraweena.json';
import manlyData from '../data/manly.json';

const branches = [narraweenaData, manlyData];

export default function Footer() {
    const navigate = useNavigate();
    const year = new Date().getFullYear();

    return (
        <footer className="relative text-white pt-16 pb-8 px-4 md:px-8 overflow-hidden">
            {/* Blurred background image */}
            <div className="absolute inset-0">
                <img
                    src="/assets/bg-footer.png"
                    alt=""
                    className="w-full h-full object-cover"
                    style={{ objectPosition: 'center 85%', filter: 'blur(1.5px)', transform: 'scale(1.03)' }}
                />
                {/* Veo watermark cover */}
                <div className="absolute bottom-0 right-0 w-32 h-24 pointer-events-none"
                    style={{ background: 'linear-gradient(135deg, transparent 35%, rgba(0,0,0,0.95) 100%)' }} />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/80" />
            </div>

            {/* Top border */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Top section */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <img src="/assets/logo-modernized.png" alt="Little Italy" className="w-14 h-14 object-contain rounded-full" />
                            <div>
                                <span className="font-heading text-xl tracking-wider block text-white">Little Italy</span>
                                <span className="font-accent text-primary text-lg">Pizzeria</span>
                            </div>
                        </div>
                        <p className="text-white/50 font-body text-sm leading-relaxed max-w-xs">
                            Authentic Italian on Sydney's Northern Beaches. Two locations — same Italian soul.
                        </p>
                        <div className="flex gap-1.5 mt-5">
                            <div className="w-8 h-1 rounded-full bg-olive" />
                            <div className="w-8 h-1 rounded-full bg-gold/60" />
                            <div className="w-8 h-1 rounded-full bg-burgundy" />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-gold font-heading text-sm tracking-[0.2em] mb-5 normal-case">Quick Links</h3>
                        <div className="space-y-3 text-sm font-body">
                            <a href="#menu" className="block text-white/50 hover:text-white transition-colors">Menu</a>
                            <a href="#story" className="block text-white/50 hover:text-white transition-colors">Our Story</a>
                            <a href="#location" className="block text-white/50 hover:text-white transition-colors">Find Us</a>
                            <a href="#order" className="block text-white/50 hover:text-white transition-colors">Order Now</a>
                        </div>
                    </div>

                    {/* Locations */}
                    {branches.map(branch => (
                        <div key={branch.id}>
                            <h3 className="text-gold font-heading text-sm tracking-[0.2em] mb-5 normal-case">{branch.name}</h3>
                            <div className="space-y-3 text-sm font-body">
                                <div className="flex items-start gap-2.5 text-white/50">
                                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-white/25" />
                                    <span>{branch.address}</span>
                                </div>
                                <div className="flex items-center gap-2.5 text-white/50">
                                    <Phone className="w-4 h-4 flex-shrink-0 text-white/25" />
                                    <a href={`tel:${branch.phone.replace(/\s/g, '')}`} className="hover:text-white transition-colors">
                                        {branch.phone}
                                    </a>
                                </div>
                                <div className="flex items-start gap-2.5 text-white/50">
                                    <Clock className="w-4 h-4 mt-0.5 flex-shrink-0 text-white/25" />
                                    <div>
                                        <span>Mon-Fri: {branch.hours.monday}</span><br />
                                        <span>Sat-Sun: {branch.hours.saturday}</span>
                                    </div>
                                </div>
                                <button
                                    onClick={() => navigate(`/${branch.id}`)}
                                    className="text-primary text-xs flex items-center gap-1 hover:underline mt-2 cursor-pointer transition-colors"
                                >
                                    View {branch.name} <ExternalLink className="w-3 h-3" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom bar */}
                <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-white/25 text-xs font-body">
                        © {year} Little Italy Pizzeria. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <button onClick={() => navigate('/')} className="text-white/25 hover:text-white text-xs font-body transition-colors cursor-pointer">
                            Change Location
                        </button>
                        <a href="#menu" className="text-white/25 hover:text-white text-xs font-body transition-colors">Menu</a>
                        <a href="#order" className="text-white/25 hover:text-white text-xs font-body transition-colors">Order Now</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
