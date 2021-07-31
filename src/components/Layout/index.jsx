import React from "react";
import { Helmet } from "react-helmet";
import { Div, Title } from "./styles";
import PropTypes from "prop-types";

export const Layout = ({ children, title, subtitle }) => {
  return (
    <>
      <Helmet>
        {title && <title>{title} | Petgram 🐶</title>}
        {subtitle && <meta name="description" content={subtitle} />}
      </Helmet>
      <Div>
        {title && <Title>{title}</Title>}
        {children}
      </Div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};
