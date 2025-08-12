// src/components/Footer.jsx

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
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-[#36513b] hover:text-[#254220]">
              <svg width="22" height="22" fill="currentColor"><path d="M17 2.5h-3.5A4.5 4.5 0 0 0 9 7v3H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2v7a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-7h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2V7a1 1 0 0 1 1-1H17a1 1 0 0 0 1-1V3.5a1 1 0 0 0-1-1z"/></svg>
            </a>
            {/* Pinterest */}
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-[#36513b] hover:text-[#254220]">
              <svg width="22" height="22" fill="currentColor"><path d="M11 2a9 9 0 0 0-3.1 17.5c-.04-.77-.08-1.95.02-2.79.08-.68.52-2.9.52-2.9s-.13-.26-.13-.65c0-.61.35-1.07.78-1.07.37 0 .55.28.55.61 0 .37-.24.92-.37 1.44-.11.48.24.86.7.86.84 0 1.49-.88 1.49-2.15 0-1.12-.8-1.9-1.95-1.9-1.33 0-2.1.99-2.1 2.01 0 .39.15.81.34 1.04a.14.14 0 0 1 .03.13c-.03.14-.1.44-.12.5-.02.07-.08.09-.15.07-.55-.22-.9-.92-.9-1.84 0-1.23 1.04-2.7 3.09-2.7 1.65 0 2.74 1.2 2.74 2.49 0 1.7-.93 2.97-2.3 2.97-.46 0-.89-.25-1.04-.54l-.28 1.08c-.08.3-.23.66-.35.88A9 9 0 1 0 11 2z"/></svg>
            </a>
            {/* LinkedIn */}
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-[#36513b] hover:text-[#254220]">
              <svg width="22" height="22" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v6h-4v-6a2 2 0 0 0-4 0v6h-4v-6a6 6 0 0 1 6-6zM2 8h4v12H2V8zm2-4a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"/></svg>
            </a>
          </div>
        </div>
        {/* Orta: Menüler */}
        <div className="flex flex-1 justify-center md:justify-between gap-10 text-[#36513b] text-sm">
          <div>
            <span className="font-bold mb-2 block">Anasayfa</span>
            <ul className="space-y-1">
              <li><a href="#">Ürünler</a></li>
              <li><a href="#">Hakkımızda</a></li>
              <li><a href="#">Blog Yazıları</a></li>
            </ul>
          </div>
          <div>
            <span className="font-bold mb-2 block">Ürünlerimizde</span>
            <ul className="space-y-1">
              <li><a href="#">Hakkımızda</a></li>
              <li><a href="#">Tarlalarımız</a></li>
              <li><a href="#">Blog Yazıları</a></li>
            </ul>
          </div>
          <div>
            <span className="font-bold mb-2 block">Adres</span>
            <address className="not-italic">
              Emek Mah. Ordu Cad. Suryapı Adapark Sitesi<br />
              No24 Sancaktepe/İstanbul <br />
              <span className="flex items-center gap-2 mt-1">
                <svg width="16" height="16" fill="currentColor" className="inline"><path d="M6.62 10.79a15.09 15.09 0 0 1-5.11-5.1 1.67 1.67 0 0 1 .21-2.11l1.28-1.28a1.67 1.67 0 0 1 2.11-.21c.42.26.98.67 1.62 1.31.64.64 1.05 1.2 1.31 1.62a1.67 1.67 0 0 1-.21 2.11l-1.28 1.28zm1.2 2.2c2.68 2.67 7 2.52 9.23-.51a1.72 1.72 0 0 0 .15-1.77c-.26-.52-.6-1.1-1.05-1.55-.44-.44-1.02-.78-1.55-1.05a1.72 1.72 0 0 0-1.77.15c-3.03 2.22-3.18 6.55-.51 9.23z"/></svg>
                (0507) 036-0637
              </span>
              <span className="flex items-center gap-2 mt-1">
                <svg width="16" height="16" fill="currentColor" className="inline"><path d="M2 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4zm2.94.97A1 1 0 1 0 6.03 7.03a1 1 0 0 0-1.09-2.06zM8 9c2.67 0 8 1.34 8 4v3H0v-3c0-2.66 5.33-4 8-4zm0-7C4.13 2 0 4.69 0 8c0 3.31 4.13 6 8 6s8-2.69 8-6c0-3.31-4.13-6-8-6z"/></svg>
                veranatura0@gmail.com
              </span>
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
