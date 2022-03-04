import React from "react";
import PropTypes from "prop-types";

export default function bodySelection(props) {
    const { title, children } = props;
    return (
    <div className="bodySection">
        <h2>{test}</h2>
        {children}
    </div>
  )
}

bodySelection.prototype = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node
}
