import { useParams, Navigate } from 'react-router-dom';
import { BranchProvider, getBranchData } from '../hooks/useBranch';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import MenuSection from '../components/MenuSection';
import StorySection from '../components/StorySection';
import LocationSection from '../components/LocationSection';
import OrderCTA from '../components/OrderCTA';
import Footer from '../components/Footer';

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
                <StorySection />
                <LocationSection />
                <OrderCTA />
            </main>
            <Footer />
        </BranchProvider>
    );
}
