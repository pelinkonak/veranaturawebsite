// src/App.jsx
import { Outlet } from "react-router-dom";
import Footer from './components/Footer';
import Navbar from './components/Navbar'; // Eğer ayrı bir Navbar bileşeni yapmadıysan aşağıdaki kodu buraya kopyala

export default function App() {
  return (
    <div className="bg-[#f7f5ec] min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
