export interface Service {
  id: string;
  title: string;
  description: string;
  icon: 'Globe' | 'Smartphone' | 'Cloud' | 'Brain' | 'Palette' | 'Zap' | 'BarChart' | 'Shield' | 'Monitor' | 'Video' | 'Network';
  category: Array<'web' | 'mobile' | 'cloud' | 'ai' | 'hardware' | 'automation' | 'marketing' | 'networking' | 'infrastructure'>;
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

export interface TimelineItem {
  id: string;
  year: string;
  title: string;
  description: string;
  milestone: boolean;
}

export interface ContactForm {
  name: string;
  email: string;
  company: string;
  message: string;
  service: string;
}

export interface ThemeContextType {
  isDark: boolean;
  toggleDark: () => void;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  role: string;
  contributions: string[];
  image: string;
  outcomes: {
    metric: string;
    value: string;
  }[];
  liveUrl?: string;
  githubUrl?: string;
  category: 'web' | 'mobile' | 'cloud' | 'ai';
  featured: boolean;
  completedDate: string;
}