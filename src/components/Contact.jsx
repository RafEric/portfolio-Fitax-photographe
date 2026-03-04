export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-100 dark:bg-secondary">
      <div className="container mx-auto px-6 max-w-2xl">
        <h2 className="text-4xl text-center mb-12 dark:text-white">
          Contact
        </h2>

        <form className="flex flex-col gap-6">
          <input
            type="text"
            placeholder="Nom"
            className="p-4 rounded-lg"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-4 rounded-lg"
          />
          <textarea
            placeholder="Message"
            rows="5"
            className="p-4 rounded-lg"
          ></textarea>

          <button className="bg-accent py-3 rounded-lg font-semibold hover:scale-105 transition">
            Envoyer
          </button>
        </form>
      </div>
    </section>
  );
}