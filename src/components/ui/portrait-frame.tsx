import { cn } from '@/lib/utils';

interface PortraitFrameProps {
  /** Image source. Omit to show a neutral placeholder tone. */
  src?: string;
  alt?: string;
  className?: string;
}

/**
 * Editorial portrait frame — heavily rounded left corners, sharp right
 * corners, clipped image. Pass `src` to replace the placeholder.
 */
export function PortraitFrame({ src, alt = 'Portrait of Flynn Maxwel D', className }: PortraitFrameProps) {
  return (
    <figure className={cn('portrait-frame', !src && 'portrait-frame--editorial', className)}>
      {src ? (
        <img className="portrait-frame-img" src={src} alt={alt} loading="lazy" />
      ) : (
        <div className="portrait-frame-svg-wrap" aria-label={alt}>
          <svg
            viewBox="0 0 400 480"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="portrait-editorial-svg"
          >
            <rect width="400" height="480" fill="var(--color-bg)" />
            {/* Architectural Grid Lines */}
            <line x1="60" y1="0" x2="60" y2="480" stroke="var(--color-rule)" strokeWidth="1" />
            <line x1="340" y1="0" x2="340" y2="480" stroke="var(--color-rule)" strokeWidth="1" />
            <line x1="0" y1="120" x2="400" y2="120" stroke="var(--color-rule)" strokeWidth="1" />
            <line x1="0" y1="360" x2="400" y2="360" stroke="var(--color-rule)" strokeWidth="1" />

            {/* Stylized Editorial Monogram / Figure Silhouette */}
            <circle cx="200" cy="180" r="70" stroke="var(--color-ink)" strokeWidth="1.5" fill="none" opacity="0.85" />
            <path
              d="M110 380 C 110 270, 290 270, 290 380"
              stroke="var(--color-ink)"
              strokeWidth="1.5"
              fill="none"
              opacity="0.85"
            />

            {/* Accent focal cross */}
            <circle cx="200" cy="180" r="3" fill="var(--color-accent)" />
            <line x1="190" y1="180" x2="210" y2="180" stroke="var(--color-accent)" strokeWidth="1" />
            <line x1="200" y1="170" x2="200" y2="190" stroke="var(--color-accent)" strokeWidth="1" />
          </svg>
        </div>
      )}
    </figure>
  );
}