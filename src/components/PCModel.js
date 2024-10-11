// src/components/PCModel.js
import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function PCModel({ scale }) {
  const { scene } = useGLTF('/desktop_pc/scene.gltf');
  const modelRef = useRef();

  // Ajout de la rotation sur l'axe Y
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01; // Ajustez la valeur pour modifier la vitesse de rotation
    }
  });

  return <primitive ref={modelRef} object={scene} scale={scale} />;
}

export default function PCModelCanvas() {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 3, 10], fov: 45 }} // Ajustez la position pour une vue plus haute
      style={{ height: '100vh', width: '100%' }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Suspense fallback={null}>
        <PCModel scale={0.33} /> {/* Réduit la taille à 1/3 de l'original */}
      </Suspense>
      <OrbitControls 
        enableZoom={false} // Désactive le zoom pour éviter la modification de la taille
        enablePan={false} 
        maxPolarAngle={Math.PI / 2} // Empêche la vue de descendre en dessous de l'horizon
        minPolarAngle={Math.PI / 3} // Limite la vue à un angle légèrement au-dessus
      />
    </Canvas>
  );
}
