import React from 'react'
import PropTypes from 'prop-types'

const ColorSquare = ({ backgroundColor }) => {
    return (
        <div style={{
            backgroundColor: backgroundColor,
            width: '1000px',
            height: '1000px'
        }}>           
        </div>
    )
}

ColorSquare.propTypes = {
    backgroundColor: PropTypes.string.isRequired,
}

export default ColorSquare;

