import { useEffect, useRef } from "react";
import NET from "vanta/dist/vanta.net.min";
import * as THREE from "three";

const VantaBackground = () => {
  const vantaRef = useRef(null);

  useEffect(() => {
    const effect = NET({
      el: vantaRef.current,
      THREE, // Explicitly pass THREE.js
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0x414141,
      backgroundColor: 0x000000,
      points: 10,
      maxDistance: 20,
      spacing: 15,
    });

    return () => {
      if (effect) effect.destroy();
    };
  }, []);

  return <div ref={vantaRef} className="fixed top-0 left-0 w-full h-full -z-10" />;};

export default VantaBackground;