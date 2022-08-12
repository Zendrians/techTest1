import { users } from "../data/users";
import { Credentials } from "../types/credentials";

export const validateUser = (currentUser: Credentials) => {
  const matchedUser = users.find(
    (el) =>
      el.email === currentUser.email && el.password === currentUser.password
  );

  return matchedUser ? true : false;
};
