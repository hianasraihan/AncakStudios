'use client';

import { MouseEvent } from 'react';

export default function Hero() {
  const handleSmoothScroll = (
    e: MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="home"
      className="relative h-screen flex flex-col justify-center items-center text-center bg-black overflow-hidden"
    >
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover brightness-50 z-0"
      >
        <source src="/bg-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <div className="z-10 px-6">
        <h1 className="text-white text-3xl md:text-5xl font-semibold leading-tight md:leading-[1.2]">
          Selamat datang di <span className="text-orange-500">AncakStudios</span>,<br />
          tempat di mana setiap momen <br /> diabadikan dengan keahlian
        </h1>
        <p className="text-white mt-4 text-sm md:text-base opacity-80">
          Based in Jakarta
        </p>

        {/* Buttons */}
        <div className="mt-8 flex gap-4 justify-center flex-wrap">
          <a
            href="#contact"
            onClick={(e) => handleSmoothScroll(e, 'contact')}
            className="bg-orange-500 text-white rounded-full px-6 py-2 font-medium hover:bg-orange-600 transition"
          >
            Contact us
          </a>
          <a
            href="#about"
            onClick={(e) => handleSmoothScroll(e, 'about')}
            className="bg-transparent border border-white text-white rounded-full px-6 py-2 font-medium hover:bg-orange-500 hover:border-orange-500 hover:text-white transition"
          >
            More about us
          </a>
        </div>
      </div>
    </section>
  );
}
