interface RegisterPayload {
  username: string;
  password: string;
}

interface LoginPayload extends RegisterPayload {
  rememberMe?: boolean;
}
