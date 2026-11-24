import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import {
  CalendarCheck,
  CheckCircle2,
  Clock,
  MapPin,
  MessageCircle,
  Phone,
} from 'lucide-react';
import { CLINIC_CONTACT, SPECIALTIES } from '../data/clinicData';
import type { SpecialtyId } from '../types';

interface ContactSectionProps {
  selectedSpecialty: SpecialtyId;
  onSpecialtyChange: (specialtyId: SpecialtyId) => void;
}

interface FormState {
  name: string;
  phone: string;
  specialty: SpecialtyId;
  shift: 'Manhã' | 'Tarde' | 'Noite';
  preferredDate: string;
  complaint: string;
}

function formatBrazilianPhone(raw: string): string {
  const digits = raw.replace(/\D/g, '').slice(0, 11);
  if (digits.length === 0) return '';
  if (digits.length <= 2) return `(${digits}`;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  }
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  selectedSpecialty,
  onSpecialtyChange,
}) => {
  const [form, setForm] = useState<FormState>({
    name: '',
    phone: '',
    specialty: selectedSpecialty,
    shift: 'Manhã',
    preferredDate: '',
    complaint: '',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submittedSummary, setSubmittedSummary] = useState<FormState | null>(null);

  useEffect(() => {
    setForm((prev) => ({ ...prev, specialty: selectedSpecialty }));
  }, [selectedSpecialty]);

  const validate = (): boolean => {
    const nextErrors: Partial<Record<keyof FormState, string>> = {};
    if (form.name.trim().length < 3) {
      nextErrors.name = 'Informe seu nome completo para o registro da avaliação.';
    }
    const phoneDigits = form.phone.replace(/\D/g, '');
    if (phoneDigits.length < 10) {
      nextErrors.phone = 'Informe um telefone ou WhatsApp válido com DDD.';
    }
    if (form.complaint.trim().length < 8) {
      nextErrors.complaint = 'Descreva brevemente sua queixa, lesão ou objetivo clínico.';
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!validate()) return;
    setSubmittedSummary({ ...form });
  };

  const selectedSpecialtyObj = SPECIALTIES.find(
    (s) => s.id === (submittedSummary?.specialty ?? form.specialty),
  );

  const buildWhatsAppSummaryUrl = (data: FormState) => {
    const specialtyTitle =
      SPECIALTIES.find((s) => s.id === data.specialty)?.title ?? 'Avaliação Fisioterapêutica';
    const dateText = data.preferredDate
      ? `Data preferencial: ${data.preferredDate.split('-').reverse().join('/')}`
      : 'Data preferencial: A combinar';
    const message = [
      `Olá, Dra. Julyana. Gostaria de solicitar um agendamento de avaliação.`,
      `Nome: ${data.name}`,
      `Telefone: ${data.phone}`,
      `Especialidade: ${specialtyTitle}`,
      `Turno preferencial: ${data.shift}`,
      dateText,
      `Motivo: ${data.complaint}`,
    ].join('\n');

    return `${CLINIC_CONTACT.whatsappHref}?text=${encodeURIComponent(message)}`;
  };

  const handleReset = () => {
    setSubmittedSummary(null);
    setForm({
      name: '',
      phone: '',
      specialty: selectedSpecialty,
      shift: 'Manhã',
      preferredDate: '',
      complaint: '',
    });
    setErrors({});
  };

  return (
    <section id="contato" className="py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14"
        >
          {/* Coluna de Informações Institucionais */}
          <div className="flex flex-col justify-between lg:col-span-5">
            <div>
              <p className="text-xs sm:text-sm font-medium tracking-wide text-primary">
                Contato e Agendamento Online
              </p>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-balance">
                Agende sua avaliação funcional com atendimento exclusivo.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Preencha os dados ao lado para solicitar seu horário ou utilize o contato direto
                pelo WhatsApp para alinhar disponibilidade e orientações da primeira consulta.
              </p>

              {/* Bloco Estruturado de Endereço, Telefone e Horário */}
              <div className="mt-8 divide-y divide-border rounded-2xl border border-border bg-surface p-6 clinical-shadow">
                <div className="flex items-start gap-3.5 pb-4">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" strokeWidth={1.75} aria-hidden="true" />
                  <div>
                    <p className="text-xs font-semibold text-foreground">Endereço</p>
                    <p className="mt-0.5 text-sm text-muted-foreground">
                      {CLINIC_CONTACT.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 py-4">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" strokeWidth={1.75} aria-hidden="true" />
                  <div>
                    <p className="text-xs font-semibold text-foreground">Telefone e WhatsApp</p>
                    <a
                      href={CLINIC_CONTACT.phoneHref}
                      className="mt-0.5 inline-block text-sm font-medium tabular-nums text-foreground transition-colors hover:text-primary"
                    >
                      {CLINIC_CONTACT.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pt-4">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" strokeWidth={1.75} aria-hidden="true" />
                  <div>
                    <p className="text-xs font-semibold text-foreground">Horário de atendimento</p>
                    <p className="mt-0.5 text-sm text-muted-foreground">
                      {CLINIC_CONTACT.hours}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-border bg-accent-soft/60 p-6">
              <p className="font-display text-base font-bold text-foreground">
                Atendimento direto pelo WhatsApp
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                Prefere confirmar disponibilidade de agenda imediatamente ou enviar exames de
                imagem? Fale diretamente pelo número {CLINIC_CONTACT.phoneDisplay}.
              </p>
              <a
                href={CLINIC_CONTACT.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-border-strong bg-surface px-5 py-2.5 text-sm font-medium text-primary whitespace-nowrap shrink-0 transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <MessageCircle className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                <span>Entrar em contato</span>
              </a>
            </div>
          </div>

          {/* Formulário Interativo de Agendamento Online */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8 lg:p-10 clinical-shadow">
              {submittedSummary ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                  className="py-4"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-success-soft text-success">
                    <CheckCircle2 className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
                  </div>

                  <h3 className="mt-5 font-display text-2xl font-bold text-foreground">
                    Solicitação de agendamento registrada
                  </h3>
                  <p className="mt-2 text-sm sm:text-base leading-relaxed text-muted-foreground">
                    Seus dados clínicos foram organizados com sucesso. Conclua o envio da sua
                    solicitação diretamente pelo WhatsApp da clínica para confirmação do horário.
                  </p>

                  <dl className="mt-6 divide-y divide-border rounded-xl border border-border bg-background p-5 text-sm">
                    <div className="flex flex-wrap justify-between gap-2 pb-3">
                      <dt className="text-muted-foreground">Paciente</dt>
                      <dd className="font-medium text-foreground">{submittedSummary.name}</dd>
                    </div>
                    <div className="flex flex-wrap justify-between gap-2 py-3">
                      <dt className="text-muted-foreground">Telefone</dt>
                      <dd className="font-medium tabular-nums text-foreground">
                        {submittedSummary.phone}
                      </dd>
                    </div>
                    <div className="flex flex-wrap justify-between gap-2 py-3">
                      <dt className="text-muted-foreground">Especialidade</dt>
                      <dd className="font-medium text-foreground">
                        {selectedSpecialtyObj?.title}
                      </dd>
                    </div>
                    <div className="flex flex-wrap justify-between gap-2 py-3">
                      <dt className="text-muted-foreground">Turno preferencial</dt>
                      <dd className="font-medium text-foreground">{submittedSummary.shift}</dd>
                    </div>
                    {submittedSummary.preferredDate && (
                      <div className="flex flex-wrap justify-between gap-2 pt-3">
                        <dt className="text-muted-foreground">Data desejada</dt>
                        <dd className="font-medium tabular-nums text-foreground">
                          {submittedSummary.preferredDate.split('-').reverse().join('/')}
                        </dd>
                      </div>
                    )}
                  </dl>

                  <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                    <a
                      href={buildWhatsAppSummaryUrl(submittedSummary)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-lg clinical-gradient-btn px-6 py-3 text-sm font-medium text-primary-foreground whitespace-nowrap transition-opacity hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    >
                      <MessageCircle className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                      <span>Confirmar via WhatsApp</span>
                    </a>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="inline-flex min-h-12 items-center justify-center rounded-lg border border-border bg-background px-5 py-3 text-sm font-medium text-foreground whitespace-nowrap transition-colors hover:border-border-strong hover:text-primary cursor-pointer"
                    >
                      Nova solicitação
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <div className="flex items-center gap-3 border-b border-border pb-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-soft text-primary">
                      <CalendarCheck className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-foreground">
                        Agendamento Online
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        Avaliação ortopédica, traumatológica, esportiva, RPG ou Pilates clínico
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-semibold text-foreground"
                      >
                        Nome completo *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => {
                          setForm({ ...form, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: undefined });
                        }}
                        placeholder="Ex.: Mariana Albuquerque"
                        className="mt-2 h-11 w-full rounded-lg border border-border bg-background px-3.5 text-sm text-foreground placeholder:text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                      {errors.name && (
                        <p className="mt-1.5 text-xs text-destructive" role="alert">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="block text-xs font-semibold text-foreground"
                      >
                        Telefone / WhatsApp *
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => {
                          const masked = formatBrazilianPhone(e.target.value);
                          setForm({ ...form, phone: masked });
                          if (errors.phone) setErrors({ ...errors, phone: undefined });
                        }}
                        placeholder="(00) 00000-0000"
                        className="mt-2 h-11 w-full rounded-lg border border-border bg-background px-3.5 text-sm tabular-nums text-foreground placeholder:text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                      {errors.phone && (
                        <p className="mt-1.5 text-xs text-destructive" role="alert">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contact-specialty"
                        className="block text-xs font-semibold text-foreground"
                      >
                        Especialidade desejada
                      </label>
                      <select
                        id="contact-specialty"
                        value={form.specialty}
                        onChange={(e) => {
                          const value = e.target.value as SpecialtyId;
                          setForm({ ...form, specialty: value });
                          onSpecialtyChange(value);
                        }}
                        className="mt-2 h-11 w-full rounded-lg border border-border bg-background px-3.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      >
                        {SPECIALTIES.map((spec) => (
                          <option key={spec.id} value={spec.id}>
                            {spec.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="contact-date"
                        className="block text-xs font-semibold text-foreground"
                      >
                        Data preferencial (opcional)
                      </label>
                      <input
                        id="contact-date"
                        type="date"
                        value={form.preferredDate}
                        onChange={(e) => setForm({ ...form, preferredDate: e.target.value })}
                        className="mt-2 h-11 w-full rounded-lg border border-border bg-background px-3.5 text-sm tabular-nums text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                  </div>

                  <div>
                    <span className="block text-xs font-semibold text-foreground">
                      Preferência de turno
                    </span>
                    <div className="mt-2 grid grid-cols-3 gap-2">
                      {(['Manhã', 'Tarde', 'Noite'] as const).map((shiftOption) => {
                        const active = form.shift === shiftOption;
                        return (
                          <button
                            key={shiftOption}
                            type="button"
                            onClick={() => setForm({ ...form, shift: shiftOption })}
                            className={`min-h-11 rounded-lg border px-3 py-2 text-xs sm:text-sm font-medium whitespace-nowrap transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                              active
                                ? 'border-primary bg-accent-soft text-accent-ink font-semibold'
                                : 'border-border bg-background text-muted-foreground hover:text-foreground'
                            }`}
                          >
                            {shiftOption}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-complaint"
                      className="block text-xs font-semibold text-foreground"
                    >
                      Queixa principal ou objetivo clínico *
                    </label>
                    <textarea
                      id="contact-complaint"
                      rows={4}
                      required
                      value={form.complaint}
                      onChange={(e) => {
                        setForm({ ...form, complaint: e.target.value });
                        if (errors.complaint) setErrors({ ...errors, complaint: undefined });
                      }}
                      placeholder="Descreva a região da dor, cirurgia recente, modalidade esportiva ou encaminhamento médico."
                      className="mt-2 w-full rounded-lg border border-border bg-background p-3.5 text-sm leading-relaxed text-foreground placeholder:text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                    {errors.complaint && (
                      <p className="mt-1.5 text-xs text-destructive" role="alert">
                        {errors.complaint}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg clinical-gradient-btn px-6 py-3.5 text-sm sm:text-base font-medium text-primary-foreground clinical-shadow transition-all duration-150 hover:opacity-95 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 cursor-pointer"
                  >
                    <span>Entrar em contato</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
