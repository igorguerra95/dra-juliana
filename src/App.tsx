import React, { useCallback, useState } from 'react';
import { MotionConfig } from 'motion/react';
import { AboutAndProofSection } from './components/AboutAndProofSection';
import { ContactSection } from './components/ContactSection';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { Navbar } from './components/Navbar';
import { SpecialtiesSection } from './components/SpecialtiesSection';
import type { SpecialtyId } from './types';

export default function App() {
  const [selectedSpecialty, setSelectedSpecialty] = useState<SpecialtyId>('ortopedia');

  const scrollToContact = useCallback((specialtyId?: SpecialtyId) => {
    if (specialtyId) {
      setSelectedSpecialty(specialtyId);
    }
    const contactEl = document.getElementById('contato');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.setTimeout(() => {
        const nameInput = document.getElementById('contact-name') as HTMLInputElement | null;
        nameInput?.focus({ preventScroll: true });
      }, 450);
    }
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-background text-foreground antialiased selection:bg-primary selection:text-primary-foreground">
        <a
          href="#inicio"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-primary-foreground"
        >
          Ir para o conteúdo principal
        </a>

        <Navbar onContactClick={() => scrollToContact()} />

        <main>
          <HeroSection onContactClick={() => scrollToContact()} />
          <SpecialtiesSection
            onSelectSpecialtyContact={(id) => scrollToContact(id)}
          />
          <AboutAndProofSection onContactClick={() => scrollToContact()} />
          <ContactSection
            selectedSpecialty={selectedSpecialty}
            onSpecialtyChange={setSelectedSpecialty}
          />
        </main>

        <Footer />
        <FloatingWhatsApp />
      </div>
    </MotionConfig>
  );
}
