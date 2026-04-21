'use server';

import { cookies } from 'next/headers';

export async function logoutAction(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete('id_token');
  cookieStore.delete('access_token');
  cookieStore.delete('refresh_token');
  cookieStore.delete('token');
  cookieStore.delete('user');

}
