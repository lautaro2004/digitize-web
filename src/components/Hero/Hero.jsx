import React, { useEffect, useRef } from 'react';
import styles from './Hero.module.css';
import * as THREE from 'three';
import gsap from 'gsap';
import Globe from "./Globe.jsx"

const Hero = () => {
  const mountRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    // Configuración de Three.js
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    const starGeometry = new THREE.BufferGeometry();
    const starMaterial = new THREE.PointsMaterial({ color: 0xECEBDE, size: 1 });

    const starVertices = [];
    for (let i = 0; i < 1000; i++) {
      const x = (Math.random() - 0.5) * 2000;
      const y = (Math.random() - 0.5) * 2000;
      const z = (Math.random() - 0.5) * 2000;
      starVertices.push(x, y, z);
    }
    starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    camera.position.z = 2;

    const animate = () => {
      requestAnimationFrame(animate);
      stars.rotation.x += 0.006;
      stars.rotation.y += 0.008;
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  useEffect(() => {
    // Animación PNG con GSAP
    if (imgRef.current) {
      const tl = gsap.timeline({ repeat: -1, yoyo: true });

      tl.to(imgRef.current, {
        y: -20,
        duration: 1.5,
        ease: 'power1.inOut',
      }).to(imgRef.current, {
        y: 0,
        duration: 1.5,
        ease: 'power1.inOut',
      });
    }
  }, []);

  return (
    <div className={styles.hero_wrapper}>
      {/* Canvas de Three.js */}
      <div ref={mountRef} className={styles.canvas}></div>

      {/* Contenido del Hero */}
      <div className={styles.hero_container}>
        <div className={styles.title}>
          <h1>DIGITIZE</h1>
        </div>
        <div className={styles.hero_content}>
          <div className={styles.subtitle_container}>
            <div className={styles.subtitle}>
              <h3>
                Transforma tu visión en una experiencia digital única
              </h3>
            </div>
            <div className={styles.description}>
              <p>
                En <span>Digitize</span>, convertimos tus ideas en realidades digitales. Somos expertos en el desarrollo de páginas web y 
                aplicaciones personalizadas que <span>impulsan tu negocio y cautivan a tus usuarios</span>.
              </p>
            </div>
            <div className={styles.list}>
              <li><p>🚀 Innovación, funcionalidad y diseño en cada proyecto</p></li>
              <li><p>🌐 Lleva tu presencia en línea al siguiente nivel con nosotros.</p></li>
            </div>
            <div className={styles.button_cta}>
              <a href='#'>Comienza tu Proyecto Digital</a>
            </div>
          </div>
          <div className={styles.hero_image}>
            <Globe />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
