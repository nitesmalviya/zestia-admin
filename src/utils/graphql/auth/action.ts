"use server";
import { fetchGraphQLMutation } from "..";
import {
  REFRESH_TOKEN_MUTATION,
  SIGN_IN_MUTATION,
} from "./query";
import { RefreshTokenRes, SignInResponse, SignInInput } from "@/types/auth";

import { cookies } from "next/headers";

export const signInAction = async ({
  variables,
}: {
  variables: SignInInput;
}): Promise<any> => {
  const cookieStore = await cookies();

  // Clear any existing tokens before attempting sign-in to avoid header conflicts
  // cookieStore.delete("access_token");
  cookieStore.delete("id_token");
  cookieStore.delete("refresh_token");

  const res = await fetchGraphQLMutation<SignInResponse>(SIGN_IN_MUTATION, variables);

  if (res?.signIn) {
    // cookieStore.set("access_token", res.signIn.accessToken, {
    //   secure: true,
    //   httpOnly: true,
    //   sameSite: "strict",
    // });
    cookieStore.set("id_token", res.signIn.idToken, {
      secure: true,
      httpOnly: true,
      sameSite: "strict",
    });
    cookieStore.set("refresh_token", res.signIn.refreshToken, {
      secure: true,
      httpOnly: true,
      sameSite: "strict",
    });
    return { success: true, data: res.signIn };
  }

  return res;
};

export const refreshToken = async (refreshToken: string): Promise<RefreshTokenRes> => {
  const variables = { refreshToken };
  const res = await fetchGraphQLMutation<RefreshTokenRes>(
    REFRESH_TOKEN_MUTATION,
    variables
  );
  return res;
};
