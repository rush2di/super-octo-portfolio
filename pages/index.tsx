import type { NextPage } from "next";
import Image from "next/image";
import Layout from "components/Layout";
import image1 from "../public/images/HERO.png";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="container">
        <div className="relative">
          <div className="w-15 sm:w-[50%] mx-auto md:w-full flex items-center justify-center mt-8">
            <Image src={image1} placeholder="blur" className="mx-4" />
          </div>
          <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col">
            <h1 className="font-comp text-3xl sm:text-5xl md:text-6xl xl:text-7xl my-auto leading-[1.2] mix-blend-exclusion text-gray-200 text-center mx-auto sm:mx-0 sm:text-left">
              <span className="block capitalize">Rochdi Belhirch</span>
              <span className="block capitalize">creative frontend</span>
              <span className="block capitalize">developer &#38; designer</span>
            </h1>
            <div className="flex">
              <div className="min-w-full h-1px bg-gray-5 mix-blend-exclusion"></div>
              <div className="inline-block">
                <p className="text-sm">
                  Design minded web &#38; mobile apps developer based in Morocco
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
