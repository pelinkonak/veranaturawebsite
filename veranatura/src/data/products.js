// src/data/products.js
// Ürün verileri + yardımcı fonksiyonlar
import rizeCayi from "../assets/rize-cayi.jpg";   
import tarhana from "../assets/tarhana.jpg";
import zeytinyagiImg from "../assets/zeytinyagi.JPG";
import izgaraImg from "../assets/izgaradekor.JPG";
import siyahyagliImg from "../assets/siyahyagli.JPG";
import yesilcizikImg from "../assets/yesilcizik.JPG";
import yesilkirikImg from "../assets/yesilkirma.JPG";
import cambaliImg from "../assets/cambali.JPG";
import sarimsak from "../assets/sarimsak.jpg";
import cicekbali from "../assets/cicekbali.jpg";
import karakovan from "../assets/karakovan.jpg";
import koytereyagi from "../assets/koytereyagi.jpg";

// WhatsApp numaran (başında 0 olmadan, ülke kodu ile)
export const whatsappNumber = "05070360637";

export const products = [
  {
    slug: "organik-naturel-sizma-zeytinyagi",
    title: "Organik Naturel Sızma Zeytinyağı",
    desc: "Soğuk sıkım, taş baskı",
    price: "400 TL / L",
    img: zeytinyagiImg,
    details: `
Soğuk sıkım yöntemiyle elde edilen, taş baskı lezzetini sofranıza taşıyan %100 doğal zeytinyağımız… 
Kahvaltıdan salatalara, her yemeğe sağlık ve lezzet katar. Yüksek polifenol değeri ile hem damak zevkinize hem sağlığınıza iyi gelir.
    `.trim(),
  },
  {
    slug: "siyah-yagli-zeytin",
    title: "Siyah Yağlı Zeytin",
    desc: "Doğal yöntemlerle olgunlaştırma",
    price: "350 TL / kg",
    img: siyahyagliImg,
    details: `
Dalından özenle seçilen, olgunlaşmış zeytinlerin doğal salamura ile fermente edilmesinin ardından kaliteli zeytinyağına bandırılarak hazırlanan siyah yağlı zeytin… 
Zeytinyağının kattığı yoğun aroma ve parlak dokusuyla kahvaltı sofralarının en özel lezzetlerinden biridir.
    `.trim(),
  },
  {
    slug: "yesil-cizik-zeytin",
    title: "Yeşil Çizik Zeytin",
    desc: "Hafif salamura, iri taneli",
    price: "300 TL / kg",
    img: yesilcizikImg,
    details: `
Doğal yöntemlerle çizilerek hazırlanan, hafif tuzlu ve ferah aromalı yeşil çizik zeytin… 
Salatalara, kahvaltılara ve atıştırmalıklara lezzet katar.
    `.trim(),
  },
  {
    slug: "yesil-kirma-zeytin",
    title: "Yeşil Kırma Zeytin",
    desc: "Geleneksel kırma usulü",
    price: "300 TL / kg",
    img: yesilkirikImg,
    details: `
Taze toplanan yeşil zeytinlerin hafifçe kırılarak, doğal salamura ile olgunlaştırılması… 
Yumuşak dokusu ve hafif ekşimsi tadıyla her lokmada doğallığı hissedin.
    `.trim(),
  },
  {
    slug: "yesil-izgara-zeytin",
    title: "Yeşil Izgara Zeytin",
    desc: "Izgara dokulu, aromatik",
    price: "350 TL / kg",
    img: izgaraImg,
    details: `
Özel ızgara yöntemiyle hafifçe közlenen yeşil zeytinler… 
Farklı aroması ve dumanlı kokusuyla kahvaltılarda, salatalarda ve peynir tabaklarında benzersiz bir tat sunar.
    `.trim(),
  },
  {
    slug: "suzme-cam-bali",
    title: "Süzme Çam Balı",
    desc: "Doğal, katkısız bal",
    price: "600 TL / kavanoz",
    img: cambaliImg,
    details: `
Ege ve Akdeniz’in çam ormanlarından elde edilen, kendine has aroması ve koyu rengiyle tanınan çam balımız… 
Antioksidan zengini bu özel bal, hem lezzeti hem de sağlık faydalarıyla sofralarınıza değer katar.
    `.trim(),
  },
  // Placeholder görsellerle devam edenler:
  {
    slug: "suzme-cicek-bali",
    title: "Süzme Çiçek Balı",
    desc: "Yüksek aromalı çiçek balı",
    price: "700 TL / kavanoz",
    img: cicekbali,
    details: "Yüksek rakımlı yaylalardan toplanan, zengin aromalı çiçek balı.",
  },
  {
    slug: "karakovan-petek-bali",
    title: "Karakovan Petek Balı",
    desc: "Tamamen doğal petek",
    price: "2250 TL / 1.5kg",
    img: karakovan,
    details: "Arıların tamamen doğal şekilde ürettiği, katkısız ve saf karakovan petek balı… Petekleriyle birlikte sunulur, doğanın en saf haliyle sofranıza gelir. Bir kaşıkta binlerce çiçeğin özünü hissedin.",
  },
  {
    slug: "koy-tereyagi",
    title: "Köy Tereyağı",
    desc: "Yayık tereyağı",
    price: "800 TL / kg",
    img: koytereyagi,
    details: "Tamamen doğal sütlerden elde edilen, mis kokulu köy tereyağımız… Kahvaltılarda, böreklerde, yemeklerde farkını hemen hissettiren, katkısız ve yoğun lezzet.",
  },
  {
    slug: "karadut-ozu",
    title: "Karadut Özü",
    desc: "Doğal meyve özü",
    price: "300 TL / L",
    img: "https://placehold.co/600x400?text=Karadut+Ozu",
    details: "Yüksek meyve oranlı, katkısız karadut özü.",
  },
  {
    slug: "yaban-mersini-ozu",
    title: "Yaban Mersini Özü",
    desc: "Antioksidan zengini",
    price: "—",
    img: "https://placehold.co/600x400?text=Yaban+Mersini+Ozu",
    details: "Doğal yaban mersininden üretilen lezzetli meyve özü.",
  },
  {
    slug: "nar-eksisi",
    title: "Nar Ekşisi",
    desc: "Geleneksel yöntem",
    price: "300 TL / L",
    img: "https://placehold.co/600x400?text=Nar+Eksisi",
    details: "Uzun süreli kaynatma ile kıvamı yoğunlaştırılmış gerçek nar ekşisi.",
  },
  {
    slug: "taskopru-sarimsagi",
    title: "Taşköprü Sarımsağı",
    desc: "Aroması yoğun",
    price: "350 TL / kg",
    img: sarimsak,
    details: "Yoğun aroması ve uzun raf ömrü ile dünyaca ünlü Taşköprü sarımsağı… Geleneksel yöntemlerle yetiştirilir, el ile toplanır ve sofralarınıza en taze haliyle ulaşır. Sağlığınız için doğanın en güçlü armağanı.",
  },
  {
    slug: "rize-cayi",
    title: "Rize Çayı",
    desc: "İlk sürgün yaprak, dengeli dem",
    price: "300 TL / 500 g",
    img: rizeCayi,
    details: `Doğu Karadeniz’in en iyi bahçelerinden toplanan çay yapraklarının, katkısız ve saf hali… Mis gibi kokusu, yumuşak içimi ve damakta bıraktığı hafif aroması ile günün her anına eşlik eder.`,
  },
  {
    slug: "tarhana",
    title: "Ev Yapımı Tarhana",
    desc: "Geleneksel fermente, doğal",
    price: "250 TL / 1 kg",
    img: tarhana,
    details: `Doğal sebzeler, yoğurt ve buğday unu ile geleneksel yöntemlerde hazırlanan ev yapımı tarhanamız… Soğuk kış günlerinde iç ısıtan, besleyici ve tamamen katkısız bir lezzet.`,
  },
];

// Yardımcı: slug ile ürün bul
export function findProductBySlug(slug) {
  return products.find((p) => p.slug === slug);
}
