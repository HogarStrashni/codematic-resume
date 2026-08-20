import {
  sectionTitle,
  basicInfo,
  contactInfo,
  summaryData,
  experienceData,
  educationData,
  skillsData,
  projectsData
} from '$lib/data/en';

export type SectionTitle = (typeof sectionTitle)[keyof typeof sectionTitle];
export type BasicInfo = typeof basicInfo;
export type ContactInfo = typeof contactInfo;
export type ContactInfoSingle = (typeof contactInfo)[number];
export type SummaryData = typeof summaryData;
export type ExperienceData = typeof experienceData;
export type ExperienceDataSingle = (typeof experienceData)[number];
export type EducationData = typeof educationData;
export type SkillsData = typeof skillsData;
export type ProjectData = typeof projectsData;
export type ProjectDataSingle = (typeof projectsData)[number];
