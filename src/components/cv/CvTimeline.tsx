import type { TimelineEntry } from '../../data/cv';
import { Badge } from '../ui/badge';
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineIcon,
  TimelineContent,
  TimelineHeader,
  TimelineTitle,
  TimelineDescription,
} from '../ui/timeline';

export function CvTimeline({ entries }: { entries: TimelineEntry[] }) {
  const publishedEntries = entries.filter((entry) => !entry.draft);
  if (publishedEntries.length === 0) return null;

  return (
    <Timeline>
      {publishedEntries.map((entry) => (
        <TimelineItem key={`${entry.period}-${entry.organization}-${entry.title}`}>
          <TimelineConnector />
          <TimelineIcon />
          <TimelineContent>
            <TimelineHeader>
              <Badge variant="outline">{entry.period}</Badge>
              <TimelineTitle>{entry.title}</TimelineTitle>
            </TimelineHeader>
            <p className="m-0 text-[length:var(--font-size-nav)]">
              {entry.organization}
              {entry.location && <span className="text-muted-foreground"> · {entry.location}</span>}
            </p>
            {entry.description && <TimelineDescription>{entry.description}</TimelineDescription>}
            {Boolean(entry.highlights?.length) && (
              <ul className="m-0 flex list-disc flex-col gap-[var(--space-2)] pl-[var(--space-5)] text-muted-foreground">
                {entry.highlights?.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            )}
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
