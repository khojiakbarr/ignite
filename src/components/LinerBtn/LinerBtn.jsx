"use client";

import React from "react";
import styles from "./LinerBtn.module.scss";

const LinerBtn = (props) => {
  const downloadFile = async () => {
    if (typeof window !== "undefined") {
      const response = await fetch("/api/download");
      const blob = await response.blob();
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };
  return (
    <div className={styles.container}>
      <button {...props} className={styles.btn} onClick={() => downloadFile()}>
        {props.children}
      </button>
    </div>
  );
};

export default LinerBtn;
