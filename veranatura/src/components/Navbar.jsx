// src/components/Navbar.jsx
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-transparent relative z-20">
      <div className="flex items-center gap-3">
        <Link
          to="/"
          className="text-[#36513b] text-lg font-serif font-semibold tracking-widest hover:underline"
        >
          VERA NATURA
        </Link>
      </div>
      <ul className="flex gap-8 text-[#36513b] font-medium">
        <li>
          <Link to="/urunlerimiz" className="hover:underline">
            ÜRÜNLERİMİZ
          </Link>
        </li>
        <li>
          <Link to="/hakkimizda" className="hover:underline">
            HAKKIMIZDA
          </Link>
        </li>
        <li>
  <Link to="/tarlalarimiz" className="hover:underline">
    TARLALARIMIZ
  </Link>
</li>

        <li>
          <a
            href="https://wa.me/05070360637"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#36513b] text-white rounded-full px-4 py-2 text-sm font-semibold hover:bg-[#2d4132] transition"
          >
            WHATSAPP ÜZERİNDEN İLETİŞİME GEÇİN
          </a>
        </li>
      </ul>
    </nav>
  );
}
