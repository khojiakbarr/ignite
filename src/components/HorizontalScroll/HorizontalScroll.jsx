'use client'
import { useEffect, useRef } from "react";
import styles from "./HorizontallStyle.module.scss";

const HorizontalScroll = () => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    let scrollAmount = 0;
    let direction = 1;
    const speed = 1; // Scroll tezligi

    const autoScroll = () => {
      if (scrollContainer) {
        scrollAmount += speed * direction;
        scrollContainer.scrollLeft = scrollAmount;

        if (
          scrollContainer.scrollLeft + scrollContainer.clientWidth >=
          scrollContainer.scrollWidth
        ) {
          scrollAmount = 0; // Scroll boshiga qaytarish
        }
      }
    };

    const interval = setInterval(autoScroll, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.scrollContainer} ref={scrollContainerRef}>
      <div className={styles.cardWrapper}>
        {[...Array(20)].map((_, index) => (
          <div key={index} className={styles.card}>
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalScroll;