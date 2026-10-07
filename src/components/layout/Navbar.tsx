'use client';
import {useState} from 'react';
import {useTranslations} from 'next-intl';
import {Link, usePathname} from '@/i18n/navigation';
import {navItems} from '@/lib/nav';
import LocaleSwitcher from './LocaleSwitcher';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href));
  const linkClass = (href: string) =>
    `rounded-full px-4 py-2 text-sm font-semibold transition ${
      isActive(href) ? 'bg-lav text-text' : 'text-muted hover:bg-lav hover:text-text'
    }`;

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="font-display text-xl">
          Natanael<span className="text-accent">.</span>
        </Link>

        <nav aria-label={t('main')} className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={linkClass(item.href)}
                  aria-current={isActive(item.href) ? 'page' : undefined}>
              {t(item.key)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LocaleSwitcher />
          <ThemeToggle />
          <button type="button" aria-expanded={open} aria-controls="mobile-menu"
                  aria-label={open ? t('close') : t('menu')} onClick={() => setOpen(!open)}
                  className="grid h-10 w-10 place-items-center rounded-full border border-line bg-surface md:hidden">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label={t('main')} className="flex flex-col gap-1 border-t border-line px-5 pb-4 pt-2 md:hidden">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}
                  className={linkClass(item.href)} aria-current={isActive(item.href) ? 'page' : undefined}>
              {t(item.key)}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}