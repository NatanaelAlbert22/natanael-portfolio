import type {Tone} from '@/content/types';
import {toneBg} from './tones';

export default function Badge({children, tone = 'lavender'}: {children: React.ReactNode; tone?: Tone}) {
  return (
    <span className={`inline-flex items-center rounded-full border border-line px-3 py-1 text-sm font-medium ${toneBg[tone]}`}>
      {children}
    </span>
  );
}