export type TimelineItem = {
  title: string; subtitle: string; period: string;
  points?: string[]; link?: {label: string; href: string};
};

export default function Timeline({items}: {items: TimelineItem[]}) {
  return (
    <ol className="relative ml-3 space-y-8 border-l-2 border-line">
      {items.map((item) => (
        <li key={item.title + item.period} className="relative pl-8">
          <span aria-hidden className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-2 border-bg bg-accent" />
          <p className="text-sm font-semibold text-muted">{item.period}</p>
          <h3 className="font-display text-xl">{item.title}</h3>
          <p className="text-muted">{item.subtitle}</p>
          {item.points && item.points.length > 0 && (
            <ul className="mt-2 list-disc space-y-1 pl-5">
              {item.points.map((p) => <li key={p}>{p}</li>)}
            </ul>
          )}
          {item.link && (
            <a href={item.link.href} target="_blank" rel="noopener noreferrer"
               className="mt-3 inline-block font-semibold text-accent underline underline-offset-4">
              {item.link.label} ↗
            </a>
          )}
        </li>
      ))}
    </ol>
  );
}