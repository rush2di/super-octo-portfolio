import { useLayoutEffect, useRef } from "react";
import { useTrackVisibility } from "react-intersection-observer-hook";
import { usePageVisibility } from "react-page-visibility";

import Gradient from "effects/Gradients";
import { ProjectWrapperProps } from "./types";

const _ACTIVATE_DEBUG_MODE = false;

const debuggerStyles = _ACTIVATE_DEBUG_MODE ? { border: "1px solid red" } : {};

const ProjectWrapper: React.FC<ProjectWrapperProps> = ({
  initializer,
  children,
  id,
}) => {
  const [trackingRef, { isVisible }] = useTrackVisibility();
  const isPageVisible = usePageVisibility();

  const wrapperRef = useRef<null | HTMLCanvasElement>(null);
  const gradientRef = useRef<null | Gradient>(null);

  if (typeof window !== "undefined") {
    useLayoutEffect(() => {
      if (wrapperRef.current !== null && gradientRef.current === null) {
        gradientRef.current = new Gradient() as any;
        // @ts-ignore: Unreachable code error
        gradientRef.current.initGradient("#" + wrapperRef.current.id);
        initializer && initializer(gradientRef.current);
      }
    }, [wrapperRef]);

    useLayoutEffect(() => {
      if (isPageVisible && isVisible) {
        // @ts-ignore: Unreachable code error
        gradientRef.current?.play();
      } else {
        // @ts-ignore: Unreachable code error
        gradientRef.current?.pause();
      }
    }, [isPageVisible, isVisible]);
  }

  return (
    <div className="project-wrapper relative">
      {_ACTIVATE_DEBUG_MODE && <DebugTicket {...{ isVisible }} />}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <div
          ref={trackingRef}
          className="h-[200px] w-1 bg-transparent"
          style={debuggerStyles}
        ></div>
      </div>
      <canvas
        id={id}
        style={{ width: `100vw`, height: 900 }}
        ref={wrapperRef}
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
