import React from 'react'
import { IconChevronUp, IconChevronDown } from '@tabler/icons'

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
    <div>
      <div onClick={() => handleClick(index)}>
        {title}
        <span style={{ float }}>
          {isActive ? <IconChevronUp /> : <IconChevronDown />}
        </span>
      </div>
      {isActive && <div>{content}</div>}
    </div>
  )
}

export default AccordionItem
