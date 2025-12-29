import Navbar from '../components/layout/Navbar';
import Hero from '../components/features/hero/Hero';
import Technologies from '../components/features/technologies/Technologies';
import Services from '../components/features/services/Services';
import About from '../components/features/about/About';
import CTA from '../components/features/cta/CTA';
import Footer from '../components/layout/Footer';
import useScrollToTop from '../hooks/useScrollToTop';

const Home = () => {
    useScrollToTop();

    return (
        <>
            <Navbar />
            <main id="main-content">
                <Hero />
                <Technologies />
                <Services />
                <About />
                <CTA />
            </main>
            <Footer />
        </>
    );
};

export default Home;
