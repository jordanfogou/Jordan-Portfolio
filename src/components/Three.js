import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box } from '@react-three/drei';

const Background3D = () => (
  <Canvas style={{ height: '100vh' }}>
    <ambientLight intensity={0.5} />
    <directionalLight position={[5, 5, 5]} />
    <OrbitControls enableZoom={false} />
    <Box args={[3, 3, 3]} position={[0, 0, 0]} />
  </Canvas>
);

export default Background3D;
