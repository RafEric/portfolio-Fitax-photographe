export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-gray-100 dark:bg-gray-900 transition-colors duration-500">
      <div className="max-w-7xl w-full grid md:grid-cols-2 items-center bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-2xl transition-colors duration-500">

        {/* LEFT SIDE */}
        <div className="p-12 text-black dark:text-white space-y-6">
          <p className="text-gray-600 dark:text-gray-400 text-sm tracking-widest font-sans">
            EVENEMENT PHOTOGRAPHER
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
           Bonjour , je suis Fitax <br />
          </h1>
           <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
          photographe professionnel  <br />
          capturant des histoires à travers chaque image
          </h1>
          <div className="flex gap-4 pt-4">
            <button className="bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-full font-medium hover:scale-105 transition">
              View Portfolio
            </button>

            <button className="border border-black dark:border-white px-6 py-3 rounded-full hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition">
              Contact moi
            </button>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="relative h-[500px] md:h-[600px]">
          <img
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2"
            alt="Photographer"
            className="w-full h-full object-cover grayscale"
          />
        </div>

      </div>
    </section>
  );
}