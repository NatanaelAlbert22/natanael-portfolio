import type {Content} from '@/content/types';
import {profile as profileId} from '@/content/id/profile';
import {projects as projectsId} from '@/content/id/projects';
import {experience as experienceId} from '@/content/id/experience';
import {skills as skillsId} from '@/content/id/skills';
import {profile as profileEn} from '@/content/en/profile';
import {projects as projectsEn} from '@/content/en/projects';
import {experience as experienceEn} from '@/content/en/experience';
import {skills as skillsEn} from '@/content/en/skills';

const content: Record<string, Content> = {
  id: {profile: profileId, projects: projectsId, experience: experienceId, skills: skillsId},
  en: {profile: profileEn, projects: projectsEn, experience: experienceEn, skills: skillsEn}
};

export const getContent = (locale: string): Content => content[locale] ?? content.id;
export const getProjects = (locale: string) => getContent(locale).projects;
export const getProject = (locale: string, slug: string) =>
  getProjects(locale).find((p) => p.slug === slug);