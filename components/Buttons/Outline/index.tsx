import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { OutlineBtnTypes, OutlineBtnWrapperTypes } from "../types";

const OutlineBtn = ({
  href,
  icon = ["fas", "star"],
  makeDark = false,
}: OutlineBtnTypes) => {
  return (
    <OutlineBtnWrapper {...{ makeDark, href }}>
      <FontAwesomeIcon
        icon={icon}
        className={makeDark ? "text-gray-900" : "text-gray-100"}
      />
      <p className={`text-sm ${makeDark ? "text-gray-900" : "text-gray-100"}`}>
        live website
      </p>
    </OutlineBtnWrapper>
  );
};

const OutlineBtnWrapper = ({
  href,
  makeDark,
  children,
}: OutlineBtnWrapperTypes) => {
  return (
    <>
      {href ? (
        <a
          href={href}
          target="_blank"
          className={`inline-flex space-x-1 items-center justify-center px-3 py-2 border rounded-sm ${
            makeDark ? "border-gray-900" : "border-gray-100"
          }`}
        >
          {children}
        </a>
      ) : (
        <div
          className={`inline-flex space-x-1 items-center justify-center px-3 py-2 border rounded-sm ${
            makeDark ? "border-gray-900" : "border-gray-100"
          }`}
        >
          {children}
        </div>
      )}
    </>
  );
};

export default OutlineBtn;
