import Grain from "effects/Grain";
import { useLayoutEffect, useRef } from "react";

const GrainScreen = () => {
  const grainHolder = useRef<null | HTMLElement>(null);

  if (typeof window !== "undefined") {
    useLayoutEffect(() => {
      if (grainHolder.current !== null) {
        new Grain(grainHolder.current);
      }
    }, [grainHolder]);
  }

  return (
    <canvas
      className="w-screen h-screen fixed z-50 top-0 left-0 pointer-events-none opacity-80"
      ref={(e) => (grainHolder.current = e)}
    ></canvas>
  );
};

export default GrainScreen;
