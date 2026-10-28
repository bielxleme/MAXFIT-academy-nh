import { useEffect, useRef, useState, type ReactNode } from 'react';

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

type RevealProps = {
  children: ReactNode;
  /** Atraso em ms para a entrada escalonada */
  delay?: number;
  className?: string;
  /** Elemento HTML a renderizar (mantém semântica quando necessário) */
  as?: 'div' | 'li' | 'article' | 'header' | 'figure';
};

/**
 * Revela o conteúdo suavemente quando ele entra na viewport.
 * Respeita prefers-reduced-motion via CSS.
 */
export default function Reveal({ children, delay = 0, className = '', as = 'div' }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [hidden, setHidden] = useState(() => !prefersReducedMotion());

  useEffect(() => {
    if (!hidden) return;
    const el = ref.current;
    if (!el) return;

    let done = false;
    let frame = 0;

    const reveal = () => {
      if (done) return;
      done = true;
      setHidden(false);
      setVisible(true);
      window.removeEventListener('scroll', scheduleCheck);
      window.removeEventListener('resize', scheduleCheck);
      observer?.disconnect();
    };

    const inView = () => {
      const rect = el.getBoundingClientRect();
      const threshold = Math.min(rect.height * 0.12, 80);
      return rect.top < window.innerHeight - threshold && rect.bottom > threshold;
    };

    // Fallback determinístico: checa posição real no mount e a cada scroll/resize.
    // Garante que o conteúdo nunca fique invisível mesmo se o IntersectionObserver
    // não disparar (ambientes headless/ociosos ou suporte irregular).
    const check = () => {
      if (done) return;
      if (inView() || el.getBoundingClientRect().top < window.innerHeight) reveal();
    };

    const scheduleCheck = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        check();
      });
    };

    let observer: IntersectionObserver | undefined;
    if (typeof IntersectionObserver !== 'undefined') {
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) reveal();
          }
        },
        { threshold: 0.12, rootMargin: '0px 0px -48px 0px' }
      );
      observer.observe(el);
    }

    // Verificação imediata cobre elementos já visíveis no carregamento inicial.
    check();
    window.addEventListener('scroll', scheduleCheck, { passive: true });
    window.addEventListener('resize', scheduleCheck);

    return () => {
      window.removeEventListener('scroll', scheduleCheck);
      window.removeEventListener('resize', scheduleCheck);
      observer?.disconnect();
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  const Tag = as as 'div';
  const stateClass = hidden ? 'reveal--hidden' : '';

  return (
    <Tag
      ref={ref as React.RefObject<HTMLDivElement>}
      data-visible={visible}
      style={{ transitionDelay: hidden ? `${delay}ms` : undefined }}
      className={`reveal ${stateClass} ${className}`.trim()}
    >
      {children}
    </Tag>
  );
}
