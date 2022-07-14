import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { ReactNode } from "react";

export interface OutlineBtnProps {
  makeDark: boolean;
  icon: IconProp;
  href?: string;
  text: string;
}

export interface OutlineBtnWrapperProps {
  children: ReactNode;
  makeDark: boolean;
  href?: string;
}
