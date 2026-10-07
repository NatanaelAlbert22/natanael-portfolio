import type {Project} from '../types';

export const projects: Project[] = [
  {
    slug: 'ecommerce-customer-retention-analysis',
    title: 'E-commerce Customer Retention Analysis',
    tagline: 'Solo project · SQL and BI dashboard analysis for e-commerce customer retention',
    summary:
      'An online marketplace\'s management team wanted to know why revenue growth was slowing down and which customers were worth retaining. Built an advanced SQL pipeline over 98,000 transactions to map revenue trends, customer retention, and RFM segmentation, then surfaced it through an interactive dashboard for non-technical stakeholders.',
    stack: ['Python', 'SQL', 'DuckDB', 'Tableau'],
    highlights: [
      'Identified that revenue plateaued for 8 consecutive months in 2018 rather than declining — surfaced through CTEs and window functions on monthly data',
      'Built cohort retention analysis and RFM segmentation across nearly 95,000 unique customers',
      'Discovered and fixed a bias in the RFM frequency score that had misclassified 37% of customers as "Loyal Customer"'
    ],
    links: [
      {label: 'GitHub', href: 'https://github.com/NatanaelAlbert22/ecommerce-customer-retention-analysis'}
      // {label: 'Dashboard', href: 'https://public.tableau.com/...'}
    ],
    tone: 'mint',
    image: '/images/projects/ecommerce-customer-retention-analysis.jpg',   // remove this line if no image yet
    featured: false
  },
  {
    slug: 'feature-ab-test-funnel-analysis',
    title: 'Feature A/B Test & Funnel Analysis',
    tagline: 'Solo project · Statistical experiment for mobile game feature testing',
    summary:
      'A mobile game\'s product team was considering moving the first progression gate from level 30 to level 40, but didn\'t know its impact on player retention. Designed and ran a full A/B test over 90,000 users, from power analysis through multiple-testing correction, to deliver a statistically sound go/no-go recommendation.',
    stack: ['Python', 'SciPy', 'Statsmodels', 'Plotly'],
    highlights: [
      'Ran power analysis, proportion z-tests, bootstrap confidence intervals, and FDR correction across two retention metrics',
      'Found Day-7 retention dropped significantly by 0.83 percentage points in the treatment group (p=0.0026 after correction)',
      'Validated the study was well-powered (89.2%) so the non-significant result could be trusted as a true null, not insufficient data'
    ],
    links: [
      {label: 'GitHub', href: 'https://github.com/NatanaelAlbert22/feature-ab-test-funnel-analysis'}
    ],
    tone: 'lavender',
    image: '/images/projects/feature-ab-test-funnel-analysis.jpg',   // remove this line if no image yet
    featured: false
  },
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
    links: [{label: 'GitHub', href: 'https://github.com/JosuaAdhiCandraN/product1.1'}],
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
    links: [{label: 'GitHub', href: 'https://github.com/Drafaund/KosBudget'}],
    tone: 'pink',
    featured: true
  }
];