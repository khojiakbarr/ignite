"use client";

import { Children, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const AOSInit = ({ children }) => {
  useEffect(() => {
    AOS.init({
      easing: "ease",
    });
  }, []);

  return <div>{children}</div>;
};
