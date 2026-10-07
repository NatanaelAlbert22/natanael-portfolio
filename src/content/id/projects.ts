import type {Project} from '../types';

export const projects: Project[] = [
  {
    slug: 'ecommerce-customer-retention-analysis',
    title: 'E-commerce Customer Retention Analysis',
    tagline: 'Proyek individu · Analisis SQL dan dashboard BI untuk retensi pelanggan e-commerce',
    summary:
      'Tim manajemen sebuah marketplace online ingin tahu kenapa pertumbuhan revenue melambat dan pelanggan mana yang layak dipertahankan. Dibangun pipeline SQL lanjutan di atas 98 ribu transaksi untuk memetakan tren revenue, retensi pelanggan, dan segmentasi RFM, lalu disajikan lewat dashboard interaktif untuk stakeholder non-teknis.',
    stack: ['Python', 'SQL', 'DuckDB', 'Tableau'],
    highlights: [
      'Mengidentifikasi bahwa revenue stagnan selama 8 bulan berturut-turut di 2018, bukan menurun — ditemukan lewat analisis CTE dan window function pada data bulanan',
      'Membangun cohort retention analysis dan segmentasi RFM terhadap hampir 95 ribu pelanggan unik',
      'Menemukan dan memperbaiki bias pada skor frekuensi RFM yang sebelumnya salah mengklasifikasikan 37% pelanggan sebagai "Loyal Customer"'
    ],
    links: [
      {label: 'GitHub', href: 'https://github.com/NatanaelAlbert22/ecommerce-customer-retention-analysis'},
      {label: 'Dashboard', href: 'https://public.tableau.com/app/profile/natanael.albert/viz/OlistBrazilianEcommerceDataAnalysis/Dashboard1?publish=yes'}
    ],
    tone: 'mint',
    //image: '/images/projects/ecommerce-customer-retention-analysis.jpg',   // hapus baris ini kalau belum ada gambar
    featured: false
  },
  {
    slug: 'feature-ab-test-funnel-analysis',
    title: 'Feature A/B Test & Funnel Analysis',
    tagline: 'Proyek individu · Eksperimen statistik untuk pengujian fitur produk mobile game',
    summary:
      'Tim produk sebuah mobile game mempertimbangkan memindahkan gate pertama dari level 30 ke level 40, tapi tidak tahu dampaknya terhadap retensi pemain. Dirancang dan dieksekusi eksperimen A/B lengkap atas 90 ribu pengguna, dari power analysis hingga koreksi multiple testing, untuk menghasilkan rekomendasi go/no-go yang bisa dipertanggungjawabkan secara statistik.',
    stack: ['Python', 'SciPy', 'Statsmodels', 'Plotly'],
    highlights: [
      'Menjalankan power analysis, z-test proporsi, bootstrap confidence interval, dan koreksi FDR untuk dua metrik retensi sekaligus',
      'Menemukan retensi hari ke-7 turun signifikan 0,83 poin persen pada grup treatment (p=0,0026 setelah koreksi)',
      'Memvalidasi studi well-powered (89,2%) sehingga hasil non-signifikan terbukti bukan karena kurang data'
    ],
    links: [
      {label: 'GitHub', href: 'https://github.com/NatanaelAlbert22/feature-ab-test-funnel-analysis'}
    ],
    tone: 'lavender',
    //image: '/images/projects/feature-ab-test-funnel-analysis.jpg',   // hapus baris ini kalau belum ada gambar
    featured: false
  },
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
    links: [{label: 'GitHub', href: 'https://github.com/JosuaAdhiCandraN/product1.1'}],
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
    links: [{label: 'GitHub', href: 'https://github.com/Drafaund/KosBudget'}],
    tone: 'pink',
    featured: true
  },
];