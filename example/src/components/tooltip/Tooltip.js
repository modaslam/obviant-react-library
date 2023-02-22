import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './tooltip.css'

/**
 * A tooltip component that displays a message when the user hovers over it.
 *
 * @param {Object} props - The component's props.
 * @param {string} props.content - The content to display in the tooltip.
 * @param {ReactNode} props.children - The children to display as the tooltip's trigger.
 * @param {string} [props.position='top'] - The position of the tooltip relative to the trigger.
 * @returns {JSX.Element} - The rendered component.
 */
const Tooltip = ({ content, children, position }) => {
  const [isVisible, setIsVisible] = useState(false)

  /**
   * Event handler for when the user hovers over the tooltip trigger.
   */
  const handleMouseEnter = () => {
    setIsVisible(true)
  }

  /**
   * Event handler for when the user moves the mouse away from the tooltip trigger.
   */
  const handleMouseLeave = () => {
    setIsVisible(false)
  }

  const tooltipClass = `tooltip tooltip-${position}`

  return (
    <div
      className='tooltip-container'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {isVisible && <div className={tooltipClass}>{content}</div>}
    </div>
  )
}

Tooltip.propTypes = {
  /**
   * The content to display in the tooltip.
   */
  content: PropTypes.string.isRequired,

  /**
   * The children to display as the tooltip's trigger.
   */
  children: PropTypes.node.isRequired,

  /**
   * The position of the tooltip relative to the trigger.
   */
  position: PropTypes.oneOf(['top', 'bottom'])
}

Tooltip.defaultProps = {
  position: 'top'
}

export default Tooltip
