import React from 'react';

export default function PromoTicker({ items, bgClass = 'bg-primary', textClass = 'text-white' }) {
    // We duplicate the items enough times to fill the screen and animate seamlessly
    const duplicatedItems = [...items, ...items, ...items, ...items];

    // Calculate duration based on content length so all banners scroll at the exact same physical speed
    const totalChars = items.reduce((acc, item) => acc + item.title.length + (item.subtitle ? item.subtitle.length : 0), 0);
    // 0.35s per character provides a nice, easily readable slow scroll
    const duration = `${totalChars * 0.35}s`;

    return (
        <div className={`overflow-hidden whitespace-nowrap py-3 md:py-4 border-y-4 border-charcoal/10 ${bgClass} ${textClass}`}>
            <div
                className="inline-flex animate-marquee hover:[animation-play-state:paused] w-max"
                style={{ animationDuration: duration }}
            >
                <div className="flex items-center gap-8 md:gap-16 px-4 md:px-8">
                    {duplicatedItems.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-8 md:gap-16">
                            <span className="font-heading uppercase tracking-widest text-2xl md:text-4xl whitespace-nowrap">
                                {item.title}
                            </span>
                            {item.subtitle && (
                                <span className="font-body text-xs md:text-sm font-bold tracking-wider opacity-90 whitespace-nowrap">
                                    {item.subtitle}
                                </span>
                            )}
                            <span className="text-xl md:text-2xl opacity-50">★</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
