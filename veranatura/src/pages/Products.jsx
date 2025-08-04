import React from "react";

const products = [
  {
    title: "Erken Hasat Naturel Zeytinyağı",
    desc: "Soğuk sıkım, yüksek polifenol",
    price: "250 TL / L",
    img: "https://placehold.co/100x120?text=Zeytinyağı",
  },
  {
    title: "Taş Baskı Zeytinyağı",
    desc: "Soğuk sıkım, taş değirmen",
    price: "400 TL / kg",
    img: "https://placehold.co/100x120?text=Zeytinyağı",
  },
  {
    title: "Gemlik Siyah Zeytin",
    desc: "Hızlı fermente, iri taneli",
    price: "250 TL / kg",
    img: "https://placehold.co/100x100?text=Siyah+Zeytin",
  },
  {
    title: "Gizik Yeşil Zeytin",
    desc: "Hafif salamura, iri taneli",
    price: "220 TL / kg",
    img: "https://placehold.co/100x100?text=Yeşil+Zeytin",
  },
  {
    title: "Kırma Yeşil Zeytin",
    desc: "Çekişte, iri taneli",
    price: "250 TL / kg",
    img: "https://placehold.co/100x100?text=Kırma+Yeşil",
  },
  {
    title: "Domat Yeşil Zeytin",
    desc: "Dolmalık iri boy",
    price: "240 TL / kg",
    img: "https://placehold.co/100x100?text=Domat",
  },
  {
    title: "Sele Zeytin",
    desc: "Doğal fermente, etli",
    price: "250 TL / kg",
    img: "https://placehold.co/100x100?text=Sele+Zeytin",
  },
  {
    title: "Gleek Balı",
    desc: "Yüksek kaliteli kavanoz",
    price: "600 TL / kavanoz",
    img: "https://placehold.co/100x100?text=Bal",
  },
  {
    title: "Köy Tereyağı",
    desc: "Yayık, ustutlu",
    price: "450 TL / kg",
    img: "https://placehold.co/100x100?text=Tereyağı",
  },
  {
    title: "Petek Bal",
    desc: "Doğrudan kovandan",
    price: "750 TL / kg",
    img: "https://placehold.co/100x100?text=Petek+Bal",
  },
  {
    title: "Köy Tereyağı",
    desc: "Yayık usulü, 4'lü",
    price: "450 TL / kg",
    img: "https://placehold.co/100x100?text=Köy+Tereyağı",
  },
  {
    title: "Karadeniz Siyah Çay",
    desc: "İlk sürgün, yaprak",
    price: "300 TL / kg",
    img: "https://placehold.co/100x100?text=Çay",
  },
];

const whatsappNumber = "05070360637"; 

export default function Products() {
  return (
    <div className="bg-[#f7f5ec] min-h-screen py-10 px-4 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-[#36513b] text-3xl md:text-4xl font-serif font-bold text-center mb-2">
          Doğal ve Katkısız Ürünlerimizle Tanışın
        </h1>
        <p className="text-center text-[#36513b] mb-8">
          Tarladan direkt sofranıza gelen %100 doğal, katkısız ve sertifikalı ürünlerimiz aşağıdadır.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <div key={i} className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
              <img src={product.img} alt={product.title} className="w-20 h-24 object-contain mb-3" />
              <h3 className="font-serif text-lg text-[#36513b] font-semibold text-center">{product.title}</h3>
              <p className="text-[#36513b] text-sm text-center my-1">{product.desc}</p>
              <p className="text-[#36513b] font-bold text-base mb-2">{product.price}</p>
              <a
                href={`https://wa.me/${whatsappNumber}?text=Merhaba, ${product.title} siparişi vermek istiyorum.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mt-auto bg-[#254220] text-white rounded-lg py-2 px-2 text-sm font-semibold text-center hover:bg-[#36513b] transition"
              >
                WhatsApp'tan Sipariş Ver
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
