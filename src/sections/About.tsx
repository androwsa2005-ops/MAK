import { BrainCircuit, Target, ShieldCheck } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const highlights = [
  {
    icon: BrainCircuit,
    title: 'أنظمة ذكية متكاملة',
    text: 'نصمم ونطور الأنظمة الذكية التي تساعد المؤسسات على تحسين الأداء، وتقليل التكاليف، وتسريع الإجراءات.',
  },
  {
    icon: Target,
    title: 'قرارات أكثر دقة',
    text: 'نعتمد على البيانات والذكاء الاصطناعي لدعم اتخاذ قرارات أكثر دقة تخدم أهداف كل عميل.',
  },
  {
    icon: ShieldCheck,
    title: 'جودة وأمان وابتكار',
    text: 'يجمع فريقنا بين الخبرة التقنية والرؤية العملية مع الالتزام بأعلى معايير الجودة والأمان.',
  },
];

export default function About() {
  const sectionRef = useScrollAnimation();

  return (
    <section id="about" className="section-padding bg-[#0a0e1a] relative overflow-hidden">
      {/* Soft background accents */}
      <div className="absolute -top-24 left-1/4 w-[28rem] h-[28rem] bg-[rgba(0,212,255,0.05)] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-32 right-1/4 w-[24rem] h-[24rem] bg-[rgba(0,212,255,0.03)] rounded-full blur-[120px] pointer-events-none" />

      <div ref={sectionRef} className="content-max-width relative">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="flex flex-col gap-7">
            <div className="animate-in inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(0,212,255,0.2)] bg-[rgba(0,212,255,0.05)] w-fit">
              <span className="w-2 h-2 rounded-full bg-[#00d4ff]"></span>
              <span className="text-base font-medium text-[#00d4ff]">من نحن</span>
            </div>

            <h2 className="animate-in text-4xl sm:text-5xl font-bold leading-tight">
              <span className="text-white">MAK </span>
              <span className="text-[#00d4ff] text-glow">Tech AI</span>
            </h2>

            <p className="animate-in text-xl text-[#c7d2e2] leading-relaxed border-r-2 border-[#00d4ff] pr-5">
              شركة متخصصة في تطوير حلول الذكاء الاصطناعي والتحول الرقمي، تقدم خدمات تقنية متكاملة للشركات والجهات الحكومية والمؤسسات التعليمية ورواد الأعمال.
            </p>

            <div className="flex flex-col gap-4 mt-2">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="animate-in group flex items-start gap-4 rounded-2xl border border-[#1e293b] bg-[rgba(15,23,41,0.5)] p-5 transition-all duration-300 hover:border-[rgba(0,212,255,0.3)] hover:bg-[rgba(0,212,255,0.03)]"
                >
                  <div className="shrink-0 w-11 h-11 rounded-xl border border-[rgba(0,212,255,0.25)] bg-[rgba(0,212,255,0.08)] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <item.icon size={20} className="text-[#00d4ff]" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    <p className="text-base text-[#94a3b8] leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image with decorative frame */}
          <div className="animate-in relative flex justify-center">
            {/* Glow behind */}
            <div className="absolute inset-8 bg-[rgba(0,212,255,0.08)] rounded-full blur-[90px] pointer-events-none" />

            <div className="relative rounded-3xl border border-[rgba(0,212,255,0.15)] bg-gradient-to-b from-[#0f1729] to-[#0a0e1a] p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
              <img
                src="/assets/about-3d.png"
                alt="3D Geometric Shapes"
                className="w-full max-w-md object-contain rounded-2xl"
              />

              {/* Corner accents */}
              <span className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-[rgba(0,212,255,0.5)] rounded-tr-3xl" />
              <span className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-[rgba(0,212,255,0.5)] rounded-bl-3xl" />
            </div>

            {/* Floating accent card */}
            <div className="absolute -bottom-5 right-2 sm:right-6 flex items-center gap-3 rounded-2xl border border-[rgba(0,212,255,0.25)] bg-[rgba(10,14,26,0.9)] backdrop-blur-sm px-5 py-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00d4ff] animate-pulse" />
              <span className="text-sm font-semibold text-white">ذكاء اصطناعي برؤية بشرية</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
