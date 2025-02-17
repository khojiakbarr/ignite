"use client";

import React, { useEffect, useRef } from "react";
import "locomotive-scroll/dist/locomotive-scroll.css";

function LocomotiveScrollProvider({ children }) {
  const scrollRef = useRef(null);

  useEffect(() => {
    let locomotiveScroll;

    if (window.innerWidth >= 768) {
      const initScroll = async () => {
        if (typeof window !== "undefined" && scrollRef.current) {
          const LocomotiveScrollModule = await import("locomotive-scroll");
          locomotiveScroll = new LocomotiveScrollModule.default({
            el: scrollRef.current,
            smooth: true,
            lerp: 0.1,
          });

          // Scroll eventni boshqarish
          locomotiveScroll.on("scroll", (obj) => {
            const lerpElements =
              document.querySelectorAll("[data-scroll-lerp]");
            const opacityElements = document.querySelectorAll(
              "[data-scroll-opacity]"
            );

            lerpElements.forEach((el) => {
              const lerpValue =
                parseFloat(el.getAttribute("data-scroll-lerp")) || 0.1;
              const delayValue =
                parseFloat(el.getAttribute("data-scroll-delay")) || 0;

              const scrollY = obj.scroll.y;
              const targetY = scrollY * lerpValue;

              setTimeout(() => {
                el.style.transform = `translateY(${targetY}px)`;
              }, delayValue * 50);
            });

            // Opacity o'zgarishi
            opacityElements.forEach((el) => {
              const offsetTop = el.getBoundingClientRect().top + window.scrollY;
              const startFade = offsetTop - window.innerHeight * 0.8; // 80% ekranda ko‘ringanda boshlanadi
              const endFade = offsetTop; // Element ekranga to‘liq chiqqanda tugaydi

              const opacity = Math.min(
                Math.max((obj.scroll.y - startFade) / (endFade - startFade), 0),
                1
              );
              el.style.opacity = opacity;
            });
          });

          document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
            anchor.addEventListener("click", (e) => {
              e.preventDefault();
              const targetId = anchor.getAttribute("href").substring(1);
              const targetElement = document.getElementById(targetId);
              if (targetElement && locomotiveScroll) {
                locomotiveScroll.scrollTo(targetElement);
              }
            });
          });
        }
      };

      initScroll();

      return () => {
        if (locomotiveScroll) locomotiveScroll.destroy();
      };
    }
  }, []);

  return (
    <main ref={scrollRef} data-scroll-container>
      {children}
    </main>
  );
}

export default LocomotiveScrollProvider;
