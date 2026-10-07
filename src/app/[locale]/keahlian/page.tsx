import {getTranslations, setRequestLocale} from 'next-intl/server';
import {getContent} from '@/lib/content';
import PageHeader from '@/components/ui/PageHeader';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Reveal from '@/components/ui/Reveal';

type Props = {params: Promise<{locale: string}>};

export async function generateMetadata({params}: Props) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'skills'});
  return {title: t('title')};
}

export default async function SkillsPage({params}: Props) {
  const {locale} = await params;
  setRequestLocale(locale);
  const t = await getTranslations('skills');
  const {skills} = getContent(locale);

  return (
    <>
      <PageHeader title={t('title')} subtitle={t('subtitle')} />
      <Section>
        <div className="grid gap-5 md:grid-cols-2">
          {skills.groups.map((g, i) => (
            <Reveal key={g.title} delay={(i % 2) * 100}>
              <Card tone={g.tone} className="h-full">
                <h2 className="font-display text-xl">{g.title}</h2>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <li key={item}><Badge tone={g.tone} strong>{item}</Badge></li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>
      <Section title={t('certsTitle')}>
        <ul className="grid gap-3 sm:grid-cols-2">
          {skills.certificates.map((c) => (
            <li key={c.name} className="rounded-2xl border border-line bg-surface p-4 shadow-soft">
              <p className="font-semibold">{c.name}</p>
              <p className="text-sm text-muted">{c.issuer} · {c.date}</p>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}