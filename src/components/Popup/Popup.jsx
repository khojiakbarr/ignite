"use client";

import styles from "./PupupStyles.module.scss";
import { ArrowRight, X } from "lucide-react";
import { motion } from "framer-motion";
import { modalContentVariants, modalVariants } from "@/motions";
import { useTranslations } from "next-intl";
import { sendMessage } from "@/utils/sendMessage";
import toast from "react-hot-toast";

const Popup = ({ setIsOpen }) => {
  const t = useTranslations("popup");

  const submitForm = (e) => {
    e.preventDefault();
    sendMessage({ name: e.target[1].value, phone: e.target[2].value });
    toast.success("Отправлено успешно");
    setIsOpen(false);
  };

  return (
    <motion.div className={styles.modalContainer} initial="hidden" animate="visible" exit="hidden" variants={modalVariants}>
      <motion.form initial="hidden" animate="visible" exit="hidden" variants={modalContentVariants} className={styles.modal} onSubmit={submitForm}>
        <div className="flex justify-between">
          <h1 className={styles.title}>{t("title")}</h1>
          <button onClick={() => setIsOpen(false)}>
            <X />
          </button>
        </div>
        <div className="flex justify-between max-md:flex-col gap-3 mt-3 ">
          <label htmlFor="name" className={styles.label}>
            {t("name")}
            <input required className={styles.input} type="text" id="name" name="name" placeholder={t("name")} />
          </label>
          <label htmlFor="tel" className={styles.label}>
            {t("phone")}
            <input required className={styles.input} type="text" id="tel" name="phone" placeholder={t("phone")} />
          </label>
        </div>

        <div className="flex justify-end mt-3">
          <button className={styles.btn}>
            {t("send_message")}
            <ArrowRight />
          </button>
        </div>
      </motion.form>
    </motion.div>
  );
};

export default Popup;
