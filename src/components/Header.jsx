import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md z-50 transition-colors duration-500">
      <div className="max-w-[1200px] w-full mx-auto px-4 md:px-6 flex justify-between items-center py-4">
        <h1 className="text-2xl font-bold">Fitax</h1>

        {/* Menu desktop */}
        <nav className="hidden md:flex gap-6">
          <a href="#hero" className="hover:text-blue-500 transition">Home</a>
          <a href="#about" className="hover:text-blue-500 transition">À propos</a>
          <a href="#gallery" className="hover:text-blue-500 transition">Galerie</a>
          <a href="#about" className="hover:text-blue-500 transition">service</a>
          <a href="#gallery" className="hover:text-blue-500 transition">contact</a>
        </nav>

        {/* Menu mobile burger */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-2xl focus:outline-none">
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <nav className="md:hidden bg-white dark:bg-gray-800 shadow-lg py-4 px-6 flex flex-col gap-4 transition-colors duration-300">
          <a href="#hero" className="hover:text-blue-500 transition" onClick={toggleMenu}>Home</a>
          <a href="#about" className="hover:text-blue-500 transition" onClick={toggleMenu}>À propos</a>
          <a href="#gallery" className="hover:text-blue-500 transition" onClick={toggleMenu}>Galerie</a>
        </nav>
      )}
    </header>
  );
}