import type {Project} from '../types';

export const projects: Project[] = [
  {
    slug: 'prediksi-kualitas-udara',
    title: 'Transfer Learning untuk Prediksi Kualitas Udara dan Klimatologi',
    tagline: 'Skripsi S1 Teknologi Informasi UGM, 2025–2026',
    summary:
      'Sistem prediksi PM2.5/PM10 serta suhu dan kelembaban berbasis time-series untuk Yogyakarta, yang datanya terbatas. Model LSTM dipadukan dengan domain adaptation agar pengetahuan dari kota lain tetap bisa dimanfaatkan meski distribusi datanya berbeda.',
    stack: ['Python', 'Keras', 'LSTM', 'Time-series', 'CORAL', 'Deep CORAL'],
    highlights: [
      'Memprediksi PM2.5, PM10, suhu, dan kelembaban dengan LSTM',
      'Menjembatani perbedaan distribusi data antarkota memakai CORAL dan Deep CORAL',
      'Hasil evaluasi kompetitif dan menunjukkan efektivitas transfer learning pada data terbatas'
    ],
    links: [],
    tone: 'lavender',
    featured: true
  },
  {
    slug: 'harvestx',
    title: 'HarvestX',
    tagline: 'Proyek kelompok · Dashboard analitik dan prediksi harga pangan',
    summary:
      'Dashboard untuk memantau harga pangan, melihat tren, dan memperkirakan harga beberapa hari ke depan, lengkap dengan simulasi estimasi belanja.',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma'],
    highlights: [
      'API route untuk data historis, rata-rata bulanan, dan hasil prediksi',
      'Skema data dengan Prisma di atas PostgreSQL',
      'Dashboard harga harian, tren, dan prediksi 5 hari ke depan',
      'Simulasi estimasi belanja per komoditas, wilayah, dan jenis pasar'
    ],
    links: [{label: 'GitHub', href: '[ISI]'}],
    tone: 'mint',
    featured: true
  },
  {
    slug: 'kosbudget',
    title: 'KosBudget',
    tagline: 'Proyek kelompok · Manajemen keuangan untuk anak kos',
    summary:
      'Aplikasi yang membantu anak kos membagi budget bulanan secara otomatis dan memprioritaskan pengeluaran yang paling penting.',
    stack: ['Python', 'Streamlit'],
    highlights: [
      'Alokasi budget bulanan otomatis ke kategori',
      'Logika "decision score" berdasarkan urgensi, frekuensi, dan dampak jika terlewat',
      'Modul autentikasi dan pencatatan pengeluaran',
      'Dashboard visualisasi pengeluaran'
    ],
    links: [{label: 'GitHub', href: '[ISI]'}],
    tone: 'pink',
    featured: true
  }
];