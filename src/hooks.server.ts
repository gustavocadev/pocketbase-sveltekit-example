import type { Handle } from '@sveltejs/kit';
import PocketBase from 'pocketbase';
import { validateProtectedRoutes } from './middlewares/validateProtectedRoutes';

// This function runs every time the SvelteKit server receives a request
export const handle = (async ({ event, resolve }) => {
  // event reprents the request
  event.locals.pb = new PocketBase('http://127.0.0.1:8090');

  // this  is  a  temporary  workaround  for  the  issue  with  the  cookie  not  being  set  on  the  client - obtener la sesion
  event.locals.pb.authStore.loadFromCookie(
    event.request.headers.get('Cookie') ?? ''
  );

  // resolve renderiza la ruta y
  const response = await resolve(event);

  // and  set  the  cookie  on  the  response
  response.headers.append(
    'Set-Cookie',
    // this exports all the session from cookie: pb_auth
    event.locals.pb.authStore.exportToCookie()
  );

  console.log(event.locals.pb.authStore.model);

  // validate protect routes
  // validateProtectedRoutes(event);
  // if (
  //   event.url.pathname.startsWith('/login') &&
  //   event.locals.pb.authStore.isValid
  // ) {
  // }

  // return the response
  return response;
}) satisfies Handle;
