"use client";

import React from "react";
import styles from "./Solutions.module.scss";
import Image from "next/image";
import bottomIcon from "../../assets/icons/bottom_icon.svg";
import SolutionCard from "../SolutionCard/SolutionCard";

import { useTranslations } from "next-intl";

const Solutions = () => {
  const t = useTranslations("solutons");
  const cards = t.raw("cards");

  return (
    <section className={styles.solutions} id="solutions">
      <div className="container">
        <div className="flex justify-center items-center gap-2 mb-5 max-md:mb-0">
          <div className={styles.imageContainer}>
            <Image src={bottomIcon} fill alt="icon_bottom" loading="lazy" />
          </div>
          <h4 className={styles.title}>{t("title")}</h4>
        </div>
        <p className={styles.info}>{t("info")}</p>
        <div className={styles.cardsGrid}>
          {cards.map((card, i) => (
            <SolutionCard key={i} data={card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
