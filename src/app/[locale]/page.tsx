import Image from 'next/image';
import {getTranslations, setRequestLocale} from 'next-intl/server';
import {Link} from '@/i18n/navigation';
import {getProjects} from '@/lib/content';
import {cvPath} from '@/content/site';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Reveal from '@/components/ui/Reveal';
import ProjectCard from '@/components/ui/ProjectCard';

export default async function HomePage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  setRequestLocale(locale);
  const t = await getTranslations('home');
  const featured = getProjects(locale).filter((p) => p.featured);
  const focus = [
    {key: 'etl', tone: 'mint'},
    {key: 'ml', tone: 'lavender'},
    {key: 'web', tone: 'pink'}
  ] as const;

  return (
    <>
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-pink opacity-70 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute -right-20 top-40 h-72 w-72 rounded-full bg-mint opacity-70 blur-3xl" />
        <section className="relative mx-auto grid max-w-5xl items-center gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.3fr_1fr] md:py-20">
          <div>
            <p className="font-semibold text-accent">{t('hero.greeting')}</p>
            <h1 className="mt-1 font-display text-5xl sm:text-6xl">Natanael Albert</h1>
            <p className="mt-3 text-lg font-semibold">{t('hero.role')}</p>
            <p className="mt-4 max-w-xl text-lg text-muted">{t('hero.intro')}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              <Badge tone="pink">{t('hero.factLocation')}</Badge>
              <Badge tone="mint">{t('hero.factReady')}</Badge>
              <Badge tone="sun">{t('hero.factGpa')}</Badge>
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/proyek" className="btn btn-primary">{t('cta.projects')}</Link>
              <Link href="/kontak" className="btn btn-ghost">{t('cta.contact')}</Link>
              <a href={cvPath(locale)} download className="btn btn-ghost">{t('cta.cv')}</a>
            </div>
          </div>
          <div className="mx-auto w-56 sm:w-72">
            <div className="rotate-3 rounded-[2.5rem] bg-lav p-3 shadow-soft">
              <Image src="/images/profile.jpg" alt={t('hero.photoAlt')} width={400} height={400} priority
                     className="aspect-square w-full -rotate-3 rounded-[2rem] object-cover" />
            </div>
          </div>
        </section>
      </div>

      {/* Fokus */}
      <Section title={t('focus.title')}>
        <div className="grid gap-5 md:grid-cols-3">
          {focus.map((f, i) => (
            <Reveal key={f.key} delay={i * 100}>
              <Card tone={f.tone} className="h-full">
                <h3 className="font-display text-xl">{t(`focus.${f.key}.title`)}</h3>
                <p className="mt-2 text-muted">{t(`focus.${f.key}.text`)}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Proyek pilihan */}
      <Section title={t('featured.title')}>
        <div className="grid gap-5 md:grid-cols-3">
          {featured.map((p, i) => (
            <Reveal key={p.slug} delay={i * 100}><ProjectCard project={p} /></Reveal>
          ))}
        </div>
        <Link href="/proyek" className="mt-6 inline-block font-semibold text-accent underline underline-offset-4">
          {t('featured.all')} →
        </Link>
      </Section>

      {/* CTA kontak */}
      <Section>
        <Reveal>
          <Card tone="lavender" className="text-center">
            <h2 className="font-display text-3xl">{t('contactCta.title')}</h2>
            <p className="mx-auto mt-2 max-w-xl text-muted">{t('contactCta.text')}</p>
            <Link href="/kontak" className="btn btn-primary mt-5">{t('contactCta.button')}</Link>
          </Card>
        </Reveal>
      </Section>
    </>
  );
}