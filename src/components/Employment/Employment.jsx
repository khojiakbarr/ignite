import React from "react";
import styles from "./Employment.module.scss";
import Image from "next/image";
import bottomIcon from "../../assets/icons/bottom_icon.svg";
const Employment = () => {
  return (
    <section className={styles.employment}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className="flex justify-center items-center gap-2 mb-5">
            <div className={styles.imageContainer}>
              <Image src={bottomIcon} fill alt="icon_bottom" loading="lazy" />
            </div>
            <h2 className={styles.title}>чем мы занимаемся</h2>
          </div>
          <p className={styles.item}>
            Преобразуем сложные маркетинговые технологии
          </p>
          <p className={styles.item}>
            в{" "}
            <span className="font-bold">
              бизнес-решения, которые экономят ваше время, деньги и избавляют от
              стресса
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Employment;
