import type {Tone} from '@/content/types';
import {toneBg} from './tones';

export default function Card({tone, className = '', children}: {
  tone?: Tone; className?: string; children: React.ReactNode;
}) {
  return (
    <div className={`rounded-3xl border border-line p-6 shadow-soft transition duration-200 hover:-translate-y-0.5 hover:shadow-lg motion-reduce:transition-none motion-reduce:hover:transform-none ${tone ? toneBg[tone] : 'bg-surface'} ${className}`}>
      {children}
    </div>
  );
}