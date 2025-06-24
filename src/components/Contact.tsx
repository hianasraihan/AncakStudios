import React from 'react';
import { FaWhatsapp, FaInstagram, FaTiktok } from 'react-icons/fa';

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="bg-black text-white py-28 px-6 md:px-12 lg:px-32"
    >
      <div className="max-w-4xl mx-auto text-center space-y-12">
        {/* Heading */}
        <div className="space-y-4">
          <h2 className="text-5xl md:text-6xl font-extrabold text-orange-500 drop-shadow-lg">
            Let’s Connect
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            Jangan ragu untuk menghubungi kami. Kami siap membantu Anda menciptakan karya visual terbaik.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center items-center gap-10 md:gap-16 text-4xl md:text-5xl">
          <a
            href="https://wa.me/6287785281817"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="text-white hover:text-green-400 transition duration-300"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://www.instagram.com/ancakstudios/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-white hover:text-pink-500 transition duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.tiktok.com/@ancakstudios"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="text-white hover:text-gray-200 transition duration-300"
          >
            <FaTiktok />
          </a>
        </div>

        {/* CTA */}
        <div>
          <a
            href="https://wa.me/6287785281817"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block bg-orange-500 hover:bg-orange-600 text-white text-lg font-semibold px-8 py-4 rounded-full transition duration-300"
          >
            Chat via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
