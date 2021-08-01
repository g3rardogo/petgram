import React from "react";
import { Link, Image } from "./styles";
import PropTypes from "prop-types";

const DEFAULT_IMAGE = "https://imgur.com/dJa0Hpl.jpg";

export const Category = ({ cover, path, emoji }) => (
  <Link to={path}>
    <Image src={cover} alt="Category image" />
    {emoji}
  </Link>
);

Category.propTypes = {
  cover: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  emoji: PropTypes.string.isRequired,
};

Category.defaultProps = {
  cover: DEFAULT_IMAGE,
  path: "#",
  emoji: "?",
};
