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
              A Legacy of <span className="text-[#D4AF37]">Trust</span> & Quality
            </h1>
            <p className="text-xl text-gray-400 font-light leading-relaxed">
              Built on integrity, honesty, and decades of hands-on experience, Yuswas Investment Ltd has delivered hundreds of homes, banks, offices, and government projects across Nigeria, always putting clients first and ensuring lasting quality.
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

            <motion.div
              {...fadeIn}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <h3 className="text-3xl md:text-4xl font-bold tracking-tighter">
                Our Journey & Approach
              </h3>
              <div className="space-y-6 text-gray-400 font-light leading-relaxed text-lg">
                <p>
                  Yuswas Investment Ltd was founded on integrity, honesty, and a passion for creating lasting structures. What began as a vision by Alhaji Yusuf Wasiu Olaniyi has grown into a trusted construction company delivering banks, residential homes, offices, and government projects across Nigeria.
                </p>
                <p>
                  Every project is approached with care, planning, and attention to detail. From selecting materials to optimizing space, we ensure our clients’ visions are realized efficiently and with superior quality.
                </p>
                <p>
                  Beyond buildings, we build relationships. Our commitment to professionalism, safety, and community impact ensures that each project benefits both the client and the neighborhood, leaving a legacy of trust and excellence.
                </p>
              </div>
            </motion.div>
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
                To deliver construction projects with honesty, reliability, and unmatched quality, while ensuring our clients’ visions are fully realized and communities are positively impacted.
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
                To be recognized across Nigeria as the most trusted construction expert, building homes, offices, banks, and government structures with integrity, excellence, and lasting impact.
              </p>
            </motion.div>
          </div>
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
                <p className="text-gray-500 text-sm font-light leading-relaxed">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
