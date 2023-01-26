import React from 'react'
import './timeline.css'

/**
 * A component that creates a timeline container
 *  @component
 *  @param {Object} props - The properties passed to the component
 *  @param {Array} props.children - An array of React elements that will be rendered within the timeline container
 */
const Timeline = ({ children }) => {
  return <div className='timeline-container'>{children}</div>
}

export default Timeline
