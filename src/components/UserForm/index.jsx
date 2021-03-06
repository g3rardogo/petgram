import React from "react";
import { useInputValue } from "../../hooks/useInputValue";
import { Form, Input, Title, Subtitle, Text, Link, Error } from "./styles";
import { SubmitButton } from "../SubmitButton";
import PropType from "prop-types";

export const UserForm = ({
  onSubmit,
  title,
  subtitle,
  action,
  question,
  page,
  redirect,
  error,
  disabled,
}) => {
  const email = useInputValue("");
  const password = useInputValue("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email: email.value, password: password.value });
  };
  return (
    <>
      <Form disabled={disabled} onSubmit={handleSubmit}>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <Input
          type="Email"
          placeholder="Correo"
          required
          disabled={disabled}
          {...email}
        />
        <Input
          type="password"
          placeholder="Contraseña"
          required
          disabled={disabled}
          {...password}
        />
        <SubmitButton disabled={disabled} action={action} />
        <Text>
          {question} <Link to={redirect}>{page}</Link>
        </Text>
        {error && <Error>{error}</Error>}
      </Form>
    </>
  );
};

UserForm.propType = {
  onSubmit: PropType.func.isRequired,
  title: PropType.string.isRequired,
  subtitle: PropType.string.isRequired,
  action: PropType.string.isRequired,
  question: PropType.string.isRequired,
  page: PropType.string.isRequired,
  redirect: PropType.string.isRequired,
  disabled: PropType.bool.isRequired,
};
