import React from 'react';
import { motion } from 'motion/react';
import { ArrowDownRight, ArrowRight } from 'lucide-react';
import { HERO_METRICS } from '../data/clinicData';
import { ClinicalImage } from './ClinicalImage';
import { CountUpNumber } from './CountUpNumber';

interface HeroSectionProps {
  onContactClick: () => void;
}

const heroContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const heroItem = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export const HeroSection: React.FC<HeroSectionProps> = ({ onContactClick }) => {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden border-b border-border bg-grain pt-10 pb-14 sm:pt-14 sm:pb-20 lg:pt-20 lg:pb-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Split Assimétrico de 12 Colunas */}
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Coluna Editorial Esquerda */}
          <motion.div
            variants={heroContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col justify-between lg:col-span-7"
          >
            <div>
              <motion.p
                variants={heroItem}
                className="text-xs sm:text-sm font-medium tracking-wide text-primary"
              >
                Dra. Julyana · Ortopedia · Traumatologia · Reabilitação Postural
              </motion.p>

              <motion.h1
                variants={heroItem}
                className="mt-5 font-display text-[clamp(2.85rem,5.4vw,5.25rem)] font-bold leading-[1.02] tracking-[-0.035em] text-foreground text-balance"
              >
                Precisão clínica para restaurar cada movimento sem dor.
              </motion.h1>

              <motion.p
                variants={heroItem}
                className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-muted-foreground"
              >
                Reabilitação ortopédica, traumatológica e postural conduzida de forma individualizada.
                Da analgesia à reconstrução biomecânica, cada sessão une avaliação criteriosa,
                terapia manual, RPG e Pilates clínico para devolver segurança ao seu corpo.
              </motion.p>
            </div>

            <motion.div
              variants={heroItem}
              className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-5"
            >
              <button
                type="button"
                onClick={onContactClick}
                className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-lg clinical-gradient-btn px-7 py-3.5 text-sm sm:text-base font-medium text-primary-foreground whitespace-nowrap shrink-0 clinical-shadow transition-all duration-150 hover:opacity-95 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 cursor-pointer"
              >
                <span>Entrar em contato</span>
                <ArrowRight className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
              </button>

              <a
                href="#especialidades"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-border bg-surface px-6 py-3.5 text-sm sm:text-base font-medium text-foreground whitespace-nowrap shrink-0 transition-colors duration-150 hover:border-border-strong hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                <span>Conhecer especialidades</span>
                <ArrowDownRight className="h-4 w-4 text-primary" strokeWidth={1.75} aria-hidden="true" />
              </a>
            </motion.div>
          </motion.div>

          {/* Coluna Visual Direita */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col"
          >
            <div className="relative flex-1 overflow-hidden rounded-2xl border border-border bg-surface p-2 clinical-shadow">
              <ClinicalImage
                src="/src/assets/images/hero_physio_clinic_1795528161186.jpg"
                alt="Consultório clínico da Dra. Julyana preparado para fisioterapia ortopédica, traumatológica e reabilitação postural"
                fallbackTitle="Consultório Clínico Especializado"
                aspectClassName="aspect-[4/3] lg:aspect-auto lg:h-full"
                className="rounded-xl"
              />
            </div>
            <div className="mt-3 flex flex-wrap items-center justify-between gap-2 px-1 text-xs text-muted-foreground">
              <span>Avaliação Cinético-Funcional Individual</span>
              <span aria-hidden="true">·</span>
              <span>Protocolos Baseados em Evidência</span>
            </div>
          </motion.div>
        </div>

        {/* Faixa de Métricas Clínicas em 4 Colunas (Largura Total Abaixo do Split) */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="mt-12 grid grid-cols-1 divide-y divide-border rounded-2xl border border-border bg-surface clinical-shadow sm:grid-cols-2 sm:divide-y-0 lg:mt-16 lg:grid-cols-4 lg:divide-x"
        >
          {HERO_METRICS.map((metric, idx) => (
            <div
              key={metric.label}
              className={`flex flex-col justify-between p-6 ${
                idx === 1 ? 'sm:border-l sm:border-border lg:border-l-0' : ''
              } ${idx >= 2 ? 'sm:border-t sm:border-border lg:border-t-0' : ''}`}
            >
              <p className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-primary">
                <CountUpNumber
                  value={metric.value}
                  prefix={metric.prefix}
                  suffix={metric.suffix}
                />
              </p>
              <div className="mt-3">
                <h2 className="font-display text-sm font-semibold text-foreground">
                  {metric.label}
                </h2>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  {metric.detail}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
