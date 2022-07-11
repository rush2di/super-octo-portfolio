export interface ProjectDetailsTypes {
  makeDark: boolean;
  logoSrc: string;
  title: string;
  type: string;
  techTags: string[];
  missionTags: string[];
  primaryColor: string[];
  secondaryColors: string[];
  demoURL?: string;
  repoURL?: string;
}

export interface DetailsListTypes {
  listContent: string[];
  colorSchemes: string[];
}
