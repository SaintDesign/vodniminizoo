// CDN URLs původních obrázků z vodniminizoo.cz.
// Necháno na Webnode CDN — Next.js Image optimization stále funguje (viz next.config.mjs remotePatterns).
// Pokud chceme web plně osamostatnit, je třeba obrázky stáhnout do /public/assets/images/.

const CDN = 'https://b8e9ede6a3.clvaw-cdnwnd.com/0f7981889668dacb5f51d724ac990218';
const ph = '?ph=b8e9ede6a3';
const url = (path: string) => `${CDN}/${path}${ph}`;

// /o-nas
export const oNasImages = {
  hero: url('200000064-5dbc65dbc8/6c09ad88-d00b-49d5-8321-75d02ec26667.jpeg'),
  story: url('200000216-65e8a65e8c/IMG_4268.jpeg'),
};

// /vzdelavaci-programy
export const programyImages = {
  group: url('200000262-36ba836ba9/Z%C5%A0%20Komensk%C3%A9ho.jpeg'),
  child1: url('200000090-87a4387a45/IMG_5687.jpeg'),
  child2: url('200000506-6de456de47/IMG_5154.jpeg'),
};

// /program-svet-vody
export const svetVodyImages = [
  url('200000240-0d67d0d67e/WhatsApp%20Image%202025-09-29%20at%2015.04.34-3.jpeg'),
  url('200000248-26ad226ad4/IMG_0050-8.jpeg'),
  url('200000078-95e2e95e30/IMG_20240821_222130.jpeg'),
  url('200000080-7ff947ff97/IMG_20241207_133435.jpeg'),
];

// /navstivilinas
export const navstiviliImages = {
  hubert: url('200000512-e9201e9203/IMG_8333.jpeg'),
  ecoCenter: url('200000284-755997559b/IMG_5109.jpeg'),
  armadaSpasy: url('200000264-50a8250a84/Arm%C3%A1da%20sp%C3%A1sy.jpeg'),
  zsKomenskeho: url('200000262-36ba836ba9/Z%C5%A0%20Komensk%C3%A9ho.jpeg'),
  deti: url('200000166-ba1fdba200/D%C4%9Bti.png'),
  bezNazvu: url('200000150-6039460396/bez_nazvu.png'),
  obrazek: url('200000154-f272bf272d/obr%C3%A1zek.jpeg'),
  img2052: url('200000152-141ee141f1/IMG_2052.jpeg'),
};

// /projekty-a-vyzvy
export const projektyImages = {
  vodaVPohybu: url('200000114-da103da106/voda%20v%20pohybu.jpeg'),
  filtraceOld: url('200000106-d8578d857a/IMG_20180927_180631.jpeg'),
};

// /souteze
export const soutezImage = url('200000490-b7500b7502/souteuz.png');

// /podpora
export const podporaImages = [
  url('200000112-e2390e2392/IMG_0045.jpeg'),
  url('200000118-4f3584f35a/IMG_8038.jpeg'),
  url('200000116-7ff887ff8a/IMG_8011.jpeg'),
];

// /dary
export const daryImages = {
  peni: url('200000256-827cd827ce/peni.jpeg'),
  sponzor: url('200000252-ab5e1ab5e2/sponzor.jpeg'),
};

// /kontakt
export const kontaktImages = {
  pesiTrasa: url('200000145-d62b2d62b3/P%C4%9B%C5%A1%C3%AD%20trasy%20Pr%C5%BEno%20vlakov%C3%A9%20n%C3%A1dra%C5%BE%C3%AD%20-%20do%20vodn%C3%AD%20miniZOO%2C%20kolem%20Nov%C3%A9ho%20Sv%C4%9Bta..png'),
  qrTrasa: url('200000144-b5d1eb5d20/QR%20p%C4%9B%C5%A1%C3%AD%2C%20Pr%C5%BEno%20-%20vodn%C3%AD%20miniZOO.png'),
};

