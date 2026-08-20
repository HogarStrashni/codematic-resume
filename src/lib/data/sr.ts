import { MailOpen, Phone, Linkedin } from '$lib/icons';
import HtecLogo from '$lib/assets/htecgroup-logo.jpg?enhanced';
import SitecLogo from '$lib/assets/sitec-llc-logo.jpg?enhanced';
import ElevateBitsLogo from '$lib/assets/elevatebits-logo.jpg?enhanced';
import GeoputLogo from '$lib/assets/geoput-logo.png?enhanced';
import RoutingLogo from '$lib/assets/routing-logo.png?enhanced';

// General -> Download File Metadata
export const downloadFileMetadata = {
  href: '/djordje-matic-rezime.pdf',
  download: 'Djordje Matic - Rezime.pdf'
};

// General -> Section Title
export const sectionTitle = {
  summary: 'O meni',
  workExperience: 'Radno iskustvo',
  education: 'Obrazovanje',
  skills: 'Licence'
};

// Section -> Basic Info
export const basicInfo = {
  profession: 'Diplomirani inženjer građevinarstva | Softverski programer',
  residence: 'Banja Luka, Bosna i Herzegovina'
};

// Section -> Contact Basic Info
export const contactInfo = [
  {
    id: 'email-1',
    text: 'djmatic@agfbl.org',
    href: 'mailto:djmatic@agfbl.org',
    icon: MailOpen
  },
  {
    id: 'phone',
    text: '+387 65 458 362',
    href: 'tel:+387 65 458 362',
    icon: Phone
  },
  {
    id: 'email-2',
    text: 'djordje@codematic.cc',
    href: 'mailto:djordje@codematic.cc',
    icon: MailOpen
  },
  {
    id: 'linkedin',
    text: 'https://linkedin.com/in/djordje-matic',
    href: 'https://linkedin.com/in/djordje-matic',
    icon: Linkedin
  }
];

// Section -> Summary
export const summaryData = [
  'Sa više od deset godina iskustva u građevinarstvu, posedujem snažnu inženjersku osnovu u projektovanju, tehničkoj razradi i realizaciji građevinskih i infrastrukturnih projekata, sa posebnim iskustvom u oblasti hidrotehnike, vodoprivrede i infrastrukturnog planiranja. Tokom profesionalnog rada stekao sam značajno iskustvo u izradi projektne, tehničke i prostorno-planske dokumentacije, razvoju tehničkih rešenja, koordinaciji projektnih aktivnosti, stručnom nadzoru, kao i saradnji sa investitorima, projektantima i izvođačima.',
  'Paralelno sa građevinskom strukom, razvio sam značajno iskustvo u oblasti softverskog razvoja, prvenstveno kroz rad sa JavaScript-om, HTML-om i CSS-om, kao i modernim framework-ima poput SvelteKit-a, Next.js-a i Astro-a. Znanje iz programiranja predstavlja važnu dodatnu kompetenciju koja mi omogućava da inženjerske probleme sagledam iz drugačije perspektive i pristupim njihovom rešavanju na sistematičan i efikasan način. Posebno me interesuje primena digitalnih alata, automatizacija procesa, obrada i analiza podataka, kao i razvoj specijalizovanih rešenja koja mogu unaprediti svakodnevni rad u građevinskoj i inženjerskoj praksi.',
  'U narednom periodu želim da dodatno povežem stečena znanja iz građevinarstva i softverskog razvoja, sa ciljem primene savremenih tehnologija u projektovanju, analizi i upravljanju građevinskim i infrastrukturnim projektima. Poseban fokus planiram da usmerim na dalje usavršavanje u Python-u, automatizaciji, radu sa podacima i drugim tehnologijama koje imaju praktičnu primenu u inženjerstvu. Cilj mi je da kroz kontinuirano učenje i povezivanje različitih oblasti razvijam rešenja koja mogu olakšati rad inženjera, automatizovati ponavljajuće zadatke, unaprediti obradu tehničke dokumentacije i podataka i doprineti kvalitetnijem donošenju projektantskih odluka.'
];

