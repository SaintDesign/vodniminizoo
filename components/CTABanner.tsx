import Link from 'next/link';
import type { ReactNode } from 'react';

type Action = { label: string; href: string; variant?: 'moss' | 'ghost' };

type CTABannerProps = {
  title: ReactNode;
  description?: ReactNode;
  actions: Action[];
};

export function CTABanner({ title, description, actions }: CTABannerProps) {
  return (
    <section className="section">
      <div className="container">
        <div className="cta-banner" data-reveal>
          <div className="cta-banner__bg" aria-hidden="true" />
          <div>
            <h2>{title}</h2>
            {description && <p>{description}</p>}
          </div>
          <div className="cta-banner__actions">
            {actions.map((a) => (
              <Link
                key={a.href + a.label}
                className={`btn ${a.variant === 'ghost' ? 'btn--ghost' : 'btn--moss'}`}
                href={a.href}
              >
                {a.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
