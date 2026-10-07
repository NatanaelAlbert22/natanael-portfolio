import type {Metadata} from 'next';
import {Fredoka, Plus_Jakarta_Sans} from 'next/font/google';
import {notFound} from 'next/navigation';
import {hasLocale, NextIntlClientProvider} from 'next-intl';
import {getTranslations, setRequestLocale} from 'next-intl/server';
import {ThemeProvider} from 'next-themes';
import {routing} from '@/i18n/routing';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import '../globals.css';

const fredoka = Fredoka({subsets: ['latin'], variable: '--font-fredoka', display: 'swap'});
const jakarta = Plus_Jakarta_Sans({subsets: ['latin'], variable: '--font-jakarta', display: 'swap'});

type Props = {children: React.ReactNode; params: Promise<{locale: string}>};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export async function generateMetadata({params}: Pick<Props, 'params'>): Promise<Metadata> {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'meta'});
  return {
    title: {default: t('title'), template: '%s · Natanael Albert'},
    description: t('description')
  };
}

export default async function LocaleLayout({children, params}: Props) {
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);
  const t = await getTranslations('nav');

  return (
    <html lang={locale} suppressHydrationWarning className={`${fredoka.variable} ${jakarta.variable}`}>
      <body className="bg-bg font-sans text-text antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NextIntlClientProvider>
            <a href="#main" className="skip-link">{t('skip')}</a>
            <Navbar />
            <main id="main">{children}</main>
            <Footer />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}