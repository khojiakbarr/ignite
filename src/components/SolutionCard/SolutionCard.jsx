"use client";
import styles from "./SolutionCard.module.scss";

const SolutionCard = ({
  data = {
    stroke: "#1E6DF0",
    imageUrl: "/bg_card_reklama.png",
    title: "title",
    description: "description",
  },
  i,
}) => {
  return (
    <div
      className={styles.card}
      style={{
        border: `1px solid ${data.stroke}`,
        backgroundImage: `url(${data.imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      // data-aos="flip-left"
      // data-aos-duration={`1${i}00`}
    >
      <div className={styles.content}>
        <h2 className={styles.title}>{data.title}</h2>
        <p className={styles.description}>{data.description}</p>
      </div>
    </div>
  );
};

export default SolutionCard;
