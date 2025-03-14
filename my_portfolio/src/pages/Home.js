import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Home() {
  const titleRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
  }, []);

  return (
    <div className="h-screen flex justify-center items-center bg-gray-900 text-white">
      <h1 ref={titleRef} className="text-6xl font-extrabold tracking-wide">
        Kieran Kinnaird
      </h1>
    </div>
  );
}