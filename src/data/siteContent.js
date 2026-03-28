export const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export const CONTACT_INFO = {
  phone: "+234 815 922 9220",
  email: "yuswasinvestmentsltd@gmail.com",
  address: "Plot 12, Corporate Avenue, Victoria Island, Lagos, Nigeria", // // TODO: Replace with real company address
  whatsapp: "2348159229220",
};

export const SERVICES = {
  construction: [
    {
      id: "res-const",
      title: "Residential Construction",
      description:
        "We build high-quality residential properties, from single-family homes to multi-unit developments, tailored to our clients' lifestyles and preferences.",
      icon: "Home",
    },
    {
      id: "com-const",
      title: "Commercial Construction",
      description:
        "With extensive experience working with banks, companies, and organizations, we deliver commercial buildings that meet professional standards, functionality, and structural integrity.",
      icon: "Building2",
    },
    {
      id: "renovate",
      title: "Renovation & Remodeling",
      description:
        "We transform existing spaces into modern, functional areas that meet our clients' evolving needs. Whether it's a home makeover or a commercial upgrade, we bring new life to old structures.",
      icon: "Hammer",
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
    {
      id: "port-mgmt",
      title: "Construction Consultation ⭐ ",
      description:
        "We don’t just build, we guide. With years of experience, we help clients make the best decisions on design, space usage, materials, and cost efficiency to achieve the best possible results.",
      icon: "Briefcase",
    },
  ],
};

export const PROJECTS = [
  {
    id: 1,
    title: "Marina Heights Commercial Tower",
    location: "Lagos, Nigeria",
    description:
      "A 45-story mixed-use development featuring premium office spaces and luxury retail outlets.",
    category: "Commercial",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop", // TODO: Source replacement
    gallery: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1200&auto=format&fit=crop",
    ],
  },
  {
    id: 2,
    title: "Skyline Residential Complex",
    location: "Abuja, Nigeria",
    description:
      "120-unit luxury apartment development with world-class amenities and smart home integration.",
    category: "Residential",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200&auto=format&fit=crop", // TODO: Source replacement
    gallery: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1200&auto=format&fit=crop",
    ],
  },
  {
    id: 3,
    title: "The Palms Office Park",
    location: "Lekki, Nigeria",
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
];

export const TEAM_MEMBERS = [
   {
    name: "Alhaji Yusuf Wasiu Olaniyi",
    role: "Founder & CEO",
    bio: "With over 25 years of hands-on experience, Alhaji Yusuf leads Yuswas Investment Ltd with integrity, reliability, and a commitment to delivering exceptional residential, commercial, and government projects across Nigeria.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Project Management Team",
    role: "Lead Engineers & Architects",
    bio: "Our team of experienced engineers and architects ensures every project is executed on time, within budget, and to the highest quality standards.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
  },
];
