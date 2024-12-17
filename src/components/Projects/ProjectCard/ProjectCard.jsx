import React, { useRef } from "react";
import { gsap } from "gsap";
import styles from "./ProjectCard.module.css"

const ProjectCard = ({ title, number, logo, previewImage, description, link, hashtags = []}) => {
  const cardRef = useRef(null);

  const handleMouseEnter = () => {
    gsap.to(cardRef.current, {
      rotateY: 180,
      duration: 0.8,
      ease: "power2.inOut",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, {
      rotateY: 0,
      duration: 0.8,
      ease: "power2.inOut",
    });
  };

  return (
    <div
      className={styles.cardWrapper}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div ref={cardRef} className={styles.card}>
        {/* Front Side */}
        <div className={`${styles.cardSide} ${styles.cardFront}`}>
          <div className={styles.card_header}>
            <div className={styles.number}>
              <p>{number}</p>
            </div>
            <div className={styles.logo}>
              <img src={logo} alt="Logo" />
            </div>
          </div>
          <div className={styles.card_content}>
            <img src={previewImage} alt="Preview" />
          </div>
          <div className={styles.card_title}>
            <div className={styles.title}>
              <h3>{title}</h3>
            </div>
          </div>
          <div className={styles.card_hashtags}>
            {hashtags && hashtags.map((hashtag, index) => (
              <p>
                <span key={index} className={styles.hashtag}>
                  {hashtag}
                </span>
              </p>
            ))}
          </div>
        </div>
        {/* Back Side */}
        <div className={`${styles.cardSide} ${styles.cardBack}`}>
          <div className={styles.back_header}>
            <h3>{title}</h3>
          </div>
          <div className={styles.back_content}>
            <div className={styles.description}>
              <p>
                {description}
              </p>
            </div>
          </div>
          <div className={styles.back_footer}>
            <a href={link} target="_blank" rel="noopener noreferrer" className={styles.button}>
              Ir a la Web
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
