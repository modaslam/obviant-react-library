import React from 'react'
import { IconChevronUp, IconChevronDown } from '@tabler/icons'

/**
 * Accordion Item component that allows to toggle the visibility of its children components
 * @param {Object} props - React props
 * @param {number} props.index - Index of accordion item
 * @param {Array<number>} props.activeIndices - Array of currently active accordion item indices
 * @param {function} props.handleClick - Callback function to handle accordion item click
 * @param {string} props.title - Title of accordion item
 * @param {string} props.content - Content of accordion item
 * @param {string} [props.float=right] - float position of icon
 * @returns {JSX} - Rendered Accordion Item
 */
const AccordionItem = ({
  index,
  activeIndices,
  handleClick,
  title,
  content,
  float = 'right'
}) => {
  const isActive = activeIndices.includes(index)

  return (
    <div className='accordion-item'>
      <div className='accordion-item-title' onClick={() => handleClick(index)}>
        {title}
        <span style={{ float }}>
          {isActive ? <IconChevronUp /> : <IconChevronDown />}
        </span>
      </div>
      {isActive && <div className='accordion-item-content'>{content}</div>}
    </div>
  )
}

export default AccordionItem
