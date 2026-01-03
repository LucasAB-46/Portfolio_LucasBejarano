import { motion } from "framer-motion";
import { Card, CardContent } from "./components/ui/card.jsx";
import { Button } from "./components/ui/button.jsx";

export default function PortfolioLucas() {
  const projects = [
    {
      title: "Bebidas API (InnovaTI by LB)",
      tech: "Django REST + React + PostgreSQL",
      desc: "Sistema de gestión comercial (ventas, stock, proveedores, clientes) con autenticación JWT y dashboard.",
      link: "https://github.com/Lukita46-gif/bebidas_api",
    },
    {
      title: "Gestión de Clubes (Programación 6)",
      tech: ".NET Core + SQL Server + Swagger + JWT",
      desc: "API con login JWT, CRUD de clubes / dirigentes / socios, uso de ADO.NET y buenas prácticas de capas.",
      link: "https://github.com/Lukita46-gif/Programacion6",
    },
    {
      title: "Empleados System",
      tech: "Django + Jazzmin + CKEditor",
      desc: "Panel administrativo para RRHH interno. Carga de empleados con campos enriquecidos y UI personalizada.",
      link: "https://github.com/Lukita46-gif/empleados",
    },
    {
      title: "Independiente Store (E-commerce)",
      tech: "HTML + CSS + JS + Bootstrap",
      desc: "Tienda online temática de club de fútbol, con catálogo, carrito y diseño responsive.",
      link: "https://github.com/Lukita46-gif/Preentrega-Front-end",
    },
    {
      title: "Consorcio Up",
      tech: "Branding + Gestión",
      desc: "Proyecto real de administración de consorcios: estrategia comercial, comunicación y base para sistema de gestión.",
      link: "https://instagram.com/consorcioup",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-white px-6 py-10 flex flex-col">
      {/* HEADER */}
      <header className="max-w-4xl w-full mx-auto text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col items-center gap-4"
        >
          <div className="w-16 h-16 rounded-2xl bg-red-600 flex items-center justify-center font-bold text-white text-xl shadow-lg shadow-red-900/40 select-none">
            LB
          </div>

          <h1 className="text-4xl font-bold text-red-500 tracking-tight">
            Lucas Bejarano
          </h1>

          <p className="text-gray-300 text-base max-w-xl">
            Estudiante avanzado de Analista de Sistemas. Desarrollo soluciones
            fullstack con <span className="text-white font-medium">Django, React y .NET</span>,
            trabajando con APIs reales, autenticación JWT, bases de datos y paneles
            administrativos.
          </p>

          <p className="text-gray-500 text-sm">
            Busco mi primera experiencia IT (Backend / Fullstack / Soporte Dev).
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <Button
              asChild
              variant="outline"
              href="https://github.com/Lukita46-gif"
            >
              GitHub
            </Button>

            <Button
              asChild
              variant="outline"
              href="mailto:lucasarielbejarano@gmail.com"
            >
              Contacto
            </Button>

            <Button
              asChild
              variant="outline"
              href="https://t.me/lukita46"
            >
              Telegram
            </Button>
          </div>
        </motion.div>
      </header>

      {/* SKILLS */}
      <section className="max-w-4xl w-full mx-auto mb-12">
        <h2 className="text-lg text-gray-400 font-semibold uppercase tracking-wide mb-4">
          Stack / Habilidades
        </h2>

        <div className="flex flex-wrap gap-2 text-sm text-gray-200">
          {[
            "Python",
            "JavaScript",
            "C#",
            "SQL",
            "Django REST Framework",
            ".NET Core Web API",
            "React",
            "PostgreSQL",
            "SQL Server",
            "JWT Auth",
            "Swagger / Postman",
            "Git / GitHub",
            "Trello / Scrum",
          ].map((skill, i) => (
            <span
              key={i}
              className="bg-gray-800 border border-gray-700 rounded-xl px-3 py-1 leading-none shadow shadow-black/50 text-xs"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="max-w-6xl w-full mx-auto flex-1">
        <h2 className="text-lg text-gray-400 font-semibold uppercase tracking-wide mb-4 text-center md:text-left">
          Proyectos Destacados
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Card>
                <CardContent>
                  <h3 className="text-xl font-semibold text-red-400 mb-2 leading-tight">
                    {p.title}
                  </h3>

                  <p className="text-[13px] text-gray-400 mb-3 font-mono">
                    {p.tech}
                  </p>

                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {p.desc}
                  </p>

                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-red-400 hover:underline"
                  >
                    Ver proyecto →
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center text-gray-600 text-xs mt-12">
        © {new Date().getFullYear()} Lucas Bejarano · InnovaTI by LB
      </footer>
    </div>
  );
}
