import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { NAV_LINKS } from "../data/siteContent";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // We can't use useLocation, but we can check window.location.pathname
  const [pathname, setPathname] = useState("");

  useEffect(() => {
    setPathname(window.location.pathname);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/95 backdrop-blur-md py-4 border-b border-white/10"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">

        <a href="/" className="flex items-center">
          <div className="leading-tight">
            <span className="block text-2xl font-bold tracking-tight text-white">
              YUSWAS
            </span>
            <span className="font-cinzel-decorative  block text-xs tracking-widest text-[#D4AF37] uppercase">
              Investment Ltd
            </span>
          </div>
        </a>

        {/* <a href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold tracking-tight text-white">
            YUSWAS
          </span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37]">
            Investment Ltd
          </span>
        </a> */}

        {/* <a href="/" className="flex items-center">
        <span className="text-2xl font-bold tracking-tight text-white">
          YUSWAS{" "}
          <span className="text-sm font-medium text-[#D4AF37] tracking-wide">
            Investment Ltd
          </span>
        </span>
      </a> */}

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-xs font-bold tracking-widest transition-colors hover:text-[#D4AF37] ${
                pathname === link.href ? "text-[#D4AF37]" : "text-white"
              }`}
            >
              {link.name.toUpperCase()}
            </a>
          ))}
          <a
            href="/contact"
            className="bg-[#D4AF37] hover:bg-[#B8962E] text-black text-[10px] font-black tracking-widest px-6 py-2 rounded-none transition-all transform hover:scale-105"
          >
            REQUEST A QUOTE
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-black z-[60] flex flex-col items-center justify-center space-y-8"
          >
            <button
              className="absolute top-6 right-6 text-white p-2"
              onClick={() => setIsOpen(false)}
            >
              <X size={32} />
            </button>
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-3xl font-bold tracking-tighter transition-colors hover:text-[#D4AF37] ${
                  pathname === link.href ? "text-[#D4AF37]" : "text-white"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="/contact"
              className="bg-[#D4AF37] text-black text-center font-black px-10 py-4 text-xl tracking-tighter"
              onClick={() => setIsOpen(false)}
            >
              REQUEST A QUOTE
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
