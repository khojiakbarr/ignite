"use client";

import React, { useEffect, useRef, useState } from "react";
import "locomotive-scroll/dist/locomotive-scroll.css";
import AOS from "aos";
import "aos/dist/aos.css";

function LocomotiveScrollProvider({ children }) {
  const scrollRef = useRef(null);
  const [locomotiveScroll, setLocomotiveScroll] = useState(null);

  useEffect(() => {
    if (window.innerWidth < 768) return;

    const initScroll = async () => {
      if (typeof window !== "undefined" && scrollRef.current) {
        const { default: LocomotiveScroll } = await import("locomotive-scroll");
        const scrollInstance = new LocomotiveScroll({
          el: scrollRef.current,
          smooth: true,
          lerp: 0.1,
        });

        setLocomotiveScroll(scrollInstance);

        setTimeout(() => {
          AOS.init({
            duration: 600, // Animatsiya tezligi
            once: true, // Har safar scroll bo‘lganda animatsiya qayta ishlaydi
            offset: 100, // Element ekranning 100px qismiga kelganda animatsiya boshlanadi
          });
          AOS.refresh();
        }, 100);

        // ✅ Locomotive Scroll harakatini AOS bilan bog‘lash
        scrollInstance.on("scroll", () => {
          AOS.refresh();
        });

        document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
          anchor.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = anchor.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
              scrollInstance.scrollTo(targetElement);
            }
          });
        });
      }
    };

    initScroll();

    return () => {
      locomotiveScroll?.destroy();
    };
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container>
      {children}
    </div>
  );
}

export default LocomotiveScrollProvider;
