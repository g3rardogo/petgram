import { keyframes, css } from "styled-components";

const fadeInKeyframes = keyframes`
  from {
    filter: blur(5px);
    opacity: 0;
  }

  to {
    filter: blur(5px);
    opacity: 1;
  }
`;

export const fadeIn = ({ time = "1s", type = "ease" } = {}) =>
  css`
    animation: ${time} ${fadeInKeyframes} ${type};
  `;

const flipDownKeyframes = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.5) translateY(0px);
  }

  50% {
    opacity: 1;
    transform: scale(0.5) translateY(35px);
  }

  100% {
    transform: scale(0.5) translateY(0px);
  }
`;

export const flipDown = ({ time = "3s" } = {}) =>
  css`
    animation: ${time} ${flipDownKeyframes};
  `;
