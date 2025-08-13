// src/components/Footer.jsx

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#f7f5ec] pt-8 pb-4 mt-12 shadow-inner">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between gap-10">
        {/* Sol: Logo & Sosyal */}
        <div className="flex flex-col items-start gap-4 min-w-[180px]">
          {/* Logo yerine yazı */}
          <span className="text-[#36513b] text-xl font-serif font-bold tracking-widest">VERA NATURA</span>
          <div className="flex gap-4 mt-2">
            {/* Facebook */}
<a 
  href="https://www.facebook.com/VeraNatura" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="text-[#36513b] hover:text-[#254220]"
>
  <svg width="22" height="22" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17 2.5h-3.5A4.5 4.5 0 0 0 9 7v3H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2v7a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-7h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2V7a1 1 0 0 1 1-1H17a1 1 0 0 0 1-1V3.5a1 1 0 0 0-1-1z"/>
  </svg>
</a>

{/* Instagram */}
<a 
  href="https://www.instagram.com/veranatura1" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="text-[#36513b] hover:text-[#254220]"
>
  <svg width="22" height="22" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 2C4.243 2 2 4.243 2 7v8c0 2.757 2.243 5 5 5h8c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0-2h8a7 7 0 0 1 7 7v8a7 7 0 0 1-7 7H7a7 7 0 0 1-7-7V7a7 7 0 0 1 7-7zm8 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 1a5 5 0 1 1 0 10 5 5 0 0 1 0-10z"/>
  </svg>
</a>

          </div>
        </div>
        
        {/* Orta: Menüler */}
        <div className="flex flex-1 justify-center md:justify-between gap-10 text-[#36513b] text-sm">
          <div>
            <span className="font-bold mb-2 block">Anasayfa</span>
            <ul className="space-y-1">
              <li><Link to="/urunlerimiz">Ürünlerimiz</Link></li>
      <li><Link to="/hakkimizda">Hakkımızda</Link></li>
      <li><Link to="/tarlalarimiz">Tarlalarımız</Link></li>
              
            </ul>
          </div>
          <div>
           
          </div>
          <div>
  <span className="font-bold mb-2 block">Adres</span>
  <address className="not-italic">
    {/* Google Maps Link */}
    <a 
      href="https://www.google.com/maps?q=Emek+Mah.+Ordu+Cad.+Suryapı+Adapark+Sitesi+No24+Sancaktepe+İstanbul" 
      target="_blank" 
      rel="noopener noreferrer"
      className="hover:underline"
    >
      Emek Mah. Ordu Cad. Suryapı Adapark Sitesi<br />
      No24 Sancaktepe/İstanbul
    </a>
    <br />

    {/* Telefon */}
    <a 
      href="tel:+905070360637" 
      className="flex items-center gap-2 mt-1 hover:underline"
    >
      <svg width="16" height="16" fill="currentColor" className="inline">
        <path d="M6.62 10.79a15.09 15.09 0 0 1-5.11-5.1..."/>
      </svg>
      (0507) 036-0637
    </a>

    {/* E-posta */}
    <a 
      href="mailto:veranatura0@gmail.com" 
      className="flex items-center gap-2 mt-1 hover:underline"
    >
      <svg width="16" height="16" fill="currentColor" className="inline">
        <path d="M2 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8..."/>
      </svg>
      veranatura0@gmail.com
    </a>
  </address>
</div>

        </div>
      </div>
      {/* Alt Satır */}
      <div className="text-[#36513b] text-xs text-center mt-6">
        © 2025 Vera Natura. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}
