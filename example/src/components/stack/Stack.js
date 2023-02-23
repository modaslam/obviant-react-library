/**
 * A component for stacking children vertically with adjustable spacing.
 *
 * @param {Object} props - The props object.
 * @param {string} [props.spacing='medium'] - The spacing size between items. Can be one of: 'xsmall', 'small', 'medium', 'large', or 'xlarge'.
 * @param {React.ReactNode} props.children - The children to stack vertically.
 *
 * @returns {JSX.Element} - The stacked children component.
 */
import React from 'react'
import PropTypes from 'prop-types'
import './stack.css'

const Stack = ({ spacing = 'medium', children }) => {
  const spacingClass = `stack-${spacing}`

  return (
    <div className={`stack ${spacingClass}`}>
      {React.Children.map(children, (child) => (
        <div className='stack-item'>{child}</div>
      ))}
    </div>
  )
}

Stack.propTypes = {
  spacing: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge']),
  children: PropTypes.node.isRequired
}

export default Stack
