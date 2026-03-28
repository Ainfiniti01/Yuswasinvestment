import React from "react";
import { motion } from "motion/react";
import HeroSection from "../components/HeroSection";
import {
  ArrowRight,
  Shield,
  TrendingUp,
  Building2,
  Home as HomeIcon,
  Award,
  Users,
} from "lucide-react";
import Layout from "../components/Layout";
import BorderGlow from "../components/BorderGlow";
import GlassSurface from "../components/GlassSurface";
import LogoLoop from "../components/LogoLoop";
import { PROJECTS, TESTIMONIALS, SERVICES } from "../data/siteContent";

const partnerLogos = [
  {
    src: "https://tse2.mm.bing.net/th/id/OIP.j34NJcJOmJ4IwM9RuRqiaQAAAA?pid=ImgDet&w=197&h=98&c=7&o=7&rm=3",
    alt: "Partner logo 1",
    title: "Partner logo 1",
  },
  {
    src: "https://tse2.mm.bing.net/th/id/OIP.j34NJcJOmJ4IwM9RuRqiaQAAAA?pid=ImgDet&w=197&h=98&c=7&o=7&rm=3",
    alt: "Partner logo 2",
    title: "Partner logo 2",
  },
  {
    src: "https://tse2.mm.bing.net/th/id/OIP.j34NJcJOmJ4IwM9RuRqiaQAAAA?pid=ImgDet&w=197&h=98&c=7&o=7&rm=3",
    alt: "Partner logo 3",
    title: "Partner logo 3",
  },
  {
    src: "https://tse2.mm.bing.net/th/id/OIP.j34NJcJOmJ4IwM9RuRqiaQAAAA?pid=ImgDet&w=197&h=98&c=7&o=7&rm=3",
    alt: "Partner logo 4",
    title: "Partner logo 4",
  },
  {
    src: "https://tse2.mm.bing.net/th/id/OIP.j34NJcJOmJ4IwM9RuRqiaQAAAA?pid=ImgDet&w=197&h=98&c=7&o=7&rm=3",
    alt: "Partner logo 5",
    title: "Partner logo 5",
  },
];

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const Page = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection />

      {/* Services Preview */}
      <section className="py-24 bg-black border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-[#D4AF37] font-bold text-xs tracking-[0.3em] uppercase mb-4">
              Our Expertise
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tighter">
              Premium Construction Across Nigeria
            </h3>
          </div>
          <a
            href="/services"
            className="group flex items-center space-x-2 text-[#D4AF37] font-bold text-sm tracking-widest uppercase"
          >
            <span>View All Services</span>
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Construction Card */}
          <motion.div
            {...fadeIn}
            className="group relative h-[400px] overflow-hidden border border-white/10"
          >
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              alt="Construction"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent p-10 flex flex-col justify-end">
              <Building2 className="text-[#D4AF37] mb-4" size={40} />
              <h4 className="text-3xl font-bold mb-4 tracking-tighter">
                Construction Services
              </h4>
              <p className="text-gray-400 mb-6 max-w-sm line-clamp-2">
                From residential homes to commercial landmarks and government projects, we build with precision, quality, and a focus on lasting results.
              </p>
              <a
                href="/services"
                className="text-white font-bold text-xs tracking-widest uppercase flex items-center space-x-2 border-b border-white/20 pb-2 w-fit"
              >
                <span>Learn More</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </motion.div>

          {/* Construction Consultation Card */}
          <motion.div
            {...fadeIn}
            transition={{ delay: 0.2 }}
            className="group relative h-[400px] overflow-hidden border border-white/10"
          >
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              alt="Consultation"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent p-10 flex flex-col justify-end">
              <TrendingUp className="text-[#D4AF37] mb-4" size={40} />
              <h4 className="text-3xl font-bold mb-4 tracking-tighter">
                Construction Consultation
              </h4>
              <p className="text-gray-400 mb-6 max-w-sm line-clamp-2">
                With decades of hands-on experience, we guide clients on design, materials, and space optimization to deliver the best results every time.
              </p>
              <a
                href="/services"
                className="text-white font-bold text-xs tracking-widest uppercase flex items-center space-x-2 border-b border-white/20 pb-2 w-fit"
              >
                <span>Learn More</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
      {/* <section className="py-24 bg-black border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-[#D4AF37] font-bold text-xs tracking-[0.3em] uppercase mb-4">
                Our Expertise
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold tracking-tighter">
                Premium Construction & Strategic Investments
              </h3>
            </div>
            <a
              href="/services"
              className="group flex items-center space-x-2 text-[#D4AF37] font-bold text-sm tracking-widest uppercase"
            >
              <span>View All Services</span>
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              {...fadeIn}
              className="group relative h-[400px] overflow-hidden border border-white/10"
            >
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt="Construction"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent p-10 flex flex-col justify-end">
                <Building2 className="text-[#D4AF37] mb-4" size={40} />
                <h4 className="text-3xl font-bold mb-4 tracking-tighter">
                  Construction Services
                </h4>
                <p className="text-gray-400 mb-6 max-w-sm line-clamp-2">
                  From residential luxury to commercial landmarks, we build with
                  precision and passion.
                </p>
                <a
                  href="/services"
                  className="text-white font-bold text-xs tracking-widest uppercase flex items-center space-x-2 border-b border-white/20 pb-2 w-fit"
                >
                  <span>Learn More</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </motion.div>

            <motion.div
              {...fadeIn}
              transition={{ delay: 0.2 }}
              className="group relative h-[400px] overflow-hidden border border-white/10"
            >
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt="Investment"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent p-10 flex flex-col justify-end">
                <TrendingUp className="text-[#D4AF37] mb-4" size={40} />
                <h4 className="text-3xl font-bold mb-4 tracking-tighter">
                  Investment Services
                </h4>
                <p className="text-gray-400 mb-6 max-w-sm line-clamp-2">
                  Strategic real estate opportunities designed to maximize
                  returns and ensure growth.
                </p>
                <a
                  href="/services"
                  className="text-white font-bold text-xs tracking-widest uppercase flex items-center space-x-2 border-b border-white/20 pb-2 w-fit"
                >
                  <span>Learn More</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section> */}

      {/* Stats Section */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: "Projects Completed", value: "150+", icon: Award },
              { label: "Years Experience", value: "20+", icon: Shield },
              { label: "Happy Clients", value: "300+", icon: Users },
              { label: "Cities Present", value: "12", icon: Building2 },
            ].map((stat, i) => (
              <motion.div
                key={i}
                {...fadeIn}
                transition={{ delay: i * 0.1 }}
                className="text-center p-8 border border-white/5 hover:border-[#D4AF37]/30 transition-colors"
              >
                <stat.icon className="mx-auto text-[#D4AF37] mb-4" size={32} />
                <div className="text-4xl md:text-5xl font-bold mb-2 tracking-tighter">
                  {stat.value}
                </div>
                <div className="text-gray-500 text-xs tracking-widest uppercase">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-[#D4AF37] font-bold text-xs tracking-[0.3em] uppercase mb-4">
                Portfolio Showcase
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold tracking-tighter">
                Projects That Speak for Themselves
              </h3>
            </div>
            <a
              href="/projects"
              className="group flex items-center space-x-2 text-[#D4AF37] font-bold text-sm tracking-widest uppercase"
            >
              <span>View Portfolio</span>
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.slice(0, 3).map((project, i) => (
              <motion.div
                key={project.id}
                {...fadeIn}
                transition={{ delay: i * 0.1 }}
                className="group relative h-[500px] overflow-hidden bg-zinc-900"
              >
                <img
                  src={project.image}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                  alt={project.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-8 flex flex-col justify-end">
                  <span className="text-[#D4AF37] text-[10px] tracking-[0.2em] uppercase font-bold mb-2">
                    {project.category} / {project.location}
                  </span>
                  <h4 className="text-2xl font-bold mb-4 tracking-tighter group-hover:text-[#D4AF37] transition-colors">
                    {project.title}
                  </h4>
                  <a
                    href="/projects"
                    className="text-white font-bold text-[10px] tracking-widest uppercase flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300"
                  >
                    <span>View Project</span>
                    <ArrowRight size={12} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Partners Logo Loop */}
      <section className="py-14 bg-black border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-[#D4AF37] font-bold text-xs tracking-[0.3em] uppercase mb-3">
              Trusted by Leading Clients & Partners
            </h2>
            {/* <p className="text-gray-400 text-sm tracking-wide">
              Trusted by Our Clients & Partners
            </p> */}
          </div>

          <LogoLoop
            logos={partnerLogos}
            speed={50}
            direction="right"
            logoHeight={50}
            gap={26}
            hoverSpeed={20}
            scaleOnHover
            fadeOut
            fadeOutColor="#bb9b32"
            ariaLabel="Trusted clients and partners"
          />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#0a0a0a] overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-[#D4AF37] font-bold text-xs tracking-[0.3em] uppercase mb-4">
              Client Feedback
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
              Trusted by Clients Across Nigeria for Over 20 Years
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={t.id}
                {...fadeIn}
                transition={{ delay: i * 0.1 }}
                className="bg-black p-10 border border-white/5 relative"
              >
                <div className="text-[#D4AF37] text-6xl font-serif absolute top-4 right-8 opacity-20">
                  "
                </div>
                <p className="text-gray-400 text-lg leading-relaxed mb-8 relative z-10 font-light italic">
                  {t.quote}
                </p>
                <div className="flex items-center space-x-4">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#D4AF37]/30"
                  />
                  <div>
                    <h5 className="font-bold text-white tracking-tight">
                      {t.name}
                    </h5>
                    <p className="text-[#D4AF37] text-[10px] tracking-widest uppercase font-medium">
                      {t.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?q=80&w=2000&auto=format&fit=crop"
            className="w-full h-full object-cover opacity-30 grayscale"
            alt="CTA background"
          />
          <div className="absolute inset-0 bg-black/80" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <motion.div {...fadeIn}>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 leading-[1.1]">
              Ready to <span className="text-[#D4AF37]">Partner</span> With a Trusted Construction Expert?
            </h2>
            <p className="text-xl text-gray-400 mb-10 font-light">
              Whether you’re planning your dream home, a commercial building, or a government project, 
              Yuswas Investment Ltd brings decades of experience to every project, delivering quality and reliability from start to finish.
            </p>
            <a
              href="/contact"
              className="inline-block hover:scale-105 transition-transform"
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
                    Let’s Build Together
                  </span>
                </GlassSurface>
              </BorderGlow>
            </a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Page;