// /fotogalerie — kurátorský výběr z 104 fotek originálu
export const fotogalerieImages: { src: string; alt: string }[] = [
  { src: url('200000302-ce28cce28e/WhatsApp%20Image%202025-10-27%20at%2018.47.54.jpeg'), alt: 'Akvárium' },
  { src: url('200000354-e403ee4040/IMG_2567.jpeg'), alt: 'Detail' },
  { src: url('200000121-395d3395d6/7f5e8f65-c712-41ab-ae05-5758aa86d5ce.jpeg'), alt: 'Expozice' },
  { src: url('200000304-9145e91460/WhatsApp%20Image%202025-10-27%20at%2018.47.54%20%281%29.jpeg'), alt: 'Akvárium' },
  { src: url('200000120-2b56c2b56e/789566b5-c45a-481b-a6d7-3a8d3b9a403f-7.jpeg'), alt: 'Ryba' },
  { src: url('200000122-4d0134d015/IMG_0024-5.jpeg'), alt: 'Detail' },
  { src: url('200000123-96a5696a58/IMG_0050-0.jpeg'), alt: 'Arapaima' },
  { src: url('200000124-d51a2d51a4/IMG_20200326_084514.jpeg'), alt: 'Areál' },
  { src: url('200000130-e62eae62ec/IMG_20240309_102035-9.jpeg'), alt: 'Kožnatka' },
  { src: url('200000131-3611036111/IMG_20240505_231253.jpeg'), alt: 'Detail' },
  { src: url('200000298-102a1102a2/WhatsApp%20Image%202025-10-27%20at%2018.47.49%20%281%29.jpeg'), alt: 'Akvárium' },
  { src: url('200000416-dfc4adfc4b/IMG_2522.jpeg'), alt: 'Ryba' },
  { src: url('200000300-ab55dab55f/WhatsApp%20Image%202025-10-27%20at%2018.47.49-9.jpeg'), alt: 'Akvárium' },
  { src: url('200000132-3dc0f3dc12/IMG_20240821_222130-7.jpeg'), alt: 'Krokodýl' },
  { src: url('200000332-583f9583fa/IMG_2398.jpeg'), alt: 'Cichlida' },
  { src: url('200000133-dc146dc149/IMG_20241207_133435-7.jpeg'), alt: 'Akvárium' },
  { src: url('200000303-8605186053/WhatsApp%20Image%202025-10-27%20at%2018.47.54%20%282%29.jpeg'), alt: 'Detail' },
  { src: url('200000364-c5f22c5f24/IMG_2731.jpeg'), alt: 'Pohled' },
  { src: url('200000395-b3ba3b3ba5/IMG_5144.jpeg'), alt: 'Areál' },
  { src: url('200000438-6dab46dab6/IMG_5295.jpeg'), alt: 'Detail' },
  { src: url('200000367-279792797c/IMG_2750.jpeg'), alt: 'Pohled' },
  { src: url('200000366-09ba309ba4/IMG_2740.jpeg'), alt: 'Pohled' },
  { src: url('200000414-38e2038e21/IMG_3337.jpeg'), alt: 'Detail' },
  { src: url('200000370-70be470be6/IMG_2765.jpeg'), alt: 'Pohled' },
  { src: url('200000372-3221332215/IMG_2771.jpeg'), alt: 'Pohled' },
  { src: url('200000443-d9c96d9c99/IMG_5526.jpeg'), alt: 'Pohled' },
  { src: url('200000442-df135df137/IMG_5228.jpeg'), alt: 'Pohled' },
  { src: url('200000444-63f4d63f4f/IMG_4759.jpeg'), alt: 'Pohled' },
  { src: url('200000448-568c6568c8/IMG_2552.jpeg'), alt: 'Pohled' },
  { src: url('200000450-ee62fee632/IMG_2596-6.jpeg'), alt: 'Pohled' },
  { src: url('200000451-efc75efc78/IMG_2650-8.jpeg'), alt: 'Pohled' },
  { src: url('200000456-2d6f62d6f8/IMG_3343-8.jpeg'), alt: 'Pohled' },
  { src: url('200000458-ccfa6ccfaa/IMG_3813-6.jpeg'), alt: 'Pohled' },
];
