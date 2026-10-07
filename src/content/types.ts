export type Tone = 'pink' | 'mint' | 'lavender' | 'sun';
export type LinkItem = {label: string; href: string};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  stack: string[];
  highlights: string[];
  links: LinkItem[];
  tone: Tone;
  featured?: boolean;
  image?: string; // mis. '/images/projects/harvestx.jpg'. Kosongkan = tampil blok warna
};

export type ExperienceItem = {
  category: 'internship' | 'teaching' | 'organization';
  role: string;
  org: string;
  period: string;
  points: string[];
  link?: LinkItem;
};

export type Profile = {
  summary: string[];
  education: {school: string; degree: string; period: string; note?: string}[];
  achievements: {title: string; detail?: string; year: string}[];
};

export type SkillGroup = {title: string; items: string[]; tone: Tone};
export type Certificate = {name: string; issuer: string; date: string};

export type Content = {
  profile: Profile;
  projects: Project[];
  experience: ExperienceItem[];
  skills: {groups: SkillGroup[]; certificates: Certificate[]};
};