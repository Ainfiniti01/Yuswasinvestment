import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Send,
  ArrowRight,
  Facebook,

} from "lucide-react";
import Layout from "../../components/Layout";
import BorderGlow from "../../components/BorderGlow";
import GlassSurface from "../../components/GlassSurface";
import { CONTACT_INFO } from "../../data/siteContent";
import { SiWhatsapp, SiTiktok } from "react-icons/si";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

  const whatsappPrefill = encodeURIComponent(
    "Hello Yuswas Investments Ltd, I would like to make an inquiry about your services.",
  );
  const emailSubject = encodeURIComponent("Inquiry from Website");
  const emailBody = encodeURIComponent(
    "Hello Yuswas Investments Ltd,\n\nI would like to make an inquiry about your services.\n\nThank you.",
  );

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const getEncodedMessage = () => {
    const text = `Hello Yuswas Investments Ltd,

My name is ${formData.name}. I'm interested in your services.

Email: ${formData.email}
Subject: ${formData.subject || "General Inquiry"}

Message:
${formData.message}

Please contact me at your earliest convenience. Thank you.`;
    return encodeURIComponent(text);
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message)
      return alert("Please fill in required fields");

    setIsSubmitting(true);
    setTimeout(() => {
      const url = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${getEncodedMessage()}`;
      window.open(url, "_blank");
      setIsSubmitting(false);
    }, 1000);
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message)
      return alert("Please fill in required fields");

    setIsSubmitting(true);
    setTimeout(() => {
      const mailtoUrl = `mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(formData.subject || "Inquiry from Website")}&body=${getEncodedMessage()}`;
      window.location.href = mailtoUrl;
      setIsSubmitting(false);
    }, 1000);
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
              Contact Us
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">
              Let’s Build <span className="text-[#D4AF37]">Your Vision</span> Into Reality
            </h1>
            <p className="text-xl text-gray-400 font-light leading-relaxed">
              Whether you’re planning a dream home, a commercial landmark, or a complex government project, Alhaji Yusuf and the Yuswas Investment team are ready to guide you from concept to completion with expertise, precision, and reliability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-black border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Form Column */}
            <motion.div {...fadeIn}>
              <h3 className="text-3xl font-bold tracking-tighter mb-8">
                Send Us a Message
              </h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold tracking-widest uppercase text-gray-500">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full bg-[#0a0a0a] border border-white/10 p-4 text-white focus:border-[#D4AF37] transition-colors outline-none font-light"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold tracking-widest uppercase text-gray-500">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full bg-[#0a0a0a] border border-white/10 p-4 text-white focus:border-[#D4AF37] transition-colors outline-none font-light"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold tracking-widest uppercase text-gray-500">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry"
                    className="w-full bg-[#0a0a0a] border border-white/10 p-4 text-white focus:border-[#D4AF37] transition-colors outline-none font-light"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold tracking-widest uppercase text-gray-500">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell us about your project..."
                    className="w-full bg-[#0a0a0a] border border-white/10 p-4 text-white focus:border-[#D4AF37] transition-colors outline-none font-light resize-none"
                  ></textarea>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button
                    onClick={handleWhatsAppSubmit}
                    disabled={isSubmitting}
                    className="flex-1 disabled:opacity-50 transition-transform hover:scale-[1.02]"
                  >
                    <BorderGlow
                      className="rounded-full"
                      borderRadius={999}
                      edgeSensitivity={28}
                      glowColor="42 85 68"
                      backgroundColor="transparent"
                      glowRadius={24}
                      glowIntensity={0.75}
                      coneSpread={22}
                      animated={false}
                      colors={["#fcd34d", "#f59e0b", "#fde68a"]}
                    >
                      <GlassSurface
                        width="100%"
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
                        <span className="inline-flex w-full items-center justify-center space-x-3 px-8 py-5 text-white font-black text-sm tracking-widest">
                          <MessageSquare size={20} />
                          <span>
                            {isSubmitting ? "PROCESSING..." : "SEND VIA WHATSAPP"}
                          </span>
                        </span>
                      </GlassSurface>
                    </BorderGlow>
                  </button>
                  <button
                    onClick={handleEmailSubmit}
                    disabled={isSubmitting}
                    className="flex-1 disabled:opacity-50 transition-transform hover:scale-[1.02]"
                  >
                    <BorderGlow
                      className="rounded-full"
                      borderRadius={999}
                      edgeSensitivity={28}
                      glowColor="42 85 68"
                      backgroundColor="transparent"
                      glowRadius={24}
                      glowIntensity={0.75}
                      coneSpread={22}
                      animated={false}
                      colors={["#fcd34d", "#f59e0b", "#fde68a"]}
                    >
                      <GlassSurface
                        width="100%"
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
                        <span className="inline-flex w-full items-center justify-center space-x-3 px-8 py-5 text-white font-black text-sm tracking-widest">
                          <Mail size={20} />
                          <span>
                            {isSubmitting ? "PROCESSING..." : "SEND VIA EMAIL"}
                          </span>
                        </span>
                      </GlassSurface>
                    </BorderGlow>
                  </button>
                </div>
              </form>
            </motion.div>

            {/* Info Column */}
            <motion.div
              {...fadeIn}
              transition={{ delay: 0.2 }}
              className="lg:pl-10"
            >
              <h3 className="text-3xl font-bold tracking-tighter mb-8">
                Contact Information
              </h3>
              <div className="space-y-12">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-[#0a0a0a] border border-white/10 flex items-center justify-center shrink-0">
                    <MapPin className="text-[#D4AF37]" size={24} />
                  </div>
                  <div className="space-y-6">
                    {CONTACT_INFO.locations.map((loc, i) => (
                      <div key={i}>
                        <h4 className="text-[#D4AF37] text-[10px] tracking-widest uppercase font-black mb-2">
                          {loc.name}
                        </h4>
                        <p className="text-xl text-white font-light leading-relaxed">
                          {loc.address}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-[#0a0a0a] border border-white/10 flex items-center justify-center shrink-0">
                    <Phone className="text-[#D4AF37]" size={24} />
                  </div>
                  <div>
                    <h4 className="text-[#D4AF37] text-[10px] tracking-widest uppercase font-black mb-2">
                      Call Us
                    </h4>
                    <p className="text-xl text-white font-light leading-relaxed">
                      <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-[#D4AF37] transition-colors">
                        {CONTACT_INFO.phone}
                      </a>
                    </p>
                    <p className="text-gray-500 text-sm font-light">
                      Mon - Fri, 9am - 6pm
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-[#0a0a0a] border border-white/10 flex items-center justify-center shrink-0">
                    <SiWhatsapp className="text-[#D4AF37]" size={24} />
                  </div>
                  <div>
                    <h4 className="text-[#D4AF37] text-[10px] tracking-widest uppercase font-black mb-2">
                      Whatsapp
                    </h4>
                    <p className="text-xl text-white font-light leading-relaxed">
                      <a href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/\D/g, '')}`} className="hover:text-[#D4AF37] transition-colors">
                        {CONTACT_INFO.whatsapp}
                      </a>
                    </p>
                    <p className="text-gray-500 text-sm font-light">
                      Anytime
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-[#0a0a0a] border border-white/10 flex items-center justify-center shrink-0">
                    <Mail className="text-[#D4AF37]" size={24} />
                  </div>
                  <div>
                    <h4 className="text-[#D4AF37] text-[10px] tracking-widest uppercase font-black mb-2">
                      Email Us
                    </h4>
                    <p className="text-xl text-white font-light leading-relaxed">
                      <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-[#D4AF37] transition-colors">  
                        {CONTACT_INFO.email}
                      </a>
                    </p>
                    <p className="text-gray-500 text-sm font-light">
                      Direct inquiries & support
                    </p>
                  </div>
                </div>

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
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] bg-black relative grayscale border-b border-white/5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.6090711860147!2d4.541844275902161!3d8.537278991505755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1036521900000001%3A0xe14a5cb39e00e682!2sYUSWAS!5e0!3m2!1sen!2sng!4v1774611895487!5m2!1sen!2sng"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="YUSWAS Location Map"
          className="w-full h-full"
        ></iframe>
      </section>
    </Layout>
  );
};

export default ContactPage;
