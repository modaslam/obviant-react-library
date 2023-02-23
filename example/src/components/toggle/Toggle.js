import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './toggle.css'

/**
 * A toggle component with customizable size.
 *
 * @param {Object} props - The component props.
 * @param {boolean} props.value - The current value of the toggle.
 * @param {function} [props.onChange] - A function to call when the toggle value changes.
 * @param {boolean} [props.disabled=false] - Whether the toggle is disabled or not.
 * @param {'small' | 'medium' | 'large'} [props.size='medium'] - The size of the toggle.
 * @returns {JSX.Element} - A toggle component.
 */
const Toggle = ({ value, onChange, disabled, size }) => {
  const [isChecked, setIsChecked] = useState(value)

  const handleClick = () => {
    if (onChange && !disabled) {
      onChange(!isChecked)
    }
    setIsChecked(!isChecked)
  }

  return (
    <div
      className={`toggle toggle-${size} ${
        isChecked ? 'toggle-on' : 'toggle-off'
      } ${disabled ? 'toggle-disabled' : ''}`}
      onClick={handleClick}
    >
      <div className='toggle-handle' />
    </div>
  )
}

Toggle.propTypes = {
  value: PropTypes.bool.isRequired,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large'])
}

Toggle.defaultProps = {
  size: 'medium'
}

export default Toggle
