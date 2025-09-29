export interface Profile {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  summary: string;
  links: {
    label: string;
    url: string;
  }[];
}

export interface SkillCategory {
  title: string;
  items: string[];
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string[];
  tech: string[];
}

export interface Project {
  id: string;
  name: string;
  timeline: string;
  headline: string;
  summary: string;
  problem: string;
  approach: string;
  impact: string;
  tech: string[];
  links?: {
    label: string;
    url: string;
  }[];
}

export interface BlogPost {
  id: string;
  title: string;
  publishedOn: string;
  excerpt: string;
  tags: string[];
}

export interface Education {
  institution: string;
  credential: string;
  location: string;
  timeline: string;
  highlights: string[];
}

export interface PortfolioData {
  profile: Profile;
  skills: SkillCategory[];
  experiences: Experience[];
  projects: Project[];
  blog: BlogPost[];
  education: Education[];
}
