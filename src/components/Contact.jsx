import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    nom: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici vous pouvez ajouter l'API ou envoi email
    console.log("Formulaire envoyé", form);
    setSubmitted(true);
    setForm({ nom: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000); // message disparaît après 5s
  };

  return (
    <section id="contact" className="bg-gray-100 dark:bg-gray-900 py-20 px-6">
      <div className="max-w-[1100px] mx-auto">

        {/* TITRE */}
        <div className="text-center mb-16">
          <h2 className="font-cormorant text-3xl sm:text-4xl md:text-5xl font-semibold text-black dark:text-white">
            Contact
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-4 text-sm sm:text-base">
            Vous avez un projet photo ? Envoyez-moi un message !
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* CONTACT INFO */}
          <div>
            <h3 className="font-cormorant text-2xl sm:text-3xl font-semibold text-black dark:text-white mb-6">
              Restons en contact
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm sm:text-base">
              Si vous souhaitez réserver une séance photo ou poser vos questions, vous pouvez utiliser ce formulaire ou me contacter directement.
            </p>

            <div className="space-y-4 text-gray-700 dark:text-gray-300 text-sm sm:text-base">
              <p>📍 Antananarivo, Madagascar</p>
              <p>📧 contact@photographe.com</p>
              <p>📞 +261 XX XXX XXX</p>
            </div>
          </div>

          {/* FORMULAIRE */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <input
              type="text"
              name="nom"
              value={form.nom}
              onChange={handleChange}
              placeholder="Votre nom"
              className="w-full p-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-sm sm:text-base"
              required
            />

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Votre email"
              className="w-full p-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-sm sm:text-base"
              required
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Votre message"
              rows="5"
              className="w-full p-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-sm sm:text-base"
              required
            ></textarea>

            <button
              type="submit"
              className="bg-teal-500 hover:bg-teal-600 text-black font-medium px-6 py-3 rounded-lg transition w-full sm:w-auto"
            >
              Envoyer le message
            </button>

            {submitted && (
              <p className="text-green-500 mt-2 text-sm">
                Merci ! Votre message a été envoyé.
              </p>
            )}
          </form>

        </div>
      </div>
    </section>
  );
}