// Section -> Work Experience
export const experienceData = [
  {
    title: 'Softverski programer',
    company: 'HTEC',
    logo: HtecLogo,
    startDate: '2025-02-25',
    endDate: null,
    description:
      'Integracija frontend aplikacija sa backend API-jima, uz unapređivanje korisničkog iskustva kroz optimizaciju performansi, pristupačnost, responzivni dizajn, E2E testiranje i saradnju sa dizajnerima i backend programerima u agilnom razvojnom procesu.',
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
    title: 'Softverski programer',
    company: 'Sitec LLC',
    logo: SitecLogo,
    startDate: '2023-03-16',
    endDate: null,
    description:
      'Razvoj web aplikacija korišćenjem modernih frameworka, integracija backend servisa i baza podataka, optimizacija performansi i korisničkog iskustva, te razvoj efikasnih i skalabilnih full-stack rešenja uz primenu savremenih tehnologija i praćenje najnovijih trendova u industriji.',
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
    title: 'Junior Javascript programer',
    company: 'ElevateBits',
    logo: ElevateBitsLogo,
    startDate: '2022-12-01',
    endDate: '2023-03-16',
    description:
      'Razvoj i održavanje web aplikacija u React-u, sa fokusom na responzivne korisničke interfejse, integraciju API-ja, upravljanje stanjem i formama, organizaciju aplikacija, navigaciju, rad sa Git-om i unapređivanje razvojnih procesa u timu.',
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
    title: 'Praktikant za razvoj softvera',
    company: 'Sitec LLC',
    logo: SitecLogo,
    startDate: '2022-02-01',
    endDate: '2022-12-16',
    description:
      'Sticanje iskustva u razvoju responzivnih korisničkih interfejsa, integraciji backend servisa i izradi web rešenja sa fokusom na performanse, funkcionalnost i korisničko iskustvo.',
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
    title: 'Diplomirani inženjer građevinarstva',
    company: 'Geoput d.o.o.',
    logo: GeoputLogo,
    startDate: '2019-01-15',
    endDate: '2022-01-31',
    description:
      'Izrada projektne i prostorno-planske dokumentacije iz oblasti hidrotehnike, vodeći projektant tehničkih rešenja u oblasti vodoprivrede, infrastrukturnih projekata i stručnog nadzora. Višegodišnje iskustvo u projektovanju, tehničkoj razradi i koordinaciji kompleksnih građevinskih i infrastrukturnih projekata, uz primenu tehničkih standarda, propisa i principa održivog planiranja. Odgovornost za razvoj projektnih rešenja od idejne faze do realizacije, saradnju sa investitorima, projektantima i izvođačima, kao i kontrolu kvaliteta i usklađenosti projektne dokumentacije.',
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
    title: 'Diplomirani inženjer građevinarstva',
    company: 'Routing d.o.o.',
    logo: RoutingLogo,
    startDate: '2012-03-20',
    endDate: '2018-09-30',
    description:
      'Izrada projektne i prostorno-planske dokumentacije iz oblasti hidrotehnike, sa fokusom na projektovanje tehničkih rešenja u oblasti vodoprivrede i infrastrukturnih projekata. Učešće u razvoju i razradi projektne dokumentacije od idejnog do izvedbenog nivoa, uz primenu relevantnih tehničkih propisa, standarda i inženjerskih principa. Iskustvo u analizi postojećeg stanja, definisanju optimalnih tehničkih rešenja i koordinaciji sa drugim učesnicima u procesu projektovanja, sa posebnim fokusom na funkcionalnost, pouzdanost i kvalitet građevinskih i infrastrukturnih sistema.',
    technologies: ['AutoCAD', 'MS Office', 'EPANET']
  }
];

// Section -> Education
export const educationData = {
  faculty: 'Arhitektonsko-građevinsko-geodetski fakultet',
  university: 'Univerzitet u Banjoj Luci',
  degree: 'Diplomirani inženjer građevinarstva',
  grade: 'Prosječna ocjena: 9.53'
};

// Section -> Licence
export const licenceData = [
  {
    typeOfLicence: 'Tehnička dokumentacija',
    title: 'Licenca za izradu tehničke dokumentacije, hidrotehnička faza i nadzor.',
    licensor: 'Ministarstvo za prostorno uređenje, građevinarstvo i ekologiju Republike Srpske',
    licenceNumber: 'ФЛ-7498/17'
  },
  {
    typeOfLicence: 'Prostorno planska dokumentacija',
    title: 'Licenca za izradu dokumenata prostornog uređenja.',
    licensor: 'Ministarstvo za prostorno uređenje, građevinarstvo i ekologiju Republike Srpske',
    licenceNumber: 'ФЛ-8945/20'
  }
];
