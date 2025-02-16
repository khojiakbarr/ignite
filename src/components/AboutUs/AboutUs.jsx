"use client";
import React from "react";
import styles from "./AboutUs.module.scss";
import Image from "next/image";
import bottomIcon from "../../assets/icons/bottom_icon.svg";
import { useTranslations } from "use-intl";

const AboutUs = () => {
  const t = useTranslations("about");

  return (
    <section className={styles.aboutus} id="about">
      <div className="container">
        <div className="flex justify-center items-center gap-2 mb-5 max-md:mb-0">
          <div className={styles.imageContainer}>
            <Image src={bottomIcon} fill alt="icon_bottom" loading="lazy" />
          </div>
          <h3 className={styles.title}>{t("title")}</h3>
        </div>
        <div className="flex justify-center max-md:hidden">
          <p className={styles.info}>
            {t.rich("info", {
              span: (chunks) => <span className="font-bold">{chunks}</span>,
              "\n": () => <br />,
            })}
          </p>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.textWrapper}>
            <p className={styles.wrapperTitle}>{t("wrapperTitle")}</p>
            <p className={styles.wrapperInfo}>{t("wrapperInfo")}</p>
            <p className={styles.wrapperInfo}>{t("wrapperInfo_2")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
