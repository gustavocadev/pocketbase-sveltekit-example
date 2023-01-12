import { redirect, type Actions, type ServerLoad } from '@sveltejs/kit';

type User = {
  username: string;
  password: string;
};

export const load = (async ({ locals }) => {
  if (locals.pb.authStore.isValid) {
    throw redirect(307, '/home');
  }
  return {};
}) satisfies ServerLoad;

export const actions = {
  login: async ({ locals, request }) => {
    console.log('Login!');
    const data = Object.fromEntries(await request.formData()) as User;

    try {
      // la funcion authWithPassword si es que los datos estan correctos, creara la session automanticamente
      const { record, token } = await locals.pb
        .collection('users')
        .authWithPassword(data.username, data.password);

      // console.log({
      //   record,
      //   token,
      // });

      // redirect to home
    } catch (error) {
      console.log(error);
    }
    throw redirect(303, '/home');
  },
} satisfies Actions;
