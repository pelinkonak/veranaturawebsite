import Footer from '../components/Footer';
import { Link } from "react-router-dom";
import heroBg from "../assets/veranaturalogo.jpg";

export default function Home() {
  return (
    <div className="bg-[#f7f5ec] min-h-screen">

      {/* HERO SECTION */}
      <section
  className="relative h-[360px] flex flex-col items-center justify-center text-center rounded-xl mx-8 mt-2 overflow-hidden shadow-lg bg-cover"
  style={{
    backgroundImage: `url(${heroBg})`,
    backgroundPosition: "center 40%" // 40% ile aşağı kaydırma
  }}
>
  {/* Koyu overlay */}
  <div className="absolute inset-0 bg-[#36513b]/60"></div>

  {/* İçerik */}
  <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
    <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-2 drop-shadow-xl leading-tight">
      DOĞALLIĞIN EN SAF <br /> HALİYLE TANIŞIN
    </h1>
    <p className="text-white text-lg mb-4 drop-shadow">
      Vera Natura olarak tarladan sofranıza..
    </p>
    <Link
      to="/urunlerimiz"
      className="px-7 py-3 rounded-lg bg-[#f7eac2] text-[#36513b] text-lg font-semibold shadow hover:bg-[#f0e2b2] transition inline-block"
    >
      Ürünlere Göz At
    </Link>
  </div>
</section>


      {/* NEDEN VERA NATURA */}
      <section className="px-4 py-14 md:px-20">
        <h2 className="text-[#36513b] text-3xl md:text-4xl font-serif font-bold text-center mb-10 tracking-wide">
          NEDEN VERA NATURA ?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Kart 1 */}
          <div className="rounded-xl bg-white shadow-lg p-6 flex flex-col justify-between min-h-[220px]">
            <h3 className="text-xl md:text-2xl text-[#36513b] font-serif font-semibold mb-3">Yüksek Kaliteli Ürünler</h3>
            <p className="text-[#36513b] text-base">
              🌿 Doğallığın Peşinde
VeraNatura’da biz, doğallığı bir pazarlama kelimesi olarak değil, bir yaşam biçimi olarak görüyoruz. Tarladan çıkan her ürün, katkı maddesi ya da koruyucu eklenmeden, doğanın bize sunduğu en saf haliyle sofralarınıza gelir.<br />
              Üretim sürecimizin her aşamasında toprağın sağlığını, suyun temizliğini ve ürünün besin değerini korumak temel önceliğimizdir.

            </p>
          </div>
          {/* Kart 2 */}
          <div className="rounded-xl bg-white shadow-lg p-6 flex flex-col justify-between min-h-[220px]">
            <h3 className="text-xl md:text-2xl text-[#36513b] font-serif font-semibold mb-3">Doğal ve Organik</h3>
            <p className="text-[#36513b] text-base">
              🏡 Yerel Üreticiden Sofranıza
Bizim için gıda sadece bir ürün değil, üreticinin emeğinin bir yansımasıdır. VeraNatura olarak tüm ürünlerimizi yerel çiftçilerden temin eder, aracı olmadan doğrudan üreticiden tüketiciye ulaştırırız. <br />
              Böylece hem ürünlerimiz taptaze kalır, hem de yerel ekonomiye katkıda bulunuruz. Her kavanoz, her şişe, köyün bereketini ve üreticinin sevgisini taşır.


            </p>
          </div>
          {/* Kart 3 */}
          <div className="rounded-xl bg-white shadow-lg p-6 flex flex-col justify-between min-h-[220px]">
            <h3 className="text-xl md:text-2xl text-[#36513b] font-serif font-semibold mb-3">Sürdürülebilir Tarım</h3>
            <p className="text-[#36513b] text-base">
              🤲 El Emeği ile Hazırlandı
Ürünlerimiz modern tesislerde değil, doğanın içinde, geleneksel yöntemlerle hazırlanır. Zeytinlerimiz elle toplanır, ballarımız arıların kendi peteklerinden çıkar, tarhanamız evde yoğrulur. <br />
              Bu özen, hem lezzetine hem de sağlığınıza yansır. Çünkü biz, her lokmada emeğin tadının hissedilmesi gerektiğine inanıyoruz.

            </p>
          </div>
          
        </div>
      </section>

    </div>
  );
}
