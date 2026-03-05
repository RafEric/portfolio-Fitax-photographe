export default function Services() {

  const services = [
    {
      titre: "Photographie Portrait",
      desc: "Séances portraits professionnelles mettant en valeur votre personnalité avec une lumière naturelle.",
      icon: "📸",
    },
    {
      titre: "Photographie Événement",
      desc: "Mariages, événements privés et professionnels capturés avec une approche artistique.",
      icon: "🎉",
    },
    {
      titre: "Photographie Urbaine",
      desc: "Photos créatives de la ville mettant en valeur l’architecture et la vie urbaine.",
      icon: "🏙️",
    },
    {
      titre: "Photographie Nature",
      desc: "Capturer la beauté des paysages et de la nature avec un style unique.",
      icon: "🌿",
    },
  ];

  return (
    <section id="services" className="bg-white dark:bg-gray-950 py-20 px-6">

      <div className="max-w-[1200px] mx-auto">

        {/* TITRE */}
        <div className="text-center mb-16">

          <h2 className="font-cormorant text-3xl sm:text-4xl md:text-5xl font-semibold text-black dark:text-white">
            Mes Services
          </h2>

          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-xl mx-auto text-sm sm:text-base">
            Je propose différents services de photographie pour capturer vos
            moments importants et créer des images uniques.
          </p>

        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-gray-900 p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300 text-center"
            >

              <div className="text-4xl mb-4">{service.icon}</div>

              <h3 className="font-cormorant text-xl sm:text-2xl font-semibold text-black dark:text-white">
                {service.titre}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 mt-3 text-sm sm:text-base">
                {service.desc}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}