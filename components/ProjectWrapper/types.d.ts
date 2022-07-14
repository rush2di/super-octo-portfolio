import type { ReactNode } from "react";

export interface ProjectWrapperProps extends ProjectWrapperStaticProps {
  children: ReactNode;
}

export interface ProjectWrapperStaticProps {
  initializer?: (e: any) => void;
  classNames: string;
  id: string;
}
