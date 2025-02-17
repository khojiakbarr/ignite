import React from "react";
import styles from "./FooterStyles.module.scss";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import logo from "../../assets/logo.svg";
import LinerBtn from "../LinerBtn/LinerBtn";
import { useLocale, useTranslations } from "next-intl";
const Footer = () => {
  const locale = useLocale();
  const t = useTranslations("footer");
  const lists = t.raw("lists");
  console.log(locale);

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
            <h6
              className={`${styles.title} ${locale === "en" && "w-[300px]"}`}
              data-scroll-opacity
              style={{ opacity: 0.2, transition: "opacity 1s ease" }}
            >
              {t.rich("title", {
                span: (chunks) => <span className="font-bold">{chunks}</span>,
              })}
            </h6>
            <LinerBtn>{t("commercial")}</LinerBtn>
          </div>
          <div className={styles.center}>
            <div
              className={styles.telContainer}
              data-scroll-opacity
              style={{ opacity: 0.2, transition: "opacity 1s ease" }}
            >
              <p className={styles.centerTitle}>{t("centerTitle")}</p>
              <p className={styles.tel}>
                <Link href={"tel:+998903703322"}>+998 90 370 33 22</Link>
              </p>
              <p className={styles.tel}>
                <Link href={"tel:+998909000156"}>+998 90 900 01 56</Link>
              </p>
            </div>
            <ul
              className={styles.centerList}
              data-scroll-opacity
              style={{ opacity: 0.2, transition: "opacity 1s ease" }}
            >
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
          <div
            className={styles.rightSide}
            data-scroll-opacity
            style={{ opacity: 0.2, transition: "opacity 1s ease" }}
          >
            <ul className={styles.centerList}>
              {lists.map((item, i) => (
                <li key={i}>
                  <Link href={`#${item.id}`}>{item.text}</Link>
                </li>
              ))}
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
