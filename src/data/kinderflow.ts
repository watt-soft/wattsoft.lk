import {
  KinderFlowFeatureCategory,
  KinderFlowWhyChoose,
  KinderFlowSubscriptionPillar
} from '../types';

export const kinderFlowData = {
  name: 'KinderFlow',
  tagline: 'Preschool Management System',
  slogan: 'One connected platform. Simpler everyday management.',
  subtitle: 'All-in-one digital solution crafted specifically for early childhood education centers, preschools, and growing daycare institutions.',
  
  whatIs: {
    title: 'What is KinderFlow?',
    lead: 'KinderFlow is an all-in-one, subscription-based Preschool Management System designed to simplify daily operations and bring preschool administrators, teachers, and parents together through one convenient digital platform.',
    body1: 'From managing student admissions and attendance to tracking fees, monitoring child development, and communicating with parents, KinderFlow helps preschools reduce paperwork, organize information, and manage their operations more efficiently.',
    body2: "Whether you're managing a small preschool or planning to expand, KinderFlow helps you spend less time on administrative tasks and more time supporting children's growth and learning."
  },

  whatYouGetIntro: "KinderFlow is designed to meet the everyday needs of preschools while providing room for future growth. Core Features provide the essential tools to manage your preschool's day-to-day operations, while Advanced Features & Add-ons bring continuous improvements, new features, and optional add-ons to support your preschool as it grows and evolves.",

  coreFeatures: [
    {
      number: '01',
      category: 'Student & Attendance Management',
      icon: 'Users',
      summary: 'Effortlessly track admissions, daily classroom attendance, and developmental milestones.',
      items: [
        {
          title: 'Student Records & Enrollment',
          description: "Maintain student profiles, admission details, and essential records throughout each child's preschool journey."
        },
        {
          title: 'Daily Attendance & Gate Management',
          description: 'Record student arrivals and departures to simplify attendance tracking and daily drop-off and pick-up activities.'
        },
        {
          title: 'Child Development Records',
          description: "Document observations and developmental progress to help teachers and parents follow each child's growth."
        }
      ]
    },
    {
      number: '02',
      category: 'Fees & Payment Management',
      icon: 'Receipt',
      summary: 'Keep finances streamlined with automated records, reminders, and payment tracking.',
      items: [
        {
          title: 'Student Fee Management',
          description: 'Record fee payments, monitor outstanding balances, and identify overdue payments.'
        },
        {
          title: 'Payment Notifications',
          description: 'Keep parents informed about relevant fee payments and outstanding balances through timely notifications.'
        }
      ]
    },
    {
      number: '03',
      category: 'Learning & Academic Management',
      icon: 'BookOpen',
      summary: 'Keep curriculum, tasks, and child learning progress transparent and coordinated.',
      items: [
        {
          title: 'Homework Management',
          description: 'Share assignments and keep parents informed about activities children need to complete at home.'
        },
        {
          title: 'Academic Progress Tracking',
          description: "Record term marks and help parents stay informed about their children's academic progress."
        }
      ]
    },
    {
      number: '04',
      category: 'Parent Communication & Engagement',
      icon: 'MessageSquare',
      summary: 'Build lasting parent trust through instant updates, mutual feedback, and ratings.',
      items: [
        {
          title: 'Parent Notifications',
          description: 'Share important updates related to attendance, fees, homework, and other student activities.'
        },
        {
          title: 'Parent Feedback',
          description: 'Collect feedback from parents and facilitate monthly teacher ratings to support continuous improvement.'
        }
      ]
    },
    {
      number: '05',
      category: 'Access & Preschool Management',
      icon: 'ShieldCheck',
      summary: 'Role-based access, multi-child capabilities, and customized preschool workflows.',
      items: [
        {
          title: 'Role-Based Access',
          description: 'Provide appropriate access to administrators, teachers, and parents according to their responsibilities.'
        },
        {
          title: 'Multi-Child Parent Accounts',
          description: "Allow parents with multiple children enrolled at the preschool to access their children's information through one account."
        },
        {
          title: 'Preschool-Specific Configuration',
          description: 'Configure the system to suit individual preschool requirements and workflows.'
        },
        {
          title: 'Web & Mobile Accessibility',
          description: 'Access essential information through the supported web and mobile interfaces.'
        }
      ]
    }
  ] as KinderFlowFeatureCategory[],

  advancedFeatures: [
    {
      number: '01',
      category: 'Advanced Administration & Safety',
      icon: 'Lock',
      summary: 'Enhanced security and verification for child pick-ups and official permissions.',
      items: [
        {
          title: 'Enhanced Gate Security',
          description: 'Introduce additional pick-up verification options to help ensure children are released to authorized individuals.'
        },
        {
          title: 'Digital Document Management',
          description: 'Store essential student documents and help administrators identify missing or incomplete records.'
        },
        {
          title: 'Digital Consent & Permissions',
          description: 'Collect and maintain parental responses for field trips, photography, and other activities requiring permission.'
        }
      ]
    },
    {
      number: '02',
      category: 'Financial & Expense Management',
      icon: 'TrendingUp',
      summary: 'Comprehensive view of institute running costs, revenues, and operating margins.',
      items: [
        {
          title: 'Expense Tracking',
          description: 'Record operating expenses such as rent, utilities, salaries, and maintenance.'
        },
        {
          title: 'Financial Overview',
          description: "Compare income and expenses to gain a clearer picture of the preschool's financial performance."
        }
      ]
    },
    {
      number: '03',
      category: 'Events & Announcements',
      icon: 'Calendar',
      summary: 'Plan celebrations, parent-teacher conferences, and track parent RSVPs seamlessly.',
      items: [
        {
          title: 'Event Management',
          description: 'Organize preschool events, meetings, celebrations, and special activities.'
        },
        {
          title: 'Event Notifications & RSVPs',
          description: 'Share event details and collect parent responses to support attendance planning and coordination.'
        }
      ]
    },
    {
      number: '04',
      category: 'Dashboards, Reports & Analytics',
      icon: 'BarChart3',
      summary: 'Executive dashboards, automatic reporting, and simple data exports for leadership.',
      items: [
        {
          title: 'Enhanced Management Dashboard',
          description: 'Bring key operational information, attendance figures, collections, and pending tasks into a consolidated overview.'
        },
        {
          title: 'Reports & Analytics',
          description: 'Review enrollment, attendance, and financial trends to better understand preschool performance.'
        },
        {
          title: 'Automated Executive Reports',
          description: 'Generate scheduled summaries to help owners monitor operations with less manual effort.'
        },
        {
          title: 'Data Export',
          description: 'Export relevant information into supported formats for record keeping and reporting.'
        }
      ]
    }
  ] as KinderFlowFeatureCategory[],

  whyChoose: [
    {
      title: 'Simplify Daily Operations',
      description: 'Bring essential preschool activities into one platform instead of relying on scattered records, paperwork, and separate tracking methods.',
      icon: 'Sparkles'
    },
    {
      title: 'Save Time & Reduce Administrative Work',
      description: 'Make attendance tracking, fee monitoring, record keeping, and parent communication more organized, helping staff spend less time on repetitive tasks.',
      icon: 'Clock'
    },
    {
      title: 'Strengthen Parent Relationships',
      description: "Keep parents informed about their children's attendance, learning, development, and preschool activities.",
      icon: 'HeartHandshake'
    },
    {
      title: 'Gain Better Business Visibility',
      description: "Access organized records and meaningful reports that help you understand your preschool's operations and make informed decisions.",
      icon: 'Eye'
    },
    {
      title: 'Support Business Growth & Enhance Recognition',
      description: 'Deliver a more organized and professional experience for parents, strengthen confidence in your institution, and build a stronger reputation that supports long-term business growth.',
      icon: 'Award'
    },
    {
      title: 'Grow Beyond Preschool with KinderFlow',
      description: 'As your institution expands, KinderFlow can be upgraded to support School management as well, allowing you to extend your digital management system beyond preschool without having to start from scratch.',
      icon: 'Compass'
    },
    {
      title: 'Keep Moving Forward',
      description: 'Benefit from ongoing product improvements, updates, and support as part of the service offering.',
      icon: 'Rocket'
    }
  ] as KinderFlowWhyChoose[],

  subscriptionModel: {
    intro: 'KinderFlow is offered through a Subscription Model, allowing your preschool to use the platform without having to manage the underlying software infrastructure independently.',
    pillars: [
      {
        title: 'Flexible Subscription Plans',
        description: "Choose a monthly or annual subscription based on your preschool's size and requirements.",
        icon: 'CalendarCheck'
      },
      {
        title: 'Ongoing Access',
        description: 'Use the platform throughout your subscription period without purchasing a separate software licence outright.',
        icon: 'Key'
      },
      {
        title: 'Ongoing Support',
        description: 'Get assistance in using the platform and addressing issues, according to your subscription plan.',
        icon: 'Headphones'
      },
      {
        title: 'Continuous Improvements',
        description: 'Benefit from applicable feature enhancements, bug fixes, and security updates as the platform evolves.',
        icon: 'RefreshCw'
      },
      {
        title: 'Future Enhancements & Add-ons',
        description: "New features and improvements will be introduced through ongoing updates, while additional capabilities may be available as optional add-ons based on your preschool's needs. Availability, implementation timelines, and any additional charges will be communicated separately.",
        icon: 'Layers'
      },
      {
        title: 'Room to Grow',
        description: "Adapt your subscription and platform configuration as your preschool's needs change, subject to the available plans and services.",
        icon: 'TrendingUp'
      }
    ] as KinderFlowSubscriptionPillar[]
  },

  contact: {
    heading: "Let's Connect!",
    subtitle: 'Ready to simplify your Preschool Management?',
    description: "We'd love to learn about your Preschool and show you how our platform can support your daily operations. Let's have a quick chat to see how KinderFlow can be customized for your exact needs.",
    phone1: '+94 (76) 779 6422',
    phone1Raw: '+94767796422',
    phone2: '0357 300 345',
    phone2Raw: '+94357300345',
    email: 'info@wattsoft.lk',
    address: '470 A, Meepitiya, Kegalle, Sri Lanka',
    company: 'Wattsoft',
    companyTagline: 'Empowering the Future with Smart Tech',
    companyStatement: 'Modern Software Engineering. Direct Expertise. Long-Term Partnerships.'
  }
};
