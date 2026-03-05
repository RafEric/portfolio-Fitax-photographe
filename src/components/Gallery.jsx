import useInView from "../hooks/useInView";
import { useState } from "react";

export default function Gallery() {

  const categories = ["All", "Portrait", "Urban", "Nature", "Event"];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [ref, isVisible] = useInView();

  const images = [
    { src: "/images/photo1.jpg", title: "Urban Road", category: "Urban" },
    { src: "/images/photo2.jpg", title: "Metro Station", category: "Urban" },
    { src: "/images/photo3.jpg", title: "City Night", category: "Urban" },
    { src: "/images/photo4.jpg", title: "Modern Building", category: "Urban" },
    { src: "/images/photo5.jpg", title: "Portrait Smile", category: "Portrait" },
    { src: "/images/photo6.jpg", title: "Nature Sunset", category: "Nature" },
    { src: "/images/photo7.jpg", title: "Wedding Moment", category: "Event" },
  ];

  const filteredImages =
    selectedCategory === "All"
      ? images
      : images.filter((img) => img.category === selectedCategory);

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

          {/* Categories */}
          <div className="flex flex-wrap gap-3">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition
                ${
                  selectedCategory === cat
                    ? "bg-teal-500 text-black"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

       
        {/* MOBILE Galerie */}
        <div className="flex gap-4 overflow-x-auto pb-4 md:hidden scrollbar-hide">

          {filteredImages.map((item, index) => (
            <div
              key={index}
              className="relative min-w-[120px] h-[120px] rounded-xl overflow-hidden flex-shrink-0"
            >
              
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover"
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-black/30"></div>

              {/* title */}
              <p className="absolute bottom-2 left-2 right-2 text-white text-xs font-medium">
                {item.title}
              </p>

            </div>
          ))}

        </div>

        {/* DESKTOP GRID */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">

          {filteredImages.map((item, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-xl shadow-lg"
            >
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

      </div>
    </section>
  );
}