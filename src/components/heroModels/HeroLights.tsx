import * as THREE from "three";

const HeroLights = () => {
  return (
    <>
      <spotLight
        position={[2, 5, 6]}
        angle={0.15}
        penumbra={0.2}
        color={"white"}
        intensity={100}
      />
      <spotLight
        position={[4, 5, 4]}
        angle={0.3}
        penumbra={40}
        // color={"#4cc9f0"}
        // color="#ffc300" // amarillo cálido
        // color="#a2d2ff"
        // color="#7209b7" // púrpura fuerte
        color="#f5deb3" // tono crema, como luz reflejada en la pared
        intensity={40}
      />
      <spotLight
        position={[-3, 5, 5]}
        angle={0.4}
        penumbra={1}
        // color={"#9d4edd"}
        // color="#ff5733" // naranja intenso
        // color="#00b4d8"
        // color="#3a0ca3" // azul profundo
        color="#ffe4b5" // soft orange para reflejo indirecto
        intensity={60}
      />

      <primitive
        // object={new THREE.RectAreaLight("#A269FF", 8, 3, 2)}
        // object={new THREE.RectAreaLight("#ffd6a5", 8, 3, 2)} // luz cálida pastel
        // object={new THREE.RectAreaLight("#caf0f8", 8, 3, 2)}
        // object={new THREE.RectAreaLight("#4361ee", 8, 3, 2)}
        object={new THREE.RectAreaLight("#fef6e4", 8, 3, 2)}
        position={[1, 3, 4]}
        intensity={15}
        rotation={[-Math.PI / 5, Math.PI / 4, 0]}
      />

      {/* <pointLight position={[0, 1, 0]} intensity={10} color="#7209b7" />
      <pointLight position={[1, 2, -2]} intensity={10} color="#0d00a4" /> */}
      {/* <pointLight position={[0, 1, 0]} intensity={8} color="#ff6d00" />
      <pointLight position={[1, 2, -2]} intensity={8} color="#ffb703" /> */}
      {/* <pointLight position={[0, 1, 0]} intensity={10} color="#48cae4" />
      <pointLight position={[1, 2, -2]} intensity={10} color="#0077b6" /> */}
      <pointLight position={[0, 1, 0]} intensity={12} color="#4cc9f0" />
      <pointLight position={[1, 2, -2]} intensity={10} color="#b5179e" />
      {/* <pointLight
        position={[0, 1.5, 1]}
        intensity={5}
        color="#fcd5ce" // luz ambiente general cálida
      />

      <pointLight
        position={[1, 2, -2]}
        intensity={3}
        color="#ffe5b4" // iluminación de fondo suave
      /> */}
    </>
  );
};

export default HeroLights;
