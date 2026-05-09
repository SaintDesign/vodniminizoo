import Link from 'next/link';
import type { ReactNode } from 'react';

export type Crumb = { label: string; href?: string };

type PageHeroProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  breadcrumbs: Crumb[];
};

export function PageHero({ eyebrow, title, description, breadcrumbs }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="container">
        <ol className="breadcrumb">
          {breadcrumbs.map((c, i) => {
            const isLast = i === breadcrumbs.length - 1;
            return (
              <li key={`${c.label}-${i}`} aria-current={isLast ? 'page' : undefined}>
                {c.href && !isLast ? <Link href={c.href}>{c.label}</Link> : <span>{c.label}</span>}
              </li>
            );
          })}
        </ol>
        {eyebrow && <span className="eyebrow" style={{ color: 'var(--aqua)' }}>{eyebrow}</span>}
        <h1>{title}</h1>
        {description && <p>{description}</p>}
      </div>
    </section>
  );
}
