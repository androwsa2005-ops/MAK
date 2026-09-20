import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Brain, Code2, Smartphone, Globe } from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: 'حلول الذكاء الاصطناعي',
    description:
      'تصميم حلول ذكية تساعد المؤسسات على تحسين الأداء وزيادة الإنتاجية واتخاذ قرارات دقيقة.',
    tags: ['تعلم آلي', 'معالجة اللغات', 'رؤية حاسوبية', 'تحليل بيانات'],
    image: '/assets/service-ai.png',
  },
  {
    icon: Code2,
    title: 'تطوير البرمجيات',
    description:
      'تصميم وتطوير أنظمة وبرامج احترافية تلبي احتياجات المؤسسات والشركات.',
    tags: ['أنظمة مخصصة', 'تكامل', 'قواعد بيانات', 'أتمتة'],
    image: '/assets/portfolio-2.jpg',
  },
  {
    icon: Smartphone,
    title: 'تطوير تطبيقات الهاتف',
    description:
      'إنشاء تطبيقات Android وiOS تتميز بالسرعة والأمان وسهولة الاستخدام.',
    tags: ['iOS', 'Android', 'React Native', 'Flutter'],
    image: '/assets/portfolio-3.jpg',
  },
  {
    icon: Globe,
    title: 'تطوير مواقع الويب',
    description:
      'تصميم مواقع إلكترونية احترافية ومتاجر إلكترونية ومنصات أعمال متطورة.',
    tags: ['مواقع شركات', 'متاجر', 'منصات', 'تطبيقات ويب'],
    image: '/assets/portfolio-4.jpg',
  },
];

export default function Services() {
  const sectionRef = useScrollAnimation();

  return (
    <section id="services" className="section-padding bg-[#06080f]">
      <div ref={sectionRef} className="content-max-width">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="animate-in inline-block text-base font-medium text-[#00d4ff] mb-4">
            خدماتنا
          </span>
          <h2 className="animate-in text-4xl sm:text-5xl font-bold">
            <span className="text-white">حلولنا </span>
            <span className="text-[#00d4ff] text-glow">التقنية</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="animate-in group relative rounded-2xl overflow-hidden border border-[#1e293b] hover:border-[rgba(0,212,255,0.3)] transition-all duration-500 card-glow card-glow-hover cursor-pointer"
                style={{ minHeight: 260 }}
              >
                {/* Background Image - clear always, very slight scale on hover */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${service.image})` }}
                />

                {/* Dark Overlay - lighter so icon/title are always clear */}
                <div className="absolute inset-0 bg-[#0a0e1a]/60 transition-all duration-700 group-hover:bg-[#0a0e1a]/85" />

                {/* Content */}
                <div className="relative z-10 p-8 h-full flex flex-col justify-between" style={{ minHeight: 260 }}>
                  {/* Top: Icon + Title - ALWAYS clearly visible */}
                  <div>
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-[rgba(0,212,255,0.15)] border border-[rgba(0,212,255,0.3)] flex items-center justify-center mb-4 drop-shadow-[0_0_10px_rgba(0,212,255,0.2)]">
                      <Icon size={24} className="text-[#00d4ff]" />
                    </div>

                    {/* Title - Always clear and visible */}
                    <h3 className="text-xl font-semibold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                      {service.title}
                    </h3>
                  </div>

                  {/* Bottom: Hidden initially, slides in from RIGHT on hover */}
                  <div className="flex flex-col gap-4 overflow-hidden">
                    {/* Description - Slides from RIGHT with stronger effect */}
                    <p className="text-[#e2e8f0] leading-relaxed text-sm translate-x-full opacity-0 transition-all duration-700 ease-out group-hover:translate-x-0 group-hover:opacity-100"
                       style={{ textShadow: '0 1px 3px rgba(0,0,0,0.8)' }}>
                      {service.description}
                    </p>

                    {/* Tags - Slide from RIGHT with stagger */}
                    <div className="flex flex-wrap gap-2">
                      {service.tags.map((tag, i) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full text-xs font-medium text-[#00d4ff] border border-[rgba(0,212,255,0.3)] bg-[rgba(0,212,255,0.12)] translate-x-16 opacity-0 transition-all duration-500 ease-out group-hover:translate-x-0 group-hover:opacity-100"
                          style={{ transitionDelay: `${200 + i * 100}ms` }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
