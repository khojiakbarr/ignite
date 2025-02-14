"use client";

import { useEffect, useRef, useState, useTransition } from "react";
import { useLocale } from "next-intl";
import { useParams } from "next/navigation";
import Image from "next/image";
import { usePathname, useRouter } from "@/i18n/routing";
import styles from "./LanguageSelect.module.scss";

const languages = [
  { value: "uz", label: "O'zbek" },
  { value: "ru", label: "Русский" },
  { value: "en", label: "English" },
];
const LocaleSwitcher = () => {
  const locale = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(
    languages.find((el) => el.value === locale)
  );
  const dropdownRef = useRef(null);
  const router = useRouter();
  const [isPending, startTransition] = useTransition(); // useTransition dan foydalanish
  const pathname = usePathname();
  const params = useParams();

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    if (typeof window !== "undefined") {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, []);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectLanguage = (language) => {
    const nextLocale = language.value;
    startTransition(() => {
      router.replace({ pathname, params }, { locale: nextLocale });
    });
    setSelectedLanguage(language);
    setIsOpen(false);
  };
  return (
    <div className={styles.languageSelect} ref={dropdownRef}>
      <button
        className={styles.selectButton}
        onClick={toggleDropdown}
        disabled={isPending}
      >
        {selectedLanguage.label}
        <span className={styles.arrow}>{isOpen ? "▲" : "▼"}</span>
      </button>
      {isOpen && (
        <ul className={styles.optionsList}>
          {languages.map((language, i) => (
            <li
              key={i}
              className={styles.option}
              onClick={() => selectLanguage(language)}
            >
              {language.label}
              {language.value === "uz" && (
                <div className="w-[24px] ">
                  <Image
                    className="w-full"
                    src="https://purecatamphetamine.github.io/country-flag-icons/3x2/UZ.svg"
                    alt="uz"
                    width={24}
                    height={20}
                  />
                </div>
              )}
              {language.value === "ru" && (
                <div className="w-[24px] ">
                  <Image
                    className="w-full"
                    src="https://purecatamphetamine.github.io/country-flag-icons/3x2/RU.svg"
                    alt="ru"
                    width={24}
                    height={20}
                  />
                </div>
              )}
              {language.value === "en" && (
                <div className="w-[24px] ">
                  <Image
                    className="w-full"
                    src="https://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg"
                    alt="en"
                    width={24}
                    height={20}
                  />
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LocaleSwitcher;
