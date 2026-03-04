export default function About() {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-24 px-4 md:px-6 transition-colors duration-500">
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">

        {/* IMAGE */}
        <div className="relative">
          <div className="absolute -top-4 -left-4 w-full h-full border border-teal-400 rounded-xl"></div>
          <img
            src=""
            alt="Creative portrait"
            className="relative rounded-xl w-full object-cover"
          />
        </div>

        {/* CONTENT */}
        <div className="text-black dark:text-white space-y-6">
          <p className="text-teal-500 dark:text-teal-400 uppercase tracking-widest text-sm">
            About Me
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
            Make your photos <br />
            stand out from <br />
            the rest
          </h2>

          <p className="text-gray-700 dark:text-gray-400 leading-relaxed max-w-lg">
            I'm a professional photographer specialized in capturing emotions,
            light, and powerful compositions. My mission is to transform every
            moment into a visual story.
          </p>

          <button className="bg-teal-500 dark:bg-teal-500 px-6 py-3 rounded-lg text-black dark:text-black font-medium hover:bg-teal-400 transition-colors duration-300">
            Discover Now
          </button>
        </div>

      </div>
    </section>
  );
}