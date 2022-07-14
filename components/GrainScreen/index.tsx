import { useLayoutEffect, useRef } from "react";
import Grain from "effects/Grain";

const GrainScreen = () => {
  const grainHolder = useRef<null | HTMLElement>(null);
  const grainInstance = useRef<null | Grain>(null);

  if (typeof window !== "undefined") {
    useLayoutEffect(() => {
      if (grainHolder.current !== null) {
        grainInstance.current = new Grain(grainHolder.current);
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
