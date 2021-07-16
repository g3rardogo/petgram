import styled from "styled-components";

export const Button = styled.button`
  margin-top: 64px;
  background: #0095f6;
  border-radius: 3px;
  color: #fff;
  height: 32px;
  display: block;
  width: 100%;
  text-align: center;
  &[disabled] {
    opacity: 0.3;
  }
`;
