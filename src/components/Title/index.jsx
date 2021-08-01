import React from "react";
import { Div, Title as TitleStyled } from "./styles";
import PropTypes from "prop-types";

export const Title = ({ children, title }) => {
  return (
    <Div>
      {title && <TitleStyled>{title}</TitleStyled>}
      {children}
    </Div>
  );
};

Title.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};
