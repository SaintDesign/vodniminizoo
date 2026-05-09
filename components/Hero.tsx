import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from './icons';

export function Hero() {
  return (
    <section className="hero">
      <div className="hero__waves" aria-hidden="true">
        <svg viewBox="0 0 1440 200" preserveAspectRatio="none">
          <path
            d="M0,100 C240,140 480,60 720,100 C960,140 1200,60 1440,100 L1440,200 L0,200 Z"
            fill="#0a2233"
          />
        </svg>
      </div>
      <div className="container hero__inner">
        <div className="hero__content" data-reveal>
          <span className="eyebrow">Vodní svět · Baška u Frýdku-Místku</span>
          <h1 className="hero__title">
            Ponořte se do <em>vodního</em>
            <br />
            světa <span className="underline">miniZOO</span>
          </h1>
          <p className="hero__lead">
            Vzdělávací zařízení s největším sladkovodním akváriem v regionu — 41 000 litrů vody, krokodýli, obří arapaimy a tichá kouzla místních biotopů. Otevíráme ekologická témata srozumitelně a poutavě.
          </p>
          <div className="hero__actions">
            <Link className="btn btn--moss" href="/program-svet-vody">
              Prohlídka „Svět vody"
              <ArrowRight className="arrow" />
            </Link>
            <Link className="btn btn--ghost" href="/vyukovy-program-voda-v-pohybu">
              Ceník &amp; rezervace
            </Link>
          </div>
          <div className="hero__meta">
            <div>
              <strong>41 000 l</strong>
              <span>největší sladkovodní akvárium v regionu</span>
            </div>
            <div>
              <strong>2017</strong>
              <span>první obyvatel — kajman brýlový</span>
            </div>
            <div>
              <strong>5,5 mil. Kč</strong>
              <span>investováno do areálu do roku 2024</span>
            </div>
          </div>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <span className="hero__pill">Otevřeno v rámci programů</span>
          <div className="hero__dots hero__dots--1" />
          <div className="hero__dots hero__dots--2" />
          <div className="shape shape--circle">
            <Image
              src="/assets/images/akvarium.jpeg"
              alt=""
              fill
              sizes="(min-width: 960px) 30vw, 56vw"
              priority
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="shape shape--blob">
            <Image
              src="/assets/images/krokodyl.jpeg"
              alt=""
              fill
              sizes="(min-width: 960px) 22vw, 42vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="shape shape--arch">
            <Image
              src="/assets/images/ocelatus-1.jpeg"
              alt=""
              fill
              sizes="(min-width: 960px) 16vw, 30vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
