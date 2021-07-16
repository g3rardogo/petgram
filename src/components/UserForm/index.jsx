import React from "react";
import { useInputValue } from "../../hooks/useInputValue";
import { Form, Input, Title, Subtitle, Text, Link, Error } from "./styles";
import { SubmitButton } from "../SubmitButton";

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
        <Input disabled={disabled} placeholder="Email" {...email} />
        <Input
          disabled={disabled}
          placeholder="Password"
          type="password"
          {...password}
        />
        <SubmitButton disabled={disabled} action={action} />
        <Text>
          {question} <Link to={redirect}>{page}</Link>
        </Text>
      </Form>
      {error && <Error>{error}</Error>}
    </>
  );
};
