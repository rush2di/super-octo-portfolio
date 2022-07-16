import resolveConfig from "tailwindcss/resolveConfig";
import { useLayoutEffect, useRef } from "react";
import { useMedia } from "react-use";

import tailwindConfig from "tailwind.config.js";
import Grain from "effects/Grain";

const _TW_CONFIG = resolveConfig(tailwindConfig);
const _MOBILE_BREAKPOINT = _TW_CONFIG.theme.screens.sm;
const _DEFAULT = true;

const GrainScreen = () => {
  const isMobile = useMedia(`(max-width: ${_MOBILE_BREAKPOINT})`, _DEFAULT);
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
      style={{ display: isMobile ? "none" : "block" }}
      className="w-screen h-screen fixed z-50 top-0 left-0 pointer-events-none opacity-80"
      ref={(e) => (grainHolder.current = e)}
    ></canvas>
  );
};

export default GrainScreen;
