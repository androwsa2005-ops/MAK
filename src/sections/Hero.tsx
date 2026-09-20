import { useRef, useState } from 'react';
import { ArrowLeft, Sparkles, ChevronDown } from 'lucide-react';
import ParticleNetwork from '../components/ParticleNetwork';
import { useHeroScrollAnimation } from '../hooks/useScrollAnimation';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [brainLoaded, setBrainLoaded] = useState(false);
  useHeroScrollAnimation(heroRef);

  const handleExplore = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Particle Network Background */}
      <ParticleNetwork />

      {/* Content */}
      <div className="relative z-10 content-max-width w-full px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-80px)]">
          {/* Left: Text Content */}
          <div className="flex flex-col gap-6">
            {/* Badge */}
            <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(0,212,255,0.3)] bg-[rgba(0,212,255,0.08)] w-fit">
              <Sparkles size={16} className="text-[#00d4ff]" />
              <span className="text-sm font-medium text-[#00d4ff]">حلول الذكاء الاصطناعي والتحول الرقمي</span>
            </div>

            {/* Headline */}
            <div className="hero-headline">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1]">
                <span className="headline-line block text-white">حلول ذكية</span>
                <span className="headline-line block text-[#00d4ff] text-glow">نحو مستقبل</span>
                <span className="headline-line block text-white">أكثر ذكاءً</span>
              </h1>
            </div>

            {/* Description */}
            <p className="hero-desc text-lg text-[#94a3b8] max-w-xl leading-relaxed">
              نساعد الشركات والمؤسسات على تحقيق التحول الرقمي من خلال حلول الذكاء الاصطناعي المتقدمة، وتطوير البرمجيات، وأتمتة العمليات، وتحليل البيانات، وبناء الأنظمة الذكية التي ترفع الكفاءة وتزيد الإنتاجية وتدعم اتخاذ القرار.
            </p>

            {/* CTA Buttons */}
            <div className="hero-buttons flex flex-wrap gap-4 mt-2">
              <button
                onClick={handleExplore}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#00d4ff] text-[#0a0e1a] font-semibold hover:scale-105 transition-all duration-300 btn-glow"
              >
                ابدأ مشروعك
                <ArrowLeft size={18} />
              </button>
              <button
                onClick={handleContact}
                className="inline-flex items-center px-6 py-3.5 rounded-lg border border-[#1e293b] text-white font-semibold hover:border-[rgba(0,212,255,0.3)] hover:bg-[rgba(0,212,255,0.05)] transition-all duration-300"
              >
                تعرف علينا
              </button>
            </div>
          </div>

          {/* Right: Brain Image with float + glow */}
          <div className="hero-brain hidden lg:flex justify-center items-center">
            <img
              src="/assets/hero-side.png"
              alt="AI Brain"
              onLoad={() => setBrainLoaded(true)}
              className={`w-full max-w-lg object-contain animate-float transition-opacity duration-1000 ease-out ${
                brainLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                filter: 'drop-shadow(0 0 60px rgba(0, 212, 255, 0.4)) drop-shadow(0 0 120px rgba(0, 212, 255, 0.15))',
              }}
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hero-scroll absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-xs font-medium text-[#64748b]">تمرير</span>
        <ChevronDown size={20} className="text-[#00d4ff] animate-bounce" />
      </div>
    </section>
  );
}
