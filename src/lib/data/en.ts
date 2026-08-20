import { MailOpen, Phone, Linkedin, Github } from '$lib/icons';
import HtecLogo from '$lib/assets/htecgroup-logo.jpg?enhanced';
import SitecLogo from '$lib/assets/sitec-llc-logo.jpg?enhanced';
import ElevateBitsLogo from '$lib/assets/elevatebits-logo.jpg?enhanced';
import GeoputLogo from '$lib/assets/geoput-logo.png?enhanced';
import RoutingLogo from '$lib/assets/routing-logo.png?enhanced';

// General -> Download File Metadata
export const downloadFileMetadata = {
  href: '/djordje-matic-resume.pdf',
  download: 'Djordje Matic - Resume.pdf'
};

// General -> Section Title
export const sectionTitle = {
  summary: 'Summary',
  workExperience: 'Work Experience',
  education: 'Education',
  skills: 'Skills',
  sideProjects: 'Side Projects'
};

// Section -> Basic Info
export const basicInfo = {
  profession: 'Software Developer | Frontend Focused',
  residence: 'Banja Luka, Bosnia and Herzegovina'
};

// Section -> Contact Basic Info
export const contactInfo = [
  {
    id: 'email',
    text: 'djordje@codematic.cc',
    href: 'mailto:djordje@codematic.cc',
    icon: MailOpen
  },
  {
    id: 'phone',
    text: '+387 65 458 362',
    href: 'tel:+387 65 458 362',
    icon: Phone
  },
  {
    id: 'linkedin',
    text: 'https://linkedin.com/in/djordje-matic',
    href: 'https://linkedin.com/in/djordje-matic',
    icon: Linkedin
  },
  {
    id: 'github',
    text: 'https://github.com/hogarstrashni',
    href: 'https://github.com/hogarstrashni',
    icon: Github
  }
];

// Section -> Summary
export const summaryData = [
  'With a decade of experience as a civil engineer, I made the exciting transition to software development, discovering a true passion for coding along the way. As a software developer, I leverage my engineering background to devise effective solutions and enhance user experiences through technology. My experience includes substantial work in JavaScript development, along with technologies such as HTML, CSS, and frameworks like SvelteKit, Next.js, and Astro.',
  'Committed to staying current with industry trends and continuously expanding my skill set, I am eager to tackle new challenges and explore full-stack development by integrating my front-end knowledge with back-end technologies.'
];

