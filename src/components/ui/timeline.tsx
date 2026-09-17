// Adapted from timDeHof/shadcn-timeline (MIT; docs/TIMELINE_LICENSE.txt).
// Static composition for Astro: no loading states, animation runtime or hydration.
import * as React from 'react';
import { cn } from '@/lib/utils';

const Timeline = React.forwardRef<HTMLOListElement, React.ComponentPropsWithoutRef<'ol'>>(
  ({ className, ...props }, ref) => (
    <ol
      ref={ref}
      role="list"
      data-slot="timeline"
      className={cn('relative m-0 flex list-none flex-col p-0', className)}
      {...props}
    />
  ),
);
Timeline.displayName = 'Timeline';

const TimelineItem = React.forwardRef<HTMLLIElement, React.ComponentPropsWithoutRef<'li'>>(
  ({ className, ...props }, ref) => (
    <li
      ref={ref}
      data-slot="timeline-item"
      className={cn(
        'group/timeline relative grid grid-cols-[var(--space-4)_minmax(0,1fr)] gap-x-[var(--space-4)] pb-[var(--space-7)] last:pb-0',
        className,
      )}
      {...props}
    />
  ),
);
TimelineItem.displayName = 'TimelineItem';

const TimelineConnector = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<'div'>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      aria-hidden="true"
      data-slot="timeline-connector"
      className={cn(
        'absolute inset-y-0 left-[calc(var(--space-4)/2)] w-px bg-border group-last/timeline:hidden',
        className,
      )}
      {...props}
    />
  ),
);
TimelineConnector.displayName = 'TimelineConnector';

function TimelineIcon() {
  return (
    <span
      aria-hidden="true"
      data-slot="timeline-icon"
      className="relative col-start-1 row-start-1 mx-auto mt-[var(--space-2)] size-[var(--space-2)] rounded-full bg-primary ring-4 ring-background"
    />
  );
}

const TimelineContent = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<'div'>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="timeline-content"
      className={cn(
        'col-start-2 row-start-1 flex min-w-0 flex-col gap-[var(--space-3)]',
        className,
      )}
      {...props}
    />
  ),
);
TimelineContent.displayName = 'TimelineContent';

const TimelineHeader = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<'div'>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="timeline-header"
      className={cn('flex flex-col items-start gap-[var(--space-3)]', className)}
      {...props}
    />
  ),
);
TimelineHeader.displayName = 'TimelineHeader';

const TimelineTitle = React.forwardRef<HTMLHeadingElement, React.ComponentPropsWithoutRef<'h3'>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      data-slot="timeline-title"
      className={cn(
        'text-[length:var(--font-size-body-lg)] leading-[var(--line-snug)] text-foreground',
        className,
      )}
      {...props}
    />
  ),
);
TimelineTitle.displayName = 'TimelineTitle';

const TimelineDescription = React.forwardRef<
  HTMLParagraphElement,
  React.ComponentPropsWithoutRef<'p'>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    data-slot="timeline-description"
    className={cn('m-0 text-muted-foreground', className)}
    {...props}
  />
));
TimelineDescription.displayName = 'TimelineDescription';

export {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineIcon,
  TimelineContent,
  TimelineHeader,
  TimelineTitle,
  TimelineDescription,
};
