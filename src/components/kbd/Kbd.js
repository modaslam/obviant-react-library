import React from 'react'
import PropTypes from 'prop-types'
import './kbd.css'

/**
 * The Kbd component represents a keyboard input.
 * It displays a keyboard input in a stylized format.
 */
const Kbd = ({ children }) => {
  return <kbd className='kbd'>{children}</kbd>
}

Kbd.propTypes = {
  /**
   * The content to be displayed inside the Kbd component.
   * It can be a single character or a string of characters representing the keyboard input.
   */
  children: PropTypes.node.isRequired
}

export default Kbd
