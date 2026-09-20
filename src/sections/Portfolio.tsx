import { useScrollAnimation } from '../hooks/useScrollAnimation';

const projects = [
  {
    image: '/assets/portfolio-1.jpg',
    category: 'تعلم آلي',
    title: 'منصة نكسوس الذكية',
    span: 'col-span-1',
  },
  {
    image: '/assets/portfolio-2.jpg',
    category: 'هندسة سحابية',
    title: 'بنية البيانات التحتية',
    span: 'col-span-1',
  },
  {
    image: '/assets/portfolio-3.jpg',
    category: 'أبحاث الذكاء الاصطناعي',
    title: 'الواجهة العصبية',
    span: 'col-span-1',
  },
  {
    image: '/assets/portfolio-4.jpg',
    category: 'الروبوتات',
    title: 'حزمة الأتمتة',
    span: 'col-span-1',
  },
  {
    image: '/assets/portfolio-5.jpg',
    category: 'التعلم العميق',
    title: 'مركز البيانات الذكي',
    span: 'col-span-1 md:col-span-2',
  },
];

export default function Portfolio() {
  const sectionRef = useScrollAnimation();

  return (
    <section id="portfolio" className="section-padding bg-[#0a0e1a]">
      <div ref={sectionRef} className="content-max-width">
        {/* Header */}
        <div className="mb-12">
          <span className="animate-in inline-block text-base font-medium text-[#00d4ff] mb-4">
            أعمالنا
          </span>
          <h2 className="animate-in text-4xl sm:text-5xl font-bold">
            <span className="text-white">مشاريعنا </span>
            <span className="text-[#00d4ff] text-glow">المميزة</span>
          </h2>
          <p className="animate-in text-lg text-[#94a3b8] mt-4 max-w-2xl">
            استكشف أحدث مشاريعنا التي تبرز الابتكار في الذكاء الاصطناعي والتحول الرقمي وحلول التقنية المتقدمة.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`animate-in group relative rounded-2xl overflow-hidden cursor-pointer ${project.span}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`relative ${index === 4 ? 'aspect-[5/2]' : 'aspect-[4/3]'} overflow-hidden`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a] via-[rgba(10,14,26,0.3)] to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-300" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="text-xs font-medium text-[#00d4ff]">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-semibold text-white mt-1">{project.title}</h3>
                </div>

                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    boxShadow: 'inset 0 0 40px rgba(0, 212, 255, 0.1)',
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
