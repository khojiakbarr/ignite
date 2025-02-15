"use client";

import React from "react";
import styles from "./Solutions.module.scss";
import Image from "next/image";
import bottomIcon from "../../assets/icons/bottom_icon.svg";
import SolutionCard from "../SolutionCard/SolutionCard";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslations } from "next-intl";

const Solutions = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animatsiya faqat bir marta ishlaydi
    threshold: 0.5, // Ekranning 50% qismi ko‘ringanda ishga tushadi
  });

  const t = useTranslations();
  const cards = t.raw("cards");

  return (
    <section className={styles.solutions}>
      <div className="container">
        <div className="flex justify-center items-center gap-2 mb-5 max-md:mb-0">
          <div className={styles.imageContainer}>
            <Image src={bottomIcon} fill alt="icon_bottom" loading="lazy" />
          </div>
          <h4 className={styles.title}>решения</h4>
        </div>
        <p className={styles.info}>От стратегии до реализации ваших идей</p>
        <div className={styles.cardsGrid}>
          {cards.map((card, i) => (
            <SolutionCard key={i} data={card} />
            // t(card.title)
          ))}
        </div>
        {/* <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 100 }} // Pastdan chiqadi
          animate={inView ? { opacity: 1, y: 0 } : {}} // Faqat ko‘ringanda animatsiya bo‘ladi
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-blue-500 text-white p-5 rounded-lg text-center"
        >
          Ekran o‘rtasiga kelganda chiqadi! 🎉
        </motion.div> */}

        {/* <SolutionCard /> */}
        {/* <div className="h-screen"></div> */}
      </div>
    </section>
  );
};

export default Solutions;
