import React from "react";
import { useMutation, gql } from "@apollo/client";

const MUTATION_REGISTER = gql`
  mutation signup($input: UserCredentials!) {
    signup(input: $input)
  }
`;

export const RegisterMutation = () => {
  const [
    registerMutation,
    { loading: registerMutationLoading, error: registerMutationError },
  ] = useMutation(MUTATION_REGISTER);
  return { registerMutation, registerMutationLoading, registerMutationError };
};
