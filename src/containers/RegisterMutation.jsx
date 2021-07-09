import React from "react";
import { useMutation, gql } from "@apollo/client";

const MUTATION_REGISTER = gql`
  mutation signup($input: UserCredentials!) {
    signup(input: $input)
  }
`;

export const RegisterMutation = () => {
  const [mutation, { loading: mutationLoading, error: mutationError }] =
    useMutation(MUTATION_REGISTER);
  return { mutation, mutationLoading, mutationError };
};
