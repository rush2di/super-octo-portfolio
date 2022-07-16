import Image from "next/image";
import { v4 as uuid } from "uuid";
import { motion } from "framer-motion";
import type { NextPage } from "next";

import Layout from "components/Layout";
import Scroll from "components/Scroll";
import CopyWriting from "components/CopyWriting";
import ProjectWrapper from "components/ProjectWrapper";
import ProjectContent from "components/ProjectContent";

import {
  animationVariants,
  heroContent,
  introContent,
  projects,
} from "../constants";
import image1 from "../public/images/hero.png";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="container">
        <section className="relative bg-gray-5">
          <div className="bg-gray-5 w-18 sm:w-[50%] mx-auto md:w-full flex items-center justify-center mt-5">
            <Image src={image1} placeholder="blur" className="mx-4" />
          </div>
          <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col h-[500px] xl:h-[486px]">
            <h1 id="main_heading" className="font-comp text-3xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl my-auto leading-[1.4] sm:leading-[1.2] text-center mx-auto sm:mx-0 sm:text-left md:mb-3-25">
              <span className="block capitalize overflow-hidden mix-blend-difference text-gray-200">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={animationVariants[0]}
                >
                  {heroContent.title[0]}
                </motion.div>
              </span>
              <span className="block capitalize overflow-hidden mix-blend-difference text-gray-200">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={animationVariants[1]}
                >
                  {heroContent.title[1]}
                </motion.div>
              </span>
              <span className="block capitalize overflow-hidden mix-blend-difference text-gray-200">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={animationVariants[2]}
                >
                  {heroContent.title[2]}
                </motion.div>
              </span>
            </h1>
            <div className="flex w-full sm:grid sm:grid-cols-6 lg:grid-cols-12 items-center">
              <div className="hidden sm:block min-w-full h-[1px] bg-gray-5 mix-blend-difference sm:col-span-3 md:col-span-4 lg:col-span-9"></div>
              <div className="px-1 w-full sm:col-span-3 md:col-span-2 lg:col-span-3">
                <p className="text-sm text-center sm:text-left">
                  {heroContent.comp}
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="mt-7 sm:mt-12 md:mt-3 lg:mt-3">
          <Scroll />
        </div>
        <section className="px-1 sm:px-0-5">
          <div className="row mt-3">
            <div className="col-12 md:col-6">
              <CopyWriting
                title={introContent.about.title}
                text={introContent.about.text}
              />
            </div>
            <div className="col-12 md:col-6">
              <CopyWriting
                title={introContent.technicalSkills.title}
                text={introContent.technicalSkills.text}
              />
            </div>
          </div>
        </section>
      </div>
      <section className="mt-5 relative z-20">
        {projects.map(({ classNames, id, initializer, ...data }) => (
          <div key={uuid()}>
            <ProjectWrapper
              id={id}
              classNames={classNames}
              initializer={initializer}
            >
              <ProjectContent {...data} />
            </ProjectWrapper>
          </div>
        ))}
      </section>
    </Layout>
  );
};

export default Home;
