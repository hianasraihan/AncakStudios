'use client';

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'works', label: 'Works' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      const scrollY = window.scrollY + window.innerHeight / 2;

      const visibleSection = navItems.find(({ id }) => {
        const section = document.getElementById(id);
        if (!section) return false;

        const { offsetTop, offsetHeight } = section;
        return scrollY >= offsetTop && scrollY < offsetTop + offsetHeight;
      });

      if (visibleSection) {
        setActiveSection(visibleSection.id);
      }
    };

    window.addEventListener('scroll', onScroll);
    onScroll(); // Trigger on mount
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(targetId);
    }
    closeMenu();
  };

  return (
    <header>
      <nav
        className={`fixed top-0 w-full z-50 h-16 px-6 flex justify-between items-center transition-all duration-300 ${
          scrolled
            ? 'bg-white/80 backdrop-blur-md text-black shadow-sm'
            : 'bg-transparent text-white'
        }`}
      >
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/logo.jpg"
            alt="Logo"
            width={120}
            height={56}
            className="object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-sm uppercase">
          {navItems.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={(e) => handleSmoothScroll(e, id)}
                className={`hover:text-orange-500 transition border-b-2 ${
                  activeSection === id
                    ? 'border-orange-500'
                    : 'border-transparent'
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Contact Button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            onClick={(e) => handleSmoothScroll(e, 'contact')}
            className={`px-5 py-1.5 rounded-full text-sm font-medium transition ${
              scrolled
                ? 'bg-orange-500 text-white hover:bg-black'
                : 'bg-white text-black hover:bg-orange-500 hover:text-white'
            }`}
          >
            Contact
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={toggleMenu}
          className={`md:hidden focus:outline-none transition ${
            scrolled ? 'text-black' : 'text-white'
          }`}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-2/3 sm:w-1/2 bg-white text-black z-40 transform transition-transform duration-300 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col pt-20 px-8 gap-6 text-lg uppercase">
          {navItems.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => handleSmoothScroll(e, id)}
              className={`hover:text-orange-500 transition border-b-2 ${
                activeSection === id
                  ? 'border-orange-500'
                  : 'border-transparent'
              }`}
            >
              {label}
            </a>
          ))}
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
        />
      )}
    </header>
  );
}
