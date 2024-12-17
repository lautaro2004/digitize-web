import React from "react";
import styles from "./ProjectSection.module.css"
import ProjectCard from "../ProjectCard/ProjectCard";

const projects = [
  {
    id: 1,
    title: "Alecarp website",
    number: "0.1",
    logo: "/images/projects/alecarp/logo-alecarp.png",
    previewImage: "/images/projects/alecarp/preview-alecarp.png",
    description: "Rediseñé los logos de Alecarp para modernizarlos y desarrollé una landing page con Astro, lo que permitió crear un sitio extremadamente rápido y ligero. La página presenta sus trabajos, servicios y forma de trabajar, facilitando la llegada de nuevos clientes. Anteriormente, la carpintería solo contaba con una página de Facebook. Mejoré el SEO del sitio, logrando una excelente puntuación en Lighthouse, lo que optimiza su visibilidad en los motores de búsqueda mediante el uso de palabras clave estratégicas.",
    link: "https://alecarp.com.ar/",
    hashtags: ["#Astro", "#React", "#DiseñoWeb", "#Landing"],
  },
];

const ProjectSection = () => {
  return (
    <div className={styles.project_section}>
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          number={project.number}
          logo={project.logo}
          previewImage={project.previewImage}
          description={project.description}
          link={project.link}
          hashtags={project.hashtags}
        />
      ))}
    </div>
  );
};

export default ProjectSection;
