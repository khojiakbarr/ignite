"use client";

import { Link } from "@/i18n/routing";
import React, { useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import styles from "./Header.module.scss";
import logo from "../../assets/logo.svg";
import LinerBtn from "../LinerBtn/LinerBtn";
import { AnimatePresence, motion } from "framer-motion";
import { buttonVariants, containerVariants, itemVariants } from "@/motions";

export const navItems = ["aboutus", "reshenya", "project", "client"];
export const navItemsMobile = [
  "aboutus",
  "reshenya",
  "project",
  "client",
  "контакты",
];
const Header = () => {
  const [isMenu, setIsMenu] = useState(false);
  const t = useTranslations("header");

  const openMenu = () => {
    setIsMenu(!isMenu);
  };

  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.navItems}>
          <Link href="/" className={styles.logo}>
            {/* // t("logo") */}
            <Image src={logo} fill alt="logo" loading="lazy" />
          </Link>
          <div className={styles.desctopList}>
            <ul className={styles.nvListItems}>
              {navItems.map((item, i) => (
                <li key={i}>
                  <Link href={`#${item}`}>
                    {/* t(item) */}
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
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
                <motion.ul className={styles.listContainer}>
                  {navItemsMobile.map((item, i) => (
                    <motion.li key={i} variants={itemVariants}>
                      <Link href={`#${item}`}>
                        {/* t(item) */}
                        {item}
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>
                <motion.div variants={buttonVariants}>
                  <div className="flex justify-center">
                    <Link href={"#коммерческое предложение"}>
                      <LinerBtn>коммерческое предложение</LinerBtn>
                    </Link>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          <button
            className={`menu w-[40px]  ${
              isMenu ? " opened" : null
            }  z-10 min-[767px]:hidden`}
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
          <div className={styles.actions}>
            <Link href={"#контакты"} className={styles.contact}>
              контакты
            </Link>
            <Link href={"#коммерческое предложение"}>
              <LinerBtn>коммерческое предложение</LinerBtn>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
