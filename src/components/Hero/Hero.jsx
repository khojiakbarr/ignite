"use client";

import React, { useEffect, useState } from "react";
import styles from "./Hero.module.scss";
import RequestBtn from "../RequestBtn/RequestBtn";
import Popup from "../Popup/Popup";
import { AnimatePresence } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";

const Hero = () => {
  const locale = useLocale();
  const t = useTranslations("hero");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        setIsOpen(false); // Scroll bo'lsa modal yopiladi
      };

      // LocomotiveScroll bo'lsa, uni tekshirib event qo‘shamiz
      const scrollContainer = document.querySelector("[data-scroll-container]");
      if (scrollContainer) {
        scrollContainer.addEventListener("scroll", handleScroll);
      } else {
        window.addEventListener("scroll", handleScroll);
      }

      if (isOpen) {
        document.body.classList.add("overflow-hidden");
      } else {
        document.body.classList.remove("overflow-hidden");
      }

      return () => {
        if (scrollContainer) {
          scrollContainer.removeEventListener("scroll", handleScroll);
        } else {
          window.removeEventListener("scroll", handleScroll);
        }
      };
    }
  }, [isOpen]);

  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.wrapper}>
          <h1
            className={`${styles.title}`}
            style={{ maxWidth: locale === "en" && "750px" }}
            data-scroll
            data-scroll-direction="vertical"
            data-scroll-speed="-1"
            data-scroll-position="top"
            // data-aos="fade-right"
            // data-aos-duration="400"
          >
            {t.rich("title", {
              strong: (chunks) => <strong>{chunks}</strong>,
              "\n": () => <br />, // Yangi qatorni <br /> ga o'zgartirish
            })}
          </h1>
          <p
            className={styles.description}
            data-scroll
            data-scroll-direction="vertical"
            data-scroll-speed="-1.5"
            data-scroll-position="top"
            // data-aos="fade-right"
            // data-aos-duration="600"
          >
            {t("info")}
          </p>
          <div
            data-scroll
            data-scroll-speed="-2"
            data-scroll-position="top"
            // data-aos="fade-right"
            // data-aos-duration="800"
          >
            <RequestBtn onClick={() => setIsOpen(true)}>{t("btn")}</RequestBtn>
          </div>
          <AnimatePresence>
            {isOpen && <Popup setIsOpen={setIsOpen} />}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
export default Hero;
