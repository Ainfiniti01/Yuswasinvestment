import React from "react";
import { motion } from "motion/react";
import {
  Home as HomeIcon,
  Building2,
  Hammer,
  TrendingUp,
  HardHat,
  Briefcase,
  ArrowRight,
} from "lucide-react";
import Layout from "../../components/Layout";
import BorderGlow from "../../components/BorderGlow";
import GlassSurface from "../../components/GlassSurface";
import { SERVICES } from "../../data/siteContent";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const iconMap = {
  Home: HomeIcon,
  Building2: Building2,
  Hammer: Hammer,
  TrendingUp: TrendingUp,
  HardHat: HardHat,
  Briefcase: Briefcase,
};

const ServicesPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 bg-[#050505] overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h2 className="text-[#D4AF37] font-bold text-xs tracking-[0.3em] uppercase mb-4">
              Our Services
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">
              Building with <span className="text-[#D4AF37]">Integrity</span>{" "}
              and Excellence
            </h1>
            <p className="text-xl text-gray-400 font-light leading-relaxed">
              With over two decades of experience, we deliver high-quality construction
              and property development services across Nigeria. We are known for our
              reliability, attention to detail, and commitment to client satisfaction.
            </p>
          </motion.div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#D4AF37]/5 -skew-x-12 transform translate-x-1/2" />
      </section>

      {/* Construction Services */}
      <section className="py-24 bg-black border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6">
              🏗️ Construction Services
            </h2>
            <div className="w-24 h-1 bg-[#D4AF37]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {SERVICES.construction.map((service, i) => {
              const IconComp = iconMap[service.icon] || Building2;
              return (
                <motion.div
                  key={service.id}
                  {...fadeIn}
                  transition={{ delay: i * 0.1 }}
                  className="group p-10 bg-[#0a0a0a] border border-white/5 hover:border-[#D4AF37]/30 transition-all"
                >
                  <div className="w-16 h-16 bg-black flex items-center justify-center mb-8 border border-white/10 group-hover:border-[#D4AF37]/50 transition-colors">
                    <IconComp className="text-[#D4AF37]" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-[#D4AF37] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 font-light leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <a
                    href="/contact"
                    className="flex items-center space-x-2 text-white font-bold text-[10px] tracking-widest uppercase border-b border-white/20 pb-1 w-fit group-hover:border-[#D4AF37] transition-colors"
                  >
                    <span>{service.ctaLabel || "Inquire Now"}</span>
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </a>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Investment Services */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <div className="mb-16 flex flex-col items-end text-right">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6">
              🏢 Real Estate & Investment Services
            </h2>
            <div className="w-24 h-1 bg-[#D4AF37]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {SERVICES.investment.map((service, i) => {
              const IconComp = iconMap[service.icon] || TrendingUp;
              return (
                <motion.div
                  key={service.id}
                  {...fadeIn}
                  transition={{ delay: i * 0.1 }}
                  className="group p-10 bg-black border border-white/5 hover:border-[#D4AF37]/30 transition-all"
                >
                  <div className="w-16 h-16 bg-[#0a0a0a] flex items-center justify-center mb-8 border border-white/10 group-hover:border-[#D4AF37]/50 transition-colors">
                    <IconComp className="text-[#D4AF37]" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-[#D4AF37] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 font-light leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <a
                    href="/contact"
                    className="flex items-center space-x-2 text-white font-bold text-[10px] tracking-widest uppercase border-b border-white/20 pb-1 w-fit group-hover:border-[#D4AF37] transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </a>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-black overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-[#D4AF37] font-bold text-xs tracking-[0.3em] uppercase mb-4">
              Our Process
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tighter">
              How We Work
            </h3>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-white/5 hidden lg:block" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                step: "01",
                title: "Consultation",
                desc: "We take time to understand your needs, ideas, and project goals before any work begins.",
              },
              {
                step: "02",
                title: "Planning & Design",
                desc: "We guide you on the best design, proper space usage, and cost-effective approach to achieve the best results.",
              },
              {
                step: "03",
                title: "Construction",
                desc: "We carry out the project with skilled professionals, quality materials, and close supervision at every stage.",
              },
              {
                step: "04",
                title: "Delivery",
                desc: "We complete and hand over projects on time, ensuring everything meets the expected standard and client satisfaction.",
              }
              ].map((item, i) => (
                <motion.div
                  key={item.step}
                  {...fadeIn}
                  transition={{ delay: i * 0.1 }}
                  className="relative bg-[#0a0a0a] p-8 border border-white/5 z-10 hover:bg-[#D4AF37] group transition-all duration-500"
                >
                  <div className="text-4xl font-black text-[#D4AF37] group-hover:text-black mb-6 opacity-30 group-hover:opacity-100 transition-all">
                    {item.step}
                  </div>
                  <h4 className="text-xl font-bold mb-4 tracking-tight text-white group-hover:text-black transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-gray-500 text-sm font-light leading-relaxed group-hover:text-black/80 transition-colors">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#D4AF37]">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row justify-between items-center gap-12">
          <div className="max-w-2xl text-center lg:text-left">
            <h2 className="text-black text-4xl md:text-5xl font-bold tracking-tighter mb-4">
              Have a Specific Project in Mind?
            </h2>
            <p className="text-black/80 text-lg font-medium">
              Let’s help you bring your project to life. With years of experience, we guide you from idea to completion, delivering quality and reliability you can trust.
            </p>
          </div>
          <a
            href="/contact"
            className="inline-block shrink-0 transition-transform hover:scale-105"
          >
            <BorderGlow
              className="rounded-full"
              borderRadius={999}
              edgeSensitivity={28}
              glowColor="42 85 68"
              backgroundColor="transparent"
              glowRadius={26}
              glowIntensity={0.8}
              coneSpread={22}
              animated={false}
              colors={["#fcd34d", "#f59e0b", "#fde68a"]}
            >
              <GlassSurface
                width="auto"
                height="auto"
                borderRadius={999}
                backgroundOpacity={0.14}
                saturation={1.25}
                className="rounded-full"
                style={{
                  background: "rgba(212, 175, 55, 0.16)",
                  border: "1px solid rgba(212, 175, 55, 0.32)",
                  boxShadow:
                    "0 0 24px rgba(212, 175, 55, 0.24), inset 0 1px 0 rgba(255,255,255,0.2)",
                }}
              >
                <span className="inline-flex items-center px-12 py-6 text-white font-black text-sm tracking-widest">
                  START YOUR PROJECT
                </span>
              </GlassSurface>
            </BorderGlow>
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesPage;
