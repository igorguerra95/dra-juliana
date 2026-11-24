import React from 'react';
import { MessageCircle } from 'lucide-react';
import { CLINIC_CONTACT } from '../data/clinicData';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <div className="fixed right-4 bottom-4 z-30 sm:right-6 sm:bottom-6">
      <a
        href={`${CLINIC_CONTACT.whatsappHref}?text=${encodeURIComponent(
          'Olá, Dra. Julyana. Gostaria de entrar em contato para agendar uma avaliação fisioterapêutica.',
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Entrar em contato pelo WhatsApp (00) 00000-0000"
        className="group relative flex h-12 w-12 items-center justify-center rounded-full clinical-gradient-btn text-primary-foreground clinical-shadow-elevated transition-transform duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:h-13 sm:w-13"
      >
        {/* Pulse discreto solicitado pelo briefing */}
        <span
          aria-hidden="true"
          className="absolute inset-0 -z-10 rounded-full bg-primary/35 animate-ping [animation-duration:2.8s] motion-reduce:animate-none"
        />
        <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.85} aria-hidden="true" />
      </a>
    </div>
  );
};
