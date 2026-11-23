import { getCollection } from 'astro:content';

const isPublic = import.meta.env.PUBLIC_BUILD === 'true';

// Entries of one kind ('work' case studies or personal 'project's) for the current build, in display order.
export async function getVisibleProjects(kind: 'work' | 'project' = 'work') {
  return (await getCollection('projects'))
    .filter(p => p.data.kind === kind)
    .filter(p => p.data.visibility === 'all' || p.data.visibility === (isPublic ? 'public' : 'private'))
    .sort((a, b) => a.data.order - b.data.order);
}
