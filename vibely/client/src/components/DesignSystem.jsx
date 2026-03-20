import React from 'react';

/**
 * WEBSITE UI DESIGN SYSTEM - Vibely Events
 * Primary Color: #C80000
 * Background: #FFFCF6
 * Section Title: #970000
 * Fonts: Inter, Poppins
 */

export const ButtonPrimary = ({ children, className = '', ...props }) => {
    return (
        <button
            className={`h-[54px] bg-primary text-white font-poppins font-medium px-8 flex items-center justify-center rounded-md hover:bg-primary-dark transition-colors duration-300 ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export const ButtonSmall = ({ children, className = '', ...props }) => {
    return (
        <button
            className={`w-[140px] h-[45px] bg-primary text-white font-poppins font-medium text-sm flex items-center justify-center rounded-md hover:bg-primary-dark transition-colors duration-300 ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export const SectionTitle = ({ children, className = '' }) => {
    return (
        <h2 className={`font-poppins font-medium text-[34px] text-primary-dark ${className}`}>
            {children}
        </h2>
    );
};

export const MostHappeningCard = () => {
    return (
        <div className="w-[440px] h-[265px] bg-white rounded-xl shadow-lg border border-border overflow-hidden flex flex-col relative group cursor-pointer transition-transform duration-300 hover:-translate-y-1">
            {/* Image Placeholder */}
            <div className="flex-1 bg-gray-200 w-full">
                
                <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2670&auto=format&fit=crop" alt="Event" className="w-full h-full object-cover" />
            </div>

            {/* Tags Overlay */}
            <div className="absolute top-4 left-4 flex gap-2">
                <span className="bg-white/90 px-3 py-1 rounded-full font-poppins text-[14px] text-gray-800 font-medium shadow-sm backdrop-blur-sm">
                    Events
                </span>
                <span className="bg-white/90 px-3 py-1 rounded-full font-poppins text-[14px] text-gray-800 font-medium shadow-sm backdrop-blur-sm">
                    220+ events
                </span>
            </div>

            {/* Content */}
            <div className="p-5 bg-white z-10">
                <h3 className="font-poppins font-medium text-[26px] text-primary-dark leading-tight mb-1">
                    Vibely Events
                </h3>
                <p className="font-poppins font-medium text-[14px] text-muted">
                    Popular for Corporate , Wedding Events
                </p>
            </div>
        </div>
    );
};

export const ExploreServiceCircle = ({ title = "Photography", imageUrl }) => {
    return (
        <div className="flex flex-col items-center gap-4 group cursor-pointer">
            <div className="w-[229px] h-[229px] rounded-full overflow-hidden shadow-md border-4 border-white group-hover:border-primary transition-colors duration-300">
                <img
                    src={imageUrl || "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=2670&auto=format&fit=crop"}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
            </div>
            <h4 className="font-poppins font-medium text-[24px] text-text-primary group-hover:text-primary transition-colors">
                {title}
            </h4>
        </div>
    );
};

export const FeaturedServiceProviderCard = () => {
    return (
        <div className="w-[470px] h-[306px] bg-white rounded-xl shadow-lg border border-border overflow-hidden flex flex-col relative group cursor-pointer hover:shadow-xl transition-shadow duration-300">
            {/* Image Area */}
            <div className="h-[180px] bg-gray-200 relative overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=2670&auto=format&fit=crop"
                    alt="Artlane Studio"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Top Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                    <span className="bg-white/90 px-3 py-1.5 rounded-md font-poppins text-[14px] font-medium text-gray-800 shadow-sm backdrop-blur-sm">
                        Photography
                    </span>
                    <span className="bg-white/90 px-3 py-1.5 rounded-md font-poppins text-[14px] font-medium text-gray-800 shadow-sm backdrop-blur-sm">
                        Portfolio
                    </span>
                </div>
            </div>

            {/* Content Area */}
            <div className="p-5 flex-1 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="font-poppins font-medium text-[26px] text-text-primary leading-tight">
                            Artlane Studio
                        </h3>
                        <p className="font-poppins font-normal text-[14px] text-muted mt-1 flex items-center gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            Kondapur, Hyderabad
                        </p>
                    </div>
                    <ButtonSmall>BOOK NOW</ButtonSmall>
                </div>

                <div className="mt-4 pt-4 border-t border-border flex justify-between items-center">
                    <span className="font-poppins text-[14px] text-muted">
                        Starting From
                    </span>
                    <span className="font-poppins font-semibold text-[18px] text-primary">
                        ₹25,000
                    </span>
                </div>
            </div>
        </div>
    );
};

export default function DesignSystemPreview() {
    return (
        <div className="min-h-screen bg-bg-primary p-12 space-y-16">
            <div className="mb-12">
                <h1 className="text-4xl font-poppins font-bold text-primary mb-2">Vibely Events</h1>
                <p className="text-text-muted font-inter">UI Design System Preview</p>
            </div>

            {/* Typography & Colors */}
            <section className="space-y-6">
                <SectionTitle>Typography & Colors</SectionTitle>
                <div className="flex gap-8">
                    <div className="space-y-4">
                        <div className="w-24 h-24 bg-primary rounded-lg shadow-md flex items-end p-2 text-white font-mono text-xs font-bold">#C80000</div>
                        <div className="w-24 h-24 bg-primary-dark rounded-lg shadow-md flex items-end p-2 text-white font-mono text-xs font-bold">#970000</div>
                        <div className="w-24 h-24 bg-bg-primary border border-border rounded-lg shadow-md flex items-end p-2 text-text-primary font-mono text-xs border-dashed">#FFFCF6</div>
                    </div>
                    <div className="space-y-4 bg-white p-6 rounded-xl border border-border shadow-sm flex-1">
                        <h1 className="font-poppins font-medium text-[34px] text-primary-dark">Section Title (Poppins Medium 34)</h1>
                        <p className="font-poppins font-medium text-[26px] text-text-primary">Card Title (Poppins Medium 26)</p>
                        <p className="font-poppins font-medium text-[24px] text-text-primary">Circle Title (Poppins Medium 24)</p>
                        <p className="font-inter text-text-muted">Body Text (Inter) — Modern, Simplistic, Replacement to the famous Poppins</p>
                    </div>
                </div>
            </section>

            {/* Buttons */}
            <section className="space-y-6">
                <SectionTitle>Buttons</SectionTitle>
                <div className="flex gap-6 items-center bg-white p-8 rounded-xl border border-border shadow-sm">
                    <ButtonPrimary>What Are You Planning For ?</ButtonPrimary>
                    <ButtonSmall>BOOK NOW</ButtonSmall>
                </div>
            </section>

            {/* Cards */}
            <section className="space-y-6">
                <SectionTitle>Cards & Components</SectionTitle>
                <div className="flex flex-wrap gap-12 bg-gray-50/50 p-8 rounded-xl border border-border border-dashed">
                    <div>
                        <p className="text-sm font-mono text-muted mb-4">Most happening Section card (440x265)</p>
                        <MostHappeningCard />
                    </div>

                    <div>
                        <p className="text-sm font-mono text-muted mb-4">Explore Services Circle (229x229)</p>
                        <ExploreServiceCircle />
                    </div>

                    <div>
                        <p className="text-sm font-mono text-muted mb-4">Featured Service Providers (470x306)</p>
                        <FeaturedServiceProviderCard />
                    </div>
                </div>
            </section>
        </div>
    );
}
