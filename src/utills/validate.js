export const checkValidData = (email, password) => {
  //const isNameValid = /"^[A-Za-z][A-Za-z0-9_]{7,29}$"/.text(name);
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPaswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  // if(!isNameValid) return "User Name is not valid";
  if (!isEmailValid) return "Email is not valid";
  if (!isPaswordValid) return "Password is not valid";

  return null;
};
