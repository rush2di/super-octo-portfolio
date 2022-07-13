import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { ReactNode } from "react";

export interface OutlineBtnTypes {
  makeDark: boolean;
  icon: IconProp;
  href?: string;
}

export interface OutlineBtnWrapperTypes {
  children: ReactNode;
  makeDark: boolean;
  href?: string;
}
