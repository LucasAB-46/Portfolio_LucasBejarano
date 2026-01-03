// src/data.js

// ✅ Textos de la Interfaz (Botones, Nav, Títulos)
export const uiLabels = {
  es: {
    nav: { services: "Servicios", projects: "Proyectos", stack: "Stack", contact: "Contacto" },
    hero: { github: "GitHub", contact: "Contacto", whatsapp: "WhatsApp" },
    about: { downloadCV: "Descargar CV" },
    stack: "STACK / HABILIDADES",
    services: "MIS SERVICIOS",
    projects: "PROYECTOS DESTACADOS",
    contact: "CONTACTO",
    contactInfo: {
      title: "¿Hablamos?",
      desc: "Si querés que trabajemos juntos o tenés una consulta, podés escribirme por email, Telegram o WhatsApp.",
      emailLabel: "Email",
      telegramLabel: "Telegram",
      whatsappLabel: "WhatsApp",
      linkedinLabel: "LinkedIn"
    },
    contactForm: {
      title: "Enviame un mensaje",
      name: "Nombre",
      namePlaceholder: "Tu nombre",
      email: "Email",
      emailPlaceholder: "tuemail@gmail.com",
      message: "Mensaje",
      messagePlaceholder: "Contame qué necesitás...",
      submit: "Enviar Mensaje",
      action: "https://formspree.io/f/mvzgwzkz",
      note: "* Te responderé a la brevedad."
    },
    servicesDetail: {
      back: "Volver al inicio",
      title: "Mis Servicios",
      subtitle: "Soluciones tecnológicas diseñadas para escalar tu negocio.",
      hire: "Contratar este servicio",
      viewDetails: "Ver detalles"
    },
    projectLink: "Ver proyecto"
  },
  en: {
    nav: { services: "Services", projects: "Projects", stack: "Stack", contact: "Contact" },
    hero: { github: "GitHub", contact: "Contact", whatsapp: "WhatsApp" },
    about: { downloadCV: "Download CV" },
    stack: "STACK / SKILLS",
    services: "MY SERVICES",
    projects: "FEATURED PROJECTS",
    contact: "CONTACT",
    contactInfo: {
      title: "Let's talk?",
      desc: "If you want to work together or have any questions, you can write to me via email, Telegram, or WhatsApp.",
      emailLabel: "Email",
      telegramLabel: "Telegram",
      whatsappLabel: "WhatsApp",
      linkedinLabel: "LinkedIn"
    },
    contactForm: {
      title: "Send me a message",
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email",
      emailPlaceholder: "youremail@gmail.com",
      message: "Message",
      messagePlaceholder: "Tell me what you need...",
      submit: "Send Message",
      action: "https://formspree.io/f/mvzgwzkz",
      note: "* I'll get back to you as soon as possible."
    },
    servicesDetail: {
      back: "Back to home",
      title: "My Services",
      subtitle: "Tech solutions designed to scale your business.",
      hire: "Hire this service",
      viewDetails: "View details"
    },
    projectLink: "View project"
  }
};

export const heroData = {
  es: {
    brand: "InnovaTI by LB",
    subtitle: "Fullstack / Backend",
    name: "Lucas Bejarano",
    description:
      "Desarrollo soluciones fullstack con Django, React y .NET, trabajando con APIs reales, autenticación JWT, bases de datos y paneles administrativos.",
    goal: "Busco seguir creciendo profesionalmente en IT (Backend / Fullstack / Soporte Dev).",
  },
  en: {
    brand: "InnovaTI by LB",
    subtitle: "Fullstack / Backend",
    name: "Lucas Bejarano",
    description:
      "I develop fullstack solutions with Django, React, and .NET, working with real APIs, JWT authentication, databases, and administrative panels.",
    goal: "Looking to continue growing professionally in IT (Backend / Fullstack / Dev Support).",
  }
};

// ✅ Stack es universal, no necesita traducción
export const stackData = [
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
];

