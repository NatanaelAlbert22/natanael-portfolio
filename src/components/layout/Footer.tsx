import {useTranslations} from 'next-intl';
import {site, isFilled} from '@/content/site';

export default function Footer() {
  const t = useTranslations('footer');
  const links = [
    {label: 'Email', href: `mailto:${site.email}`},
    {label: 'LinkedIn', href: site.linkedin},
    {label: 'GitHub', href: site.github}
  ].filter((l) => isFilled(l.href));

  return (
    <footer className="mt-10 border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-5 py-8 text-sm text-muted sm:flex-row sm:px-8">
        <div className="text-center sm:text-left">
          <p>{t('rights', {year: new Date().getFullYear()})}</p>
          <p>{t('built')}</p>
        </div>
        <ul className="flex gap-4">
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} className="font-semibold text-text underline underline-offset-4"
                 {...(l.href.startsWith('http') ? {target: '_blank', rel: 'noopener noreferrer'} : {})}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}