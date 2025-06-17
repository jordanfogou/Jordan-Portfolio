// src/components/PCModel.js
import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("/desktop_pc/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={3} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 20, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 1.6 : 1.2} // Encore plus réduit : 0.4/0.6 au lieu de 0.8/1.3
        position={isMobile ? [0, -2, -1] : [0, -2.5, -1]} // Position plus proche et centrée
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    // Add a listener for the changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 800px)");
    //Set the initial value of the 'isMobile' state variable
    setIsMobile(mediaQuery.matches);
    //Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    //Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    //Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [12, 3, 5], fov: 90 }} // FOV réduit de 35 à 25 pour mieux encadrer
      gl={{ preserveDrawingBuffer: true }}
      style={{ 
        height: '100%', 
        width: '100%'
      }}
    >
      <Suspense fallback={null}>
        <OrbitControls
          autoRotate
          autoRotateSpeed={12} // Réduit de 8 à 6 pour rotation plus douce
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;