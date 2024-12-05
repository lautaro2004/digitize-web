import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, OrbitControls, Points, PointMaterial } from "@react-three/drei";

// Componente para el globo interactivo
const GlobeContent = () => {
  const pointsRef = useRef();

  // Crear puntos aleatorios en la esfera
  const generatePoints = (count) => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos((Math.random() * 2) - 1);
      const radius = 1; // Radio de la esfera
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      positions.set([x, y, z], i * 3);
    }
    return positions;
  };

  const points = generatePoints(500); // Número de puntos en el globo

  // Animación de rotación del globo
  useFrame(() => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.001;
    }
  });

  return (
    <group ref={pointsRef} scale={[3, 3, 3]} position={[0, 2, 0]}>
      {/* Aumenta el tamaño de la esfera */}
      <Sphere args={[1, 38, 38]}>
        <meshStandardMaterial color="#6c63ff" wireframe />
      </Sphere>
      <Points positions={points} stride={3}>
        <PointMaterial color="#FFFFFF" size={0.02} sizeAttenuation />
      </Points>
    </group>
  );
};

// Componente principal para el Canvas
const Globe = () => {
  return (
    <Canvas camera={{ position: [5, 5, 5] }}>
      {/* Ajustes de iluminación */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      <GlobeContent />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default Globe;
