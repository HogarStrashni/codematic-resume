import HtecLogo from '$lib/assets/htecgroup-logo.jpg?enhanced';
import SitecLogo from '$lib/assets/sitec-llc-logo.jpg?enhanced';
import ElevateBitsLogo from '$lib/assets/elevatebits-logo.jpg?enhanced';
import GeoputLogo from '$lib/assets/geoput-logo.png?enhanced';
import RoutingLogo from '$lib/assets/routing-logo.png?enhanced';

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

export type ExperienceData = (typeof experienceData)[number];
