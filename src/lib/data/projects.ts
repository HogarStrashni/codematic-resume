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

export type ProjectData = (typeof projectsData)[number];
