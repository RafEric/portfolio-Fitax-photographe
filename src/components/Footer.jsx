export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-300 py-12 px-6">
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-3 gap-8">

        {/* LOGO / COPYRIGHT */}
        <div className="space-y-4">
          <h1 className="font-cormorant text-2xl font-bold text-white">Fitax Photo</h1>
          <p className="text-sm">
            © {new Date().getFullYear()} Fitax Photo. Tous droits réservés.
          </p>
        </div>

        {/* LIENS */}
        <div className="space-y-4">
          <h3 className="font-cormorant text-xl font-semibold text-white">Liens utiles</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#hero" className="hover:text-teal-400 transition">Accueil</a></li>
            <li><a href="#gallery" className="hover:text-teal-400 transition">Galerie</a></li>
            <li><a href="#services" className="hover:text-teal-400 transition">Services</a></li>
            <li><a href="#contact" className="hover:text-teal-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* RESEAUX SOCIAUX */}
        <div className="space-y-4">
          <h3 className="font-cormorant text-xl font-semibold text-white">Suivez-moi</h3>
          <div className="flex space-x-4 text-2xl">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-teal-400 transition">📘</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-teal-400 transition">📸</a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-teal-400 transition">🐦</a>
          </div>
        </div>

      </div>

      {/* COPYRIGHT MOBILE */}
      <div className="mt-12 text-center text-sm text-gray-500 md:hidden">
        © {new Date().getFullYear()} Fitax Photo. Tous droits réservés.
      </div>
    </footer>
  );
}