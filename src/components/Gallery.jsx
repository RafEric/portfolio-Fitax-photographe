import useInView from "../hooks/useInView";
import { useState } from "react";

export default function Gallery() {
  // Menu catégories
  const categories = ["All", "Portrait", "Urban", "Nature", "Event"];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [ref, isVisible] = useInView();

  // Images avec catégories
  const images = [
    { src: "/images/photo1.jpg", title: "Urban Road", category: "Urban" },
    { src: "/images/photo2.jpg", title: "Metro Station", category: "Urban" },
    { src: "/images/photo3.jpg", title: "City Night", category: "Urban" },
    { src: "/images/photo4.jpg", title: "Modern Building", category: "Urban" },
    { src: "/images/photo5.jpg", title: "Portrait Smile", category: "Portrait" },
    { src: "/images/photo6.jpg", title: "Nature Sunset", category: "Nature" },
    { src: "/images/photo7.jpg", title: "Wedding Moment", category: "Event" },
  ];

  // Filtrer selon la catégorie sélectionnée
  const filteredImages =
    selectedCategory === "All"
      ? images
      : images.filter((img) => img.category === selectedCategory);

  // Slider state
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 4; // nombre d’images visibles

  const next = () => {
    setStartIndex((prev) =>
      prev + visibleCount >= filteredImages.length
        ? 0
        : prev + visibleCount
    );
  };

  const prev = () => {
    setStartIndex((prev) =>
      prev - visibleCount < 0
        ? Math.max(filteredImages.length - visibleCount, 0)
        : prev - visibleCount
    );
  };

  // Images visibles
  const visibleImages = filteredImages.slice(
    startIndex,
    startIndex + visibleCount
  );

  return (
    <section
      ref={ref}
      className={`bg-gray-100 dark:bg-gray-900 py-24 px-4 md:px-6 transition-colors duration-500 ${
        isVisible ? "animate-fadeUp" : ""
      }`}
    >
      <div className="max-w-[1200px] mx-auto">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div>
            <h2 className="text-4xl font-semibold text-black dark:text-white">
              My Gallery
            </h2>
            <p className="text-gray-700 dark:text-gray-400 mt-2 max-w-xl">
              Here are some of my best shots showcasing urban lifestyle and creative photography.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => { setSelectedCategory(cat); setStartIndex(0); }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300
                  ${
                    selectedCategory === cat
                      ? "bg-teal-500 text-black dark:text-black"
                      : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-teal-400 dark:hover:bg-teal-500"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* SLIDER */}
        <div className="relative">
          {/* Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {visibleImages.map((item, index) => (
              <div key={index} className="group overflow-hidden rounded-xl shadow-lg">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <p className="text-gray-700 dark:text-gray-300 mt-2 text-sm text-center">
                  {item.title}
                </p>
              </div>
            ))}
          </div>

          {/* Boutons suivant / précédent */}
          <button
            onClick={prev}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-r-lg z-10"
          >
            ◀
          </button>
          <button
            onClick={next}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-l-lg z-10"
          >
            ▶
          </button>
        </div>
      </div>
    </section>
  );
}