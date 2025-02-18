"use client";

import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

const SpeedLimitWrapper = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // Harakat davomiyligi (sekin yoki tez)
      // easing: (t) => 1 - Math.pow(1 - t, 3), // Smooth effekt
      smoothWheel: true, // G‘ildirak orqali smooth scrolling
      smoothTouch: false, // Telefon uchun smooth scrolling
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      // Tozalash
    };
  }, []);

  return <div>{children}</div>;
};

export default SpeedLimitWrapper;
