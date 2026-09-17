import { Button } from '../ui/button';

interface Props {
  githubUrl: string;
  linkedinUrl?: string;
}

// Static brand icons: no hydration or icon-library dependency needed.
export function SocialLinks({ githubUrl, linkedinUrl }: Props) {
  return (
    <div className="flex items-center gap-1">
      <Button asChild variant="ghost" size="icon">
        <a href={githubUrl} aria-label="GitHub" title="GitHub">
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            focusable="false"
            data-icon="inline-start"
          >
            <path d="M12 .75a11.25 11.25 0 0 0-3.558 21.923c.563.105.769-.244.769-.542 0-.267-.01-.975-.015-1.913-3.13.68-3.79-1.51-3.79-1.51-.512-1.3-1.25-1.647-1.25-1.647-1.023-.7.077-.686.077-.686 1.132.08 1.728 1.162 1.728 1.162 1.006 1.725 2.64 1.227 3.282.938.103-.728.394-1.227.716-1.508-2.5-.284-5.13-1.25-5.13-5.564 0-1.23.44-2.235 1.16-3.023-.117-.285-.503-1.43.11-2.978 0 0 .945-.303 3.094 1.155a10.79 10.79 0 0 1 5.625 0c2.148-1.458 3.091-1.155 3.091-1.155.615 1.548.23 2.693.113 2.978.722.788 1.158 1.793 1.158 3.023 0 4.325-2.633 5.277-5.14 5.556.405.35.767 1.043.767 2.1 0 1.517-.014 2.741-.014 3.113 0 .3.203.653.774.542A11.25 11.25 0 0 0 12 .75Z" />
          </svg>
        </a>
      </Button>
      {linkedinUrl && (
        <Button asChild variant="ghost" size="icon">
          <a href={linkedinUrl} aria-label="LinkedIn" title="LinkedIn">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              focusable="false"
              data-icon="inline-start"
            >
              <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96C2 21.32 2.69 22 3.55 22h16.9c.86 0 1.55-.68 1.55-1.52V3.52C22 2.68 21.31 2 20.45 2ZM7.93 18.75H4.98V9.2h2.95v9.55ZM6.46 7.89a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42Zm12.29 10.86H15.8V14.1c0-1.11-.02-2.54-1.55-2.54-1.55 0-1.79 1.21-1.79 2.46v4.73H9.51V9.2h2.83v1.3h.04c.39-.74 1.36-1.52 2.79-1.52 2.98 0 3.58 1.96 3.58 4.51v5.26Z" />
            </svg>
          </a>
        </Button>
      )}
    </div>
  );
}
