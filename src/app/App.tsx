import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { PracticeSection } from './components/PracticeSection';
import { ConsultationSection } from './components/ConsultationSection';
import { HowIWorkSection } from './components/HowIWorkSection';
import { ClientsSection } from './components/ClientsSection';
import { ReviewsSection } from './components/ReviewsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ServicesSection />
      <PracticeSection />
      <ConsultationSection />
      <HowIWorkSection />
      <ClientsSection />
      <ReviewsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
