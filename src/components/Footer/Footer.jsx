import React from "react";
import styles from "./FooterStyles.module.scss";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import logo from "../../assets/logo.svg";
import LinerBtn from "../LinerBtn/LinerBtn";
const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.leftSide}>
            <Link href="/" className="p-0">
              <div className={styles.logoContainer}>
                <Image src={logo} fill loading="lazy" alt="logo" />
              </div>
            </Link>
              <h6 className={styles.title}>
                Перестань <span className="font-bold">мечтать</span>, <br />{" "}
                начни <span className="font-bold">действовать</span>
              </h6>
            <LinerBtn>Коммерческое предложение</LinerBtn>
          </div>
          <div className={styles.center}>
            <div className={styles.telContainer}>
              <p className={styles.centerTitle}>телефоны</p>
              <p className={styles.tel}>
                <Link href={"tel:+998903703322"}>+998 90 370 33 22</Link>
              </p>
              <p className={styles.tel}>
                <Link href={"tel:+998909000156"}>+998 90 900 01 56</Link>
              </p>
            </div>
            <ul className={styles.centerList}>
              <li className="underline">
                <Link href={"#"}>telegram</Link>
              </li>
              <li className="underline">
                <Link href={"#"}>Instagram</Link>
              </li>
              <li className="underline">
                <Link href={"#"}>Facebook</Link>
              </li>
            </ul>
          </div>
          <div className={styles.rightSide}>
            <ul className={styles.centerList}>
              <li className="">
                <Link href={"#"}>О нас</Link>
              </li>
              <li className="">
                <Link href={"#"}>решения</Link>
              </li>
              <li className="">
                <Link href={"#"}>Клиенты</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.footerLine}>
          <p className={styles.copyright}>2025</p>{" "}
          <p className={styles.copyright}>Ignite media ©</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
