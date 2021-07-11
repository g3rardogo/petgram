import React from "react";
import { Button } from "./styles";
import PropTypes from "prop-types";

export const SubmitButton = ({ children, onClick, disabled }) => {
  return (
    <Button onClick={onClick} disabled={disabled}>
      {children}
    </Button>
  );
};

SubmitButton.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};
