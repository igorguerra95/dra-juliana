import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { CLINIC_CONTACT } from '../data/clinicData';

interface NavbarProps {
  onContactClick: () => void;
}

const NAV_LINKS = [
  { href: '#inicio', label: 'Início' },
  { href: '#especialidades', label: 'Especialidades' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#contato', label: 'Contato' },
];

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 18);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!drawerOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setDrawerOpen(false);
      }
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [drawerOpen]);

  const handleMobileNav = (href: string) => {
    setDrawerOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleMobileContact = () => {
    setDrawerOpen(false);
    onContactClick();
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full border-b transition-colors duration-200 ${
          scrolled
            ? 'border-border bg-background/90 backdrop-blur-md'
            : 'border-border/60 bg-background/80 backdrop-blur-sm'
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-10">
          {/* Zona 1: Marca em linha única */}
          <a
            href="#inicio"
            className="font-display text-lg font-bold tracking-tight text-foreground whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm"
          >
            {CLINIC_CONTACT.brandShort}
          </a>

          {/* Zona 2: Links de navegação concisos em linha única */}
          <nav
            aria-label="Navegação principal"
            className="hidden md:flex items-center gap-7 text-sm font-medium text-muted-foreground"
          >
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative py-1 whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-primary after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-0 after:bg-primary after:transition-all after:duration-200 hover:after:w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Zona 3: Ação primária única + gatilho do drawer mobile */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={onContactClick}
              className="hidden md:inline-flex items-center justify-center rounded-lg clinical-gradient-btn px-5 py-2.5 text-sm font-medium text-primary-foreground whitespace-nowrap shrink-0 transition-all duration-150 hover:opacity-95 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 cursor-pointer"
            >
              Entrar em contato
            </button>

            <button
              type="button"
              aria-label="Abrir menu de navegação"
              aria-expanded={drawerOpen}
              aria-controls="mobile-navigation-sheet"
              onClick={() => setDrawerOpen(true)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-surface text-foreground transition-colors hover:border-border-strong hover:text-primary md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer"
            >
              <Menu className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {/* Sheet / Drawer Mobile */}
      <AnimatePresence>
        {drawerOpen && (
          <div
            id="mobile-navigation-sheet"
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navegação"
            className="fixed inset-0 z-50 md:hidden"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setDrawerOpen(false)}
              className="fixed inset-0 bg-foreground/35 backdrop-blur-xs"
            />

            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.26, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 right-0 bottom-0 flex w-[84%] max-w-sm flex-col justify-between border-l border-border bg-surface p-6 clinical-shadow-elevated"
            >
              <div>
                <div className="flex items-center justify-between border-b border-border pb-4">
                  <span className="font-display text-lg font-bold tracking-tight text-foreground">
                    {CLINIC_CONTACT.brandShort}
                  </span>
                  <button
                    type="button"
                    aria-label="Fechar menu"
                    onClick={() => setDrawerOpen(false)}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-background text-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer"
                  >
                    <X className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                  </button>
                </div>

                <p className="mt-5 text-xs font-medium text-muted-foreground">
                  Ortopedia · Traumatologia · Fisioterapia Esportiva
                </p>

                <nav aria-label="Menu mobile" className="mt-6 flex flex-col gap-1">
                  {NAV_LINKS.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleMobileNav(item.href);
                      }}
                      className="flex min-h-11 items-center justify-between rounded-lg px-3 py-2.5 font-display text-lg font-medium text-foreground transition-colors hover:bg-accent-soft hover:text-primary"
                    >
                      <span>{item.label}</span>
                    </a>
                  ))}
                </nav>
              </div>

              <div className="border-t border-border pt-5">
                <button
                  type="button"
                  onClick={handleMobileContact}
                  className="flex min-h-11 w-full items-center justify-center rounded-lg clinical-gradient-btn px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-95 cursor-pointer"
                >
                  Entrar em contato
                </button>
                <p className="mt-3 text-center text-xs text-muted-foreground">
                  Telefone: {CLINIC_CONTACT.phoneDisplay}
                </p>
              </div>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
