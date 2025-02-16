import React from "react";
import styles from "./Employment.module.scss";
import Image from "next/image";
import bottomIcon from "../../assets/icons/bottom_icon.svg";
import { useTranslations } from "next-intl";
const Employment = () => {
  const t = useTranslations("employment");

  return (
    <section className={styles.employment}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className="flex justify-center items-center gap-2 mb-5">
            <div className={styles.imageContainer}>
              <Image src={bottomIcon} fill alt="icon_bottom" loading="lazy" />
            </div>
            <h2 className={styles.title}>{t("title")}</h2>
          </div>
          <p
            className={styles.item}
            data-scroll
            data-scroll-direction="vertical"
            data-scroll-speed="-0.3"
            data-scroll-position="top"
          >
            {t("info")}
          </p>
          <p
            className={styles.item}
            data-scroll
            data-scroll-direction="vertical"
            data-scroll-speed="-0.4"
            data-scroll-position="top"
          >
            {t.rich("item", {
              span: (chunks) => <span className="font-bold">{chunks}</span>,
            })}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Employment;
