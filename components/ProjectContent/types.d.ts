export interface ProjectContentProps {
  cover: string;
  logo?: string | any;
  title: string | any;
  altLogo: string | any;
  compTitle: string;
  techTags: string[];
  missionTags: string[];
  primaryColors: string[];
  secondaryColors: string[];
  makeDark?: boolean;
  designURL?: string;
  repoURL?: string;
  demoURL?: string;
}

export interface DetailsListProps {
  listContent: string[];
  colorSchemes: string[];
  isSmall?: boolean;
}
