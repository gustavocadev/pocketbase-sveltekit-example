import type { ServerLoad } from '@sveltejs/kit';

export const load = (async ({ locals }) => {
  const user = locals.pb.authStore.model;

  console.log({ user });

  return {
    user: structuredClone(user),
  };
}) satisfies ServerLoad;
