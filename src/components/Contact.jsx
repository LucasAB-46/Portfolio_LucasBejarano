import React from "react";
import { uiLabels } from "../data";

const Contact = ({ language }) => {
  const t = uiLabels[language];
  const { contactInfo, contactForm } = t;

  // Lógica de WhatsApp
  const waNumber = "5491165238005";
  const waMessage = "Hola Lucas, vi tu portfolio y me gustaría hacerte una consulta.";
  const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`;

  return (
    <div className="grid lg:grid-cols-2 gap-6">
      {/* Left: Info de Contacto */}
      <div className="rounded-2xl border border-white/10 bg-black/20 backdrop-blur p-6 shadow-[0_30px_120px_rgba(0,0,0,0.7)]">
        <h3 className="text-xl font-semibold text-red-400 mb-2">
          {contactInfo.title}
        </h3>
        <p className="text-gray-300 text-sm leading-relaxed">
          {contactInfo.desc}
        </p>

        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href="mailto:lucasarielbejarano@gmail.com"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl font-medium transition border border-red-500 text-red-400 hover:bg-red-500/10 shadow-[0_0_20px_rgba(220,38,38,0.35)] text-sm"
          >
            {contactInfo.emailLabel}
          </a>

          <a
            href="https://t.me/lukita46"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl font-medium transition border border-red-500 text-red-400 hover:bg-red-500/10 shadow-[0_0_20px_rgba(220,38,38,0.35)] text-sm"
          >
            {contactInfo.telegramLabel}
          </a>

          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl font-medium transition border border-emerald-400/80 text-emerald-300 hover:bg-emerald-400/10 shadow-[0_0_20px_rgba(16,185,129,0.25)] text-sm"
          >
            {contactInfo.whatsappLabel}
          </a>

          <a
            href="https://www.linkedin.com/in/lucas-bejarano-13124b1ab/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl font-medium transition border border-red-500 text-red-400 hover:bg-red-500/10 shadow-[0_0_20px_rgba(220,38,38,0.4)] text-sm"
          >
            {contactInfo.linkedinLabel}
          </a>
        </div>

        <div className="mt-6 border-t border-white/10 pt-4 text-xs text-gray-400 space-y-1">
          <div>
            <span className="text-gray-300">Email:</span>{" "}
            <a href="mailto:lucasarielbejarano@gmail.com" className="hover:text-red-400 transition-colors">
              lucasarielbejarano@gmail.com
            </a>
          </div>
          <div>
            <span className="text-gray-300">GitHub:</span>{" "}
            <a 
              href="https://github.com/LucasAB-46" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-red-400 transition-colors"
            >
              github.com/LucasAB-46
            </a>
          </div>
        </div>
      </div>

      {/* Right: Formulario Formspree */}
      <div className="rounded-2xl border border-white/10 bg-black/20 backdrop-blur p-6 shadow-[0_30px_120px_rgba(0,0,0,0.7)]">
        <h3 className="text-xl font-semibold text-red-400 mb-2">
          {contactForm.title}
        </h3>

        <form action={contactForm.action} method="POST" className="mt-4 space-y-3">
          <div>
            <label className="text-xs text-gray-400">{contactForm.name}</label>
            <input
              name="name"
              className="mt-1 w-full rounded-xl bg-[#0b1220] border border-white/10 px-3 py-2 text-sm text-white outline-none focus:border-red-500/70 focus:ring-2 focus:ring-red-500/20"
              placeholder={contactForm.namePlaceholder}
              required
            />
          </div>

          <div>
            <label className="text-xs text-gray-400">{contactForm.email}</label>
            <input
              name="email"
              type="email"
              className="mt-1 w-full rounded-xl bg-[#0b1220] border border-white/10 px-3 py-2 text-sm text-white outline-none focus:border-red-500/70 focus:ring-2 focus:ring-red-500/20"
              placeholder={contactForm.emailPlaceholder}
              required
            />
          </div>

          <div>
            <label className="text-xs text-gray-400">{contactForm.message}</label>
            <textarea
              name="message"
              className="mt-1 w-full min-h-[120px] rounded-xl bg-[#0b1220] border border-white/10 px-3 py-2 text-sm text-white outline-none focus:border-red-500/70 focus:ring-2 focus:ring-red-500/20 resize-y"
              placeholder={contactForm.messagePlaceholder}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 rounded-xl font-medium transition border border-red-500 text-red-300 hover:bg-red-500/10 shadow-[0_0_20px_rgba(220,38,38,0.35)]"
          >
            {contactForm.submit}
          </button>

          <p className="text-[11px] text-gray-500">
            {contactForm.note}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Contact;