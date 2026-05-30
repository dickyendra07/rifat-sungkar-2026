"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("main section"));

    sections.forEach((section, index) => {
      section.classList.add("rs-reveal");
      section.setAttribute("data-rs-index", String(index));
      section.classList.remove("rs-visible");
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const element = entry.target;

          if (entry.isIntersecting) {
            element.classList.add("rs-visible");
            observer.unobserve(element);
          }
        });
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -120px 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return null;
}
