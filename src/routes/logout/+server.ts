import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST = (({ locals }) => {
  locals.pb.authStore.clear();

  throw redirect(301, '/login');
}) satisfies RequestHandler;
