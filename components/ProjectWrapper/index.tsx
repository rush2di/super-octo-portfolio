import { useEffect, useLayoutEffect, useRef } from "react";
import { useTrackVisibility } from "react-intersection-observer-hook";
import { usePageVisibility } from "react-page-visibility";

import Gradient from "effects/Gradients";
import type { ProjectWrapperProps } from "./types";

const ProjectWrapper = ({
  initializer,
  classNames,
  children,
  id,
}: ProjectWrapperProps) => {
  let [containerRef, { isVisible }] = useTrackVisibility();
  const isPageVisible = usePageVisibility();
  const wrapper = useRef<null | HTMLElement>(null);
  const gradient = useRef<null | Gradient>(null);

  if (typeof window !== "undefined") {
    useLayoutEffect(() => {
      if (wrapper.current !== null) {
        gradient.current = new Gradient() as any;
        // @ts-ignore: Unreachable code error
        gradient.current?.initGradient("#" + wrapper.current.id);
        initializer && initializer(gradient.current);
      }
    }, [wrapper]);
  }

  useEffect(() => {
    if (isVisible && isPageVisible) {
      // @ts-ignore: Unreachable code error
      gradient.current?.play();
    } else {
      // @ts-ignore: Unreachable code error
      gradient.current?.pause();
    }
  }, [gradient, isPageVisible, isVisible]);

  return (
    <div ref={containerRef} className={classNames}>
      <canvas
        id={id}
        style={{ width: `100vw`, height: 900 }}
        ref={(e) => (wrapper.current = e)}
      ></canvas>
      {children}
    </div>
  );
};

export default ProjectWrapper;
