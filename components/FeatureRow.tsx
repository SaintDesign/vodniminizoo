import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';

type FeatureRowProps = {
  title: string;
  body: ReactNode;
  image: string;
  imageAlt: string;
  caption?: string;
  more?: { label: string; href: string };
  reverse?: boolean;
};

export function FeatureRow({ title, body, image, imageAlt, caption, more, reverse }: FeatureRowProps) {
  return (
    <div className={`feature${reverse ? ' feature--rev' : ''}`}>
      <figure className="feature__media">
        <Image src={image} alt={imageAlt} width={760} height={608} sizes="(min-width: 860px) 500px, 90vw" />
        {caption && <figcaption>{caption}</figcaption>}
      </figure>
      <div className="feature__body" data-reveal>
        <h2>{title}</h2>
        {body}
        {more && (
          <Link className="more" href={more.href}>
            {more.label}
          </Link>
        )}
      </div>
    </div>
  );
}
