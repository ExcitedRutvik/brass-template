import { useEffect, useRef, useState } from 'react';

/**
 * Pointer-driven parallax. Attach `ref` to the container and use `offset`
 * (normalized -0.5..0.5) to build transforms in the component. Disabled for
 * reduced motion. Returning plain state (not a ref-reading function) keeps
 * render pure.
 */
export function useParallax() {
  const ref = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - (rect.left + rect.width / 2)) / rect.width;
      const y = (e.clientY - (rect.top + rect.height / 2)) / rect.height;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setOffset({ x, y }));
    };
    const onLeave = () => setOffset({ x: 0, y: 0 });
    el.addEventListener('mousemove', onMove, { passive: true });
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return { ref, offset };
}

// Build a parallax transform style from an offset and depth.
export function parallaxStyle(offset, depth) {
  return {
    transform: `translate3d(${offset.x * depth * 40}px, ${offset.y * depth * 40}px, 0)`,
    transition: 'transform 200ms ease-out',
  };
}
