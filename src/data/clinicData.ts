import type {
  AcademicCredential,
  ClinicalMetric,
  RecoveryTestimonial,
  RegionProtocol,
  SpecialtyItem,
} from '../types';

export const CLINIC_CONTACT = {
  brandShort: 'Dra. Julyana',
  brandFull: 'Dra. Julyana | Ortopedia e Traumatologia',
  address: 'SEU ENDEREÇO AQUI',
  phoneDisplay: '(00) 00000-0000',
  phoneHref: 'tel:+5500000000000',
  whatsappHref: 'https://wa.me/5500000000000',
  hours: 'Não informado',
  crefitoLabel: 'Atendimento Especializado Individualizado',
};

export const HERO_METRICS: ClinicalMetric[] = [
  {
    value: 2400,
    prefix: '+',
    label: 'Atendimentos Clínicos',
    detail: 'Protocolos individuais conduzidos com acompanhamento direto',
  },
  {
    value: 98,
    suffix: '%',
    label: 'Retorno Funcional',
    detail: 'Pacientes com retomada segura da rotina e autonomia sem dor',
  },
  {
    value: 10,
    suffix: ' anos',
    label: 'Dedicação à Ortopedia',
    detail: 'Prática contínua em traumatologia e reabilitação musculoesquelética',
  },
  {
    value: 60,
    suffix: ' min',
    label: 'Sessão Exclusiva',
    detail: 'Avaliação e conduta individualizada sem atendimentos simultâneos',
  },
];

export const SPECIALTIES: SpecialtyItem[] = [
  {
    id: 'ortopedia',
    number: '01.',
    title: 'Ortopedia e Traumatologia',
    categoryLabel: 'Coluna · Articulações · Fraturas',
    summary:
      'Diagnóstico cinético-funcional e reabilitação estruturada para lesões musculoesqueléticas, hérnias discais, artroses, tendinopatias e consolidação pós-trauma.',
    clinicalFocus: [
      'Terapia manual ortopédica e mobilização articular precisa',
      'Controle álgico sem mascarar a causa mecânica da sobrecarga',
      'Reconstrução progressiva de força, estabilidade e amplitude',
    ],
    durationLabel: 'Avaliação inicial de 60 minutos',
    imageSrc: '/src/assets/images/specialty_orthopedic_rehab_clean_1795528178263.jpg',
    imageAlt:
      'Avaliação biomecânica ortopédica de joelho e membros inferiores conduzida pela fisioterapeuta em ambiente clínico',
    colSpanClass: 'lg:col-span-7',
  },
  {
    id: 'pos-operatorio',
    number: '02.',
    title: 'Reabilitação Pós-Operatória',
    categoryLabel: 'LCA · Menisco · Manguito Rotador · Coluna',
    summary:
      'Condução criteriosa das fases inflamatória, proliferativa e de remodelação após cirurgias ortopédicas, com comunicação alinhada à equipe médica.',
    clinicalFocus: [
      'Ganho seguro de amplitude articular nas primeiras semanas',
      'Ativação neuromuscular precoce e proteção tecidual',
      'Critérios objetivos de força simétrica antes da alta clínica',
    ],
    durationLabel: 'Protocolo alinhado ao cirurgião',
    colSpanClass: 'lg:col-span-5',
  },
  {
    id: 'rpg',
    number: '03.',
    title: 'RPG — Reeducação Postural Global',
    categoryLabel: 'Cadeias Musculares · Alinhamento · Escoliose',
    summary:
      'Abordagem global que trata o corpo como um sistema integrado de cadeias miofasciais, corrigindo compensações posturais crônicas e tensões cervicais ou lombares.',
    clinicalFocus: [
      'Posturas ativas mantidas com controle respiratório diafragmático',
      'Descompressão articular progressiva em coluna e quadris',
      'Correção ergonômica aplicada à rotina profissional',
    ],
    durationLabel: 'Atendimento individual em maca específica',
    colSpanClass: 'lg:col-span-5',
  },
  {
    id: 'pilates',
    number: '04.',
    title: 'Pilates Clínico Terapêutico',
    categoryLabel: 'Estabilização Central · Mobilidade · Controle',
    summary:
      'Método adaptado exclusivamente por fisioterapeuta especialista para estabilização segmentar da coluna, fortalecimento profundo e autonomia motora sustentável.',
    clinicalFocus: [
      'Exercícios em aparelhos com resistência de molas calibrada',
      'Foco em controle lombo-pélvico e proteção articular',
      'Transição segura entre reabilitação clínica e autonomia diária',
    ],
    durationLabel: 'Equipamentos dedicados · Controle clínico',
    imageSrc: '/src/assets/images/specialty_pilates_rpg_1795528162672.jpg',
    imageAlt:
      'Estúdio de Pilates clínico com reformer em madeira clara e iluminação natural para reabilitação postural',
    colSpanClass: 'lg:col-span-7',
  },
];

