
export enum ServiceType {
  RD = 'R&D',
  DATA_SCIENCE = 'Data Science',
  FULL_STACK = 'Full-Stack Development'
}

export interface Job {
  id: string;
  slug: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  benefits: string[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  content: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  expertise: string[];
  bio: string;
  credentials: string[];
  image: string;
}
