// src/pages/Products.jsx
import React from "react";
import { Link } from "react-router-dom";
import { products, whatsappNumber } from "../data/products";

export default function Products() {
  return (
    <div className="bg-[#f7f5ec] min-h-screen py-10 px-4 md:px-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-[#36513b] text-3xl md:text-4xl font-serif font-bold text-center mb-2">
          Doğal ve Katkısız Ürünlerimizle Tanışın
        </h1>
        <p className="text-center text-[#36513b] mb-8">
          Tarladan direkt sofranıza gelen %100 doğal, katkısız ve sertifikalı ürünlerimiz aşağıdadır.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((p) => (
            <div key={p.slug} className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
              <Link to={`/urun/${p.slug}`} className="w-full flex flex-col items-center">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-48 h-36 object-cover mb-3 rounded shadow"
                />
                <h3 className="font-serif text-lg text-[#36513b] font-semibold text-center">
                  {p.title}
                </h3>
              </Link>

              <p className="text-[#36513b] text-sm text-center my-1">{p.desc}</p>
              <p className="text-[#36513b] font-bold text-base mb-2">{p.price}</p>

              <a
                href={`https://wa.me/${whatsappNumber}?text=Merhaba, ${p.title} siparişi vermek istiyorum.`}
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
