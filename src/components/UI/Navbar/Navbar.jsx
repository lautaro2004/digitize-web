import React, { useState, useRef, useEffect } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const sideMenuRef = useRef(null); // Referencia al menú lateral

  const handleClickOutside = (event) => {
    // Si el clic no es en el menú o en el ícono del menú, cierra el menú
    if (
      sideMenuRef.current &&
      !sideMenuRef.current.contains(event.target) &&
      !event.target.closest(`.${styles.menu_icon}`)
    ) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Cleanup
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <nav className={styles.nav_container}>
      <div className={styles.content_container}>
        {/* Menú hamburguesa en mobile */}
        <div
          className={styles.menu_icon}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          &#9776;
        </div>

        {/* Enlaces del menú (ocultos en mobile) */}
        <div
          className={`${styles.links_container} ${
            menuOpen ? styles.show_menu : ""
          }`}
        >
          <a href="#">INICIO</a>
          <a href="#">SERVICIOS</a>
          <a href="#">PROYECTOS</a>
          <a href="#">CONTACTO</a>
        </div>
      </div>

      {/* Menú lateral desplegable en mobile */}
      <div
        ref={sideMenuRef} // Referencia al menú lateral
        className={`${styles.side_menu} ${
          menuOpen ? styles.side_menu_open : ""
        }`}
      >
        <a href="#" onClick={() => setMenuOpen(false)}>
          INICIO
        </a>
        <a href="#" onClick={() => setMenuOpen(false)}>
          PROYECTOS
        </a>
        <a href="#" onClick={() => setMenuOpen(false)}>
          PROCESO
        </a>
        <a href="#" onClick={() => setMenuOpen(false)}>
          CONTACTO
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
