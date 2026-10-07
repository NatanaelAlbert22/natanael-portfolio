import type {Content} from '../types';

export const skills: Content['skills'] = {
  groups: [
    {title: 'ETL & Data', tone: 'mint', items: ['Python (Pandas)', 'Data cleaning', 'Data exploration', 'Data integration']},
    {title: 'Programming Languages', tone: 'lavender', items: ['Python', 'C#', 'C', 'C++', 'JavaScript', 'TypeScript']},
    {title: 'Databases & APIs', tone: 'sun', items: ['Oracle Database', 'PostgreSQL', 'SQL', 'Prisma ORM', 'Postman']},
    {title: 'AI & Data Science', tone: 'pink', items: ['Keras', 'Deep Learning', 'LSTM', 'Time-series analysis']},
    {title: 'Application Development', tone: 'mint', items: ['ASP.NET', 'PHP', 'AJAX', 'Laravel', 'Next.js', 'Kotlin']},
    {title: 'Testing & Version Control', tone: 'lavender', items: ['Black Box', 'Gray Box', 'Git']}
  ],
  certificates: [
    {name: 'ETL and ELT in Python', issuer: 'DataCamp', date: 'Nov 2024'},
    {name: 'Exploratory Data Analysis in Python', issuer: 'DataCamp', date: 'Sep 2024'},
    {name: 'Cleaning Data in Python', issuer: 'DataCamp', date: 'Sep 2024'},
    {name: 'Introduction to Statistics in Python', issuer: 'DataCamp', date: 'Aug 2024'},
    {name: 'Advanced Deep Learning with Keras', issuer: 'DataCamp', date: 'May 2024'},
    {name: 'Introduction to Deep Learning with Keras', issuer: 'DataCamp', date: 'May 2024'}
  ]
};