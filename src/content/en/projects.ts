import type {Project} from '../types';

export const projects: Project[] = [
  {
    slug: 'prediksi-kualitas-udara',
    title: 'Transfer Learning for Air Quality and Climate Prediction',
    tagline: 'B.Sc. thesis, Information Technology, UGM, 2025–2026',
    summary:
      'A time-series system that predicts PM2.5/PM10 and temperature/humidity for Yogyakarta, where data is limited. An LSTM model is combined with domain adaptation so knowledge from other cities can still be put to work despite differing data distributions.',
    stack: ['Python', 'Keras', 'LSTM', 'Time-series', 'CORAL', 'Deep CORAL'],
    highlights: [
      'Predicts PM2.5, PM10, temperature, and humidity with LSTM',
      'Bridges data distribution gaps between cities using CORAL and Deep CORAL',
      'Competitive evaluation results that show transfer learning works well on limited data'
    ],
    links: [],
    tone: 'lavender',
    featured: true
  },
  {
    slug: 'harvestx',
    title: 'HarvestX',
    tagline: 'Team project · Food price analytics and forecasting dashboard',
    summary:
      'A dashboard for tracking food prices, spotting trends, and forecasting prices a few days ahead, with a shopping cost estimator built in.',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma'],
    highlights: [
      'API routes for historical data, monthly averages, and forecast results',
      'Prisma data schema on top of PostgreSQL',
      'Daily price dashboard, trends, and a 5-day forecast',
      'Shopping cost simulation by commodity, region, and market type'
    ],
    links: [{label: 'GitHub', href: '[ISI]'}],
    tone: 'mint',
    featured: true
  },
  {
    slug: 'kosbudget',
    title: 'KosBudget',
    tagline: 'Team project · Personal finance for boarding-house students',
    summary:
      'An app that helps students living in boarding houses split their monthly budget automatically and prioritize the spending that matters most.',
    stack: ['Python', 'Streamlit'],
    highlights: [
      'Automatic monthly budget allocation across categories',
      'A "decision score" based on urgency, frequency, and the impact of missing a payment',
      'Authentication and expense tracking',
      'Visual dashboard of spending'
    ],
    links: [{label: 'GitHub', href: '[ISI]'}],
    tone: 'pink',
    featured: true
  }
];