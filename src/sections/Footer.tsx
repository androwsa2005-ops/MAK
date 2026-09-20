import { Youtube, Facebook, Instagram, Twitter, Linkedin, ArrowUp } from 'lucide-react';

const quickLinks = [
  { label: 'الرئيسية', href: '#home' },
  { label: 'من نحن', href: '#about' },
  { label: 'خدماتنا', href: '#services' },
  { label: 'أعمالنا', href: '#portfolio' },
  { label: 'تواصل معنا', href: '#contact' },
];

const socialLinks = [
  { icon: Youtube, href: '#', label: 'يوتيوب' },
  { icon: Facebook, href: '#', label: 'فيسبوك' },
  { icon: Instagram, href: '#', label: 'إنستغرام' },
  { icon: Twitter, href: '#', label: 'تويتر' },
  { icon: Linkedin, href: '#', label: 'لينكد إن' },
];

export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#06080f] border-t border-[#1e293b]">
      <div className="content-max-width px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Left: Logo & Tagline */}
          <div>
            <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center mb-4">
              <img src="/assets/logo.png" alt="MAK Tech AI" className="h-14 w-auto object-contain" />
            </a>
            <p className="text-[#94a3b8] text-sm leading-relaxed max-w-xs">
              حلول مبتكرة في الذكاء الاصطناعي والتحول الرقمي وتطوير البرمجيات.
            </p>
          </div>

          {/* Center: Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">روابط سريعة</h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-[#94a3b8] hover:text-[#00d4ff] transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Connect */}
          <div>
            <h4 className="text-white font-semibold mb-4">تواصل معنا</h4>
            <div className="flex gap-3 mb-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-lg bg-[#0f1729] border border-[#1e293b] flex items-center justify-center text-[#94a3b8] hover:text-[#00d4ff] hover:border-[rgba(0,212,255,0.3)] transition-all duration-300"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
            <p className="text-[#64748b] text-sm">
              تابعنا للحصول على أحدث التحديثات والرؤى.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-[#1e293b]">
          <p className="text-[#64748b] text-sm">
            &copy; 2026 MAK Tech AI. جميع الحقوق محفوظة. |{' '}
            <span className="text-[#00d4ff]">بدعم من الذكاء</span>
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-[#94a3b8] hover:text-[#00d4ff] transition-colors duration-300"
          >
            العودة للأعلى
            <span className="w-9 h-9 rounded-lg bg-[rgba(0,212,255,0.1)] border border-[rgba(0,212,255,0.45)] text-[#00d4ff] flex items-center justify-center shadow-[0_0_12px_rgba(0,212,255,0.15)]">
              <ArrowUp size={18} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
