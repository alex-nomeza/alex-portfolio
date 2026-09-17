import type { ComponentProps } from 'react';
import { Button } from './button';

type Props = ComponentProps<'a'> & {
  variant?: ComponentProps<typeof Button>['variant'];
  direction?: 'left' | 'right' | 'external';
};

// Compose asChild inside React: Astro slots are not React elements for Radix Slot.
export function LinkButton({ children, variant = 'link', direction = 'right', ...props }: Props) {
  const arrow = direction === 'left' ? '←' : direction === 'external' ? '↗' : '→';
  return (
    <Button asChild variant={variant} size={variant === 'link' ? 'text' : 'default'}>
      <a {...props}>
        {direction === 'left' && <span aria-hidden="true">{arrow}</span>}
        {children}
        {direction !== 'left' && <span aria-hidden="true">{arrow}</span>}
      </a>
    </Button>
  );
}
