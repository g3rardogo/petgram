import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

export const Form = styled.form`
  padding: 16px 24px;
`;

export const Input = styled.input`
  border: none;
  border-bottom: 1px solid #ccc;
  margin-bottom: 26px;
  padding: 8px 4px;
  display: block;
  width: 100%;
  &:focus {
    outline: none;
  }
  &[disabled] {
    opacity: 0.3;
  }
`;

export const Title = styled.h1`
  color: #0095f6;
  font-size: 40px;
  font-weight: 500;
  padding: 8px 0;
`;

export const Subtitle = styled.h2`
  font-size: 24px;
  color: #23252787;
  margin-bottom: 64px;
`;

export const Text = styled.p`
  margin-top: 24px;
  margin-bottom: 24px;
  text-align: center;
`;

export const Link = styled(LinkRouter)`
  text-decoration: none;
  color: #0095f6;
`;

export const Error = styled.p`
  text-align: center;
  font-weight: 500;
  color: red;
  font-size: 14px;
`;
