export type AuthState = {
  token: string | null;
  refresh_token: string;
  user: any;
};

export type LoginRes = {
  access_token: string;
  user: any;
  refresh_token: string;
};

export type RefreshTokenRes = {
  refreshToken: {
    accessToken: string;
    message: string;
    refreshToken: string | null;
    success: boolean;
  };
};

export interface User {
  id: string;
  email: string;
  avatar?: string;
  createdAt: Date;
  active_status: boolean;
  avatar_path: string;
  created_at: string;
  first_name: string;
  last_login_at: string | null;
  last_name: string;
  phone: string;
  platform: string;
  profile: {
    timezone: string;
  };
}

export interface SignInResponse {
  signIn?: {
    accessToken: string;
    idToken: string;
    refreshToken: string;
    expiresIn: number;
  };
}

export type SignInInput = {
  email: string;
  password: string;
};

export type TokenResponse = {
  message: string;
  gettoken: {
    message: string;
    success: boolean;
    tokenBalance: number;
  };
};

export type LoginErrors = {
  email?: string;
  password?: string;
  form?: string;
};

export type RoleConfig = {
  prefix: string;
  dashboard: string;
};
