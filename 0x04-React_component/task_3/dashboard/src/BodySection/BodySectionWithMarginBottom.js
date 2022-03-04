import React from "react";
import PropTypes from "prop-types";
import BodySection from "./BodySection";
import './BodySectionWithMarginBottom.css'

export default function BodySectionWithMarginBottom(props) {
    return (
        <div className="bodySectionWithMargin">
        <bodySection {...props}>

        </bodySection>
        </div>
    )
}

bodySectionWithMargin.PropTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node
}
