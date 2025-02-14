import React from "react";
import styles from "./LinerBtn.module.scss";

const LinerBtn = ({ children }, props) => {
  return (
    <div className={styles.container}>
      <button {...props} className={styles.btn}>
        {children}
      </button>
    </div>
  );
};

export default LinerBtn;
