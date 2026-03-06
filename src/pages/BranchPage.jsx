import { useParams, Navigate } from 'react-router-dom';
import { BranchProvider, getBranchData } from '../hooks/useBranch';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import MenuSection from '../components/MenuSection';
import StorySection from '../components/StorySection';
import LocationSection from '../components/LocationSection';
import OrderCTA from '../components/OrderCTA';
import Footer from '../components/Footer';
import PromoTicker from '../components/PromoTicker';

export default function BranchPage() {
    const { branchId } = useParams();
    const branch = getBranchData(branchId);

    // Redirect to home if invalid branch
    if (!branch) return <Navigate to="/" replace />;

    return (
        <BranchProvider>
            <Navbar />
            <main>
                <Hero />
                <MenuSection />

                {/* Banner 1: Pizza Promos (Below Menu) */}
                <PromoTicker
                    bgClass="bg-[#FFB900]"
                    textClass="text-[#7A1315]"
                    items={[
                        { title: "MONDAY $10 PIZZA", subtitle: "TAKEAWAY ONLY • T&C'S APPLY" },
                        { title: "WEDNESDAY $15 PIZZA", subtitle: "ALL DAY LONG • ONLY AT LITTLE ITALY" },
                        { title: "CLASSIC FLAVOURS", subtitle: "MARGHERITA • HAWAIIAN • PEPPERONI" },
                        { title: "MORE FLAVOURS", subtitle: "VEGETARIAN • FUNGHI • NAPOLI" },
                    ]}
                />

                <StorySection />
                <LocationSection />

                {/* Banner 2: Pasta Promos (Above Reserve Your Table) */}
                <PromoTicker
                    bgClass="bg-[#007A33]"
                    textClass="text-[#A4E869]"
                    items={[
                        { title: "THURSDAY $10 PASTA", subtitle: "IN-STORE ONLY • T&C'S APPLY" },
                        { title: "CHOOSE YOUR SHAPE", subtitle: "SPAGHETTI • PENNE • FETTUCINNE" },
                        { title: "CHOOSE YOUR FLAVOUR", subtitle: "BOLOGNESE • NAPOLITANA • ARRABBIATA" },
                    ]}
                />

                <OrderCTA />
            </main>
            <Footer />
        </BranchProvider>
    );
}
