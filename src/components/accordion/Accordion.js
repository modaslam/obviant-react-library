import React, { useState } from 'react'
import './Accordion.css'

/**
 * Accordion component that allows to toggle the visibility of its children components
 * @param {Object} props - React props
 * @param {Object} children - Children components to be rendered inside the accordion
 * @returns {JSX} - Rendered Accordion
 */
const Accordion = ({ children }) => {
  // State variable to keep track of expanded sections
  const [activeIndices, setActiveIndices] = useState([])

  /**
   * Handles accordion item click
   * @param {number} index - Index of accordion item
   */
  const handleClick = (index) => {
    // Check if the section is already expanded
    if (activeIndices.includes(index)) {
      setActiveIndices(activeIndices.filter((i) => i !== index))
    } else {
      setActiveIndices([...activeIndices, index])
    }
  }

  return (
    <div className='accordion-container'>
      {React.Children.map(children, (child, index) => (
        <div key={index}>
          {React.cloneElement(child, {
            index,
            activeIndices,
            handleClick
          })}
        </div>
      ))}
    </div>
  )
}

export default Accordion
