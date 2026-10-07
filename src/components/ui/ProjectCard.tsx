import Image from 'next/image';
import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';
import type {Project} from '@/content/types';
import Badge from './Badge';
import Card from './Card';
import {toneBg} from './tones';

export function ProjectVisual({project, priority = false}: {project: Project; priority?: boolean}) {
  if (project.image) {
    return (
      <Image src={project.image} alt={project.title} width={1200} height={675} priority={priority}
             className="aspect-video w-full rounded-2xl object-cover" />
    );
  }
  // Placeholder dekoratif sampai kamu menambahkan gambar asli
  return (
    <div aria-hidden className={`flex aspect-video w-full items-center justify-center rounded-2xl ${toneBg[project.tone]}`}>
      <span className="font-display text-6xl opacity-70">{project.title.charAt(0)}</span>
    </div>
  );
}

export default function ProjectCard({project}: {project: Project}) {
  const t = useTranslations('projects');
  return (
    <Card className="flex h-full flex-col gap-4">
      <ProjectVisual project={project} />
      <div className="flex-1">
        <h3 className="font-display text-xl">{project.title}</h3>
        <p className="mt-1 text-sm font-medium text-muted">{project.tagline}</p>
        <p className="mt-3">{project.summary}</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {project.stack.slice(0, 4).map((s) => <Badge key={s} tone={project.tone}>{s}</Badge>)}
      </div>
      <Link href={`/proyek/${project.slug}`} className="font-semibold text-accent underline underline-offset-4">
        {t('viewDetail')} →
      </Link>
    </Card>
  );
}