import React from 'react'
import PropTypes from 'prop-types'
import './skeleton.css'

const Skeleton = ({ type, height, width }) => {
  const shapeStyle = {
    height,
    width
  }

  const shapeClass = `skeleton ${type}`

  return <div className={shapeClass} style={shapeStyle}></div>
}

Skeleton.propTypes = {
  type: PropTypes.oneOf(['circular', 'rectangular', 'rounded']).isRequired,
  height: PropTypes.string,
  width: PropTypes.string
}

Skeleton.defaultProps = {
  height: '100px',
  width: '100px'
}

export default Skeleton
