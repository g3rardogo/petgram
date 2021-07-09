import React, { useContext } from "react";
import { Context } from "../Context";
import { UserForm } from "../components/UserForm";
import { RegisterMutation } from "../containers/RegisterMutation";
import { LoginMutation } from "../containers/LoginMutation";

export const NotRegisteredUser = () => {
  const { activateAuth } = useContext(Context);
  const { registerMutation, registerMutationLoading, registerMutationError } =
    RegisterMutation();
  const { loginMutation, loginMutationLoading, loginMutationError } =
    LoginMutation();

  const onSubmitRegister = ({ email, password }) => {
    const input = { email, password };
    const variables = { input };
    registerMutation({ variables }).then(({ data }) => {
      const { signup } = data;
      activateAuth(signup);
    });
  };

  const onSubmitLogin = ({ email, password }) => {
    const input = { email, password };
    const variables = { input };
    loginMutation({ variables }).then(({ data }) => {
      const { login } = data;
      activateAuth(login);
    });
  };
  const registerErrorMsg =
    registerMutationError && "El usuario ya existe o hay algun problema.";
  const loginErrorMsg =
    loginMutationError && "Usuario o contrasena incorrectos";
  return (
    <>
      <UserForm
        onSubmit={onSubmitRegister}
        disabled={registerMutationLoading}
        error={registerErrorMsg}
        title="Registrarse"
      />
      <UserForm
        onSubmit={onSubmitLogin}
        disabled={loginMutationLoading}
        error={loginErrorMsg}
        title="Iniciar Sesion"
      />
    </>
  );
};
