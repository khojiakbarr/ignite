"use client";

import { Link } from "@/i18n/routing";
import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import styles from "./Header.module.scss";
import logo from "../../assets/logo.svg";
import LinerBtn from "../LinerBtn/LinerBtn";
import { AnimatePresence, motion } from "framer-motion";
import { buttonVariants, containerVariants, itemVariants } from "@/motions";
import LocaleSwitcher from "../localeSwitcher/LocaleSwitcher";
import Popup from "../Popup/Popup";

const Header = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isMenu, setIsMenu] = useState(false);
  const t = useTranslations("header");
  const items = t.raw("items");
  const openMenu = () => {
    setIsMenu(!isMenu);
  };

  const openModal = () => {
    setIsMenu(false);
    setIsOpenModal(true);
  };

  useEffect(() => {
    if (isMenu) {
      window.document.querySelector("body").classList.add("overflow-hidden");
    } else {
      window.document.querySelector("body").classList.remove("overflow-hidden");
    }
  }, [isMenu]);

  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.navItems}>
          <div className="flex items-center gap-[35px]">
            <Link
              href="/"
              className={styles.logo}
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-speed="-2"
              data-scroll-position="top"
            >
              <Image src={logo} fill alt="logo" loading="lazy" />
            </Link>
            <div className={styles.desctopList}>
              <ul className={styles.navListItems}>
                {items.map((item, i) => {
                  if (item.id) {
                    return (
                      <li key={i}>
                        <Link href={`#${item.id}`}>{item.text}</Link>
                      </li>
                    );
                  } else {
                    return (
                      <li
                        key={i}
                        onClick={() => openModal(true)}
                        className="cursor-pointer"
                      >
                        {item.text}
                      </li>
                    );
                  }
                })}
              </ul>
              <button className={styles.btn} onClick={() => openModal(true)}>
                {t("contact")}
              </button>
            </div>
          </div>

          <AnimatePresence>
            {isMenu && (
              <motion.div
                className={styles.MobileList}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={containerVariants}
              >
                <div className="container h-full flex flex-col justify-between">
                  <motion.ul className={styles.listContainer}>
                    {items.map((item, i) => (
                      <motion.li key={i} variants={itemVariants}>
                        <Link
                          href={`#${item.id}`}
                          onClick={() => setIsMenu(false)}
                        >
                          {item.text}
                        </Link>
                      </motion.li>
                    ))}
                  </motion.ul>
                  <motion.div variants={buttonVariants}>
                    <center className="mb-6">
                      <button onClick={() => openModal(true)}>
                        {t("contact")}
                      </button>
                    </center>
                    <div className="flex justify-center">
                      <LinerBtn>{t("commercial")}</LinerBtn>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )}
            {isOpenModal && <Popup setIsOpen={setIsOpenModal} />}
          </AnimatePresence>

          <div className={styles.mobileActions}>
            <LocaleSwitcher />
            <button
              className={`menu w-[40px]  ${isMenu ? " opened" : null}  z-10 `}
              onClick={() => openMenu()}
              aria-label="Main Menu"
            >
              <svg width="40" height="40" viewBox="0 0 100 100">
                <path
                  className="line line1"
                  d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
                />
                <path className="line line2" d="M 20,50 H 80" />
                <path
                  className="line line3"
                  d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
                />
              </svg>
            </button>
          </div>
          <div
            className={styles.actions}
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="2"
            data-scroll-position="top"
          >
            <LocaleSwitcher />
            <LinerBtn>{t("commercial")}</LinerBtn>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
