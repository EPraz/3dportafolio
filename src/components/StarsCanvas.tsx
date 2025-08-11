import { Points, PointMaterial, AdaptiveDpr } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { inSphere } from "maath/random";
import { Suspense, useMemo, useEffect, useState, useRef } from "react";
import * as THREE from "three";

function useLowPowerMode() {
  const [lowPower, setLowPower] = useState(false);

  useEffect(() => {
    // 1) respect "prefers-reduced-motion"
    const mq = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    if (mq?.matches) setLowPower(true);
    const onMq = (e: MediaQueryListEvent) => setLowPower(e.matches);
    mq?.addEventListener?.("change", onMq);

    // 2) If browsers supports Battery Status (not in iOS),
    // disabled if not charging
    (navigator as any).getBattery?.().then((b: any) => {
      const update = () => setLowPower(!b.charging);
      update();
      b.addEventListener("chargingchange", update);
    });

    return () => mq?.removeEventListener?.("change", onMq);
  }, []);

  return lowPower;
}

const Stars = ({ count }: { count: number }) => {
  const ref = useRef<THREE.Points>(null!);
  const positions = useMemo(
    () => inSphere(new Float32Array(count * 3), { radius: 3 }),
    [count]
  );

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x -= delta / 14;
    ref.current.rotation.y -= delta / 18;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={positions as Float32Array}
        stride={3}
        frustumCulled
      >
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.0015}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

type Props = {
  starsOn: boolean;
};
const StarsCanvas = ({ starsOn }: Props) => {
  const lowPower = useLowPowerMode();

  // If user want to turn it off
  if (!starsOn) return null;

  const count = lowPower ? 1200 : 3000; // antes 5000
  const dpr: [number, number] = lowPower ? [1, 1.25] : [1, 2];

  return (
    <div className="w-full h-auto absolute inset-0 z-[-1] pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 2.5] }}
        dpr={dpr}
        gl={{
          powerPreference: lowPower ? "low-power" : "high-performance",
          antialias: !lowPower,
        }}
        frameloop="always"
      >
        <AdaptiveDpr pixelated />
        <Suspense fallback={null}>
          <Stars count={count} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
