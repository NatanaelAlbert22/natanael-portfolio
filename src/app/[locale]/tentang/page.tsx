import {getTranslations, setRequestLocale} from 'next-intl/server';
import {getContent} from '@/lib/content';
import PageHeader from '@/components/ui/PageHeader';
import Section from '@/components/ui/Section';
import Timeline from '@/components/ui/Timeline';
import Card from '@/components/ui/Card';
import Reveal from '@/components/ui/Reveal';

type Props = {params: Promise<{locale: string}>};

export async function generateMetadata({params}: Props) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'about'});
  return {title: t('title')};
}

export default async function AboutPage({params}: Props) {
  const {locale} = await params;
  setRequestLocale(locale);
  const t = await getTranslations('about');
  const {profile} = getContent(locale);

  return (
    <>
      <PageHeader title={t('title')} subtitle={t('subtitle')} />
      <Section title={t('summaryTitle')}>
        <div className="max-w-3xl space-y-4 text-lg leading-relaxed">
          {profile.summary.map((p) => <p key={p}>{p}</p>)}
        </div>
      </Section>
      <Section title={t('educationTitle')}>
        <Timeline items={profile.education.map((e) => ({
          title: e.school, subtitle: e.degree, period: e.period, points: e.note ? [e.note] : []
        }))} />
      </Section>
      <Section title={t('achievementsTitle')}>
        <div className="grid gap-5 sm:grid-cols-2">
          {profile.achievements.map((a, i) => (
            <Reveal key={a.title} delay={i * 100}>
              <Card tone={i % 2 ? 'mint' : 'pink'} className="h-full">
                <p className="text-sm font-semibold text-muted">{a.year}</p>
                <h3 className="mt-1 font-display text-xl">{a.title}</h3>
                {a.detail && <p className="mt-1 text-muted">{a.detail}</p>}
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}