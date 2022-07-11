import Image from "next/image";
import { v4 as uuid } from "uuid";

import type { DetailsListTypes, ProjectDetailsTypes } from "./types";

const ProjectDetails = ({
  type,
  title,
  logoSrc,
  techTags,
  missionTags,
  primaryColor,
  secondaryColors,
  makeDark = false,
  demoURL,
  repoURL,
}: ProjectDetailsTypes) => {
  return (
    <article className="w-full">
      <div className="relative w-10">
        <Image src={logoSrc} alt={`${title} logo`} />
      </div>
      <div className="whitespace-pre-line my-2">
        <h1 className={`txt-h3 ${makeDark ? "txt-gray-900" : "txt-gray-100"}`}>
          {title}
        </h1>
        <br />
        <h2 className={`txt-h4 ${makeDark ? "txt-gray-900" : "txt-gray-100"}`}>
          {type}
        </h2>
      </div>
      <DetailsList listContent={missionTags} colorSchemes={primaryColor} />
      <DetailsList listContent={techTags} colorSchemes={secondaryColors} />
    </article>
  );
};

const DetailsList = ({ listContent, colorSchemes }: DetailsListTypes) => (
  <ul className="mb-1-50 flex items-start justify-start flex-wrap">
    {listContent.map((tag) => {
      return (
        <li
          key={uuid()}
          className="badge"
          style={{ backgroundColor: colorSchemes[0] }}
        >
          <p className="badge__content" style={{ color: colorSchemes[1] }}>
            {tag}
          </p>
        </li>
      );
    })}
  </ul>
);

export default ProjectDetails;
