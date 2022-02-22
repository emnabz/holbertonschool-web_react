import React from 'react';
import PropType from 'prop-types';

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
    let element;

    if (isHeader === true){
        if(textSecondCell == null) {
            element = <th colSpan="2">{textFirstCell}</th>;
        } else {
            element = (
            <>
                <th>{textFirstCell}</th>
                <th>{textSecondCell}</th>
            </>
            );
        }
    } else if (isHeader === false) {
        element = (
            <>
                <td>{textFirstCell}</td>
                <td>{textSecondCell}</td>
            </>
        );
    }
    return <tr>element</tr>;
}
