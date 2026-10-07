import {getTranslations, setRequestLocale} from 'next-intl/server';
import {site, isFilled, cvPath} from '@/content/site';
import PageHeader from '@/components/ui/PageHeader';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import type {Tone} from '@/content/types';

type Props = {params: Promise<{locale: string}>};

export async function generateMetadata({params}: Props) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'contact'});
  return {title: t('title')};
}

export default async function ContactPage({params}: Props) {
  const {locale} = await params;
  setRequestLocale(locale);
  const t = await getTranslations('contact');

  const items: {label: string; value: string; href?: string; tone: Tone}[] = [
    {label: t('email'), value: site.email, href: `mailto:${site.email}`, tone: 'pink'},
    {label: t('linkedin'), value: site.linkedin, href: site.linkedin, tone: 'lavender'},
    {label: t('github'), value: site.github, href: site.github, tone: 'mint'},
    {label: t('location'), value: t('locationValue'), tone: 'sun'}
  ];
  if (site.showPhone) {
    items.splice(1, 0, {label: t('phone'), value: site.phone, href: `tel:${site.phone.replace(/\s/g, '')}`, tone: 'sun'});
  }
  const visible = items.filter((i) => !i.href || isFilled(i.href));

  return (
    <>
      <PageHeader title={t('title')} subtitle={t('subtitle')} />
      <Section>
        <div className="grid gap-5 sm:grid-cols-2">
          {visible.map((i) => (
            <Card key={i.label} tone={i.tone}>
              <p className="text-sm font-semibold text-muted">{i.label}</p>
              {i.href ? (
                <a href={i.href} className="mt-1 block break-all font-display text-xl underline underline-offset-4"
                   {...(i.href.startsWith('http') ? {target: '_blank', rel: 'noopener noreferrer'} : {})}>
                  {i.value}
                </a>
              ) : (
                <p className="mt-1 font-display text-xl">{i.value}</p>
              )}
            </Card>
          ))}
        </div>
      </Section>
      <Section title={t('cvTitle')}>
        <div className="flex flex-wrap gap-3">
          <a href={cvPath('id')} download className="btn btn-primary">{t('cvId')}</a>
          <a href={cvPath('en')} download className="btn btn-ghost">{t('cvEn')}</a>
        </div>
      </Section>
    </>
  );
}