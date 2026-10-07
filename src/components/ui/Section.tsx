export default function Section({title, children, className = ''}: {
  title?: string; children: React.ReactNode; className?: string;
}) {
  return (
    <section className={`mx-auto w-full max-w-5xl px-5 py-10 sm:px-8 sm:py-14 ${className}`}>
      {title && <h2 className="mb-6 font-display text-2xl sm:text-3xl">{title}</h2>}
      {children}
    </section>
  );
}