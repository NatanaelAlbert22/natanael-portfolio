import type {Tone} from '@/content/types';
import {toneBg, toneBgStrong} from './tones';

export default function Badge({children, tone = 'lavender', strong = false}: {
  children: React.ReactNode; tone?: Tone; strong?: boolean;
}) {
  return (
    <span className={`inline-flex items-center rounded-full border border-line px-3 py-1 text-sm font-medium ${
      strong ? toneBgStrong[tone] : toneBg[tone]
    }`}>
      {children}
    </span>
  );
}