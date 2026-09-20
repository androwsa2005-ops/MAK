import { useRef, useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface TiltCardProps {
  image: string;
  label: string;
  title: string;
}

function TiltCard({ image, label, title }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('perspective(1000px) rotateX(0deg) rotateY(0deg)');
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    const rotateX = -y * 12;
    const rotateY = x * 12;
    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);
  };

  const handleMouseLeave = () => {
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
    setIsHovered(false);
  };

  return (
    <div
      ref={cardRef}
      className="animate-in relative rounded-2xl overflow-hidden cursor-pointer will-change-transform"
      style={{
        transform,
        transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
        border: '1px solid #1e293b',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500"
          style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a] via-transparent to-transparent opacity-80" />

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <span className="text-xs font-medium text-[#00d4ff]">{label}</span>
          <h3 className="text-2xl font-bold text-white mt-1">{title}</h3>
        </div>
      </div>

      {/* Glow border on hover */}
      {isHovered && (
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{
            boxShadow: 'inset 0 0 30px rgba(0, 212, 255, 0.15), 0 0 30px rgba(0, 212, 255, 0.1)',
          }}
        />
      )}
    </div>
  );
}

const capabilities = [
  {
    image: '/assets/cap-brain.jpg',
    label: 'أنظمة ذكية',
    title: 'تطوير الذكاء الاصطناعي',
  },
  {
    image: '/assets/cap-digital.jpg',
    label: 'حلول رقمية',
    title: 'التسويق الذكي',
  },
  {
    image: '/assets/cap-face.jpg',
    label: 'تصميم برمجيات',
    title: 'أنظمة الكمبيوتر',
  },
];

export default function Capabilities() {
  const sectionRef = useScrollAnimation();

  return (
    <section className="section-padding bg-[#0a0e1a]">
      <div ref={sectionRef} className="content-max-width">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="animate-in inline-block text-base font-medium text-[#00d4ff] mb-4">
            قدراتنا
          </span>
          <h2 className="animate-in text-4xl sm:text-5xl font-bold">
            <span className="text-white">حلول مدعومة </span>
            <span className="text-[#00d4ff] text-glow">بالذكاء</span>
          </h2>
          <p className="animate-in text-lg text-[#94a3b8] mt-4 max-w-2xl mx-auto">
            نقدم حلولاً تقنية شاملة تحول الأعمال وتدفع عجلة الابتكار عبر الصناعات المختلفة.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {capabilities.map((cap) => (
            <TiltCard key={cap.title} {...cap} />
          ))}
        </div>
      </div>
    </section>
  );
}
