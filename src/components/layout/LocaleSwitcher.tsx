'use client';
import {useLocale, useTranslations} from 'next-intl';
import {usePathname, useRouter} from '@/i18n/navigation';
import {routing} from '@/i18n/routing';

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname(); // path tanpa prefix bahasa, mis. "/proyek/harvestx"
  const t = useTranslations('nav');

  return (
    <div role="group" aria-label={t('language')} className="flex rounded-full border border-line bg-surface p-1">
      {routing.locales.map((l) => (
        <button key={l} type="button" lang={l} aria-pressed={l === locale}
                onClick={() => router.replace(pathname, {locale: l})}
                className={`rounded-full px-3 py-1 text-sm font-semibold uppercase ${
                  l === locale ? 'bg-accent text-accent-fg' : 'text-muted hover:text-text'
                }`}>
          {l}
        </button>
      ))}
    </div>
  );
}