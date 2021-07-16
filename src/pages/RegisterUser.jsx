import React, { useContext } from "react";
import { Context } from "../Context";
import { UserForm } from "../components/UserForm";
import { RegisterMutation } from "../containers/RegisterMutation";

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
    <>
      <UserForm
        onSubmit={onSubmitRegister}
        disabled={registerMutationLoading}
        error={registerErrorMsg}
        title="Hi!"
        subtitle="Create a new account"
        action="SIGN UP"
        question="Already have an account?"
        page="Sign In"
        redirect="/login"
      />
    </>
  );
};
