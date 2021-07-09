import React from "react";
import { useMutation, gql } from "@apollo/client";

const MUTATION_LOGIN = gql`
  mutation login($input: UserCredentials!) {
    login(input: $input)
  }
`;

export const LoginMutation = () => {
  const [
    loginMutation,
    { loading: loginMutationLoading, error: loginMutationError },
  ] = useMutation(MUTATION_LOGIN);
  return { loginMutation, loginMutationLoading, loginMutationError };
};
