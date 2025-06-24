'use client';

import { FaWhatsapp, FaInstagram, FaTiktok } from 'react-icons/fa';

export default function About() {
  return (
    <section
      id="about"
      className="bg-black text-white min-h-screen flex flex-col justify-center items-center px-6 py-20 text-center relative"
    >
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-5xl">
        <span className="text-orange-500">AncakStudios</span> adalah agensi kreatif yang menciptakan visual yang berani melalui fotografi, videografi, dan desain digital.
      </h1>

      {/* CTA & Social */}
      <div className="mt-10 flex items-center gap-6 flex-wrap justify-center">
        {/* Contact Us button - direct to WhatsApp */}
        <a
          href="https://wa.me/6287785281817"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-orange-500 text-black px-6 py-3 rounded-full font-medium hover:bg-orange-600 transition"
        >
          Contact us
        </a>

        {/* Social Icons */}
        <div className="flex items-center gap-4 text-white text-xl">
          <a
            href="https://wa.me/6287785281817"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500 transition"
            aria-label="Whatsapp"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://www.instagram.com/ancakstudios/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500 transition"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.tiktok.com/@ancakstudios"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500 transition"
            aria-label="TikTok"
          >
            <FaTiktok />
          </a>
        </div>
      </div>
    </section>
  );
}
