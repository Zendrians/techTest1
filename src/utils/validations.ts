export const validateEmail = (email: string) => {
  const match = email
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

  return match ? true : false;
};

export const validatePassword = (password: string) => {
  const isLenghtEnough = password.length > 4;
  return isLenghtEnough;
};
