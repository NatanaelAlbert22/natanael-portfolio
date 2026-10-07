import type {ExperienceItem} from '../types';

export const experience: ExperienceItem[] = [
  {
    category: 'internship',
    role: 'Kerja Praktik · Web App Developer',
    org: 'PT Pura Barutama, Kudus',
    period: 'Jan 2025 – Feb 2025',
    points: [
      'Membangun aplikasi web ASP.NET untuk digitalisasi laporan',
      'Mengintegrasikan Oracle Database melalui stored procedure',
      'Melakukan pengujian black box dan gray box'
    ],
    link: {label: 'Repo GitHub', href: 'https://github.com/NatanaelAlbert22/Pura-QPro-Mobile'}
  },
  {
    category: 'teaching',
    role: 'Asisten Praktikum Proyek Senior TI',
    org: 'DTETI UGM',
    period: 'Jan 2026 – Jul 2026',
    points: [
      'Membimbing mahasiswa selama praktikum',
      'Menilai modul dan tugas',
      'Menjelaskan konsep dan membantu troubleshooting'
    ]
  },
  {
    category: 'organization',
    role: 'Staf & Koordinator Divisi Competitive Programming',
    org: 'FindIT!',
    period: 'Nov 2022 – Mei 2024',
    points: [
      'Mengoordinasi tim penyusun soal',
      'Menyusun soal kompetisi',
      'Menyiapkan server dan situs lomba'
    ]
  }
];