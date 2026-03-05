
import React from 'react';


export default function About() {
  // const { darkMode } = useDarkMode();   ← si tu veux accéder à l'état directement

  return (
    <section className="relative min-h-screen py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-gray-50 to-indigo-50 dark:from-gray-950 dark:to-indigo-950/80 overflow-hidden">
      
      {/* Fond subtil animé (optionnel mais sympa) */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,_#6366f1_0%,_transparent_50%)] animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,_#a855f7_0%,_transparent_50%)] animate-pulse-slow delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* BLOCK IMAGE – à gauche sur grand écran */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-indigo-500/20 dark:shadow-indigo-900/40 transform hover:scale-[1.04] transition duration-700">
              
              {/* Version light + version dark (tu peux utiliser une seule image si tu préfères) */}
              <img
                src="/images/photo4.jpg"    // remplace par ton image réelle
                alt="Eric - Photographe professionnel"
                className="w-full h-auto object-cover block dark:hidden"
              />
              <img
                src="/images/photo4.jpg"     // version adaptée dark/neon si tu en as
                alt="Eric - Photographe professionnel dark mode"
                className="w-full h-auto object-cover hidden dark:block"
              />

              {/* Overlay gradient pour mood premium */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent dark:from-black/60 pointer-events-none" />
            </div>

            {/* Petit badge fun en bas à droite de l'image */}
            <div className="absolute -bottom-6 -right-6 md:-right-10 bg-white dark:bg-gray-900 px-6 py-3 rounded-full shadow-xl border border-indigo-200 dark:border-indigo-800 text-sm font-semibold text-indigo-700 dark:text-indigo-300">
              photographe Evènement
            </div>
          </div>

          {/* BLOCK TEXTE – à droite sur grand écran */}
          <div className="order-1 lg:order-2 space-y-8 text-center lg:text-left">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400">
                Je transforme tes photos
              </span>
              <br />
              en œuvres uniques
            </h2>

            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto lg:mx-0">
              Photographe événementiel basé à Antananarivo, je capture l’essence de chaque instant avec authenticité et créativité. Que ce soit un mariage, un anniversaire ou un événement professionnel, je sublime vos souvenirs avec un regard artistique. Grâce à des techniques avancées et une touche créative, chaque photo devient une œuvre qui raconte votre histoire. Votre événement, votre signature visuelle.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}