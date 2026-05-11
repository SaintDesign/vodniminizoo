import { siteConfig } from '@/lib/site';

export function ContactBlock({ showForm = true }: { showForm?: boolean }) {
  return (
    <section className="section section--ink">
      <div className="container">
        <div className="contact">
          <div>
            <h1>Kontakt</h1>
            <p>
              Vážení návštěvníci, pokud máte zájem navštívit naši vodní miniZOO, můžete nás kontaktovat prostřednictvím následujících možností:
            </p>
            <ul>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 22s-7-7-7-13a7 7 0 1 1 14 0c0 6-7 13-7 13z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
                <div>
                  <strong>{siteConfig.contact.company}</strong>
                  <span>{siteConfig.contact.address}</span>
                </div>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 16.92V21a1 1 0 0 1-1.11 1 19 19 0 0 1-8.27-2.94 19 19 0 0 1-6-6A19 19 0 0 1 3.93 4.11 1 1 0 0 1 5 3h4a1 1 0 0 1 1 .75 12 12 0 0 0 .65 2.6 1 1 0 0 1-.23 1L8.91 8.91a16 16 0 0 0 6 6l1.56-1.56a1 1 0 0 1 1-.23 12 12 0 0 0 2.6.65 1 1 0 0 1 .75 1z" />
                </svg>
                <div>
                  <a href={siteConfig.contact.phoneHref}><strong>{siteConfig.contact.phone}</strong></a>
                </div>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M3 7l9 6 9-6" />
                </svg>
                <div>
                  <a href={siteConfig.contact.emailHref}><strong>{siteConfig.contact.email}</strong></a>
                </div>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13 22v-8h3l1-4h-4V7c0-1 .3-2 2-2h2V1.2A23 23 0 0 0 14 1c-3 0-5 2-5 5v4H6v4h3v8z" />
                </svg>
                <div>
                  <a href={siteConfig.contact.facebook} rel="noopener noreferrer">
                    <strong>{siteConfig.contact.facebookLabel}</strong>
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {showForm && (
            <form className="contact-form" action={siteConfig.contact.emailHref} method="post">
              <label>
                Jméno a příjmení
                <input type="text" name="name" required />
              </label>
              <label>
                E-mail
                <input type="email" name="email" placeholder="@" required />
              </label>
              <label>
                Zpráva
                <textarea name="message" required />
              </label>
              <button type="submit">Odeslat</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
