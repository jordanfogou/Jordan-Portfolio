// Planète 3D de la section contact : tourne lentement, s'arrête si animations réduites.
import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import { asset } from '../asset';

function Planet() {
  const planet = useGLTF(asset('/planet/scene.gltf'));
  return <primitive object={planet.scene} scale={2.5} position-y={0} rotation-y={0} />;
}

export default function Earth() {
  const [reduceMotion, setReduceMotion] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = (e) => setReduceMotion(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return (
    <Canvas
      frameloop={reduceMotion ? 'demand' : 'always'}
      dpr={[1, 2]}
      camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}
      gl={{ preserveDrawingBuffer: true }}
      aria-label="Planète en 3D, à faire pivoter à la souris"
    >
      <Suspense fallback={null}>
        <ambientLight intensity={1.2} />
        <OrbitControls
          autoRotate={!reduceMotion}
          autoRotateSpeed={1}
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Planet />
      </Suspense>
      <Preload all />
    </Canvas>
  );
}
