interface RegisterPayload {
  username: string;
  password: string;
}

interface LoginPayload extends RegisterPayload {
  rememberMe?: boolean;
}

declare namespace Express {
  interface Request {
    user?: string | JWTPayload;
  }
}
