import { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'EcoTech Marketplace',
    description: 'A comprehensive e-commerce platform for sustainable technology products with advanced filtering and AI-powered recommendations.',
    longDescription: 'Built a full-stack e-commerce solution that connects eco-conscious consumers with sustainable technology products. The platform features intelligent product recommendations, real-time inventory management, and integrated payment processing.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Stripe', 'TensorFlow.js', 'Docker'],
    role: 'Full-Stack Developer & Technical Lead',
    contributions: [
      'Architected scalable microservices backend',
      'Implemented AI recommendation engine',
      'Designed responsive React frontend',
      'Integrated payment processing and inventory management'
    ],
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    outcomes: [
      { metric: 'User Engagement', value: '+150%' },
      { metric: 'Conversion Rate', value: '+85%' },
      { metric: 'Page Load Speed', value: '2.1s' },
      { metric: 'Monthly Revenue', value: '$2.5M+' }
    ],
    liveUrl: 'https://ecotech-marketplace.demo',
    githubUrl: 'https://github.com/wattsoft/ecotech-marketplace',
    category: 'web',
    featured: true,
    completedDate: '2024'
  },
  {
    id: '2',
    title: 'HealthTrack Mobile App',
    description: 'Cross-platform mobile application for personal health monitoring with real-time data sync and AI-powered insights.',
    longDescription: 'Developed a comprehensive health tracking application that allows users to monitor vital signs, track medications, and receive personalized health insights through machine learning algorithms.',
    technologies: ['React Native', 'Firebase', 'Python', 'TensorFlow', 'HealthKit', 'Google Fit'],
    role: 'Mobile App Developer & ML Engineer',
    contributions: [
      'Built cross-platform mobile app with React Native',
      'Integrated device sensors and health APIs',
      'Developed ML models for health predictions',
      'Implemented real-time data synchronization'
    ],
    image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    outcomes: [
      { metric: 'App Store Rating', value: '4.8/5' },
      { metric: 'Daily Active Users', value: '50K+' },
      { metric: 'Health Goals Achieved', value: '+75%' },
      { metric: 'User Retention', value: '85%' }
    ],
    liveUrl: 'https://healthtrack.app',
    category: 'mobile',
    featured: true,
    completedDate: '2023'
  },
  {
    id: '3',
    title: 'CloudOps Infrastructure',
    description: 'Enterprise-grade cloud infrastructure automation platform with monitoring, scaling, and cost optimization features.',
    longDescription: 'Designed and implemented a comprehensive cloud operations platform that automates infrastructure deployment, monitoring, and cost optimization across multiple cloud providers.',
    technologies: ['Kubernetes', 'Terraform', 'AWS', 'Azure', 'Prometheus', 'Grafana', 'Go', 'Python'],
    role: 'DevOps Engineer & Cloud Architect',
    contributions: [
      'Designed multi-cloud architecture strategy',
      'Automated infrastructure provisioning with Terraform',
      'Implemented monitoring and alerting systems',
      'Optimized cloud costs through intelligent scaling'
    ],
    image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    outcomes: [
      { metric: 'Infrastructure Costs', value: '-40%' },
      { metric: 'Deployment Time', value: '-80%' },
      { metric: 'System Uptime', value: '99.9%' },
      { metric: 'Scaling Efficiency', value: '+200%' }
    ],
    githubUrl: 'https://github.com/wattsoft/cloudops-platform',
    category: 'cloud',
    featured: true,
    completedDate: '2023'
  },
  {
    id: '4',
    title: 'SmartAnalytics Dashboard',
    description: 'AI-powered business intelligence platform with real-time data visualization and predictive analytics capabilities.',
    longDescription: 'Created an intelligent analytics platform that processes large datasets in real-time, providing actionable insights through advanced visualizations and machine learning-powered predictions.',
    technologies: ['Python', 'Django', 'React', 'D3.js', 'Apache Kafka', 'Redis', 'PostgreSQL', 'scikit-learn'],
    role: 'Data Engineer & Frontend Developer',
    contributions: [
      'Built real-time data processing pipeline',
      'Developed interactive visualization components',
      'Implemented predictive analytics models',
      'Optimized database queries for large datasets'
    ],
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    outcomes: [
      { metric: 'Data Processing Speed', value: '+300%' },
      { metric: 'Decision Making Time', value: '-60%' },
      { metric: 'Prediction Accuracy', value: '94%' },
      { metric: 'User Adoption', value: '100%' }
    ],
    liveUrl: 'https://smartanalytics.demo',
    category: 'ai',
    featured: false,
    completedDate: '2024'
  },
  {
    id: '5',
    title: 'FinTech Security Suite',
    description: 'Comprehensive cybersecurity solution for financial institutions with fraud detection and compliance monitoring.',
    longDescription: 'Developed a robust security platform specifically designed for financial services, featuring advanced fraud detection algorithms, real-time threat monitoring, and automated compliance reporting.',
    technologies: ['Java', 'Spring Boot', 'Apache Spark', 'Elasticsearch', 'Kibana', 'Docker', 'Kubernetes'],
    role: 'Security Engineer & Backend Developer',
    contributions: [
      'Implemented fraud detection algorithms',
      'Built real-time threat monitoring system',
      'Developed compliance reporting automation',
      'Designed secure API architecture'
    ],
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    outcomes: [
      { metric: 'Fraud Detection Rate', value: '99.2%' },
      { metric: 'False Positives', value: '-70%' },
      { metric: 'Compliance Score', value: '100%' },
      { metric: 'Response Time', value: '<100ms' }
    ],
    category: 'cloud',
    featured: false,
    completedDate: '2023'
  }
];