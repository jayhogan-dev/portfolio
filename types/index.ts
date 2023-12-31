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
  startDate: string;
  endDate: string;
  description: string;
  problemStatement: string;
  problemStatementImage: {
    asset: {
      _ref: string;
    };
  };
  figmaDesign: {
    asset: {
      _ref: string;
    };
  };
  challenges: string[];
  learnings: string[];
  techStack: [
    {
      label: string;
      icon: {
        asset: {
          _ref: string;
        };
      };
    }
  ];
  _id: string;
}

export interface EmailTemplateProps {
  name: string;
  email: string;
  project: string;
  contact: string;
}

export interface Blog {
  title: string;
  subtitle: string;
  headerImage: {
    asset: {
      _ref: string;
    };
  };
  slug: {
    current: string;
  };
  content: [
    {
      _key: string;
      listItem: string;
      children: [
        {
          text: string;
        }
      ];
    }
  ];
  _id: string;
}

export interface Testimonial {
  name: string;
  review: string;
  title: string;
  company: string;
  stars: number;
  _id: string;
}

export interface TechStackItem {
  label: string;
  icon: {
    asset: {
      _ref: string;
    };
  };
}
