import React, { useState, useRef } from "react";
import { gsap } from "gsap";
import styles from "./ServiceCard.module.css";

const ServiceCard = ({ number, title, description, image }) => {
  const [isOpen, setIsOpen] = useState(false);
  const cardRef = useRef();
  const contentRef = useRef();
  const iconRef = useRef();

  const toggleCard = () => {
    const isMobile = window.innerWidth <= 768;
    const targetHeight = isMobile ? "550px" : "350px";

    if (isOpen) {
      // Colapsar la tarjeta
      gsap.to(cardRef.current, {
        height: "80px", // Altura colapsada
        duration: 0.3,
        ease: "power3.out",
      });
      gsap.to(contentRef.current, {
        opacity: 0, // Ocultar contenido
        duration: 0.2,
      });
      gsap.to(iconRef.current, {
        rotate: "0deg", // Girar a posición original
        duration: 0.3,
        ease: "power3.out",
      });
    } else {
      // Expandir la tarjeta
      gsap.to(cardRef.current, {
        height: targetHeight,
        duration: 0.3,
        ease: "power3.out",
      });
      gsap.to(contentRef.current, {
        opacity: 1, // Mostrar contenido
        duration: 0.2,
      });
      gsap.to(iconRef.current, {
        rotate: "45deg", // Girar para simular una "X"
        duration: 0.3,
        ease: "power3.out",
      });
    }
    setIsOpen(!isOpen); // Cambiar el estado
  };

  return (
    <div ref={cardRef} className={styles.card}>
      {/* Header con número, título e ícono */}
      <div className={styles.card_header} onClick={toggleCard}>
        <div className={styles.card_title}>
          <h3>
            <span>[{number}]</span>
          </h3>
          <h3 className={styles.title}>{title}</h3>
        </div>
        <div className={styles.icon} ref={iconRef}>
          +
        </div>
      </div>

      {/* Contenido expandido */}
      <div ref={contentRef} className={styles.card_content}>
        <div className={styles.card_description}>
          <p>{description}</p>
        </div>
        <div className={styles.card_image}>
          <img src={image} alt={title} />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
