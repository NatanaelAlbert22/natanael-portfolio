import {notFound} from 'next/navigation';
import {getTranslations, setRequestLocale} from 'next-intl/server';
import {Link} from '@/i18n/navigation';
import {routing} from '@/i18n/routing';
import {getProject, getProjects} from '@/lib/content';
import {isFilled} from '@/content/site';
import Section from '@/components/ui/Section';
import Badge from '@/components/ui/Badge';
import Card from '@/components/ui/Card';
import {ProjectVisual} from '@/components/ui/ProjectCard';

type Props = {params: Promise<{locale: string; slug: string}>};

// Membuat halaman statis untuk setiap kombinasi bahasa + proyek
export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    getProjects(locale).map((p) => ({locale, slug: p.slug}))
  );
}

export async function generateMetadata({params}: Props) {
  const {locale, slug} = await params;
  const project = getProject(locale, slug);
  return project ? {title: project.title, description: project.tagline} : {};
}

export default async function ProjectDetailPage({params}: Props) {
  const {locale, slug} = await params;
  setRequestLocale(locale);
  const project = getProject(locale, slug);
  if (!project) notFound();
  const t = await getTranslations('projects');
  const links = project.links.filter((l) => isFilled(l.href));

  return (
    <Section>
      <Link href="/proyek" className="font-semibold text-accent underline underline-offset-4">← {t('back')}</Link>
      <h1 className="mt-4 font-display text-4xl sm:text-5xl">{project.title}</h1>
      <p className="mt-2 text-lg text-muted">{project.tagline}</p>

      <div className="mt-8"><ProjectVisual project={project} priority /></div>

      <p className="mt-8 max-w-3xl text-lg leading-relaxed">{project.summary}</p>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <Card tone={project.tone}>
          <h2 className="font-display text-xl">{t('highlights')}</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            {project.highlights.map((h) => <li key={h}>{h}</li>)}
          </ul>
        </Card>
        <Card>
          <h2 className="font-display text-xl">{t('stack')}</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.stack.map((s) => <Badge key={s} tone={project.tone}>{s}</Badge>)}
          </div>
          {links.length > 0 && (
            <>
              <h2 className="mt-6 font-display text-xl">{t('links')}</h2>
              <div className="mt-3 flex flex-wrap gap-3">
                {links.map((l) => (
                  <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    {l.label} ↗
                  </a>
                ))}
              </div>
            </>
          )}
        </Card>
      </div>
    </Section>
  );
}