import { useEffect, useRef, type ReactNode, type ElementType } from "react";

type Props = {
  as?: ElementType;
  className?: string;
  children: ReactNode;
  delay?: number;
  slow?: boolean;
};

export function Reveal({ as: Tag = "div", className = "", children, delay = 0, slow = false }: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setTimeout(() => el.setAttribute("data-visible", "true"), delay);
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  return (
    <Tag ref={ref as never} className={`${slow ? "reveal-slow" : "reveal"} ${className}`}>
      {children}
    </Tag>
  );
}
