import React, { useContext } from "react";
import { Context } from "../Context";
import { UserForm } from "../components/UserForm";
import { LoginMutation } from "../containers/LoginMutation";

export const LoginUser = () => {
  const { activateAuth } = useContext(Context);
  const { loginMutation, loginMutationLoading, loginMutationError } =
    LoginMutation();

  const onSubmitLogin = ({ email, password }) => {
    const input = { email, password };
    const variables = { input };
    loginMutation({ variables }).then(({ data }) => {
      const { login } = data;
      activateAuth(login);
    });
  };

  const loginErrorMsg =
    loginMutationError && "Usuario o contrasena incorrectos";
  return (
    <UserForm
      onSubmit={onSubmitLogin}
      disabled={loginMutationLoading}
      error={loginErrorMsg}
      title="Welcome!"
      subtitle="Sign in to continue"
      action="LOGIN"
      question="Don't have an account?"
      page="Sign up"
      redirect="/register"
    />
  );
};
