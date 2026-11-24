import React from 'react';
import { CLINIC_CONTACT } from '../data/clinicData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-8 border-b border-border pb-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-display text-lg font-bold tracking-tight text-foreground">
              {CLINIC_CONTACT.brandFull}
            </p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
              Fisioterapia clínica especializada em reabilitação ortopédica, traumatológica,
              pós-operatória, Reeducação Postural Global (RPG) e Pilates clínico terapêutico.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs font-semibold text-foreground">Navegação</p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#inicio" className="transition-colors hover:text-primary">
                  Início
                </a>
              </li>
              <li>
                <a href="#especialidades" className="transition-colors hover:text-primary">
                  Especialidades
                </a>
              </li>
              <li>
                <a href="#sobre" className="transition-colors hover:text-primary">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#contato" className="transition-colors hover:text-primary">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="text-xs font-semibold text-foreground">Informações da Clínica</p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>Endereço: {CLINIC_CONTACT.address}</li>
              <li>
                Telefone:{' '}
                <a
                  href={CLINIC_CONTACT.phoneHref}
                  className="tabular-nums text-foreground transition-colors hover:text-primary"
                >
                  {CLINIC_CONTACT.phoneDisplay}
                </a>
              </li>
              <li>Horário: {CLINIC_CONTACT.hours}</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} {CLINIC_CONTACT.brandFull}. Todos os direitos reservados.
          </p>
          <p>Atendimento fisioterapêutico individualizado baseado em evidências.</p>
        </div>
      </div>
    </footer>
  );
};
