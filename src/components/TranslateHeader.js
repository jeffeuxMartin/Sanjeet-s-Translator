import React from "react";
import { PropTypes } from "prop-types";

export default function TranslateHeader({ className, children }) {
  return (
    <div className={className}>
      <h2 className="header">{children}</h2>
    </div>
  );
}

TranslateHeader.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
