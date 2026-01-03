// src/App.jsx
import React, { useMemo, useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

// ✅ Importamos la data centralizada
import { heroData, stackData, projectsData, servicesData, uiLabels, aboutData } from "./data.js";
import Contact from "./components/Contact";

export default function App() {
  // =========================
  // LANGUAGE STATE
  // =========================
  const [lang, setLang] = useState("es"); // "es" | "en"

  // Helpers para acceder a la data según idioma
  const t = uiLabels[lang];
  const hero = heroData[lang];
  const projects = projectsData[lang];
  const services = servicesData[lang];
  const about = aboutData[lang];
  const skills = useMemo(() => stackData, []);

  // =========================
  // VIEW STATE (Home vs Services Detail)
  // =========================
  const [view, setView] = useState("home"); // "home" | "services"

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [view]);

  // =========================
  // UX: smooth scroll para anchors internos
  // =========================
  useEffect(() => {
    const handler = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;

      const hash = a.getAttribute("href");
      if (!hash || hash === "#") return;

      const el = document.querySelector(hash);
      if (!el) return;

      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  // WhatsApp (NO flotante): botón dentro de Contacto
  // ✅ Dejamos el número que dijiste que tiene que ir para esta web
  const waNumber = "5491165238005";
  const waMessage = "Hola Lucas, vi tu portfolio y me gustaría hacerte una consulta.";
  const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0f18] to-[#111827] text-white flex flex-col">
      <TechBackground />

      {view === "home" ? (
        <>
          {/* NAVBAR */}
          <header className="border-b border-white/10 bg-black/30 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
          {/* Brand */}
          <a href="#top" className="flex items-center gap-3 group">
            {/* ✅ Logo flotante sutil */}
            <motion.div
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
              className="w-10 h-10 rounded-lg bg-red-600 flex items-center justify-center ring-1 ring-red-500/60 shadow-[0_0_20px_rgba(220,38,38,0.4)] text-[10px] font-bold text-white select-none transition group-hover:scale-[1.02]"
            >
              IT
            </motion.div>

            <div className="leading-tight">
              <div className="text-sm font-semibold text-red-400 group-hover:text-red-300 transition">
                {hero.brand}
              </div>
              <div className="text-[11px] text-gray-400 -mt-[2px]">
                {hero.subtitle}
              </div>
            </div>
          </a>

          {/* Links */}
          <nav className="hidden sm:flex items-center gap-4 text-xs text-gray-300">
            {/* Language Toggle */}
            <button
              onClick={() => setLang(lang === "es" ? "en" : "es")}
              className="mr-2 px-2 py-1 rounded bg-white/5 hover:bg-white/10 border border-white/10 transition text-[10px] font-mono uppercase tracking-wider"
            >
              {lang === "es" ? "🇺🇸 EN" : "🇪🇸 ES"}
            </button>

            <a href="#services" className="hover:text-white transition">
              {t.nav.services}
            </a>
            <a href="#projects" className="hover:text-white transition">
              {t.nav.projects}
            </a>
            <a href="#skills" className="hover:text-white transition">
              {t.nav.stack}
            </a>
            <a
              href="#contact"
              className="px-3 py-1.5 rounded-lg border border-red-500 text-red-400 hover:bg-red-500/10 text-xs font-medium shadow-[0_0_15px_rgba(220,38,38,0.4)] transition"
            >
              {t.nav.contact}
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section
        id="top"
        className="max-w-4xl w-full mx-auto text-center px-6 py-10 relative scroll-mt-28"
      >
        {/* ✅ Orb animado estilo premium (no tapa clicks) */}
        <HeroOrb />

        <motion.div
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="flex flex-col items-center gap-4 relative"
        >
          {/* ✅ Nombre clickeable que lleva a "Sobre Mí" */}
          <a 
            href="#about"
            className="text-4xl font-bold text-red-400 tracking-tight hover:text-red-300 transition-colors cursor-pointer"
            title="Ver más sobre mí"
          >
            {hero.name}
          </a>

          <p className="text-gray-300 text-base max-w-xl leading-relaxed">
            {hero.description}
          </p>

          {/* ✅ Frase nueva */}
          <p className="text-gray-500 text-sm">{hero.goal}</p>

          {/* Botones (dejamos los tuyos actuales para no romper anchors) */}
          <div className="flex flex-wrap justify-center gap-4 mt-4 text-sm">
            <a
              href="https://github.com/LucasAB-46"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl font-medium transition border border-red-500 text-red-400 hover:bg-red-500/10 shadow-[0_0_20px_rgba(220,38,38,0.4)]"
            >
              {t.hero.github}
            </a>

            <a
              href="#contact"
              className="px-4 py-2 rounded-xl font-medium transition border border-red-500 text-red-400 hover:bg-red-500/10 shadow-[0_0_20px_rgba(220,38,38,0.4)]"
            >
              {t.hero.contact}
            </a>

            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl font-medium transition border border-emerald-400/80 text-emerald-300 hover:bg-emerald-400/10 shadow-[0_0_20px_rgba(16,185,129,0.25)]"
            >
              {t.hero.whatsapp}
            </a>
          </div>
        </motion.div>
      </section>

      {/* ABOUT ME (Nueva Sección) */}
      <section
        id="about"
        className="max-w-6xl w-full mx-auto px-6 py-10 relative scroll-mt-28"
      >
        <Reveal>
          <SectionTitle>{about.title}</SectionTitle>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <Reveal delay={0.1}>
            <h3 className="text-xl font-semibold text-white mb-4">
              {about.description}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {about.text}
            </p>

            <a
              href="/cv.pdf"
              download="CV_Lucas_Bejarano.pdf"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-medium transition shadow-lg shadow-red-600/20 text-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M12 3v13.5m0 0l3.75-3.75M12 16.5l-3.75-3.75" />
              </svg>
              {t.about.downloadCV}
            </a>
          </Reveal>

          {/* Foto / Imagen */}
          <Reveal delay={0.2}>
            <div className="relative group">
              {/* Marco decorativo con glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-red-600 to-purple-600 rounded-2xl blur opacity-40 group-hover:opacity-60 transition duration-500" />
              
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black/40 aspect-[4/3] flex items-center justify-center">
                <img
                  src="/perfill.png"
                  alt="Lucas Bejarano"
                  className="w-full h-full object-cover hover:grayscale transition-all duration-500"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SKILLS / STACK */}
      <section
        id="skills"
        className="max-w-6xl w-full mx-auto px-6 py-6 relative scroll-mt-28"
      >
        <Reveal>
          <SectionTitle>{t.stack}</SectionTitle>
        </Reveal>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.08 },
            },
          }}
          className="flex flex-wrap gap-3 text-sm text-gray-200"
        >
          {skills.map((s, i) => (
            <SkillCard
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20, scale: 0.8 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
            >
              {s}
            </SkillCard>
          ))}
        </motion.div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="max-w-6xl w-full mx-auto px-6 py-10 relative scroll-mt-28"
      >
        <Reveal>
          <SectionTitle>{t.services}</SectionTitle>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <motion.div
                onClick={() => setView("services")}
                whileHover={{ y: -5 }}
                className="h-full p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors duration-300 shadow-[0_10px_40px_rgba(0,0,0,0.5)] cursor-pointer group"
              >
                <div className="text-4xl mb-4 select-none">{s.icon}</div>
                <h3 className="text-xl font-semibold text-red-400 mb-3 group-hover:text-red-300 transition-colors">
                  {s.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {s.desc}
                </p>
                <div className="mt-4 text-xs text-red-400 font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  {t.servicesDetail.viewDetails} <span>→</span>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="max-w-6xl w-full mx-auto flex-1 px-6 py-6 relative scroll-mt-28"
      >
        <Reveal>
          <SectionTitle>{t.projects}</SectionTitle>
        </Reveal>

        {/* ✅ items-stretch + cards h-full + min-h para que queden parejas */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {projects.map((p, i) => (
            <Reveal key={i} delay={0.05 * i}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className="h-full min-h-[270px] rounded-2xl border border-white/10 bg-[linear-gradient(to_bottom_right,#1f2937_0%,#111827_60%)] shadow-[0_30px_120px_rgba(0,0,0,0.8)] p-5 flex flex-col"
              >
                <h3 className="text-xl font-semibold text-red-400 mb-2 leading-tight">
                  {p.title}
                </h3>

                <p className="text-[13px] text-gray-400 mb-3 font-mono">
                  {p.tech}
                </p>

                {/* ✅ data.js usa "description" (no "desc") */}
                <p className="text-gray-300 text-sm mb-4 leading-relaxed flex-1">
                  {p.description}
                </p>

                {/* ✅ data.js usa "href" (no "link") */}
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-red-400 hover:underline"
                >
                  {p.linkLabel || t.projectLink} →
                </a>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="max-w-6xl w-full mx-auto px-6 py-10 relative scroll-mt-28"
      >
        <Reveal>
          <SectionTitle>{t.contact}</SectionTitle>
        </Reveal>

        <Reveal delay={0.2}>
          <Contact language={lang} />
        </Reveal>
      </section>
        </>
      ) : (
        // =========================
        // VISTA DETALLADA DE SERVICIOS
        // =========================
        <div className="max-w-5xl w-full mx-auto px-6 py-12 relative min-h-screen flex flex-col">
          {/* Header simple para volver */}
          <div className="mb-10">
            <button
              onClick={() => setView("home")}
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition group"
            >
              <span className="group-hover:-translate-x-1 transition-transform">
                ←
              </span>
              {t.servicesDetail.back}
            </button>
          </div>

          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-red-400 mb-2">
              {t.servicesDetail.title}
            </h2>
            <p className="text-gray-400 max-w-2xl text-lg">
              {t.servicesDetail.subtitle}
            </p>
          </Reveal>

          <div className="mt-12 space-y-12">
            {services.map((s, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 shadow-[0_20px_80px_rgba(0,0,0,0.5)] relative overflow-hidden">
                  {/* Glow decorativo */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                  <div className="flex flex-col md:flex-row gap-8 relative z-10">
                    <div className="text-6xl md:text-7xl select-none opacity-90">
                      {s.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-3">
                        {s.title}
                      </h3>
                      <p className="text-gray-300 text-base leading-relaxed mb-6">
                        {s.desc}
                      </p>

                      <div className="grid sm:grid-cols-2 gap-3">
                        {s.features.map((feat, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 text-sm text-gray-300"
                          >
                            <span className="text-red-400">✓</span> {feat}
                          </div>
                        ))}
                      </div>

                      <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-4">
                        <button
                          onClick={() => {
                            setView("home");
                            setTimeout(() => {
                              document
                                .getElementById("contact")
                                ?.scrollIntoView({ behavior: "smooth" });
                            }, 100);
                          }}
                          className="px-6 py-2.5 bg-red-600 hover:bg-red-500 text-white rounded-xl font-medium transition shadow-lg shadow-red-600/20 text-sm"
                        >
                          {t.servicesDetail.hire}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="text-center text-gray-600 text-xs mt-8 pb-10 relative">
        © {new Date().getFullYear()} Lucas Bejarano · InnovaTI by LB
      </footer>
    </div>
  );
}

/**
 * ✅ Card de Skill con efecto Spotlight (brillo al pasar el mouse)
 */
function SkillCard({ children, variants }) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      className="relative overflow-hidden bg-gray-800/60 border border-white/10 rounded-xl px-4 py-2 leading-none shadow-lg backdrop-blur-sm cursor-default select-none group"
    >
      {/* Glow Effect */}
      <div
        className="pointer-events-none absolute -inset-px transition duration-300 opacity-0 group-hover:opacity-100"
        style={{
          background: `radial-gradient(100px circle at ${position.x}px ${position.y}px, rgba(248, 113, 113, 0.35), transparent 100%)`,
        }}
      />
      
      {/* Content */}
      <span className="relative z-10 group-hover:text-white transition-colors">
        {children}
      </span>
    </motion.div>
  );
}

/**
 * ✅ Título de sección con estilo "Tech" (Barra roja + Gradiente)
 */
function SectionTitle({ children }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      {/* Barra vertical con Glow */}
      <div className="w-1.5 h-8 bg-gradient-to-b from-red-500 to-red-700 rounded-full shadow-[0_0_20px_rgba(220,38,38,0.6)]" />
      
      <h2 className="text-2xl md:text-3xl font-bold text-white tracking-wide uppercase">
        {children}
      </h2>
      
      {/* Línea decorativa horizontal */}
      <div className="h-[1px] flex-1 bg-gradient-to-r from-white/10 to-transparent ml-2" />
    </div>
  );
}

/**
 * ✅ Reveal CORREGIDO
 */
function Reveal({ children, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 14 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
      transition={{ duration: 0.45, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

/**
 * ✅ Orb premium detrás del hero (no afecta layout, no tapa clicks)
 */
function HeroOrb() {
  return (
    <div className="absolute inset-0 flex items-start justify-center pointer-events-none">
      <motion.div
        className="mt-2 w-[520px] h-[520px] rounded-full blur-2xl opacity-60"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(220,38,38,0.35) 0%, rgba(99,102,241,0.20) 35%, rgba(0,0,0,0) 70%)",
        }}
        animate={{ y: [0, -10, 0], scale: [1, 1.03, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

/**
 * Fondo tech sutil + glows respirando
 */
function TechBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <motion.div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-red-500/10 blur-3xl"
        animate={{ opacity: [0.55, 0.85, 0.55] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-40 right-[-200px] w-[700px] h-[700px] rounded-full bg-indigo-500/10 blur-3xl"
        animate={{ opacity: [0.45, 0.75, 0.45] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
      />

      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage:
            "radial-gradient(circle at 50% 10%, black 0%, transparent 55%)",
          WebkitMaskImage:
            "radial-gradient(circle at 50% 10%, black 0%, transparent 55%)",
        }}
      />
    </div>
  );
}
