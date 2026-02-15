interface User {
  id: string;
  username: string;
}

export interface MyContext {
  user?: User;
}
