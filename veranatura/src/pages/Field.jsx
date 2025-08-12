// src/pages/Field.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Field() {
  return (
    <div className="bg-[#f7f5ec] min-h-screen flex items-center justify-center px-6 py-16">
      <div className="max-w-3xl w-full text-center">
        {/* Basit bir alan/çiftlik illüstrasyonu */}
        <div className="mx-auto mb-8 w-40 h-40">
          <svg viewBox="0 0 200 200" className="w-full h-full" fill="none">
            <rect x="0" y="0" width="200" height="200" rx="24" fill="#e9efd9"/>
            <path d="M0 140h200v30H0z" fill="#c3d1a1"/>
            <path d="M0 150c40-12 80-12 120 0s80 12 80 12v8H0v-20z" fill="#9fbd76"/>
            <circle cx="150" cy="55" r="18" fill="#ffd777"/>
            <g stroke="#36513b" strokeWidth="3" strokeLinecap="round">
              <path d="M30 140c10-12 28-18 48-18 20 0 38 6 48 18"/>
              <path d="M30 155c10-12 28-18 48-18 20 0 38 6 48 18"/>
              <path d="M30 170c10-12 28-18 48-18 20 0 38 6 48 18"/>
              <path d="M130 115l18-18 18 18v25h-36z" fill="#fff8e8"/>
              <path d="M148 124h8v16h-8z" fill="#cbe0b1"/>
            </g>
          </svg>
        </div>

        <h1 className="text-[#36513b] font-serif font-bold text-4xl md:text-5xl mb-3">
          Tarlalarımız <span className="italic font-normal">Çok Yakında</span>
        </h1>
        <p className="text-[#36513b]/80 max-w-2xl mx-auto mb-8">
          Tarlalarımızı, hasat günlerini ve üretim hikâyemizi yakından
          keşfedebileceğiniz sayfa üzerinde çalışıyoruz. Kısa süre içinde yayında!
        </p>

        <div className="flex gap-3 justify-center">
          <Link
            to="/"
            className="px-5 py-3 rounded-lg bg-[#36513b] text-white font-semibold hover:bg-[#2d4132] transition"
          >
            Ana sayfaya dön
          </Link>
          <a
            href="https://wa.me/9055070360637?text=Merhaba%2C%20Tarlalar%C4%B1m%C4%B1z%20sayfas%C4%B1%20%C3%A7%C4%B1kt%C4%B1%C4%9F%C4%B1nda%20haber%20verir%20misiniz%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-lg bg-[#254220] text-white font-semibold hover:bg-[#36513b] transition"
          >
            WhatsApp’tan Bilgi Al
          </a>
        </div>
      </div>
    </div>
  );
}
