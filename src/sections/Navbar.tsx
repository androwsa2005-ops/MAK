import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'الرئيسية', href: '#home' },
  { label: 'من نحن', href: '#about' },
  { label: 'خدماتنا', href: '#services' },
  { label: 'أعمالنا', href: '#portfolio' },
  { label: 'تواصل معنا', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMobileOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-20 flex items-center transition-all duration-500 ${
        scrolled
          ? 'bg-[rgba(10,14,26,0.95)] border-b border-[rgba(0,212,255,0.08)]'
          : 'bg-[rgba(10,14,26,0.7)]'
      }`}
    >
      <div className="content-max-width w-full flex items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo - slightly bigger */}
        <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center gap-2.5">
          <img src="/assets/logo.png" alt="MAK Tech AI" className="w-12 h-12 object-contain" />
          <span className="text-xl font-semibold text-white">
            MAK <span className="text-[#00d4ff]">Tech</span> AI
          </span>
        </a>

        {/* Desktop Nav Links - bigger text */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="relative text-lg font-medium text-[#b0bfd2] hover:text-white transition-colors duration-300 group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#00d4ff] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* CTA Button - premium style */}
        <a
          href="#contact"
          onClick={(e) => handleNavClick(e, '#contact')}
          className="hidden md:inline-flex items-center px-6 py-2.5 rounded-full bg-[rgba(0,212,255,0.08)] border border-[rgba(0,212,255,0.35)] text-base font-semibold text-[#00d4ff] hover:bg-[rgba(0,212,255,0.18)] hover:border-[rgba(0,212,255,0.55)] hover:shadow-[0_0_20px_rgba(0,212,255,0.15)] transition-all duration-300 hover:-translate-y-0.5"
        >
          ابدأ الآن
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-white"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="absolute top-20 left-0 right-0 bg-[rgba(10,14,26,0.98)] border-b border-[#1e293b] md:hidden">
          <div className="flex flex-col p-4 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-base font-medium text-[#94a3b8] hover:text-white transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[rgba(0,212,255,0.08)] border border-[rgba(0,212,255,0.35)] text-base font-semibold text-[#00d4ff]"
            >
              ابدأ الآن
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
