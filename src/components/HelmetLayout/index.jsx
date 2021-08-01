import React from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";

export const HelmetLayout = ({ children, title, subtitle }) => {
  return (
    <>
      <Helmet>
        {title && <title>{title} | Petgram 🐶</title>}
        {subtitle && <meta name="description" content={subtitle} />}
      </Helmet>
      {children}
    </>
  );
};

HelmetLayout.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

HelmetLayout.defaultProps = {
  title: "Title",
  subtitle: "Subtitle",
};
