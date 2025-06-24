'use client';

import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const services = [
  {
    title: 'Video Editing',
    description: 'Edit video secara profesional untuk konten yang lebih menarik dan berkualitas.',
  },
  {
    title: 'Graphic Design',
    description: 'Desain grafis yang memperkuat identitas visual brand Anda.',
  },
  {
    title: 'Aerial Drone',
    description: 'Pengambilan gambar dari udara dengan perspektif sinematik.',
  },
  {
    title: 'Photography',
    description: 'Layanan fotografi profesional untuk berbagai kebutuhan visual.',
  },
  {
    title: 'Videography',
    description: 'Produksi video kreatif dan berkualitas tinggi untuk bisnis Anda.',
  },
  {
    title: 'Social Media Management',
    description: 'Kelola akun sosial media secara strategis dan konsisten.',
  },
  {
    title: 'Social Media Branding',
    description: 'Bangun citra brand yang kuat di platform sosial media.',
  },
  {
    title: 'Digital Marketing',
    description: 'Strategi pemasaran digital yang efektif dan terukur.',
  },
  {
    title: 'Frontend Developer',
    description: 'Pembuatan antarmuka web yang responsif dan interaktif.',
  },
];

export default function Services() {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: false,
    mode: 'free-snap',
    renderMode: 'performance',
    rubberband: true,
    defaultAnimation: {
      duration: 800,
      easing: (t) => 1 - Math.pow(1 - t, 4),
    },
    slides: {
      perView: 1.2,
      spacing: 16,
    },
    breakpoints: {
      '(min-width: 640px)': {
        slides: { perView: 2.2, spacing: 16 },
      },
      '(min-width: 1024px)': {
        slides: { perView: 3.5, spacing: 24 },
      },
      '(min-width: 1280px)': {
        slides: { perView: 4.5, spacing: 24 },
      },
    },
  });

  return (
    <section id="services" className="bg-black text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-2">
              Our Services <span className="text-orange-500">———</span>
            </h2>
            <p className="text-gray-400 max-w-md text-sm md:text-base">
              Kami menyediakan layanan kreatif untuk membantu brand Anda tampil menonjol secara visual dan digital.
            </p>
          </div>

          {/* Arrows */}
          <div className="flex space-x-3">
            <button
              onClick={() => instanceRef.current?.prev()}
              className="p-2 rounded-full bg-neutral-800 hover:bg-orange-500 transition"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => instanceRef.current?.next()}
              className="p-2 rounded-full bg-neutral-800 hover:bg-orange-500 transition"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div ref={sliderRef} className="keen-slider">
          {services.map((service, index) => (
            <div key={index} className="keen-slider__slide h-full flex">
              <div className="bg-neutral-900 p-6 rounded-lg border border-neutral-800 hover:border-orange-500 transition flex flex-col justify-between w-full h-full min-h-[240px]">
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-orange-500">
                      {String(index + 1).padStart(2, '0')}
                    </h3>
                    <h4 className="text-lg font-semibold mb-2">{service.title}</h4>
                    <p className="text-sm text-gray-400 line-clamp-3">{service.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
