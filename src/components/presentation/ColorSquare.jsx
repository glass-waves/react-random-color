import React from 'react'
import PropTypes from 'prop-types'

const ColorSquare = ({ backgroundColor, backgroundImage }) => {
    return (
        <div style={{
            backgroundImage: backgroundImage,
            backgroundColor: backgroundColor,
            backgroundPosition: 'center', 
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover', 
            width: '800px',
            height: '800px',
        }}>           
        </div>
    )
}
ColorSquare.propTypes = {
    backgroundColor: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string.isRequired,
}

export default ColorSquare;

