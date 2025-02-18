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
        <h5 className={styles.title}
        //  data-aos="zoom-in"
          // data-aos-duration="500"
          >
          {trust.title}
        </h5>
        <span className={styles.line}></span>
      </div>
      <div className="container">
        <div className={styles.cardWrapper}>
          {trust.trustCards.map((image, i) => (
            <TrustCard key={i} i={i} image={image} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trust;
