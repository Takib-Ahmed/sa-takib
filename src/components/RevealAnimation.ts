import { useEffect } from "react";

export function useRevealOnScroll(className = "Hidden2") {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("Reveal2");
        } else {
          entry.target.classList.remove("Reveal2");
        }
      });
    });

    const elements = document.querySelectorAll(`.${className}`);
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [className]);
}
