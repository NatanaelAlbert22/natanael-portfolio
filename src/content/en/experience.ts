import type {ExperienceItem} from '../types';

export const experience: ExperienceItem[] = [
  {
    category: 'internship',
    role: 'Internship · Web App Developer',
    org: 'PT Pura Barutama, Kudus',
    period: 'Jan 2025 – Feb 2025',
    points: [
      'Built an ASP.NET web app to digitize reporting',
      'Integrated Oracle Database through stored procedures',
      'Ran black box and gray box testing'
    ],
    link: {label: 'GitHub repo', href: 'https://github.com/NatanaelAlbert22/Pura-QPro-Mobile'}
  },
  {
    category: 'teaching',
    role: 'Teaching Assistant · IT Senior Project Lab',
    org: 'DTETI UGM',
    period: 'Jan 2026 – Jul 2026',
    points: [
      'Guided students throughout the lab sessions',
      'Graded modules and assignments',
      'Explained concepts and helped with troubleshooting'
    ]
  },
  {
    category: 'organization',
    role: 'Staff & Coordinator, Competitive Programming Division',
    org: 'FindIT!',
    period: 'Nov 2022 – May 2024',
    points: [
      'Coordinated the problem-setting team',
      'Wrote competition problems',
      'Set up the contest servers and website'
    ]
  }
];