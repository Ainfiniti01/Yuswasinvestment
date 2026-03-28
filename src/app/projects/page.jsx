import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight, MapPin, Maximize2 } from "lucide-react";
import Layout from "../../components/Layout";
import BorderGlow from "../../components/BorderGlow";
import GlassSurface from "../../components/GlassSurface";
import { PROJECTS } from "../../data/siteContent";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    if (typeof document !== "undefined") {
      document.body.style.overflow = "hidden";
    }
  };

  const closeLightbox = () => {
    setSelectedProject(null);
    if (typeof document !== "undefined") {
      document.body.style.overflow = "auto";
    }
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % selectedProject.gallery.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex(
      (prev) =>
        (prev - 1 + selectedProject.gallery.length) %
        selectedProject.gallery.length,
    );
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
              Our Portfolio
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">
              Landmarks of <span className="text-[#D4AF37]">Trust & Excellence</span>
            </h1>
            <p className="text-xl text-gray-400 font-light leading-relaxed">
              From banks and government buildings to residential estates, each project we deliver across Nigeria reflects decades of experience, precision, and a commitment to exceeding client expectations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, i) => (
              <motion.div
                key={project.id}
                {...fadeIn}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-[#0a0a0a] border border-white/5 overflow-hidden cursor-pointer"
              >
                {/* Project Image with overlay */}
                <div
                  className="relative h-[400px] overflow-hidden"
                  onClick={() => openLightbox(project)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:opacity-70"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                      <Maximize2 size={24} className="text-black" />
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-8">
                  <div className="flex items-center space-x-2 text-[#D4AF37] text-[10px] tracking-widest uppercase font-bold mb-3">
                    <MapPin size={12} />
                    <span>{project.location}</span>
                  </div>

                  <h3 className="text-2xl font-bold mb-2 tracking-tighter group-hover:text-[#D4AF37] transition-colors">
                    {project.title}
                  </h3>

                  {/* Client and Value */}
                  <div className="text-gray-400 text-xs mb-2 space-y-1">
                    <p>
                      <span className="font-semibold">Client:</span> {project.client}
                    </p>
                    <p>
                      <span className="font-semibold">Project Value:</span> {project.value}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-gray-500 text-sm font-light line-clamp-2 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* View Gallery CTA */}
                  <button
                    onClick={() => openLightbox(project)}
                    className="inline-block bg-[#D4AF37] text-black font-black px-6 py-2 text-xs tracking-widest uppercase hover:bg-[#B8962E] transition-all"
                  >
                    View Gallery
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, i) => (
              <motion.div
                key={project.id}
                {...fadeIn}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-[#0a0a0a] border border-white/5 overflow-hidden cursor-pointer"
                onClick={() => openLightbox(project)}
              >
                <div className="relative h-[400px] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:opacity-70"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                      <Maximize2 size={24} className="text-black" />
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center space-x-2 text-[#D4AF37] text-[10px] tracking-widest uppercase font-bold mb-3">
                    <MapPin size={12} />
                    <span>{project.location}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 tracking-tighter group-hover:text-[#D4AF37] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-sm font-light line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-10"
            onClick={closeLightbox}
          >
            <button
              className="absolute top-6 right-6 text-white hover:text-[#D4AF37] transition-colors z-[110]"
              onClick={closeLightbox}
            >
              <X size={32} />
            </button>

            <div className="relative w-full max-w-6xl h-full flex flex-col md:flex-row items-center justify-center gap-8">
              {/* Image Carousel */}
              <div className="relative flex-1 h-[60vh] md:h-[80vh] w-full bg-black flex items-center justify-center overflow-hidden border border-white/10">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                    src={selectedProject.gallery[currentImageIndex]}
                    className="w-full h-full object-contain"
                  />
                </AnimatePresence>

                {selectedProject.gallery.length > 1 && (
                  <>
                    <button
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-[#D4AF37] text-white hover:text-black p-3 transition-all"
                      onClick={prevImage}
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-[#D4AF37] text-white hover:text-black p-3 transition-all"
                      onClick={nextImage}
                    >
                      <ChevronRight size={24} />
                    </button>
                    {/* Dots */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
                      {selectedProject.gallery.map((_, i) => (
                        <div
                          key={i}
                          className={`w-1.5 h-1.5 rounded-full transition-all ${
                            i === currentImageIndex
                              ? "bg-[#D4AF37] w-6"
                              : "bg-white/30"
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Project Info */}
              <div
                className="w-full md:w-80 space-y-6 text-left"
                onClick={(e) => e.stopPropagation()}
              >
                <span className="text-[#D4AF37] text-xs font-black tracking-widest uppercase">
                  {selectedProject.category} / {selectedProject.location}
                </span>
                <h2 className="text-3xl font-bold tracking-tighter">
                  {selectedProject.title}
                </h2>
                <p className="text-gray-400 font-light leading-relaxed">
                  {selectedProject.description}
                </p>
                <div className="pt-6 border-t border-white/10">
                  <a
                    href="/contact"
                    className="inline-block bg-[#D4AF37] text-black font-black px-8 py-4 text-xs tracking-widest uppercase hover:bg-[#B8962E] transition-all"
                  >
                    Inquire About Project
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-6 text-center">
          <motion.div {...fadeIn}>
           <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8">
              Have a Landmark Vision?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-10 font-light">
              Whether it’s a dream home, a bank, or a government building, 
              we thrive on challenging projects that require precision and excellence. 
              Let’s discuss how Yuswas Investment Ltd can turn your vision into a lasting reality.
            </p>
            <a
              href="/contact"
              className="inline-block transition-transform hover:scale-105"
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
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectsPage;
