import Footer from '../components/Footer';
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-[#f7f5ec] min-h-screen">

      {/* HERO SECTION */}
      <section className="relative h-[360px] flex flex-col items-center justify-center text-center rounded-xl mx-8 mt-2 overflow-hidden shadow-lg bg-[#36513b]">
        {/* Görsel yerine arka plan rengi */}
        <div className="absolute inset-0 opacity-60"></div>
        {/* İçerik */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-2 drop-shadow-xl leading-tight">
            DOĞALLIĞIN EN SAF <br /> HALİYLE TANIŞIN
          </h1>
          <p className="text-white text-lg mb-4 drop-shadow">
            Vera Natura olarak tarladan sofranıza..
          </p>
          <button className="px-7 py-3 rounded-lg bg-[#f7eac2] text-[#36513b] text-lg font-semibold shadow hover:bg-[#f0e2b2] transition">
            Ürünlere Göz At
          </button>
        </div>
      </section>

      {/* NEDEN VERA NATURA */}
      <section className="px-4 py-14 md:px-20">
        <h2 className="text-[#36513b] text-3xl md:text-4xl font-serif font-bold text-center mb-10 tracking-wide">
          NEDEN VERA NATURA
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Kart 1 */}
          <div className="rounded-xl bg-white shadow-lg p-6 flex flex-col justify-between min-h-[220px]">
            <h3 className="text-xl md:text-2xl text-[#36513b] font-serif font-semibold mb-3">Yüksek Kaliteli Ürünler</h3>
            <p className="text-[#36513b] text-base">
              Lorem ipsum allelagtçja alimeidin laremo alleree ctmɑx.<br />
              ütcum vix lorem ipsum
            </p>
          </div>
          {/* Kart 2 */}
          <div className="rounded-xl bg-white shadow-lg p-6 flex flex-col justify-between min-h-[220px]">
            <h3 className="text-xl md:text-2xl text-[#36513b] font-serif font-semibold mb-3">Doğal ve Organik</h3>
            <p className="text-[#36513b] text-base">
              Lorem ipsum allelagtçja alimeidin laremo alleree ctmɑx.<br />
              ütcum vix lorem ipsum
            </p>
          </div>
          {/* Kart 3 */}
          <div className="rounded-xl bg-white shadow-lg p-6 flex flex-col justify-between min-h-[220px]">
            <h3 className="text-xl md:text-2xl text-[#36513b] font-serif font-semibold mb-3">Sürdürülebilir Tarım</h3>
            <p className="text-[#36513b] text-base">
              Lorem ipsum allelagtçja alimeidin laremo alleree ctmɑx.<br />
              ütcum vix lorem ipsum
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
