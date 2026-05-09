# vodní miniZOO Baška — redesign

Statický web pro [vodní miniZOO Baška](https://www.vodniminizoo.cz) — vzdělávací zařízení zaměřené na vodu, vodní ekosystémy a ochranu přírody.

## Stack

- Vanilla HTML / CSS / JS (žádný framework, žádný build step)
- Google Fonts: Fraunces (display) + Inter (body)
- Hostovatelné kdekoli: Netlify, Cloudflare Pages, Vercel, Apache, Nginx

## Struktura

```
/                                      Homepage s asymetrickým hero kolážem
/o-nas/                                O nás
/vzdelavaci-programy/                  Vzdělávací programy
/program-svet-vody/                    Program Svět vody
/vyukovy-program-voda-v-pohybu/        Voda v pohybu — ceník
/fotogalerie/                          Fotogalerie
/navstivilinas/                        Navštívili nás
/souteze/                              Soutěž
/podpora/                              Možnosti podpory
/dary/                                 Dary — bankovní účet
/sponzoring/                           Sponzoring
/kontakt/                              Kontakt + mapa
/projekty-a-vyzvy/                     Aktuální projekty
/navstevni-rad/                        Návštěvní řád
/pravidla-ochrany-soukromi/            GDPR
/licence-a-povinne-informace/          Právní info
/sitemap.xml /robots.txt
```

## Vývoj

Není potřeba žádný build. Stačí libovolný static server:

```bash
python3 -m http.server 8000
# nebo
npx serve .
```

## Deploy

Stačí nahrát kořen repa na hosting. Pro Netlify / Cloudflare Pages:
- Build command: *(žádný)*
- Publish directory: `.`
