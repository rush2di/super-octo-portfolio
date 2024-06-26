import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { NextPage } from "next";

import SEO from "components/SEO";
import Layout from "components/Layout";
import Scroll from "components/Scroll";
import Heading from "components/Heading";
import CopyWriting from "components/CopyWriting";
import ProjectWrapper from "components/ProjectWrapper";
import ProjectContent from "components/ProjectContent";
import { pageContent } from "helpers/constants";
import image1 from "public/images/hero.png";

const { heroContent, introContent, outroContent, projects } = pageContent;

const Home: NextPage = () => {
  return (
    <>
      <SEO
        title={`PORTFOLIO`}
        description={`A creative developer building modern websites with the latest technologies. I specialize frontend development bringing great designs to life with tools like React and JavaScript animation libraries.`}
      />
      <Layout>
        <div className="container">
          <section className="relative bg-gray-5">
            <div className="bg-gray-5 w-18 sm:w-[50%] mx-auto md:w-full flex items-center justify-center mt-5">
              <Image
                src={image1}
                placeholder="blur"
                className="mx-4"
                alt="artwork"
                priority
              />
            </div>
            <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col h-[500px] xl:h-[486px]">
              <Heading />
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
          <section id="about" className="px-1 sm:px-0-5">
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
        <section
          id="projects"
          className="mt-5 relative z-20 w-full mx-auto bg-gray-5 shadow-gray-5 shadow-[0_0_120px_110px] py-2"
        >
          {projects.map(({ id, initializer, ...data }) => (
            <div
              key={id}
              className="project h-full w-full will-change-contents"
            >
              <ProjectWrapper id={id} initializer={initializer}>
                <ProjectContent {...data} />
              </ProjectWrapper>
            </div>
          ))}
        </section>
        <section id="connect">
          <div className="container my-2 py-5 flex items-center justify-center relative z-20">
            <div className="w-20">
              <h1 className="txt-h3 italic text-gray-900 text-center mb-2">
                {outroContent.text}
              </h1>
              <ul className="flex items-center justify-between px-1-5">
                <li className="hover:opacity-60">
                  <a
                    href={outroContent.github}
                    target="_blank"
                    aria-label="Github"
                  >
                    <FontAwesomeIcon icon={["fab", "github"]} size="2x" />
                  </a>
                </li>
                <li className="hover:opacity-60">
                  <a
                    href={outroContent.linkedin}
                    target="_blank"
                    aria-label="Linkedin"
                  >
                    <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" />
                  </a>
                </li>
                <li className="hover:opacity-60">
                  <a href={"mailto:" + outroContent.email} aria-label="Email">
                    <FontAwesomeIcon icon="envelope" size="2x" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Home;
