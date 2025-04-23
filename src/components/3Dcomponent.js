import React, { Suspense } from 'react'; 
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function PCModel() {
  const { scene } = useGLTF('/models/scene.glb'); 
  return <primitive object={scene} scale={0.7} />;
}

function ThreeDComponent() {
  return (
    <Canvas style={{ height: '400px' }} camera={{ position: [0, 2, 10], fov: 50 }}>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} />
      <Suspense fallback={<span className="text-white">Loading 3D Model...</span>}>
        <PCModel />
      </Suspense>
      <OrbitControls enableZoom={true} />
    </Canvas>
  );
}

export default ThreeDComponent;
