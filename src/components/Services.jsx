import useScrollReveal from "../hooks/useScrollReveal";

export default function Services() {
  const [ref, visible] = useScrollReveal();

  const services = [
    { title: "Mariage", desc: "Capture des moments uniques." },
    { title: "Portrait", desc: "Portraits artistiques personnalisés." },
    { title: "Événement", desc: "Couverture complète d'événements." }
  ];

  return (
    <section id="services" className="py-24 bg-white dark:bg-primary">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl text-center mb-16 dark:text-white">
          Services
        </h2>

        <div
          ref={ref}
          className={`grid md:grid-cols-3 gap-8 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-secondary p-8 rounded-xl text-center hover:scale-105 transition"
            >
              <h3 className="text-2xl mb-4 dark:text-white">
                {service.title}
              </h3>
              <p className="dark:text-white">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}