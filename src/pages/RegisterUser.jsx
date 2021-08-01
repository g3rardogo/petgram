import React, { useContext } from "react";
import { Context } from "../Context";
import { UserForm } from "../components/UserForm";
import { RegisterMutation } from "../containers/RegisterMutation";
import { HelmetLayout } from "../components/HelmetLayout";

export const RegisterUser = () => {
  const { activateAuth } = useContext(Context);
  const { registerMutation, registerMutationLoading, registerMutationError } =
    RegisterMutation();

  const onSubmitRegister = ({ email, password }) => {
    const input = { email, password };
    const variables = { input };
    registerMutation({ variables }).then(({ data }) => {
      const { signup } = data;
      activateAuth(signup);
    });
  };

  const registerErrorMsg =
    registerMutationError && "El usuario ya existe o hay algun problema.";

  return (
    <HelmetLayout title="Registro" subtitle="Registro de usuario nuevo">
      <UserForm
        onSubmit={onSubmitRegister}
        disabled={registerMutationLoading}
        error={registerErrorMsg}
        title="Hola!"
        subtitle="Crea una cuenta nueva"
        action="Registrarme"
        question="¿Ya tienes una cuenta?"
        page="Iniciar sesión"
        redirect="/login"
      />
    </HelmetLayout>
  );
};
