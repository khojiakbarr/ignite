import React from "react";
// import LocaleSwitcher from "@/components/localeSwitcher/LocaleSwitcher";
import styles from "./Hero.module.scss";
import RequestBtn from "../RequestBtn/RequestBtn";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.wrapper}>
          <h1 className={styles.title}>
            <strong>Границы?</strong>
            <br />
            Мы их
            <br />
            <strong>стираем</strong>
          </h1>
          <p className={styles.description}>
            Ignite – рекламное агентство полного цикла
          </p>
          <RequestBtn>оставить заявку</RequestBtn>
        </div>
      </div>
    </section>
  );
};

export default Hero;