// Section -> Work Experience
export const experienceData = [
  {
    title: 'Software developer',
    company: 'HTEC',
    logo: HtecLogo,
    startDate: '2025-02-25',
    endDate: null,
    description:
      'Integrating frontend applications with backend APIs while continuously enhancing user experience through performance optimization, accessibility best practices, and responsive design. Working closely with designers and backend developers to deliver seamless, user-focused interfaces. Actively contributing to an agile development process through code reviews, feature planning, and ongoing refinement of frontend workflows. Ensuring application functionality and user experience through comprehensive end-to-end (E2E) testing.',
    technologies: [
      'SvelteKit / Svelte',
      'SvelteKit Superforms / Zod',
      'TanStack Svelte Virtual',
      'Typescript',
      'REST API',
      'Playwright'
    ]
  },
  {
    title: 'Software developer',
    company: 'Sitec LLC',
    logo: SitecLogo,
    startDate: '2023-03-16',
    endDate: null,
    description:
      'Develop web applications using modern frameworks, integrating backend services with tools like Supabase and Turso. Optimize performance and user experience by leveraging TypeScript and various UI libraries. Manage database interactions and enhance application architecture using advanced tools and frameworks. Collaborate on full-stack solutions with a focus on efficient, scalable design. Continuously stay updated with the latest industry trends to apply cutting-edge techniques and tools in development.',
    technologies: [
      'SvelteKit / Svelte',
      'SvelteKit Superforms / Zod',
      'Next.js / React',
      'Astro',
      'Tailwind CSS / Shadcn-UI / Shadcn-Svelte',
      'Typescript',
      'Supabase',
      'Turso',
      'Drizzle ORM',
      'Sanity'
    ]
  },
  {
    title: 'Junior React Developer',
    company: 'ElevateBits',
    logo: ElevateBitsLogo,
    startDate: '2022-12-01',
    endDate: '2023-03-16',
    description:
      'Learned to develop and maintain web applications using React JS, focusing on building responsive user interfaces. Gained experience in integrating APIs and handling data efficiently through various tools. Enhanced skills in managing application state and forms, as well as working with custom formatting for numbers and dates. Gained understanding of organizing application file structures and ensuring smooth navigation and user experience. Collaborated on version control and improved project workflows within the team.',
    technologies: [
      'React JS / TypeScript',
      'React Router / Deep Linking',
      'REST API',
      'Axios / React Query',
      'Zustand',
      'React Hook Forms / Zod',
      'Tailwind CSS / Tailwind UI / Headless UI',
      'Responsive UI Design',
      'GIT'
    ]
  },
  {
    title: 'Web Development Intern',
    company: 'Sitec LLC',
    logo: SitecLogo,
    startDate: '2022-02-01',
    endDate: '2022-12-16',
    description:
      'Gained experience in developing user interfaces and ensuring their responsiveness across different devices. Learned to integrate backend services and enhance web application functionality and developed skills in designing and building web solutions, with a focus on performance and user experience.',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'React JS',
      'Responsive UI Design',
      'REST API',
      'Express JS',
      'JWT / Authentication and Authorization workflows',
      'GIT',
      'Tailwind CSS',
      'TypeScript'
    ]
  },
  {
    title: 'Civil Engineer',
    company: 'Geoput d.o.o.',
    logo: GeoputLogo,
    startDate: '2019-01-15',
    endDate: '2022-01-31',
    description:
      'Preparation of project and spatial planning documentation in the field of hydrotechnics. Lead designer for technical solutions in water management, infrastructure projects, and supervision.',
    technologies: [
      'AutoCAD',
      'AutoCAD Civil 3D',
      'MS Office',
      'AutoCAD LISP programming',
      'HEC-RAS',
      'EPANET'
    ]
  },
  {
    title: 'Civil Engineer',
    company: 'Routing d.o.o.',
    logo: RoutingLogo,
    startDate: '2012-03-20',
    endDate: '2018-09-30',
    description:
      'Focusing on the preparation of project and spatial planning documentation in the field of hydrotechnics. Involved in designing technical solutions for water management and infrastructure projects.',
    technologies: ['AutoCAD', 'MS Office', 'EPANET']
  }
];

// Section -> Education
export const educationData = {
  faculty: 'Faculty of Architecture, Civil Engineering and Geodesy',
  university: 'University of Banja Luka',
  degree: 'Master of Science in Civil Engineering',
  grade: 'Average Grade: 9.53'
};

// Section -> Skills
export const skillsData = [
  'SvelteKit / Svelte',
  'Next.js / React',
  'Astro',
  'TypeScript',
  'Cascading Style Sheets (CSS)',
  'Tailwind CSS',
  'Front-End Development',
  'TanStack Virtual',
  'Git',
  'RDBMS (PostgreSQL, SQLite) / SQL',
  'Drizzle ORM',
  'Playwright'
];

// Section -> Side Projects
export const projectsData = [
  {
    title: 'Mobilnost Website',
    description: {
      heading: 'Next.js + Sanity Web Application - In Development',
      text: 'The project focused on creating a seamless content management experience, where articles could be easily authored, updated, and displayed in real-time. This project enhanced my skills in both frontend and backend technologies and strengthened my ability to build scalable, content-driven web applications.'
    },
    link: 'https://mobilnost-production-test.vercel.app/',
    github: 'https://github.com/hogarstrashni/mobilnost'
  },
  {
    title: 'Sitec Website',
    description: {
      heading: 'Astro + React Web Application - In Development',
      text: "The goal was to leverage Astro's unique capabilities for optimizing performance and content delivery while working with a range of technologies and integrations. This project strengthened my understanding of modern web development practices and enabled me to apply my skills in creating scalable, high-performance web applications."
    },
    link: 'https://sitec.dev/',
    github: null
  },
  {
    title: 'Div Index app',
    description: {
      heading: 'Next.js + Neon - In Production',
      text: 'This project utilized Next.js for building a dynamic, full-stack application with Neon as the cloud-native Postgres backend. It emphasized modern database integrations, serverless architecture, and efficient data handling. Through this experience, I deepened my backend development skills and gained hands-on experience in deploying database-driven applications.'
    },
    link: 'https://div-index.vercel.app/',
    github: null
  }
];
