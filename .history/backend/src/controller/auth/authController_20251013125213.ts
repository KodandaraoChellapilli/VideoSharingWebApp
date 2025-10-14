interface RegisterRequest extends Request {
  body: {
    email: string;
    password: string;
  };
}
