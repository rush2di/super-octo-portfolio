import { LazyMotion, domAnimation, m } from "framer-motion";

import {
  containerAnimation,
  itemAnimation,
  pageContent,
} from "helpers/constants";

const { heroContent } = pageContent;

const Heading = () => {
  return (
    <LazyMotion features={domAnimation}>
      <m.h1
        id="main_heading"
        className="font-comp text-3xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl my-auto leading-[1.4] sm:leading-[1.2] text-center mx-auto sm:mx-0 sm:text-left md:mb-3-25"
        variants={containerAnimation}
        initial="hidden"
        animate={"visible"}
      >
        <span className="block capitalize overflow-hidden mix-blend-difference text-gray-200">
          <m.div variants={itemAnimation}>{heroContent.title[0]}</m.div>
        </span>
        <span className="block capitalize overflow-hidden mix-blend-difference text-gray-200">
          <m.div variants={itemAnimation}>{heroContent.title[1]}</m.div>
        </span>
        <span className="block capitalize overflow-hidden mix-blend-difference text-gray-200">
          <m.div variants={itemAnimation}>{heroContent.title[2]}</m.div>
        </span>
      </m.h1>
    </LazyMotion>
  );
};

export default Heading;
