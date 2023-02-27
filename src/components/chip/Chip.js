import React from 'react'
import PropTypes from 'prop-types'
import { IconX } from '@tabler/icons'
import './chip.css'

/**
 * Chip component displays a small, pill-shaped UI element.
 *
 * @param {object} props - The props object containing text, onDelete and color.
 * @param {string} props.text - The text to be displayed in the chip.
 * @param {function} props.onDelete - The function to be called when the delete button is clicked.
 * @param {string} [props.color='#4caf50'] - The color of the chip. Can be one of 'red', 'blue', 'green', or 'yellow'.
 *
 * @returns {JSX.Element} - The Chip component JSX element.
 */
const Chip = ({ text, onDelete, color }) => {
  const chipStyle = { backgroundColor: color }

  return (
    <div className='chip' style={chipStyle}>
      <span className='chip-text'>{text}</span>
      <button className='chip-delete' onClick={onDelete}>
        <IconX />
      </button>
    </div>
  )
}

Chip.propTypes = {
  text: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  color: PropTypes.oneOf(['red', 'blue', 'green', 'yellow'])
}

Chip.defaultProps = {
  color: '#4caf50'
}

export default Chip
