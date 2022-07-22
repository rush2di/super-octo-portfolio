import { useLayoutEffect, useRef } from "react";
import { useTrackVisibility } from "react-intersection-observer-hook";
import { usePageVisibility } from "react-page-visibility";

import type { ProjectWrapperProps } from "./types";
import Gradient from "effects/Gradients";

const _ACTIVATE_DEBUG_MODE = false;

const ProjectWrapper: React.FC<ProjectWrapperProps> = ({
  initializer,
  children,
  id,
}) => {
  let [trackingRef, { isVisible }] = useTrackVisibility();
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

    useLayoutEffect(() => {
      if (isPageVisible && isVisible) {
        // @ts-ignore: Unreachable code error
        gradient.current?.play();
      } else {
        // @ts-ignore: Unreachable code error
        gradient.current?.pause();
      }
    }, [gradient, isPageVisible, isVisible]);
  }

  return (
    <div className="project-wrapper relative">
      {_ACTIVATE_DEBUG_MODE && <DebugTicket {...{ isVisible }} />}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <div
          ref={trackingRef}
          className="h-[200px] w-1 bg-transparent"
          style={_ACTIVATE_DEBUG_MODE ? { border: "1px solid red" } : {}}
        ></div>
      </div>
      <canvas
        id={id}
        style={{ width: `100vw`, height: 900 }}
        ref={(e) => (wrapper.current = e)}
      ></canvas>
      {children}
    </div>
  );
};

const DebugTicket: React.FC<{ isVisible: boolean }> = ({ isVisible }) => (
  <div className="absolute top-5 left-0 bg-black text-green-500 p-1">
    isVisible: {isVisible.toString()}
  </div>
);

export default ProjectWrapper;