export const projectsData = {
  es: [
    {
    title: "Bebidas API (InnovaTI by LB)",
    tech: "Django REST + React + PostgreSQL",
    description:
      "Sistema de gestión comercial (ventas, stock, proveedores, clientes) con autenticación JWT y dashboard.",
    linkLabel: "Ver proyecto",
    href: "https://proyecto-bebidas-75q3.vercel.app/login",
  },
  {
    title: "Gestión de Clubes (Programación 6)",
    tech: ".NET Core + SQL Server + Swagger + JWT",
    description:
      "API con login JWT, CRUD de clubes / dirigentes / socios, uso de ADO.NET y buenas prácticas de capas.",
    linkLabel: "Ver proyecto",
    href: "https://github.com/LucasAB-46/Programacion6",
  },
  {
    title: "Empleados System",
    tech: "Django + Jazzmin + CKEditor",
    description:
      "Panel administrativo para RRHH interno. Carga de empleados con campos enriquecidos y UI personalizada.",
    linkLabel: "Ver proyecto",
    href: "https://github.com/LucasAB-46/ProyectoEmpleado",
  },
  {
    title: "Sitio Web Corporativo (Fleitas Abuin y Asoc.)",
    tech: "HTML, CSS, JavaScript, Responsive Design",
    description:
      "Sitio web profesional para estudio jurídico-contable. Enfoque en imagen corporativa, UX y responsive.",
    linkLabel: "Ver proyecto",
    href: "https://estudiofleitasabuin.com/",
  },
  {
    title: "Consorcio Up",
    tech: "Branding + Gestión",
    description:
      "Proyecto real de administración de consorcios: estrategia comercial, comunicación y base para sistema de gestión.",
    linkLabel: "Ver proyecto",
    href: "#",
  },

  // ✅ NUEVA CARD: Bases de Datos
  {
    title: "Arquitectura y Bases de Datos",
    tech: "SQL Server + PostgreSQL + Modelado Relacional",
    description:
      "Diseño y gestión de bases de datos: modelado, normalización, integridad referencial, consultas complejas y performance.",
    linkLabel: "Ver detalles",
    href: "#",
  },
  ],
  en: [
    {
      title: "Drinks API (InnovaTI by LB)",
      tech: "Django REST + React + PostgreSQL",
      description: "Commercial management system (sales, stock, providers, clients) with JWT authentication and dashboard.",
      linkLabel: "View project",
      href: "https://proyecto-bebidas-75q3.vercel.app/login",
    },
    {
      title: "Club Management (Programming 6)",
      tech: ".NET Core + SQL Server + Swagger + JWT",
      description: "API with JWT login, CRUD for clubs / managers / members, using ADO.NET and layered architecture best practices.",
      linkLabel: "View project",
      href: "https://github.com/LucasAB-46/Programacion6",
    },
    {
      title: "Employees System",
      tech: "Django + Jazzmin + CKEditor",
      description: "Internal HR administrative panel. Employee management with rich fields and custom UI.",
      linkLabel: "View project",
      href: "https://github.com/LucasAB-46/ProyectoEmpleado",
    },
    {
      title: "Corporate Website (Fleitas Abuin & Assoc.)",
      tech: "HTML, CSS, JavaScript, Responsive Design",
      description: "Professional website for a legal-accounting firm. Focus on corporate image, UX, and responsive design.",
      linkLabel: "View project",
      href: "https://estudiofleitasabuin.com/",
    },
    {
      title: "Consorcio Up",
      tech: "Branding + Management",
      description: "Real project for consortium administration: commercial strategy, communication, and foundation for management system.",
      linkLabel: "View project",
      href: "#",
    },
    {
      title: "Architecture & Databases",
      tech: "SQL Server + PostgreSQL + Relational Modeling",
      description: "Database design and management: modeling, normalization, referential integrity, complex queries, and performance.",
      linkLabel: "View details",
      href: "#",
    },
  ]
};

// ✅ Servicios movidos aquí para traducción
export const servicesData = {
  es: [
    {
      title: "Desarrollo Web & Landing Pages",
      desc: "Sitios web modernos, rápidos y optimizados para convertir visitas en clientes. Diseño totalmente responsivo y adaptable.",
      icon: "💻",
      features: ["Diseño UX/UI Moderno", "100% Responsivo", "Optimización SEO", "Integración WhatsApp", "Configuración Dominio"],
    },
    {
      title: "Aplicaciones Web (SPA)",
      desc: "Desarrollo de plataformas interactivas, dashboards y sistemas de gestión a medida utilizando React y tecnologías modernas.",
      icon: "⚛️",
      features: ["React.js / Next.js", "Paneles Admin", "Login y Usuarios", "Bases de Datos", "Arquitectura Escalable"],
    },
    {
      title: "Soluciones a Medida & SEO",
      desc: "Integración de APIs, optimización de rendimiento (Web Vitals) y posicionamiento técnico para mejorar tu visibilidad.",
      icon: "🚀",
      features: ["Auditoría Performance", "Core Web Vitals", "Pasarelas de Pago", "Mantenimiento", "Consultoría Tech"],
    },
  ],
  en: [
    {
      title: "Web Development & Landing Pages",
      desc: "Modern, fast, and optimized websites to convert visitors into clients. Fully responsive and adaptable design.",
      icon: "💻",
      features: ["Modern UX/UI Design", "100% Responsive", "SEO Optimization", "WhatsApp Integration", "Domain Setup"],
    },
    {
      title: "Web Applications (SPA)",
      desc: "Development of interactive platforms, dashboards, and custom management systems using React and modern technologies.",
      icon: "⚛️",
      features: ["React.js / Next.js", "Admin Panels", "Login & Users", "Databases & APIs", "Scalable Architecture"],
    },
    {
      title: "Custom Solutions & SEO",
      desc: "API integration, performance optimization (Web Vitals), and technical positioning to improve your visibility.",
      icon: "🚀",
      features: ["Performance Audit", "Core Web Vitals", "Payment Gateways", "Maintenance", "Tech Consulting"],
    },
  ]
};

// ✅ Nueva sección: Sobre Mí
export const aboutData = {
  es: {
    title: "Sobre Mí",
    description: "Soy un desarrollador apasionado que combina la lógica de los sistemas con la creatividad del diseño web.",
    text: "Actualmente estoy cursando la carrera de Analista de Sistemas, lo que me da una base teórica sólida sobre cómo funciona el software por dentro. No solo escribo código; diseño soluciones pensadas para escalar. Me especializo en el ecosistema de JavaScript y Python, siempre buscando aprender nuevas tecnologías.",
  },
  en: {
    title: "About Me",
    description: "I am a passionate developer who combines system logic with web design creativity.",
    text: "I am currently studying Systems Analysis, which gives me a solid theoretical foundation on how software works inside. I don't just write code; I design solutions meant to scale. I specialize in the JavaScript and Python ecosystem, always looking to learn new technologies.",
  }
};
