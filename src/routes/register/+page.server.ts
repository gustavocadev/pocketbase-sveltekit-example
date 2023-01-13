import type { Actions } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';

type RegisterUser = {
  username: string;
  password: string;
  confirmPassword: string;
};

export const actions = {
  register: async ({ locals, request }) => {
    const data = Object.fromEntries(await request.formData()) as RegisterUser;

    if (data.password !== data.confirmPassword) {
      return {
        success: false,
        msg: 'Passwords do not match',
      };
    }
    // at least we need to pass the username, password and passwordConfirm
    const record = await locals.pb.collection('users').create({
      username: data.username,
      password: data.password,
      passwordConfirm: data.confirmPassword,
    });

    console.log({ record });

    throw redirect(303, '/login');
  },
} satisfies Actions;
