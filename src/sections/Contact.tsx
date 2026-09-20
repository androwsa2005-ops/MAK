import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Mail, Phone, MapPin, Send, Youtube, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { toast } from 'sonner';

const socialLinks = [
  { icon: Youtube, href: '#', label: 'يوتيوب' },
  { icon: Facebook, href: '#', label: 'فيسبوك' },
  { icon: Instagram, href: '#', label: 'إنستغرام' },
  { icon: Twitter, href: '#', label: 'تويتر' },
  { icon: Linkedin, href: '#', label: 'لينكد إن' },
];

export default function Contact() {
  const sectionRef = useScrollAnimation();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('تم إرسال الرسالة بنجاح! سنتواصل معك قريبًا.');
    setFormData({ fullName: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="section-padding bg-[#06080f]">
      <div ref={sectionRef} className="content-max-width">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Contact Info */}
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="animate-in text-4xl sm:text-5xl font-bold">
                <span className="text-white">هل أنت مستعد </span>
                <span className="text-[#00d4ff] text-glow">لبدء مشروعك؟</span>
              </h2>
              <p className="animate-in text-lg text-[#94a3b8] mt-4">
                دع فريق MAK Tech AI يساعدك في تحويل أفكارك إلى حلول ذكية تحقق النمو وتزيد من كفاءة أعمالك باستخدام أحدث تقنيات الذكاء الاصطناعي والتحول الرقمي.
              </p>
            </div>

            {/* Contact Details */}
            <div className="flex flex-col gap-5">
              <div className="animate-in flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[rgba(0,212,255,0.1)] border border-[rgba(0,212,255,0.2)] flex items-center justify-center flex-shrink-0">
                  <Mail size={20} className="text-[#00d4ff]" />
                </div>
                <div>
                  <span className="text-xs text-[#64748b]">البريد الإلكتروني</span>
                  <p className="text-white font-medium">info@maktech.ai</p>
                </div>
              </div>

              <div className="animate-in flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[rgba(0,212,255,0.1)] border border-[rgba(0,212,255,0.2)] flex items-center justify-center flex-shrink-0">
                  <Phone size={20} className="text-[#00d4ff]" />
                </div>
                <div>
                  <span className="text-xs text-[#64748b]">الهاتف</span>
                  <p className="text-white font-medium">+971 XX XXX XXXX</p>
                </div>
              </div>

              <div className="animate-in flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[rgba(0,212,255,0.1)] border border-[rgba(0,212,255,0.2)] flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-[#00d4ff]" />
                </div>
                <div>
                  <span className="text-xs text-[#64748b]">العنوان</span>
                  <p className="text-white font-medium">دبي - الإمارات العربية المتحدة</p>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="animate-in">
              <span className="text-sm text-[#64748b] mb-3 block">تابعنا</span>
              <div className="flex gap-3">
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
            </div>
          </div>

          {/* Right: Contact Form */}
          <form onSubmit={handleSubmit} className="animate-in flex flex-col gap-5 p-8 rounded-2xl bg-[#0f1729] border border-[#1e293b]">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-medium text-[#94a3b8] mb-2 block">الاسم</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="الاسم الكامل"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[#0a0e1a] border border-[#1e293b] text-white placeholder-[#475569] focus:outline-none focus:border-[#00d4ff] focus:ring-1 focus:ring-[#00d4ff] transition-all duration-300"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-[#94a3b8] mb-2 block">البريد الإلكتروني</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[#0a0e1a] border border-[#1e293b] text-white placeholder-[#475569] focus:outline-none focus:border-[#00d4ff] focus:ring-1 focus:ring-[#00d4ff] transition-all duration-300"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-medium text-[#94a3b8] mb-2 block">الهاتف</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+971 XX XXX XXXX"
                  className="w-full px-4 py-3 rounded-lg bg-[#0a0e1a] border border-[#1e293b] text-white placeholder-[#475569] focus:outline-none focus:border-[#00d4ff] focus:ring-1 focus:ring-[#00d4ff] transition-all duration-300"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-[#94a3b8] mb-2 block">الموضوع</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[#0a0e1a] border border-[#1e293b] text-white focus:outline-none focus:border-[#00d4ff] focus:ring-1 focus:ring-[#00d4ff] transition-all duration-300 appearance-none cursor-pointer"
                >
                  <option value="">اختر خدمة</option>
                  <option value="ai-solutions">حلول الذكاء الاصطناعي</option>
                  <option value="software-dev">تطوير البرمجيات</option>
                  <option value="digital-transform">التحول الرقمي</option>
                  <option value="consulting">الاستشارات والتدريب</option>
                  <option value="other">أخرى</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-[#94a3b8] mb-2 block">الرسالة</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="أخبرنا عن مشروعك..."
                rows={5}
                required
                className="w-full px-4 py-3 rounded-lg bg-[#0a0e1a] border border-[#1e293b] text-white placeholder-[#475569] focus:outline-none focus:border-[#00d4ff] focus:ring-1 focus:ring-[#00d4ff] transition-all duration-300 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#00d4ff] text-[#0a0e1a] font-semibold hover:scale-[1.02] transition-all duration-300 btn-glow mt-2"
            >
              <Send size={18} />
              تواصل معنا
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
