import {getTranslations, setRequestLocale} from 'next-intl/server';
import {getProjects} from '@/lib/content';
import PageHeader from '@/components/ui/PageHeader';
import Section from '@/components/ui/Section';
import Reveal from '@/components/ui/Reveal';
import ProjectCard from '@/components/ui/ProjectCard';

type Props = {params: Promise<{locale: string}>};

export async function generateMetadata({params}: Props) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'projects'});
  return {title: t('title')};
}

export default async function ProjectsPage({params}: Props) {
  const {locale} = await params;
  setRequestLocale(locale);
  const t = await getTranslations('projects');

  return (
    <>
      <PageHeader title={t('title')} subtitle={t('subtitle')} />
      <Section>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {getProjects(locale).map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 100}><ProjectCard project={p} /></Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}