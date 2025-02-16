import React from "react";
import styles from "./Request.module.scss";
import { ArrowRight } from "lucide-react";

const RequestBtn = (props) => {
  return (
    <button className={styles.btn} {...props}>
      {props.children}
      <ArrowRight className={styles.icon} />
    </button>
  );
};

export default RequestBtn;
