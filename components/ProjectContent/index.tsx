import Image from "next/image";
import { v4 as uuid } from "uuid";

import { OutlineBtn } from "components/Buttons";

import type { DetailsListProps, ProjectContentProps } from "./types";

const ProjectContentDefaults = {
  makeDark: false,
};

const ProjectContent = ({
  cover,
  logo,
  title,
  compTitle,
  altLogo,
  techTags,
  missionTags,
  primaryColors,
  secondaryColors,
  makeDark = ProjectContentDefaults.makeDark,
  designURL,
  demoURL,
  repoURL,
  year,
}: ProjectContentProps) => {
  return (
    <article className="w-full">
      <div
        className={`absolute top-0 right-0 bottom-0 justify-end flex h-full w-full ${
          makeDark ? "bg-white/40" : "bg-black/40"
        }`}
      >
        <Image
          src={cover}
          placeholder="blur"
          alt={`${title} cover`}
          className="h-full object-[10%] sm:object-center"
          objectFit="cover"
        />
      </div>
      <div className="absolute top-0 right-0 w-full h-full">
        <div className="container h-full">
          <div className="flex items-center justify-between h-full px-1">
            <div className="flex flex-col pb-2 sm:pb-0">
              <div className="mb-1">
                <Image src={altLogo} alt={`${title} logo`} placeholder="blur" priority />
              </div>
              <h1
                className={`${
                  makeDark ? "text-gray-900" : "text-white"
                } txt-h6 font-medium mb-0-25`}
              >
                {title} |
              </h1>
              <h2
                className={`${
                  makeDark ? "text-gray-900" : "text-white"
                } txt-h6 font-medium`}
              >
                {compTitle}{" "}
                <span
                  className={`${
                    makeDark ? "text-gray-900" : "text-white"
                  } text-xs font-light opacity-60`}
                >
                  - {year}
                </span>
              </h2>

              <DetailsList
                listContent={missionTags}
                colorSchemes={primaryColors}
              />
              <DetailsList
                listContent={techTags}
                colorSchemes={secondaryColors}
                isSmall
              />
              <div className="flex items-start flex-wrap">
                {demoURL && (
                  <div className="mr-1 mt-0-5">
                    <OutlineBtn
                      makeDark={makeDark}
                      href={demoURL}
                      icon={["fas", "external-link-alt"]}
                      text={"live website"}
                    />
                  </div>
                )}
                {repoURL && (
                  <div className="mr-1 mt-0-5">
                    <OutlineBtn
                      makeDark={makeDark}
                      href={repoURL}
                      icon={["fab", "github"]}
                      text={"github repo"}
                    />
                  </div>
                )}
                {designURL && (
                  <div className="mr-1 mt-0-5">
                    <OutlineBtn
                      makeDark={makeDark}
                      href={designURL}
                      icon={["fab", "figma"]}
                      text={"design work"}
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="hidden md:block">
              {logo && (
                <Image src={logo} alt={`${title} logo`} placeholder="blur" priority />
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

const DetailsList = ({
  listContent,
  colorSchemes,
  isSmall = false,
}: DetailsListProps) => (
  <ul className="mb-0-5 flex items-start justify-start flex-wrap">
    {listContent.map((tag) => {
      return (
        <li
          key={uuid()}
          className="badge"
          style={{ backgroundColor: colorSchemes[0] }}
        >
          <p
            className={`${isSmall ? "badge__content--sm" : "badge__content"}`}
            style={{ color: colorSchemes[1] }}
          >
            {tag}
          </p>
        </li>
      );
    })}
  </ul>
);

export default ProjectContent;
