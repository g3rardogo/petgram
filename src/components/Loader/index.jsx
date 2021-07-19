import React from "react";
import { Spinner, Ball, Title } from "./styles";

export const Loader = () => {
  return (
    <Spinner>
      <Ball />
      <Title>LOADING</Title>
    </Spinner>
  );
};
