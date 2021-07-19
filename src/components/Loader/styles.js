import styled from "styled-components";
import { motion } from "../../styles/animation";

export const Spinner = styled.div`
  width: 100px;
  height: 50px;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  text-align: center;
`;

export const Ball = styled.div`
  width: 20px;
  height: 20px;
  background-color: #c97726;
  border-radius: 50%;
  display: inline-block;
  ${motion()}
`;

export const Title = styled.p`
  margin-top: 5px;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 3px;
  color: #ca6938;
`;
