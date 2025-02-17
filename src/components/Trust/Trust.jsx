import React from "react";
import TrustCard from "./TrustCard";
import styles from "./TrustStyle.module.scss";
import { useTranslations } from "next-intl";

const Trust = () => {
  const t = useTranslations();
  const trust = t.raw("trust");
  return (
    <section className={styles.trust} id="trust">
      <div className={styles.titleContainer}>
        <span className={styles.line}></span>
        <h5 className={styles.title}>{trust.title}</h5>
        <span className={styles.line}></span>
      </div>
      <div className="container">
        <div
          className={styles.cardWrapper}
          data-scroll-opacity
          style={{ opacity: 0.2, transition: "opacity 1s ease" }}
        >
          {trust.trustCards.map((image, i) => (
            <TrustCard key={i} image={image} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trust;
