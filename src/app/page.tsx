import AboutSection from '@/components/AboutSection';
import FeaturesSection from '@/components/FeaturesSection';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import CTASection from '@/components/CTASection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}
