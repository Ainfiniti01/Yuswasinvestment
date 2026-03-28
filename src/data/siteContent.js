export const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export const CONTACT_INFO = {
  phone: "+234 803 964 1194",
  email: "yuswasinvestmentsltd@gmail.com",
  whatsapp: "+234 815 922 9220",
  locations: [
    {
      name: "Lagos Office",
      address: "2 Adeniyi Adeyele Street, off Alh Adam Street, Ejigbo, Lagos",
    },
    {
      name: "Ilorin Office",
      address: "2 Prof G. T. Ijaiya Street, Off MFM Road Tanke Bubu, Ilorin, Kwara State",
    },
    {
      name: "Site Yard",
      address: "Along Oke Ose Ile-apa Road, Sabo Village, Ilorin, Kwara State",
    },
    {
      name: "Kano Office",
      address: "10 Bagudu Kebbi Lane, Daurawa Qtrs, Kano",
    },
  ],
};

export const SERVICES = {
  construction: [
    {
      id: "res-const",
      title: "Residential Construction",
      description:
        "We build high-quality residential properties, from single-family homes to multi-unit developments, tailored to our clients' lifestyles and preferences. This includes civil, electrical, mechanical, and finishing works for buildings up to four floors.",
      icon: "Home",
      ctaLabel: "Inquire Now",
    },
    {
      id: "com-const",
      title: "Commercial Construction",
      description:
        "With extensive experience working with banks, offices, and organizations, we deliver commercial buildings that meet professional standards, functionality, and structural integrity.",
      icon: "Building2",
      ctaLabel: "Inquire Now",
    },
    {
      id: "renovate",
      title: "Renovation & Remodeling",
      description:
        "We transform existing spaces into modern, functional areas that meet evolving client needs. This includes minor to major civil works, total overhauls of electrical systems, plumbing, painting, tiling, POP, and more.",
      icon: "Hammer",
      ctaLabel: "Inquire Now",
    },
    {
      id: "external-works",
      title: "External Works",
      description:
        "We handle drainage systems, interlocking stones, external lighting, and landscaping works to ensure durability, safety, and aesthetic appeal.",
      icon: "HardHat",
      ctaLabel: "Learn More",
    },
    {
      id: "electrical-mechanical",
      title: "Electrical & Mechanical Works",
      description:
        "We provide domestic and industrial electrical wiring, network systems, HVAC (air conditioning and ventilation), fire safety systems, and other mechanical services, all designed for safety, efficiency, and longevity.",
      icon: "Briefcase",
      ctaLabel: "Learn More",
    },
    {
      id: "construction-consultation",
      title: "Construction Consultation",
      description:
        "We don’t just build; we guide. With years of experience, we help clients make the best decisions on design, space utilization, materials, and cost efficiency to achieve top-quality results.",
      icon: "TrendingUp",
      ctaLabel: "Learn More",
    },
    {
      id: "yuswas-logistics",
      title: "Yuswas Logistics",
      description:
        "We provide efficient transportation of materials, equipment, and manpower to construction sites, ensuring projects stay on schedule and operations run smoothly.",
      icon: "Briefcase",
      ctaLabel: "Learn More",
    },
  ],
  investment: [
    {
      id: "re-inv",
      title: "Real Estate Investment",
      description:
        "We identify and manage high-potential real estate investments, providing clients with opportunities for significant returns in the Nigerian market.",
      icon: "TrendingUp",
    },
    {
      id: "prop-dev",
      title: "Property Development",
      description:
        "We manage the entire building process, coordinating planning, construction, and delivery to ensure projects are completed efficiently and to standard.",
      icon: "HardHat",
    },
    {
      id: "port-mgmt",
      title: "Project Supervision",
      description:
        "We oversee construction projects to ensure they are completed on time, within budget, quality workmanship, and to the highest quality standards, providing peace of mind to our clients.",
      icon: "Briefcase",
    },
  ],
};

