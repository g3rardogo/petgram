import React from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import Favicon from "../../assets/favicon.ico";

export const HelmetLayout = ({ children, title, subtitle }) => {
  return (
    <>
      <Helmet>
        {title && <title>{title} | Petgram 🐶</title>}
        {subtitle && <meta name="description" content={subtitle} />}
        <link rel="shortcut icon" href={Favicon} type="image/x-icon" />
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
