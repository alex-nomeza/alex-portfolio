import { getCollection, type CollectionEntry } from 'astro:content';

export type Project = CollectionEntry<'projects'>;

/**
 * Deterministic project ordering:
 * 1. explicit `order`;
 * 2. most recent `year`;
 * 3. title as a stable tie-breaker.
 */
export function compareProjects(a: Project, b: Project): number {
  return (
    a.data.order - b.data.order ||
    b.data.year - a.data.year ||
    a.data.title.localeCompare(b.data.title)
  );
}

/** All published projects, sorted. Draft exclusion lives here only. */
export async function getPublishedProjects(): Promise<Project[]> {
  const projects = await getCollection('projects', ({ data }) => data.status === 'published');
  return projects.sort(compareProjects);
}

/** Published + featured projects, optionally capped. */
export async function getFeaturedProjects(limit?: number): Promise<Project[]> {
  const featured = (await getPublishedProjects()).filter((project) => project.data.featured);
  return typeof limit === 'number' ? featured.slice(0, limit) : featured;
}

/**
 * Next project in the published sequence, wrapping to the first entry after
 * the last one. Returns `undefined` when there is no other project to move to.
 */
export function getNextProject(projects: Project[], currentId: string): Project | undefined {
  if (projects.length < 2) return undefined;
  const index = projects.findIndex((project) => project.id === currentId);
  if (index === -1) return undefined;
  return projects[(index + 1) % projects.length];
}
