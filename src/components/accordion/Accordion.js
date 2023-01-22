import React, { useState } from 'react'
import './Accordion.css'

const Accordion = ({ children }) => {
  const [activeIndices, setActiveIndices] = useState([])

  const handleClick = (index) => {
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
