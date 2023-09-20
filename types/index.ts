export interface FeaturedProjectsCardProps {
  bgColor: string;
  technologiesUsedBgColor: string;
  projectTitle: string;
  projectDescription: string;
  frontend: string;
  backend: string;
  link: string;
  laptopImage: string;
  mobileImage: string;
}

export interface Project {
  title: string;
  subtitle: string;
  laptopImage: {
    asset: {
      _ref: string;
    };
  };
  color: string;
  mobileImage: {
    asset: {
      _ref: string;
    };
  };
  slug: {
    current: string;
  };
  demoSiteLink: string;
  sourceCodeLink: string;
  role: string;
  startDate: Date;
  endDate: Date;
  techStack: string[];
  description: string;
  problemStatement: string;
  figmaDesign: string;
  challenges: string[];
  learnings: string[];
  _id: string;
}
