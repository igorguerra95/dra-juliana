import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, GraduationCap } from 'lucide-react';
import { ACADEMIC_CREDENTIALS, TESTIMONIALS } from '../data/clinicData';
import { ClinicalImage } from './ClinicalImage';

interface AboutAndProofSectionProps {
  onContactClick: () => void;
}

export const AboutAndProofSection: React.FC<AboutAndProofSectionProps> = ({
  onContactClick,
}) => {
  return (
    <section
      id="sobre"
      className="border-b border-border bg-surface/50 py-16 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Biografia Clínica e Formação Acadêmica (Split 12 Colunas) */}
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Retrato Clínico da Dra. Julyana */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="lg:col-span-5"
          >
            <div className="overflow-hidden rounded-2xl border border-border bg-surface p-2 clinical-shadow">
              <ClinicalImage
                src="/src/assets/images/dra_julyana_portrait_clean_1795528179099.jpg"
                alt="Retrato profissional da Dra. Julyana, fisioterapeuta especialista em ortopedia, traumatologia e reabilitação clínica"
                fallbackTitle="Dra. Julyana — Fisioterapeuta"
                aspectClassName="aspect-[3/4]"
                className="rounded-xl"
              />
            </div>

            <div className="mt-5 rounded-xl border border-border bg-surface p-5">
              <p className="font-display text-base font-bold text-foreground">
                Dra. Julyana
              </p>
              <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
                Fisioterapia Ortopédica · Traumatologia · RPG e Pilates Clínico
              </p>
              <div className="mt-4 border-t border-border pt-4">
                <button
                  type="button"
                  onClick={onContactClick}
                  className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg clinical-gradient-btn px-5 py-2.5 text-sm font-medium text-primary-foreground whitespace-nowrap shrink-0 transition-opacity hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer"
                >
                  <span>Entrar em contato</span>
                  <ArrowRight className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Narrativa Institucional e Formação */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: 0.08, ease: 'easeOut' }}
            className="lg:col-span-7"
          >
            <p className="text-xs sm:text-sm font-medium tracking-wide text-primary">
              Sobre a Especialista
            </p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-balance">
              Rigor acadêmico e condução clínica sem protocolos genéricos.
            </h2>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                A prática clínica da Dra. Julyana parte de uma premissa objetiva: dor persistente e
                limitações funcionais raramente se resolvem com medidas passivas isoladas. Cada
                paciente passa por uma investigação biomecânica detalhada para identificar a origem
                mecânica da sobrecarga.
              </p>
              <p>
                Com atuação dedicada à Ortopedia e Traumatologia, o atendimento integra terapia
                manual de precisão, reeducação postural global (RPG) e Pilates clínico terapêutico
                em sessões individuais, garantindo segurança técnica do pós-operatório imediato à
                retomada plena das atividades cotidianas.
              </p>
            </div>

            {/* Formação Acadêmica e Titulações */}
            <div className="mt-10">
              <div className="flex items-center gap-2.5 border-b border-border pb-3">
                <GraduationCap className="h-5 w-5 text-primary" strokeWidth={1.75} aria-hidden="true" />
                <h3 className="font-display text-lg font-bold text-foreground">
                  Formação Acadêmica e Qualificações
                </h3>
              </div>

              <div className="mt-4 divide-y divide-border">
                {ACADEMIC_CREDENTIALS.map((cred) => (
                  <div
                    key={cred.title}
                    className="grid grid-cols-1 gap-2 py-4 sm:grid-cols-12 sm:gap-6"
                  >
                    <div className="sm:col-span-4">
                      <p className="text-xs font-semibold text-primary">{cred.period}</p>
                      <p className="mt-0.5 text-xs text-muted-foreground">{cred.institution}</p>
                    </div>
                    <div className="sm:col-span-8">
                      <h4 className="font-display text-base font-bold text-foreground">
                        {cred.title}
                      </h4>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {cred.focus}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Depoimentos de Recuperação (Adjacentes à Formação Clínica) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="mt-20 border-t border-border pt-16"
        >
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs sm:text-sm font-medium tracking-wide text-primary">
                Evidência de Resultados
              </p>
              <h3 className="mt-2 font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
                Depoimentos de recuperação e evolução funcional
              </h3>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              Relatos estruturados de pacientes acompanhados desde a restrição inicial até a alta
              funcional com critérios objetivos.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {TESTIMONIALS.map((item) => (
              <article
                key={item.id}
                className="flex flex-col justify-between rounded-2xl border border-border bg-surface p-6 sm:p-7 clinical-shadow transition-all duration-200 hover:-translate-y-1 hover:border-border-strong hover:clinical-shadow-elevated"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border pb-4 text-xs">
                    <span className="font-semibold text-primary">{item.recoveryWindow}</span>
                    <span className="text-muted-foreground">{item.specialty}</span>
                  </div>

                  <div className="mt-5 space-y-4 text-sm leading-relaxed">
                    <div>
                      <p className="text-xs font-semibold text-foreground">Quadro inicial</p>
                      <p className="mt-1 text-muted-foreground">{item.beforeState}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-foreground">Conduta aplicada</p>
                      <p className="mt-1 text-muted-foreground">{item.intervention}</p>
                    </div>
                    <div className="rounded-xl border border-border bg-accent-soft/60 p-4">
                      <p className="text-xs font-semibold text-accent-ink">Resultado alcançado</p>
                      <p className="mt-1 font-medium text-foreground">{item.measurableOutcome}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 border-t border-border pt-4">
                  <p className="font-display text-sm font-bold text-foreground">
                    {item.patientName}
                  </p>
                  <p className="mt-0.5 text-xs text-muted-foreground">{item.profile}</p>
                </div>
              </article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
