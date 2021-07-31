import React from "react";
import { Image } from "./styles";
import PropTypes from "prop-types";

export const ImageContainer = ({ src }) => {
  return <Image src={src} />;
};

ImageContainer.propTypes = {
  src: PropTypes.string.isRequired,
};
