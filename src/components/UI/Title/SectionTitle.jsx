import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import styles from "./SectionTitle.module.css";

const SectionTitle = ({ title }) => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marqueeElement = marqueeRef.current;
    const width = marqueeElement.offsetWidth;

    // Animación de desplazamiento continuo del título
    gsap.timeline({ repeat: -1, repeatDelay: 0 })
      .fromTo(
        marqueeElement,
        { x: "100%" },
        {
          x: "-100%",
          duration: 10,
          ease: "linear",
        }
      );
  }, []);

  return (
    <div className={styles.container}>
      <div ref={marqueeRef} className={styles.marquee}>
        <span className={styles.text}>{title}</span>
        <span className={styles.text}>{title}</span>
      </div>
    </div>
  );
};

export default SectionTitle;
