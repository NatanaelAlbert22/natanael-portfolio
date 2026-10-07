import {getTranslations, setRequestLocale} from 'next-intl/server';
import {getContent} from '@/lib/content';
import PageHeader from '@/components/ui/PageHeader';
import Section from '@/components/ui/Section';
import Timeline from '@/components/ui/Timeline';

type Props = {params: Promise<{locale: string}>};

export async function generateMetadata({params}: Props) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'experience'});
  return {title: t('title')};
}

export default async function ExperiencePage({params}: Props) {
  const {locale} = await params;
  setRequestLocale(locale);
  const t = await getTranslations('experience');
  const {experience} = getContent(locale);
  const categories = ['internship', 'teaching', 'organization'] as const;

  return (
    <>
      <PageHeader title={t('title')} subtitle={t('subtitle')} />
      {categories.map((cat) => {
        const items = experience.filter((e) => e.category === cat);
        if (items.length === 0) return null;
        return (
          <Section key={cat} title={t(cat)}>
            <Timeline items={items.map((e) => ({
              title: e.role, subtitle: e.org, period: e.period, points: e.points, link: e.link
            }))} />
          </Section>
        );
      })}
    </>
  );
}