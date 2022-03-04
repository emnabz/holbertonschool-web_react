import React from "react";
import PropTypes from "prop-types";

export default function BodySection(props) {
    const { title, children } = props;
    return (
    <div className="bodySection">
        <h2>{test}</h2>
        {children}
    </div>
  )
}

BodySection.prototype = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node
}
