export function withBase(path = ''): string {
  const base = import.meta.env.BASE_URL;
  const relativePath = path.replace(/^\//, '');

  return `${base}${relativePath}`;
}
