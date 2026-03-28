import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { NAV_LINKS, CONTACT_INFO } from "../data/siteContent";
// import { Instagram, Facebook } from "lucide-react";
import { SiTiktok, SiWhatsapp } from 'react-icons/si';

const Footer = () => {
  const whatsappPrefill = encodeURIComponent(
    "Hello Yuswas Investments Ltd, I would like to make an inquiry about your services.",
  );
  const emailSubject = encodeURIComponent("Inquiry from Website");
  const emailBody = encodeURIComponent(
    "Hello Yuswas Investments Ltd,\n\nI would like to make an inquiry about your services.\n\nThank you.",
  );

  return (
    <footer className="bg-black text-white pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1 space-y-6">
            <a href="/" className="flex items-center">
              <div className="leading-tight">
                <span className="block text-2xl font-bold tracking-tight text-white">
                  YUSWAS
                </span>
                <span className="font-cinzel-decorative block text-xs tracking-widest text-[#D4AF37] uppercase">
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
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Building the future through quality construction and reliable development. 
              Your trusted partner for homes, commercial buildings, and infrastructure projects.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href={`mailto:${CONTACT_INFO.email}?subject=${emailSubject}&body=${emailBody}`}
                className="w-10 h-10 bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400 bg-opacity-10 hover:scale-110 hover:bg-opacity-25 rounded-full flex items-center justify-center transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-white" />
              </a>

              <a
                href="https://facebook.com/IyaIlorinGold"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#1877F2] bg-opacity-20 hover:bg-[#1877F2] hover:scale-110 rounded-full flex items-center justify-center transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-[#1877F2]" />
              </a>

              <a
                href="https://tiktok.com/@IyaIlorinGold"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-black bg-opacity-20 hover:bg-red-500 hover:scale-110 rounded-full flex items-center justify-center transition-all duration-300"
                aria-label="TikTok"
              >
                <SiTiktok className="w-5 h-5 text-white" />
              </a>
              <a
              href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=${whatsappPrefill}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-[#25D366] bg-opacity-20 hover:bg-[#25D366] hover:scale-110 rounded-full flex items-center justify-center transition-all duration-300"
              aria-label="WhatsApp"
            >
              <SiWhatsapp className="w-5 h-5 text-white" />
            </a>
            <a
              href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-[#dee0df] bg-opacity-20 hover:bg-[#c3dacb] hover:scale-110 rounded-full flex items-center justify-center transition-all duration-300"
              aria-label="Phone"
            >
              <Phone className="w-5 h-5 text-white" />
            </a>
            </div>
            {/* <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-gray-500 hover:text-[#D4AF37] transition-colors"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div> */}

            
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-[#D4AF37] font-bold text-xs tracking-widest uppercase">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-[#D4AF37] font-bold text-xs tracking-widest uppercase">
              Our Expertise
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="/services"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Commercial Development
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Residential Estates
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Investment Management
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Property Advisory
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-2 md:col-span-1 space-y-6">
            <h4 className="text-[#D4AF37] font-bold text-xs tracking-widest uppercase">
              Get In Touch
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-gray-400 text-sm">
                <MapPin size={18} className="text-[#D4AF37] shrink-0 mt-0.5" />
                <span>{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400 text-sm">
                <Phone size={18} className="text-[#D4AF37] shrink-0" />
                <span>{CONTACT_INFO.phone}</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400 text-sm">
                <Mail size={18} className="text-[#D4AF37] shrink-0" />
                <span>{CONTACT_INFO.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-500 text-[10px] tracking-widest uppercase">
            © {new Date().getFullYear()} YUSWAS INVESTMENT LTD. ALL RIGHTS
            RESERVED.
          </p>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-gray-500 hover:text-white text-[10px] tracking-widest uppercase"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-white text-[10px] tracking-widest uppercase"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
