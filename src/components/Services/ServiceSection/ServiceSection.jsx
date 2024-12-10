import React from "react";
import ServiceCard from "../ServiceCard/ServiceCard";
import styles from "./ServiceSection.module.css";

const servicesData = [
    {
      number: 1,
      title: "Desarrollo Web",
      description: "Creamos sitios web totalmente personalizados para tu negocio. Desde páginas informativas hasta plataformas interactivas, nos encargamos de cada detalle para ofrecerte un producto final que se adapte perfectamente a tus necesidades. Cada proyecto es único, con un diseño atractivo, funcionalidades avanzadas y una experiencia de usuario optimizada.",
      image: "/images/services/desarrollo.png",
    },
    {
      number: 2,
      title: "Sistemas Web",
      description: "Desarrollamos sistemas web complejos para la gestión de datos y procesos internos. Nuestro equipo se especializa en crear aplicaciones escalables, eficientes y fáciles de usar que mejoren la productividad de tu empresa. Ya sea para manejar inventarios, clientes o recursos, nuestras soluciones se adaptan a las necesidades de tu negocio.",
      image: "/images/services/sistema.png",
    },
    {
      number: 3,
      title: "Consultoría Digital",
      description: "Te ayudamos a mejorar tu presencia digital a través de una consultoría personalizada. Analizamos tu estrategia online, identificamos oportunidades de mejora y te guiamos en la implementación de soluciones que maximicen el impacto de tu negocio en el entorno digital. Ya sea en marketing, desarrollo web o transformación digital, estamos aquí para ayudarte a crecer.",
      image: "/images/services/consultoria.png",
    },
    {
      number: 4,
      title: "Mantenimiento Web",
      description: "Nos encargamos del mantenimiento y la actualización continua de tu sitio web. Ofrecemos un servicio proactivo para mantener tu página optimizada, segura y funcionando correctamente. Desde actualizaciones de contenido y seguridad, hasta la implementación de nuevas funcionalidades, nuestro equipo está disponible para asegurar que tu sitio siga ofreciendo la mejor experiencia a tus usuarios.",
      image: "/images/services/mantenimiento.png",
    },
    {
      number: 5,
      title: "Hosting y Gestión de Dominios",
      description: "Te proporcionamos soluciones de hosting seguro y gestión de dominios de alta calidad. Nos encargamos de todo el proceso, desde la adquisición del nombre de dominio adecuado para tu marca, hasta la configuración del hosting que garantice la velocidad y seguridad de tu sitio web. Nuestro soporte técnico está disponible las 24 horas para resolver cualquier inconveniente.",
      image: "/images/services/hosting.png",
    },
];  

const ServiceSection = () => {

  return (
    <section
      className={styles.services_section}
    >
      {servicesData.map(({ number, title, description, image }) => (
        <div
          key={number}
          id={`service-card-${number}`}
          className={styles.card}
        >
          <ServiceCard
            number={number}
            title={title}
            description={description}
            image={image}
          />
        </div>
      ))}
    </section>
  );
};

export default ServiceSection;
