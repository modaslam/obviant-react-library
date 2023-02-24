import React from 'react'
import PropTypes from 'prop-types'
import './checkbox.css'

/**
 * A checkbox component with a label and custom styling.
 * @param {object} props - The props object for the component.
 * @param {string} props.label - The label for the checkbox.
 * @param {boolean} props.checked - The checked state of the checkbox.
 * @param {function} props.onChange - The function to be called when the checkbox state changes.
 * @returns {JSX.Element} - The checkbox component.
 */
const Checkbox = ({ label, checked, onChange }) => {
  return (
    <label className='checkbox-container'>
      <input
        type='checkbox'
        className='checkbox-input'
        checked={checked}
        onChange={onChange}
      />
      <span className='checkbox-checkmark' />
      <span className='checkbox-label'>{label}</span>
    </label>
  )
}

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
}

export default Checkbox