export const REGION_PROTOCOLS: RegionProtocol[] = [
  {
    id: 'coluna',
    label: 'Coluna e Postura',
    specialtyId: 'rpg',
    headline: 'Hérnia discal, lombalgia mecânica e cervicalgia tensional',
    indication:
      'Indicado para dores irradiadas, rigidez matinal, sobrecarga postural no trabalho ou alterações da curvatura vertebral.',
    phases: [
      {
        step: 'Fase 01',
        title: 'Descompressão e Modulação Álgica',
        description:
          'Avaliação neurológica e mecânica para identificar movimentos direcionais de alívio, combinada à terapia manual.',
      },
      {
        step: 'Fase 02',
        title: 'Reorganização de Cadeias (RPG)',
        description:
          'Alongamento global ativo e liberação miofascial para reduzir compressões discais e equilibrar tensões.',
      },
      {
        step: 'Fase 03',
        title: 'Estabilização no Pilates Clínico',
        description:
          'Fortalecimento de musculatura profunda de tronco e quadril para blindar a coluna contra novas crises.',
      },
    ],
    dischargeCriteria:
      'Ausência de irradiação, mobilidade lombar/cervical simétrica e tolerância plena às atividades diárias.',
  },
  {
    id: 'joelho',
    label: 'Joelho e Ligamentos',
    specialtyId: 'pos-operatorio',
    headline: 'Reconstrução de LCA, lesão meniscal e condropatia patelar',
    indication:
      'Indicado para pós-operatório de ligamentos e meniscos, dor anterior ao agachar ou instabilidade ao caminhar e subir escadas.',
    phases: [
      {
        step: 'Fase 01',
        title: 'Controle de Edema e Extensão Completa',
        description:
          'Recuperação imediata da extensão terminal do joelho, drenagem e ativação precoce do quadríceps.',
      },
      {
        step: 'Fase 02',
        title: 'Força Unilateral e Controle de Quadril',
        description:
          'Progressão de carga em cadeia cinética fechada com correção do valgo dinâmico em apoio unipodal.',
      },
      {
        step: 'Fase 03',
        title: 'Estabilidade Dinâmica e Alta Funcional',
        description:
          'Treino de transferência de peso, equilíbrio e índice de simetria entre membros superior a 90% antes da alta.',
      },
    ],
    dischargeCriteria:
      'Simetria de força entre membros, marcha estável e ausência de derrame articular pós-esforço.',
  },
  {
    id: 'ombro',
    label: 'Ombro e Manguito',
    specialtyId: 'ortopedia',
    headline: 'Tendinopatia do manguito rotador, bursite e instabilidade glenoumeral',
    indication:
      'Indicado para dor ao elevar o braço, desconforto noturno ao deitar sobre o ombro ou recuperação pós-reparo artroscópico.',
    phases: [
      {
        step: 'Fase 01',
        title: 'Equilíbrio Escápulo-Torácico',
        description:
          'Liberação de cápsula posterior e correção da discinese escapular para ampliar o espaço subacromial.',
      },
      {
        step: 'Fase 02',
        title: 'Resistência Tendínea Progressiva',
        description:
          'Exercícios isométricos e excêntricos específicos para reorganizar as fibras colágenas do manguito.',
      },
      {
        step: 'Fase 03',
        title: 'Movimentos Funcionais e Laborais',
        description:
          'Treino específico para elevação segura acima da cabeça, alcance funcional e atividades cotidianas sem sobrecarga.',
      },
    ],
    dischargeCriteria:
      'Arco de movimento indolor completo e estabilidade escapular mantida durante a rotina diária.',
  },
  {
    id: 'tornozelo',
    label: 'Tornozelo e Pé',
    specialtyId: 'ortopedia',
    headline: 'Entorses recidivantes, fascite plantar e tendinopatia do calcâneo',
    indication:
      'Indicado para dor ao apoiar o pé pela manhã, histórico de entorses ligamentares e rigidez articular no tornozelo.',
    phases: [
      {
        step: 'Fase 01',
        title: 'Mobilidade Talocrural e Carga Tendínea',
        description:
          'Mobilização articular para restaurar dorsiflexão e analgesia controlada do tendão calcâneo ou fáscia plantar.',
      },
      {
        step: 'Fase 02',
        title: 'Propriocepção e Força Intrínseca do Pé',
        description:
          'Treino neuromuscular em superfícies progressivas para reeducar os estabilizadores laterais do tornozelo.',
      },
      {
        step: 'Fase 03',
        title: 'Readaptação da Marcha e Autonomia',
        description:
          'Correção do padrão de pisada, subida e descida de escadas e tolerância prolongada em pé sem desconforto.',
      },
    ],
    dischargeCriteria:
      'Equilíbrio dinâmico simétrico e caminhada contínua sem dor matinal ou instabilidade.',
  },
];

