// src/pages/About.jsx


// Görseller (elinde yoksa placeholder ile devam edebilirsin)
const img1 = "https://placehold.co/400x300?text=Zeytin";
const img2 = "https://placehold.co/400x300?text=Balya";
const img3 = "https://placehold.co/400x300?text=Şişe+Ürün";
const farmerWoman = "https://placehold.co/300x350?text=Farm+Woman";

// SVG İkonları (örnek, sade)
function LeafIcon(props) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" strokeWidth={1.8} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21C18 17 21 10 21 3 14 3 7 7 7 14c0 2.79 1.61 5.06 5 7z" />
    </svg>
  );
}
function FarmerIcon(props) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" strokeWidth={1.8} stroke="currentColor">
      <circle cx="12" cy="7" r="4" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M5.5 21V19a4.5 4.5 0 019 0v2" />
    </svg>
  );
}
function RecycleIcon(props) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" strokeWidth={1.8} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 4.5c1.5 1.5 3 4 3 7.5s-1.5 6-4 8" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 19.5c-1.5-1.5-3-4-3-7.5s1.5-6 4-8" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 9h8l-4-7" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 15H8l4 7" />
    </svg>
  );
}

export default function About() {
  return (
    <div className="bg-[#f7f5ec] min-h-screen flex flex-col">
     

      {/* HERO */}
      <section className="relative h-[260px] md:h-[320px] flex flex-col items-center justify-center text-center bg-[#36513b]">
        <div className="absolute inset-0 bg-[#36513b] opacity-60"></div>
        <div className="relative z-10 w-full flex flex-col items-center justify-center h-full">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-2 drop-shadow-xl tracking-wider">
            BİZ KİMİZ?
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl">
            Doğallığı, emeği ve güveni aynı sofrada buluşturan bir yolculuğun hikayesi...
          </p>
        </div>
      </section>

      {/* Ana içerik */}
      <section className="flex flex-col md:flex-row justify-center items-center gap-10 max-w-5xl mx-auto py-12 px-4">
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl text-[#36513b] font-serif font-bold mb-6 text-left">
            Vera Natura, bereketli toprakların, emeğin ve güvenin markalaşmış halidir.
          </h2>
          <p className="text-[#36513b] text-base mb-4">
            Bizim hikayemiz, yıllar önce ailemizle birlikte küçük bir tarlada, tamamen doğal yöntemlerle yetiştirdiğimiz Taşköprü sarımsağını komşularımıza ulaştırmamızla başladı. O günlerde tek amacımız, sevdiklerimize en sağlıklı, en güvenilir gıdayı sunmaktı.

Zamanla gördük ki, insanlar sadece ürünün tadını değil; arkasındaki hikayeyi, samimiyeti ve emeği de önemsiyor. Ürettiğimiz her sarımsak, sofralara yalnızca lezzet değil; toprağın kokusunu, emeğin değerini ve doğallığın huzurunu taşıyordu. Komşularımızın memnuniyeti arttıkça talepler de büyüdü. İnsanlar bizden sadece sarımsak değil, aynı doğallıkta başka ürünler de istiyordu.

İşte tam o noktada, yılların birikimini ve doğaya olan sevgimizi bir marka çatısı altında toplama kararı aldık. Böylece VeraNatura doğdu. Adımızı, doğallığı ve yaşamı ifade eden “Vera” ile, doğanın kendisini temsil eden “Natura” kelimelerinden aldık. Bizim için VeraNatura, yalnızca ticari bir marka değil; toprağa, üreticiye ve tüketiciye verilen bir söz demek.


          </p>
          <p className="text-[#36513b] text-base">
            Bugün, tarlalarımızdan sofralarınıza uzanan yolculuğumuzda; soğuk sıkım zeytinyağından katkısız ballara, el emeği çaylardan yöresel lezzetlere kadar birçok ürünü aynı özenle ve aynı ilkelerle üretiyoruz. Her bir ürünümüz, çiftçimizin emeği, toprağın bereketi ve doğallığın özü ile hazırlanır.

Üretim süreçlerimizde doğaya zarar vermemeyi, toprağı korumayı ve sürdürülebilir tarım uygulamalarını benimsemeyi en temel ilke haline getirdik. Çünkü biliyoruz ki, doğa bize ne verirse, biz de onu gelecek nesillere en saf haliyle bırakmakla sorumluyuz.

          </p>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <img
            src={farmerWoman}
            alt="Üretici kadın"
            className="rounded-lg w-full max-w-xs shadow-lg object-cover"
          />
        </div>
      </section>

      {/* DEĞERLERİMİZ */}
      <section className="py-12 px-4 md:px-16">
        <h2 className="text-2xl md:text-3xl font-serif text-[#36513b] text-center font-semibold mb-10 tracking-wider">
          DEĞERLERİMİZ
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center max-w-5xl mx-auto mb-8">
          <div className="flex flex-col items-center gap-3">
            <LeafIcon className="w-12 h-12 text-[#36513b] mb-1" />
            <h3 className="text-xl font-serif font-semibold text-[#36513b]">Doğallık</h3>
            <p className="text-[#36513b] text-base">
              Katkısız, yerel ve geleneksel üretim
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <FarmerIcon className="w-12 h-12 text-[#36513b] mb-1" />
            <h3 className="text-xl font-serif font-semibold text-[#36513b]">Üreticiye Saygı</h3>
            <p className="text-[#36513b] text-base">
              Küçük çiftçilerle doğrudan iş birliği
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <RecycleIcon className="w-12 h-12 text-[#36513b] mb-1" />
            <h3 className="text-xl font-serif font-semibold text-[#36513b]">Sürdürülebilirlik</h3>
            <p className="text-[#36513b] text-base">
              Doğaya ve insana saygılı üretim süreci
            </p>
          </div>
        </div>
        <div className="text-center mb-8">
          <h4 className="text-xl md:text-2xl font-serif font-semibold text-[#36513b]">
            Tarladan sofranıza bir yolculuk...
          </h4>
        </div>
        {/* 3'lü Galeri */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <img src={img1} alt="Zeytin" className="rounded-lg shadow-md object-cover h-56 w-full" />
          <img src={img2} alt="Balya" className="rounded-lg shadow-md object-cover h-56 w-full" />
          <img src={img3} alt="Şişe Ürün" className="rounded-lg shadow-md object-cover h-56 w-full" />
        </div>
      </section>
     
    </div>
  );
}
