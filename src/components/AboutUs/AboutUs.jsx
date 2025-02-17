"use client";
import styles from "./AboutUs.module.scss";
import Image from "next/image";
import bottomIcon from "../../assets/icons/bottom_icon.svg";
import { useLocale, useTranslations } from "use-intl";

const AboutUs = () => {
  const locale = useLocale();
  const t = useTranslations("about");

  return (
    <section
      className={styles.aboutus}
      id="about"
      // style={{
      //   backgroundPosition:
      //     isDesktop && locale === "uz" ? "left top 196px" : "",
      // }}
    >
      <div className="container">
        <div className="flex justify-center items-center gap-2 mb-5 max-md:mb-0">
          <div className={styles.imageContainer}>
            <Image src={bottomIcon} fill alt="icon_bottom" loading="lazy" />
          </div>
          <h3 className={styles.title}>{t("title")}</h3>
        </div>
        <div
          className="flex justify-center max-md:hidden"
          data-scroll-opacity
          style={{ opacity: 0, transition: "opacity 1s ease" }}
        >
          <p
            className={styles.info}
            data-scroll-opacity
            style={{
              maxWidth: locale && "850px",
              opacity: 0.2,
              transition: "opacity 1s ease",
            }}
          >
            {t.rich("info", {
              span: (chunks) => <span className="font-bold">{chunks}</span>,
              "\n": () => <br />,
            })}
          </p>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.textWrapper}>
            <p
              className={styles.wrapperTitle}
              data-scroll-opacity
              style={{ opacity: 0.2, transition: "opacity 1s ease" }}
            >
              {t("wrapperTitle")}
            </p>
            <p
              className={styles.wrapperInfo}
              data-scroll-opacity
              style={{ opacity: 0.2, transition: "opacity 1s ease" }}
            >
              {t("wrapperInfo")}
            </p>
            <p
              className={styles.wrapperInfo}
              data-scroll-opacity
              style={{ opacity: 0.2, transition: "opacity 1s ease" }}
            >
              {t("wrapperInfo_2")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
