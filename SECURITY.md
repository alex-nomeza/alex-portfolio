# Security Guidelines

## Scope

This is primarily a static portfolio. Security requirements are therefore focused on source-control hygiene, deployment integrity, third-party content, and future extensibility.

## Secrets

Never commit:

- GitHub tokens;
- OpenAI/API keys;
- deployment tokens;
- SMTP credentials;
- analytics secrets;
- private keys;
- `.env` contents.

Commit `.env.example` only if environment variables are introduced.

## GitHub

- repository should be private during initial development if requested;
- use least-privilege GitHub Actions permissions;
- pin or use trusted official actions;
- do not grant unnecessary workflow write permissions;
- review dependency update changes before merge.

## Dependencies

Before adding dependencies:

- verify package identity;
- prefer maintained packages;
- avoid packages for trivial utilities;
- commit lockfile;
- run available audit tooling as appropriate.

## External links

For links opening a new tab, use safe `rel` attributes as appropriate.

## User-generated data

There is none in v1.

Do not add a public form backend without:

- spam protection;
- validation;
- rate limiting/provider protection;
- privacy review.

## HTML

Avoid raw unsanitized HTML from untrusted sources.

Portfolio Markdown/MDX content is repository-controlled, but custom HTML should still be intentional.

## Personal privacy

Do not expose:

- home address;
- private phone number;
- client credentials;
- private analytics;
- internal documents;
- salary or employment-sensitive details.

## Incident response

If a secret is accidentally committed:

1. revoke/rotate it immediately;
2. remove it from current source;
3. assess history exposure;
4. follow GitHub secret-remediation guidance;
5. do not assume deleting the latest commit is sufficient.
