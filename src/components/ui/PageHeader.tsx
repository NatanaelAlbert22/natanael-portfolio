export default function PageHeader({title, subtitle}: {title: string; subtitle?: string}) {
  return (
    <header className="mx-auto w-full max-w-5xl px-5 pt-12 sm:px-8 sm:pt-16">
      <h1 className="font-display text-4xl sm:text-5xl">{title}</h1>
      {subtitle && <p className="mt-3 max-w-2xl text-lg text-muted">{subtitle}</p>}
    </header>
  );
}