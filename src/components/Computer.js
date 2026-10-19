// PC 3D du hero : rotation lente, désactivée si l'utilisateur réduit les animations.
import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

function useMediaQuery(query) {
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches);
  useEffect(() => {
    const mq = window.matchMedia(query);
    const onChange = (e) => setMatches(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, [query]);
  return matches;
}

function Computer({ isMobile }) {
  const computer = useGLTF('/desktop_pc/scene.gltf');
  return (
    <group>
      <hemisphereLight intensity={2.2} groundColor="#000000" />
      <pointLight intensity={1} />
      <spotLight position={[-20, 20, 10]} angle={0.12} penumbra={1} intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.8 : 0.66}
        position={isMobile ? [0, -2.2, -1.1] : [0, -2.75, -1.3]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </group>
  );
}

export default function PCModel() {
  const isMobile = useMediaQuery('(max-width: 800px)');
  const reduceMotion = useMediaQuery('(prefers-reduced-motion: reduce)');

  return (
    <Canvas
      frameloop={reduceMotion ? 'demand' : 'always'}
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      aria-label="Modèle 3D d'un ordinateur de bureau, à faire pivoter à la souris"
    >
      <Suspense fallback={null}>
        <OrbitControls
          autoRotate={!reduceMotion}
          autoRotateSpeed={1.2}
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computer isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
}
