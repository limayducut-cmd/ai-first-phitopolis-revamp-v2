
import React from 'react';
import { 
  Cpu, 
  Database, 
  Layout, 
  LineChart, 
  Search, 
  Code,
  Globe,
  Users
} from 'lucide-react';
import { ServiceType, Job, TeamMember, BlogPost } from './types';

export const SERVICES = [
  {
    type: ServiceType.RD,
    title: "Research & Development",
    description: "Pioneering new technologies and frameworks to solve complex enterprise problems.",
    icon: <Cpu className="w-8 h-8 text-primary" />,
    features: ["Custom Algorithm Design", "Proof of Concept Building", "Performance Optimization"]
  },
  {
    type: ServiceType.DATA_SCIENCE,
    title: "Data Science",
    description: "Extracting actionable insights from vast datasets through ML and statistical modeling.",
    icon: <Database className="w-8 h-8 text-primary" />,
    features: ["Predictive Analytics", "Natural Language Processing", "Quant Strategy Dev"]
  },
  {
    type: ServiceType.FULL_STACK,
    title: "Full-Stack Engineering",
    description: "Building resilient, scalable, and high-performance applications for the modern web.",
    icon: <Layout className="w-8 h-8 text-primary" />,
    features: ["High-Frequency Systems", "Cloud-Native Architecture", "Real-time Dashboards"]
  }
];

export const JOBS: Job[] = [
  {
    id: "1",
    slug: "senior-quant-engineer",
    title: "Senior Quantitative Engineer",
    department: "Engineering",
    location: "Mumbai / Remote",
    type: "Full-time",
    description: "We are looking for a high-caliber engineer to build low-latency trading infrastructure.",
    requirements: ["5+ years C++/Python", "Strong Mathematical background", "Experience in Finance"],
    benefits: ["Competitive Equity", "Remote-first culture", "Modern Tech Stack"]
  },
  {
    id: "2",
    slug: "data-scientist-ml",
    title: "Lead Data Scientist (ML)",
    department: "Data Science",
    location: "Remote",
    type: "Full-time",
    description: "Drive our machine learning initiatives and architect scalable data pipelines.",
    requirements: ["PhD/Masters in CS or Math", "PyTorch/Tensorflow expertise", "NLP experience"],
    benefits: ["Flexible hours", "Learning budget", "Health Insurance"]
  }
];

export const TEAM: TeamMember[] = [
  {
    id: "1",
    name: "Dr. Vikram Sethi",
    role: "Founder & CEO",
    expertise: ["FinTech", "Quantitative Analysis"],
    bio: "Former Executive Director at JPMorgan and Morgan Stanley with 15+ years in algorithmic trading.",
    credentials: ["Ex-JPMorgan", "Ex-Morgan Stanley", "PhD Mathematics"],
    image: "https://picsum.photos/400/400?random=1"
  },
  {
    id: "2",
    name: "Sarah Chen",
    role: "Head of Engineering",
    expertise: ["High Performance Computing", "React"],
    bio: "Software architect specializing in low-latency systems and scalable frontend architectures.",
    credentials: ["Ex-Deutsche Bank", "MSc Computer Science"],
    image: "https://picsum.photos/400/400?random=2"
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    slug: "the-future-of-low-latency",
    title: "The Future of Low-Latency Systems",
    excerpt: "Exploring how sub-microsecond processing is changing the landscape of quantitative finance.",
    author: "Dr. Vikram Sethi",
    date: "Oct 12, 2023",
    readTime: "8 min read",
    category: "Engineering",
    content: "Detailed post content here..."
  },
  {
    id: "2",
    slug: "scaling-ml-models",
    title: "Scaling ML Models for Real-time Insights",
    excerpt: "Challenges and solutions for deploying heavy models in high-throughput environments.",
    author: "Sarah Chen",
    date: "Sep 28, 2023",
    readTime: "6 min read",
    category: "Data Science",
    content: "Detailed post content here..."
  }
];
