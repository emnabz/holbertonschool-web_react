import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css} from 'aphrodite'


export default function CourseListRow({isHeader, textFirstCell, textSecondCell}) {
    if (isHeader) {
        if (textSecondCell === null) {
            return (
                <tr className={css(styles.headerRowStyle)}>
                    <th colSpan="2">{textFirstCell}</th>
                </tr>
            )
        } else {
            return (
                <tr className={css(styles.headerRowStyle)}>
                    <th>{textFirstCell}</th>
                    <th>{textSecondCell}</th>
                </tr>
            )
        }
    } else {
        return (
            <tr className={css(styles.rowStyle)}>
                <td>{textFirstCell}</td>
                <td>{textSecondCell}</td>
            </tr>
        )
    }
}

CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]),
}

CourseListRow.defaultProps = {
    isHeader: false,
    textSecondCell: null
}

const styles = StyleSheet.create({
    headerRowStyle: {
        backgroundColor: "#f5f5f5ab"
    },
    rowStyle: {
        backgroundColor: "#deb5b545"
    },
})
