import React, { useState } from 'react';
import { Activity } from 'lucide-react';

interface ClinicalImageProps {
  src?: string;
  alt: string;
  fallbackTitle: string;
  className?: string;
  aspectClassName?: string;
}

export const ClinicalImage: React.FC<ClinicalImageProps> = ({
  src,
  alt,
  fallbackTitle,
  className = '',
  aspectClassName = 'aspect-[4/3]',
}) => {
  const [hasError, setHasError] = useState(false);

  if (!src || hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`relative flex flex-col items-center justify-center overflow-hidden bg-surface-subtle border border-border p-6 text-center ${aspectClassName} ${className}`}
      >
        <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full border border-border-strong bg-accent-soft text-primary">
          <Activity className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
        </div>
        <p className="font-display text-sm font-semibold text-foreground">
          {fallbackTitle}
        </p>
        <p className="mt-1 max-w-xs text-xs text-muted-foreground">
          Dra. Julyana · Ortopedia, Traumatologia e Reabilitação Clínica
        </p>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-surface-subtle ${aspectClassName} ${className}`}>
      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        loading="lazy"
        onError={() => setHasError(true)}
        className="h-full w-full object-cover transition-transform duration-500 ease-out"
      />
    </div>
  );
};
