import React from "react";
import { motion } from "motion/react";
import {
  Award,
  ShieldCheck,
  Lightbulb,
  Scale,
  Target,
  Eye,
} from "lucide-react";
import Layout from "../../components/Layout";
import { CORE_VALUES, TEAM_MEMBERS } from "../../data/siteContent";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const AboutPage = () => {
  const iconMap = {
    Award: Award,
    ShieldCheck: ShieldCheck,
    Lightbulb: Lightbulb,
    Scale: Scale,
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 bg-[#050505]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h2 className="text-[#D4AF37] font-bold text-xs tracking-[0.3em] uppercase mb-4">
              About <span className="font-playball">Yuswas</span>
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">
              Legacy of <span className="text-[#D4AF37]">Excellence</span> & Innovation
            </h1>
            <p className="text-xl text-gray-400 font-light leading-relaxed">
              Yuswas Investments Ltd has been delivering top-tier construction and real estate services since 2008,
              following 7 years of pre-incorporation operations. Our expertise spans multiple sectors through our business units:
              <strong>Yuswas Properties & Constructions, Yuswas Project Management, Yuswas Block & Concreting Industry, and Yuswas Logistics.</strong>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div {...fadeIn} className="relative">
              <img
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QXJjaGl0ZWN0dXJlfGVufDB8fDB8fHwwauto=format&fit=crop"
                alt="Construction Project"
                className="w-full h-[600px] object-cover border border-white/10"
              />
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#D4AF37] p-8 hidden md:flex flex-col justify-center">
                <span className="text-black text-6xl font-bold mb-2 tracking-tighter">
                  25+
                </span>
                <span className="text-black text-xs font-black tracking-widest uppercase">
                  Years of Building Excellence
                </span>
              </div>
            </motion.div>

            <div className="space-y-12">
              {[
                {
                  title: "Company Overview",
                  content: `Yuswas Investment Ltd was founded on integrity, honesty, and a passion for creating lasting structures. What began as a vision by Alhaji Yusuf Wasiu Olaniyi has grown into a trusted construction company delivering residential homes, commercial offices, banks, and government projects across Nigeria.`
                },
                {
                  title: "Our Philosophy",
                  content: `Our real business is gaining customers’ loyalty and satisfaction. By consistently delivering projects on time, within schedule, and at competitive costs, we build long-term trust and a strong client base. Every project is approached with care, planning, and attention to detail, ensuring our clients’ visions are realized efficiently and with superior quality.`
                },
                {
                  title: "Company History",
                  content: `Yuswas Investments Limited is a limited liability company incorporated under Nigerian law. Before our formal incorporation in 2008, we operated as Yuswas Investment for 7 years. The company consists of the following business units:`,
                  list: [
                    "Yuswas Properties and Constructions",
                    "Yuswas Project Management",
                    "Yuswas Block and Concreting Industry",
                    "Yuswas Logistics"
                  ]
                },
                {
                  title: "Community & Legacy",
                  content: `Beyond buildings, we build relationships. Our commitment to professionalism, safety, and community impact ensures that each project benefits both the client and the neighborhood, leaving a legacy of trust and excellence.`
                }
              ].map((section, i) => (
                <motion.div
                  key={section.title}
                  {...fadeIn}
                  transition={{ delay: i * 0.2 }}
                  className="space-y-4"
                >
                  <h4 className="text-2xl font-semibold mb-2 tracking-tight text-[#D4AF37]">
                    {section.title}
                  </h4>
                  <p className="text-gray-400 font-light leading-relaxed text-lg">
                    {section.content}
                  </p>
                  {section.list && (
                    <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-400 font-light">
                      {section.list.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              {...fadeIn}
              className="p-12 border border-white/5 bg-black"
            >
              <Target className="text-[#D4AF37] mb-6" size={48} />
              <h4 className="text-2xl font-bold mb-6 tracking-tighter">
                Our Mission
              </h4>
              <p className="text-gray-400 font-light leading-relaxed text-lg">
                To provide unparalleled construction services and investment opportunities with excellence, ethical business practices, and innovation.
              </p>
            </motion.div>
            <motion.div
              {...fadeIn}
              transition={{ delay: 0.2 }}
              className="p-12 border border-white/5 bg-black"
            >
              <Eye className="text-[#D4AF37] mb-6" size={48} />
              <h4 className="text-2xl font-bold mb-6 tracking-tighter">
                Our Vision
              </h4>
              <p className="text-gray-400 font-light leading-relaxed text-lg">
                To be the most trusted and innovative construction and investment firm in Nigeria and Africa, creating sustainable wealth and communities.
              </p>
            </motion.div>
            
          </div>
          {/* <motion.div
                        {...fadeIn}
                        transition={{ delay: 0.2 }}
                        className="p-12 border border-white/5 bg-black"
                      >
                        <Eye className="text-[#D4AF37] mb-6" size={48} />
                        <h4 className="text-2xl font-bold mb-6 tracking-tighter">
                          Our Vision
                        </h4>
                        <p className="text-gray-400 font-light leading-relaxed text-lg">
                          To be the most trusted and innovative construction and investment firm in Nigeria and Africa, creating sustainable wealth and communities.
                        </p>
                      </motion.div> */}
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-[#D4AF37] font-bold text-xs tracking-[0.3em] uppercase mb-4">
              Our Values
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tighter">
              The Principles That Guide Us
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {CORE_VALUES.map((value, i) => {
              const IconComp = iconMap[value.icon] || Award;
              return (
                <motion.div
                  key={value.title}
                  {...fadeIn}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 border border-white/5 hover:border-[#D4AF37]/30 transition-all group"
                >
                  <IconComp
                    className="text-[#D4AF37] mb-6 group-hover:scale-110 transition-transform"
                    size={32}
                  />
                  <h4 className="text-xl font-bold mb-4 tracking-tight">
                    {value.title}
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed font-light">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-[#D4AF37] font-bold text-xs tracking-[0.3em] uppercase mb-4">
              Leadership
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tighter">
              The Visionaries Behind Yuswas
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {TEAM_MEMBERS.map((member, i) => (
              <motion.div
                key={member.name}
                {...fadeIn}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="relative overflow-hidden mb-6 border border-white/10 aspect-[4/5]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                </div>
                <h4 className="text-2xl font-bold tracking-tight mb-1">
                  {member.name}
                </h4>
                <p className="text-[#D4AF37] text-xs font-black tracking-widest uppercase mb-4">
                  {member.role}
                </p>
                <p className="text-gray-500 text-sm font-light leading-relaxed whitespace-pre-line">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Our Technical & Management Team
          </h3>
          <p className="text-gray-500 text-sm font-light leading-relaxed">
            Supported by a team of highly qualified engineers, consultants, and technical experts with decades of combined experience.
          </p>
        </div>

        {/* Team List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div className="border border-white/10 p-6">
            <h4 className="font-bold text-lg">Abdulsalam Hakeem</h4>
            <p className="text-[#D4AF37] text-xs uppercase">Project Manager</p>
            <p className="text-gray-500 text-sm mt-2">BSc Civil Engineering, COREN, MNSE</p>
            <p className="text-gray-400 text-xs mt-1">12 years experience</p>
          </div>

          <div className="border border-white/10 p-6">
            <h4 className="font-bold text-lg">Popoola Tajudeen</h4>
            <p className="text-[#D4AF37] text-xs uppercase">Mechanical Engineer Consultant</p>
            <p className="text-gray-500 text-sm mt-2">PhD, COREN, NIMechE</p>
            <p className="text-gray-400 text-xs mt-1">25 years experience</p>
          </div>

          <div className="border border-white/10 p-6">
            <h4 className="font-bold text-lg">Mukthar Waheed</h4>
            <p className="text-[#D4AF37] text-xs uppercase">Project Manager</p>
            <p className="text-gray-500 text-sm mt-2">BSc Civil Engineering, COREN</p>
            <p className="text-gray-400 text-xs mt-1">10 years experience</p>
          </div>

          <div className="border border-white/10 p-6">
            <h4 className="font-bold text-lg">Lawal Nafiu Taiye</h4>
            <p className="text-[#D4AF37] text-xs uppercase">HSE Officer / Asst. Project Manager</p>
            <p className="text-gray-500 text-sm mt-2">HND Civil Engineering</p>
            <p className="text-gray-400 text-xs mt-1">8 years experience</p>
          </div>

          <div className="border border-white/10 p-6">
            <h4 className="font-bold text-lg">Showumi Babatunde Tobi</h4>
            <p className="text-[#D4AF37] text-xs uppercase">Head M&E</p>
            <p className="text-gray-500 text-sm mt-2">HND Electrical Engineering</p>
            <p className="text-gray-400 text-xs mt-1">10 years experience</p>
          </div>

          <div className="border border-white/10 p-6">
            <h4 className="font-bold text-lg">Okesola Hakeem</h4>
            <p className="text-[#D4AF37] text-xs uppercase">Value Engineer</p>
            <p className="text-gray-500 text-sm mt-2">BSc Quantity Surveying, ANIQS</p>
            <p className="text-gray-400 text-xs mt-1">15 years experience</p>
          </div>

          <div className="border border-white/10 p-6">
            <h4 className="font-bold text-lg">Itanola Muibi Ademola</h4>
            <p className="text-[#D4AF37] text-xs uppercase">Company Auditor</p>
            <p className="text-gray-500 text-sm mt-2">FCA</p>
            <p className="text-gray-400 text-xs mt-1">25 years experience</p>
          </div>

          <div className="border border-white/10 p-6">
            <h4 className="font-bold text-lg">Saka Ibrahim Tunde</h4>
            <p className="text-[#D4AF37] text-xs uppercase">Electrical Engineer</p>
            <p className="text-gray-500 text-sm mt-2">HND Electrical Engineering</p>
            <p className="text-gray-400 text-xs mt-1">10 years experience</p>
          </div>

        </div>
      </div>
    </section>
    <section className="py-24 bg-black">
  <div className="container mx-auto px-6">

    {/* Heading */}
    <div className="max-w-3xl mb-16">
      <h2 className="text-[#D4AF37] font-bold text-xs tracking-[0.3em] uppercase mb-4">
        Resources & Capacity
      </h2>
      <h3 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
        Strength Beyond Construction
      </h3>
      <p className="text-gray-500 text-sm font-light leading-relaxed">
        Our strength lies not only in our people, but in our capacity — combining skilled professionals,
        modern equipment, and efficient logistics to deliver quality projects consistently.
      </p>
    </div>

    {/* Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

      {/* Human Capacity */}
      <div className="border border-white/10 p-8">
        <h4 className="text-xl font-bold mb-4">👷 Human Capacity</h4>
        <ul className="text-gray-400 text-sm space-y-2">
          <li>• Experienced Engineers & Consultants</li>
          <li>• Project Managers & Supervisors</li>
          <li>• Skilled Technical Workforce</li>
          <li>• Safety & Quality Control Personnel</li>
        </ul>
      </div>

      {/* Equipment */}
      <div className="border border-white/10 p-8">
        <h4 className="text-xl font-bold mb-4">🚜 Equipment</h4>
        <ul className="text-gray-400 text-sm space-y-2">
          <li>• Operational Vehicles & Trucks</li>
          <li>• Block Making Machines</li>
          <li>• Concrete Mixers & Vibrators</li>
          <li>• Welding Machines & Jack Hammers</li>
          <li>• Compactors & Concrete Cutters</li>
        </ul>
      </div>

      {/* Materials & Logistics */}
      <div className="border border-white/10 p-8">
        <h4 className="text-xl font-bold mb-4">📦 Materials & Logistics</h4>
        <ul className="text-gray-400 text-sm space-y-2">
          <li>• Access to Quality Building Materials</li>
          <li>• Efficient Supply Chain Management</li>
          <li>• On-Time Delivery to Project Sites</li>
          <li>• Reliable Logistics & Transportation</li>
        </ul>
      </div>

    </div>
  </div>
</section>
    </Layout>
  );
};

export default AboutPage;
