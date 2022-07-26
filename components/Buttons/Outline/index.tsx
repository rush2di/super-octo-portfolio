import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { OutlineBtnProps, OutlineBtnWrapperProps } from "../types";

const OutlineBtnDefaults = {
  icon: "external-link-alt" as IconProp,
  makeDark: false,
};

const OutlineBtn = ({
  href,
  icon = OutlineBtnDefaults.icon,
  makeDark = OutlineBtnDefaults.makeDark,
  text,
}: OutlineBtnProps) => {
  return (
    <OutlineBtnWrapper {...{ makeDark, href }}>
      <FontAwesomeIcon icon={icon} className="text-inherit" />
      <p className="text-sm text-inherit">{text}</p>
    </OutlineBtnWrapper>
  );
};

const OutlineBtnWrapper = ({
  href,
  makeDark,
  children,
}: OutlineBtnWrapperProps) => {
  return (
    <>
      {href ? (
        <a
          href={href}
          target="_blank"
          className={`inline-flex space-x-1 items-center justify-center px-1 py-0-25 border rounded-lg ${
            makeDark
              ? "border-gray-900 hover:bg-gray-900 text-gray-900 hover:text-white"
              : "border-white hover:bg-white text-white hover:text-gray-900"
          }`}
        >
          {children}
        </a>
      ) : (
        <div
          className={`inline-flex space-x-1 items-center justify-center px-3 py-2 border rounded-sm ${
            makeDark
              ? "border-gray-900 hover:bg-gray-900 text-gray-900 hover:text-white"
              : "border-white hover:bg-white text-white hover:text-gray-900"
          }`}
        >
          {children}
        </div>
      )}
    </>
  );
};

export default OutlineBtn;
