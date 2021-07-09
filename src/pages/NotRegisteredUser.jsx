import React from "react";
import Context from "../Context";
import { UserForm } from "../components/UserForm";
import { RegisterMutation } from "../containers/RegisterMutation";

export const NotRegisteredUser = () => {
  const { mutation, mutationLoading, mutationError } = RegisterMutation();
  return (
    <Context.Consumer>
      {({ activateAuth }) => {
        const onSubmit = ({ email, password }) => {
          const input = { email, password };
          const variables = { input };
          mutation({ variables }).then(activateAuth);
        };
        const errorMsg =
          mutationError && "El usuario ya existe o hay algun problema.";
        return (
          <>
            <UserForm
              onSubmit={onSubmit}
              disabled={mutationLoading}
              error={errorMsg}
              title="Registrarse"
            />
            <UserForm onSubmit={activateAuth} title="Iniciar Sesion" />
          </>
        );
      }}
    </Context.Consumer>
  );
};
