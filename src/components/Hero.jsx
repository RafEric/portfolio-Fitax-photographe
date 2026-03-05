import { useEffect, useState } from "react";

export default function Hero() {

  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowText(true);
    }, 300);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 bg-gray-100 dark:bg-gray-900 transition-colors duration-500"
    >
      <div className="max-w-7xl w-full grid md:grid-cols-2 items-center bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-2xl">

        {/* TEXTE DESKTOP */}
        <div className="hidden md:block p-12 text-black dark:text-white space-y-6">

          <p className="text-gray-600 dark:text-gray-400 text-sm tracking-widest font-sans">
            EVENEMENT PHOTOGRAPHER
          </p>

          <h1 className="text-4xl md:text-5xl font-extrabold">
            Bonjour , je suis Fitax
          </h1>

          <h2 className="text-2xl italic leading-tight">
            photographe professionnel <br />
            capturant des histoires à travers chaque image
          </h2>

          <div className="flex gap-4 pt-4">
            <button className="bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-full font-medium hover:scale-105 transition">
              Voir Portfolio
            </button>

            <button className="border border-black dark:border-white px-6 py-3 rounded-full hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition">
              Contact moi
            </button>
          </div>

        </div>

        {/* IMAGE */}
        <div className="relative h-[500px] md:h-[600px] w-full">

          <img
            src="/images/photo3.jpg"
            alt="Photographe"
            className="w-full h-full object-cover grayscale"
          />

          {/* TEXTE MOBILE */}
          <div
            className={`md:hidden absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6 transition-all duration-1000 ${
              showText ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
            }`}
          >

            <h1 className="text-2xl font-bold">
              Bonjour, je suis Fitax
            </h1>

            <p className="text-sm mt-2 italic max-w-xs">
              Photographe professionnel capturant des histoires à travers chaque image
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}