import type { ServerLoad } from '@sveltejs/kit';

export const load = (async ({ locals }) => {
  let users = await locals.pb.collection('users').getFullList();

  users = structuredClone(users);
  return {
    users,
  };
}) satisfies ServerLoad;
