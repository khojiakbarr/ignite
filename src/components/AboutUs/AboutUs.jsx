import React from "react";
import styles from "./AboutUs.module.scss";
import Image from "next/image";
import bottomIcon from "../../assets/icons/bottom_icon.svg";

const AboutUs = () => {
  return (
    <section className={styles.aboutus}>
      <div className="container">
        <div className="flex justify-center items-center gap-2 mb-5 max-md:mb-0">
          <div className={styles.imageContainer}>
            <Image src={bottomIcon} fill alt="icon_bottom" loading="lazy" />
          </div>
          <h3 className={styles.title}>о нас</h3>
        </div>
        <div className="flex justify-center max-md:hidden">
          <p className={styles.info}>
            Кто мы и как <span className="font-bold">воплощаем </span>
            <br />
            ваши идеи <span className="font-bold">в реальность</span>
          </p>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.textWrapper}>
            <p className={styles.wrapperTitle}>
              Ignite Media — ваш надежный партнёр в развитии бизнеса!
            </p>
            <p className={styles.wrapperInfo}>
              Мы предоставляем профессиональные решения для всех направлений
              B2B, помогая компаниям достигать своих целей и эффективно
              развиваться. Наш опыт охватывает широкий спектр отраслей, включая
              сотрудничество с государственным сектором.
            </p>
            <p className={styles.wrapperInfo}>
              Мы готовы стать вашим проводником в реализации масштабных
              проектов, оптимизации процессов и создании инновационных решений.
              С нами Вы станете сильнее, а ваши результаты - стабильнее!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
