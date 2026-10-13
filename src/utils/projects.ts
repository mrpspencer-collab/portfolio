import { getCollection } from 'astro:content';

const isPublic = import.meta.env.PUBLIC_BUILD === 'true';

// Projects for the current build, in display order.
export async function getVisibleProjects() {
  return (await getCollection('projects'))
    .filter(p => p.data.visibility === 'all' || p.data.visibility === (isPublic ? 'public' : 'private'))
    .sort((a, b) => a.data.order - b.data.order);
}
