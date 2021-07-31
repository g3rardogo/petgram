import React from "react";
import { Button } from "./styles";
import PropTypes from "prop-types";

export const SubmitButton = ({ action, onClick, disabled }) => {
  console.log(disabled);
  return (
    <Button onClick={onClick} disabled={disabled}>
      {action}
    </Button>
  );
};

SubmitButton.propTypes = {
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
  action: PropTypes.node.isRequired,
};

SubmitButton.defaultProps = {
  disabled: false,
};
