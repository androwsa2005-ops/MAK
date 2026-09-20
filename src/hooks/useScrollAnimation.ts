import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const children = el.querySelectorAll('.animate-in');
    if (children.length === 0) return;

    gsap.set(children, { opacity: 0, y: 30 });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(children, {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.08,
              ease: 'power2.out',
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, []);

  return ref;
}

export function useHeroScrollAnimation(heroRef: React.RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    const badge = el.querySelector('.hero-badge');
    const headline = el.querySelector('.hero-headline');
    const desc = el.querySelector('.hero-desc');
    const buttons = el.querySelector('.hero-buttons');
    const scroll = el.querySelector('.hero-scroll');
    const brain = el.querySelector('.hero-brain');

    // Entrance animations
    const tl = gsap.timeline({ delay: 0.3 });

    if (badge) {
      gsap.set(badge, { opacity: 0, x: -30 });
      tl.to(badge, { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out' }, 0);
    }

    if (headline) {
      const lines = headline.querySelectorAll('.headline-line');
      gsap.set(lines, { opacity: 0, x: -40 });
      tl.to(lines, { opacity: 1, x: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out' }, 0.2);
    }

    if (desc) {
      gsap.set(desc, { opacity: 0, y: 20 });
      tl.to(desc, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, 0.6);
    }

    if (buttons) {
      gsap.set(buttons, { opacity: 0, y: 20 });
      tl.to(buttons, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, 0.8);
    }

    if (scroll) {
      gsap.set(scroll, { opacity: 0 });
      tl.to(scroll, { opacity: 1, duration: 0.8, ease: 'power3.out' }, 1);
    }

    if (brain) {
      gsap.set(brain, { opacity: 0, scale: 0.9 });
      tl.to(brain, { opacity: 1, scale: 1, duration: 1.2, ease: 'power3.out' }, 0.4);
    }

    // Scroll-driven zoom-out effect
    const scrollTriggers: ScrollTrigger[] = [];

    if (headline) {
      const st = ScrollTrigger.create({
        trigger: el,
        start: 'top top',
        end: '50% top',
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          gsap.set(headline, {
            scale: 1 - progress * 0.2,
            opacity: 1 - progress,
          });
        },
      });
      scrollTriggers.push(st);
    }

    if (badge) {
      const st = ScrollTrigger.create({
        trigger: el,
        start: 'top top',
        end: '30% top',
        scrub: 1,
        onUpdate: (self) => {
          gsap.set(badge, { opacity: 1 - self.progress });
        },
      });
      scrollTriggers.push(st);
    }

    return () => {
      tl.kill();
      scrollTriggers.forEach((st) => st.kill());
    };
  }, [heroRef]);
}
