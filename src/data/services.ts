import { Service } from '../types';

export const services: Service[] = [
  {
    id: '1',
    title: 'Cloud-Based POS Systems',
    description: 'Modern point-of-sale systems that work anywhere with internet. Manage sales, inventory, and customers from any device.',
    icon: 'Cloud',
    category: 'cloud',
    features: ['Real-time Sales Tracking', 'Inventory Management', 'Customer Database', 'Multi-location Support']
  },
  {
    id: '2',
    title: 'On-Premise POS Systems',
    description: 'Secure, offline-capable point-of-sale systems installed directly at your business location.',
    icon: 'Monitor',
    category: 'hardware',
    features: ['Offline Operation', 'Local Data Storage', 'Hardware Integration', 'Custom Setup']
  },
  {
    id: '3',
    title: 'Custom Process Automation',
    description: 'Automate repetitive tasks in your business to save time and reduce errors. Streamline your workflows.',
    icon: 'Zap',
    category: 'automation',
    features: ['Workflow Automation', 'Task Scheduling', 'Data Processing', 'Integration Solutions']
  },
  {
    id: '4',
    title: 'Digital Marketing Content',
    description: 'Eye-catching animations, themes, and video clips to boost your brand and attract more customers.',
    icon: 'Video',
    category: 'marketing',
    features: ['Animated Videos', 'Brand Themes', 'Marketing Clips', 'Social Media Content']
  },
  {
    id: '5',
    title: 'Mobile App Development',
    description: 'Build custom mobile apps for Android and iPhone that your customers will love to use.',
    icon: 'Smartphone',
    category: 'mobile',
    features: ['Android Apps', 'iPhone Apps', 'User-Friendly Design', 'App Store Publishing']
  },
  {
    id: '6',
    title: 'AI-Driven Software Solutions',
    description: 'Smart software that learns and adapts to help your business make better decisions automatically.',
    icon: 'Brain',
    category: 'ai',
    features: ['Smart Analytics', 'Automated Decisions', 'Predictive Insights', 'Intelligent Processing']
  },
  {
    id: '7',
    title: 'Custom Web Design & Hosting',
    description: 'Beautiful, fast websites that work perfectly on all devices. Includes reliable hosting and ongoing support.',
    icon: 'Globe',
    category: 'web',
    features: ['Responsive Design', 'Fast Loading', 'Secure Hosting', 'Mobile Optimized']
  },
  {
    id: '8',
    title: 'Enterprise Networking Systems',
    description: 'Large-scale network solutions for big businesses. Secure, fast, and reliable connections across all locations.',
    icon: 'Network',
    category: 'networking',
    features: ['Scalable Infrastructure', 'Security Management', 'Multi-site Connectivity', '24/7 Support']
  }
];