export const ACADEMIC_CREDENTIALS: AcademicCredential[] = [
  {
    period: 'Especialização Lato Sensu',
    title: 'Fisioterapia em Ortopedia e Traumatologia',
    institution: 'Formação Clínica Hospitalar e Ambulatorial',
    focus:
      'Condução de casos complexos de coluna vertebral, articulações periféricas e reabilitação pós-cirúrgica.',
  },
  {
    period: 'Pós-Graduação',
    title: 'Terapia Manual Ortopédica e Biomecânica Clínica',
    institution: 'Ênfase em Avaliação Cinético-Funcional e Dor Musculoesquelética',
    focus:
      'Diagnóstico diferencial mecânico, mobilizações articulares e prescrição progressiva de carga terapêutica.',
  },
  {
    period: 'Formação Internacional',
    title: 'RPG Souchard e Pilates Clínico Terapêutico',
    institution: 'Certificação em Reeducação Postural Global',
    focus:
      'Integração entre terapia manual postural, estabilização segmentar e consciência corporal.',
  },
  {
    period: 'Graduação',
    title: 'Bacharelado em Fisioterapia',
    institution: 'Base Anatômica, Cinesiológica e Prática Baseada em Evidências',
    focus:
      'Atendimento humanizado, ético e orientado por metas clínicas mensuráveis.',
  },
];

export const TESTIMONIALS: RecoveryTestimonial[] = [
  {
    id: 'caso-lca',
    patientName: 'Rafael Henrique Vasconcelos',
    profile: 'Analista de sistemas · 34 anos',
    specialty: 'Reabilitação Pós-Operatória de LCA e Ortopedia',
    beforeState:
      'Chegou à clínica 14 dias após reconstrução do ligamento cruzado anterior, com edema persistente, limitação de flexão e insegurança ao apoiar o joelho.',
    intervention:
      'Reabilitação estruturada em três fases ao longo de 24 semanas, unindo ganho precoce de extensão, fortalecimento unilateral progressivo e treino proprioceptivo.',
    measurableOutcome:
      'Retorno completo à marcha sem claudicação, subida de escadas e rotina ativa em 6 meses, com 96% de simetria de força entre os membros.',
    recoveryWindow: 'Alta clínica em 6 meses',
  },
  {
    id: 'caso-coluna',
    patientName: 'Camila Monteiro Duarte',
    profile: 'Arquiteta · 41 anos',
    specialty: 'Ortopedia e RPG — Reeducação Postural Global',
    beforeState:
      'Convivia há 11 meses com protusão discal lombar L4-L5 e dor irradiada para a perna direita que comprometia longas jornadas de trabalho e o sono.',
    intervention:
      'Controle álgico inicial com terapia manual ortopédica, seguido de sessões semanais de RPG e transição gradual para o Pilates Clínico focado em estabilização.',
    measurableOutcome:
      'Eliminação da dor irradiada nas primeiras 5 semanas e retomada integral das atividades profissionais e caminhadas sem uso de analgésicos.',
    recoveryWindow: 'Estabilização em 10 semanas',
  },
  {
    id: 'caso-ombro',
    patientName: 'Eduardo Tavares Nogueira',
    profile: 'Engenheiro civil · 48 anos',
    specialty: 'Ortopedia e Pilates Clínico Terapêutico',
    beforeState:
      'Apresentava tendinopatia crônica do supraespinal com bloqueio doloroso acima de 90 graus de elevação, dificultando tarefas simples e o sono.',
    intervention:
      'Reequilíbrio da cinemática escapular, protocolo excêntrico progressivo para o manguito rotador e integração postural no Pilates Clínico.',
    measurableOutcome:
      'Amplitude articular completa restaurada em 8 semanas e retorno integral às atividades profissionais e diárias sem dor noturna.',
    recoveryWindow: 'Alta funcional em 8 semanas',
  },
];
