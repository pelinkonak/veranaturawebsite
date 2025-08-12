// src/pages/ProductDetail.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { findProductBySlug, whatsappNumber } from "../data/products";

export default function ProductDetail() {
  const { slug } = useParams();
  const product = findProductBySlug(slug);

  if (!product) {
    return (
      <div className="bg-[#f7f5ec] min-h-screen px-4 py-12 flex items-center justify-center">
        <div className="max-w-xl text-center">
          <h1 className="text-2xl md:text-3xl font-serif font-bold text-[#36513b] mb-4">
            Ürün bulunamadı
          </h1>
          <Link
            to="/urunlerimiz"
            className="text-white bg-[#36513b] px-5 py-2 rounded-lg inline-block"
          >
            Ürünlere Dön
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#f7f5ec] min-h-screen px-4 py-10">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Görsel */}
        <div className="rounded-2xl bg-white shadow p-4 flex items-center justify-center">
          <img
            src={product.img}
            alt={product.title}
            className="w-full h-[360px] object-cover rounded-xl"
          />
        </div>

        {/* Başlık / Fiyat */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#36513b] mb-2">
            {product.title}
          </h1>
          <p className="text-[#36513b] text-lg mb-3">{product.desc}</p>
          <p className="text-2xl font-bold text-[#36513b] mb-6">{product.price}</p>

          <a
            href={`https://wa.me/${whatsappNumber}?text=Merhaba, ${product.title} hakkında bilgi ve sipariş vermek istiyorum.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#254220] text-white rounded-lg py-3 px-5 font-semibold hover:bg-[#36513b] transition"
          >
            WhatsApp'tan Sipariş Ver
          </a>

          <Link
            to="/urunlerimiz"
            className="mt-4 inline-block text-[#36513b] underline"
          >
            ← Ürünlere geri dön
          </Link>
        </div>
      </div>

      {/* Ürün Hakkında Bilgi (altta) */}
      <div className="max-w-5xl mx-auto mt-10">
        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-2xl font-serif font-semibold text-[#36513b] mb-3">
            Ürün Hakkında
          </h2>
          <p className="text-[#36513b] leading-relaxed whitespace-pre-line">
            {product.details}
          </p>
        </div>
      </div>
    </div>
  );
}