export const PROJECTS = [
  {
    id: 1,
    title: "United Bank for Africa (UBA) Business office",
    location: "Ojoo Ibadan, Oyo state, Nigeria",
    client: "United Bank for Africa (UBA) Plc",
    value: "N409m",
    description:
      "Construction of a 2-floor business office for UBA, including civil works, electrical and mechanical installations, and finishing works, completed to the highest standards of quality and durability.",
    category: "Commercial",
    image: "/images/UBA.jpeg", // Local image
    gallery: [
      "/images/UBA1.jpeg",
      "/images/UBA2.jpeg",
      "/images/UBA3.jpeg",
    ],
  },
  {
    id: 2,
    title: "African Prudential PLC Head Office",
    location: "220 Ikorodu RD, Palmgroove Lagos, Nigeria",
    client: "Africa prudential PLC",
    value: "197.5m Naira",
    description:
      "Upgrade of head office for Africa Prudential PLC, featuring state-of-the-art facilities and sustainable design elements, completed with meticulous attention to detail and quality craftsmanship.",
    category: "Commercial",
    image:
      "/images/African Prudential.jpeg", // TODO: Source replacement
    gallery: [
      "/images/African Prudential 1.jpeg",
      "/images/African Prudential 2.jpeg",
      "/images/African Prudential 3.jpeg",
      "/images/African Prudential M.jpeg",
    ],
  },
  {
    id: 3,
    title: "The Palms Office Park",
    location: "Lekki, Nigeria",
    client: "Africa prudential PLC",
    value: "197.5m Naira",
    description:
      "Eco-friendly corporate park designed for tech innovators and established enterprises.",
    category: "Commercial",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop", // TODO: Source replacement
    gallery: [
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=1200&auto=format&fit=crop",
    ],
  },
  {
    id: 4,
    title: "Azure Waterfront Estate",
    location: "Victoria Island, Lagos",
    client: "Africa prudential PLC",
    value: "197.5m Naira",
    description:
      "Exclusive waterfront villas offering private docks and panoramic ocean views.",
    category: "Residential",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop", // TODO: Source replacement
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687940-c52af04657b3?q=80&w=1200&auto=format&fit=crop",
    ],
  },
  {
    id: 5,
    title: "Grand Plaza Shopping Mall",
    location: "Port Harcourt, Nigeria",
    client: "Africa prudential PLC",
    value: "197.5m Naira",
    description:
      "Premier retail destination featuring international brands and entertainment facilities.",
    category: "Commercial",
    image:
      "https://images.unsplash.com/photo-1555636222-cae831e670b3?q=80&w=1200&auto=format&fit=crop", // TODO: Source replacement
    gallery: [
      "https://images.unsplash.com/photo-1555636222-cae831e670b3?q=80&w=1200&auto=format&fit=crop",
    ],
  },
  {
    id: 6,
    title: "The Heritage Luxury Suites",
    location: "Enugu, Nigeria",
    client: "Africa prudential PLC",
    value: "197.5m Naira",
    description:
      "Boutique hospitality development blending traditional elegance with modern luxury.",
    category: "Hospitality",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop", // TODO: Source replacement
    gallery: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop",
    ],
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Chief Emeka Okafor",
    role: "Real Estate Developer",
    quote:
      "Yuswas Investment delivered exceptional quality and professionalism. Their attention to detail in the Marina Heights project was truly world-class.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Mrs. Funke Adeyemi",
    role: "CEO, Adeyemi Properties",
    quote:
      "Working with the Yuswas team was a seamless experience. They transformed our vision into a stunning reality, ahead of schedule.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "David Harrison",
    role: "International Investor",
    quote:
      "Their strategic approach to investment and property development is unmatched in the region. A trustworthy partner for any major project.",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
  },
];

export const CORE_VALUES = [
  {
    title: "Quality & Precision",
    description:
      "Every project, from homes to banks, is executed with meticulous attention to detail and durable, high-standard finishes.",
    icon: "Award",
  },
  {
    title: "Trust & Reliability",
    description:
      "We build lasting relationships through honesty, transparency, and consistently delivering on our promises.",
    icon: "ShieldCheck",
  },
  {
    title: "Client-Centered Solutions",
    description:
      "We listen, advise, and provide solutions that save time, space, and resources, always putting our clients’ vision first.",
    icon: "Lightbulb",
  },
  {
    title: "Integrity",
    description:
      "We act ethically and responsibly in every decision, ensuring that our work benefits clients, communities, and partners alike.",
    icon: "Scale",
  },
  {
    title: "Reliability",
    description:
      "We are dependable in delivery, timelines, and communication, consistently honoring our commitments to clients and partners.",
    icon: "ShieldCheck",
  },
  {
    title: "Client-focused",
    description:
      "Our clients remain at the center of every decision, as we tailor every project to their goals, needs, and long-term value.",
    icon: "Lightbulb",
  },
  {
    title: "Religious Ethics",
    description:
      "Our work is guided by godly principles, fairness, and moral discipline, reflecting faith-based values in how we serve people.",
    icon: "Scale",
  },
];

export const TEAM_MEMBERS = [
   {
    name: "Alhaji Yusuf Wasiu Olaniyi",
    role: "Founder & CEO",
    bio: "MBA, MBCL\n22 years experience",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop",
  },
   {
    name: "Ayeleso Tunde Wasiu",
    role: "Chief Operating Officer",
    bio: "Bsc Civil Eng, HND Architectural Tech, COREN, MNSE,  MNISE\n18 years experience",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop",
  },
   {
    name: "Abdulsalam Hakeem",
    role: "Project Manager",
    bio: "Bsc Civil Eng, HND, COREN, MNSE,  MNISE\n12 years experience",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop",
  },
];
