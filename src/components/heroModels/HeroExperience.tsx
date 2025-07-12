import { OrbitControls, RoundedBox } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { OptimizedRoom } from "./OptimizedRoom";
// import { Particles } from "./Particles.jsx";
import HeroLights from "./HeroLights";

const HeroExperience = () => {
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
      <HeroLights />
      {/* <Particles count={100} /> */}

      <OrbitControls
        enablePan={false}
        // enableZoom={!isTablet}
        enableZoom={false}
        maxDistance={15}
        minDistance={15}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
        minAzimuthAngle={-Math.PI / 6} // -30°
        maxAzimuthAngle={Math.PI / 6} // +30°
      />

      <group
        scale={isMobile ? 0.7 : 1}
        position={[0, -3.5, 0]}
        rotation={[0, -Math.PI / 4, 0]}
      >
        <OptimizedRoom />
      </group>
    </Canvas>
  );
};

export default HeroExperience;
