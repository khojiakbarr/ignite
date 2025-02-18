import React from "react";
import styles from "./TrustStyle.module.scss";
import Image from "next/image";
// import icon from "../../../public/brend_icons/Alpha_Distribution.png";
// import icon2 from "../../../public/brend_icons/Global_Trade_Distribution";
// import icon3 from "../../../public/brend_icons/Central_Asian_Distribution.png";
// import icon from "../../../public/brend_icons/Alpha_Distribution.png";
const TrustCard = ({ image, i }) => {
  return (
    <div
      className={styles.card}
      // data-aos="zoom-in"
      // data-aos-duration={`1${i}00`}
    >
      <div className={styles.imageContainer}>
        <Image
          src={image}
          alt="icon"
          width={0}
          height={0}
          unoptimized
          loading="lazy"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
};

export default TrustCard;
