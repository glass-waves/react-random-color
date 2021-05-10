import React from 'react'
import PropTypes from 'prop-types'

const ColorSquare = ({ backgroundColor, image }) => {
    return (
        <div style={{
            backgroundColor: backgroundColor,
        }}>
        </div>
    )
}

ColorSquare.propTypes = {
    backgroundColor: PropTypes.string.isRequired,
}

export default ColorSquare;

