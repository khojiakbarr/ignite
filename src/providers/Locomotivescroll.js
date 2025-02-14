"use client";

// import dynamic from "next/dynamic";
import React, { useEffect, useRef } from "react";
import "locomotive-scroll/dist/locomotive-scroll.css";

// const LocomotiveScroll = dynamic(() => import("locomotive-scroll"), {
//   ssr: false,
// });

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
            lerp: 0.1, // Maxsus LERP effektni qo'llash
          });
          // Scroll eventni boshqarish
          locomotiveScroll.on("scroll", (obj) => {
            const lerpElements =
              document.querySelectorAll("[data-scroll-lerp]");

            lerpElements.forEach((el) => {
              const lerpValue =
                parseFloat(el.getAttribute("data-scroll-lerp")) || 0.1;
              const delayValue =
                parseFloat(el.getAttribute("data-scroll-delay")) || 0;

              const scrollY = obj.scroll.y;
              const targetY = scrollY * lerpValue;

              // Kechikish bilan transformni qo'llash
              setTimeout(() => {
                el.style.transform = `translateY(${targetY}px)`;
              }, delayValue * 50); // Kechikishni millisekundga o'girish
            });
          });

          document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
            anchor.addEventListener("click", (e) => {
              e.preventDefault(); // Brauzerning odatiy harakatini to‘xtatish

              const targetId = anchor.getAttribute("href").substring(1); // ID ni olish
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
    <div ref={scrollRef} data-scroll-container>
      {children}
    </div>
  );
}

export default LocomotiveScrollProvider;
