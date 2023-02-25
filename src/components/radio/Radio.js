import React from 'react'
import PropTypes from 'prop-types'
import './radio.css'

const Radio = ({ label, name, value, checked, onChange }) => (
  <label className='radio-label'>
    <input
      type='radio'
      className='radio-input'
      name={name}
      value={value}
      checked={checked}
      onChange={onChange}
    />
    <span className='radio-custom' />
    <span className='radio-label-text'>{label}</span>
  </label>
)

Radio.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
}

export default Radio
