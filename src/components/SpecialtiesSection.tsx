import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowUpRight, Check } from 'lucide-react';
import { REGION_PROTOCOLS, SPECIALTIES } from '../data/clinicData';
import type { RegionProtocol, SpecialtyId } from '../types';
import { ClinicalImage } from './ClinicalImage';

interface SpecialtiesSectionProps {
  onSelectSpecialtyContact: (specialtyId: SpecialtyId) => void;
}

export const SpecialtiesSection: React.FC<SpecialtiesSectionProps> = ({
  onSelectSpecialtyContact,
}) => {
  const [activeRegion, setActiveRegion] = useState<RegionProtocol['id']>('coluna');

  const currentProtocol =
    REGION_PROTOCOLS.find((p) => p.id === activeRegion) ?? REGION_PROTOCOLS[0];

  return (
    <section
      id="especialidades"
      className="border-b border-border py-16 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Cabeçalho da Seção */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end"
        >
          <div className="lg:col-span-7">
            <p className="text-xs sm:text-sm font-medium tracking-wide text-primary">
              Áreas de Atuação Clínica
            </p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-balance">
              Especialidades integradas para reabilitação estrutural e funcional.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base leading-relaxed text-muted-foreground">
              Cada quadro musculoesquelético exige precisão diagnóstica. As condutas combinam
              terapia manual, cinesioterapia, RPG e Pilates clínico conforme a fase biológica da
              lesão.
            </p>
          </div>
        </motion.div>

        {/* Bento Grid Assimétrico (12 Colunas) */}
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-12">
          {SPECIALTIES.map((item, idx) => {
            const hasImage = Boolean(item.imageSrc);
            return (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: Math.min(idx * 0.06, 0.24),
                  ease: 'easeOut',
                }}
                className={`group flex flex-col justify-between rounded-2xl border border-border bg-surface p-6 sm:p-8 clinical-shadow transition-all duration-200 hover:-translate-y-1 hover:border-border-strong hover:clinical-shadow-elevated ${item.colSpanClass}`}
              >
                <div>
                  <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-border pb-4">
                    <span className="font-display text-sm font-semibold tabular-nums text-primary">
                      {item.number}
                    </span>
                    <span className="text-xs font-medium text-muted-foreground">
                      {item.categoryLabel}
                    </span>
                  </div>

                  {hasImage && (
                    <div className="mt-5 overflow-hidden rounded-xl border border-border">
                      <ClinicalImage
                        src={item.imageSrc}
                        alt={item.imageAlt ?? item.title}
                        fallbackTitle={item.title}
                        aspectClassName="aspect-[16/9] sm:aspect-[4/3]"
                        className="group-hover:[&_img]:scale-[1.02]"
                      />
                    </div>
                  )}

                  <h3 className="mt-6 font-display text-2xl font-bold tracking-tight text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted-foreground">
                    {item.summary}
                  </p>

                  <ul className="mt-5 space-y-2.5 border-t border-border/80 pt-5">
                    {item.clinicalFocus.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2.5 text-sm leading-snug text-foreground/90"
                      >
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                          strokeWidth={2}
                          aria-hidden="true"
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-5">
                  <span className="text-xs font-medium text-muted-foreground">
                    {item.durationLabel}
                  </span>
                  <button
                    type="button"
                    onClick={() => onSelectSpecialtyContact(item.id)}
                    className="inline-flex min-h-10 items-center gap-1.5 rounded-lg border border-border-strong bg-accent-soft px-4 py-2 text-xs sm:text-sm font-medium text-accent-ink whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer"
                  >
                    <span>Entrar em contato</span>
                    <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden="true" />
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Explorador Interativo de Protocolos Clínicos por Região */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="mt-12 rounded-2xl border border-border bg-surface p-6 sm:p-8 lg:p-10 clinical-shadow"
        >
          <div className="flex flex-col gap-6 border-b border-border pb-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs sm:text-sm font-medium text-primary">
                Roteiro Clínico por Região Anatômica
              </p>
              <h3 className="mt-2 font-display text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                Como conduzimos sua recuperação em três etapas
              </h3>
            </div>

            {/* Controles Segmentados Funcionais */}
            <div
              role="tablist"
              aria-label="Selecionar região anatômica"
              className="flex flex-wrap items-center gap-1.5 rounded-xl border border-border bg-surface-subtle p-1.5"
            >
              {REGION_PROTOCOLS.map((protocol) => {
                const isSelected = protocol.id === activeRegion;
                return (
                  <button
                    key={protocol.id}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => setActiveRegion(protocol.id)}
                    className={`min-h-10 rounded-lg px-3.5 py-2 text-xs sm:text-sm font-medium whitespace-nowrap shrink-0 transition-all duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                      isSelected
                        ? 'clinical-gradient-btn text-primary-foreground clinical-shadow'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {protocol.label}
                  </button>
                );
              })}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentProtocol.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.24, ease: 'easeOut' }}
              className="mt-7"
            >
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:items-center">
                <div className="lg:col-span-8">
                  <h4 className="font-display text-xl sm:text-2xl font-bold text-foreground">
                    {currentProtocol.headline}
                  </h4>
                  <p className="mt-2 text-sm sm:text-base text-muted-foreground">
                    {currentProtocol.indication}
                  </p>
                </div>
                <div className="lg:col-span-4 lg:flex lg:justify-end">
                  <button
                    type="button"
                    onClick={() => onSelectSpecialtyContact(currentProtocol.specialtyId)}
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg clinical-gradient-btn px-5 py-2.5 text-sm font-medium text-primary-foreground whitespace-nowrap shrink-0 transition-opacity hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer"
                  >
                    <span>Entrar em contato</span>
                    <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                  </button>
                </div>
              </div>

              <div className="mt-7 grid grid-cols-1 gap-5 md:grid-cols-3">
                {currentProtocol.phases.map((phase) => (
                  <div
                    key={phase.step}
                    className="rounded-xl border border-border bg-background p-5"
                  >
                    <p className="font-display text-xs font-semibold tracking-wide text-primary">
                      {phase.step}
                    </p>
                    <h5 className="mt-2 font-display text-base font-bold text-foreground">
                      {phase.title}
                    </h5>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {phase.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-col gap-2 border-t border-border pt-5 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs sm:text-sm text-muted-foreground">
                  <strong className="font-semibold text-foreground">Critério de alta clínica:</strong>{' '}
                  {currentProtocol.dischargeCriteria}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
