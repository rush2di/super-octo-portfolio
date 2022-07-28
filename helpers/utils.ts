import Gradient from "effects/Gradients";

const initializer = () => {
  const gradient1 = new Gradient() as any;
  gradient1.initGradient("#gradient-canvas-1");
  gradient1.conf.wireframe = true;
};

const isBrowser: boolean = typeof window !== "undefined";

export { initializer, isBrowser };
