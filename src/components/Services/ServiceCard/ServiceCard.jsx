import React from "react";
import styles from "./ServiceCard.module.css";

const ServiceCard = ({ number, title, description, image, isSelected }) => {
  return (
    <div
      className={`${styles.card} ${isSelected ? styles.selected : ""}`}
      data-number={number}
    >
        <div className={styles.card_header}>
            <h3><span>[{number}]</span></h3>
            <h3 className={styles.title}>{title}</h3>
        </div>
        <div className={styles.card_content}>
            <div className={styles.card_description}>
                <p className={styles.description}>{description}</p>
            </div>
            <div className={styles.card_image}>
                <img className={styles.image} src={image} alt={title} />
            </div>
        </div>
    </div>
  );
};

export default ServiceCard;
