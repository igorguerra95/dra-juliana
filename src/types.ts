export type SpecialtyId =
  | 'ortopedia'
  | 'esportiva'
  | 'pos-operatorio'
  | 'rpg'
  | 'pilates';

export interface SpecialtyItem {
  id: SpecialtyId;
  number: string;
  title: string;
  categoryLabel: string;
  summary: string;
  clinicalFocus: string[];
  durationLabel: string;
  imageSrc?: string;
  imageAlt?: string;
  colSpanClass: string;
}

export interface ClinicalMetric {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  detail: string;
}

export interface RegionProtocol {
  id: 'coluna' | 'joelho' | 'ombro' | 'tornozelo';
  label: string;
  specialtyId: SpecialtyId;
  headline: string;
  indication: string;
  phases: {
    step: string;
    title: string;
    description: string;
  }[];
  dischargeCriteria: string;
}

export interface AcademicCredential {
  period: string;
  title: string;
  institution: string;
  focus: string;
}

export interface RecoveryTestimonial {
  id: string;
  patientName: string;
  profile: string;
  specialty: string;
  beforeState: string;
  intervention: string;
  measurableOutcome: string;
  recoveryWindow: string;
}
