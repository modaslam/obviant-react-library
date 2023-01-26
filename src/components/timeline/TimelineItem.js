import React from 'react'

/**
 * A timeline item component that displays a given date, title, content, and icon.
 *
 * @component
 * @example
 * return (
 *   <TimelineItem
 *      date="Jan 1, 2021"
 *      title="Event Title"
 *      content="Event Description"
 *      icon={<i className="check-icon"></i>}
 *      index={1}
 *    />
 * )
 *
 * @param {string} date - The date of the event
 * @param {string} title - The title of the event
 * @param {string} content - The description of the event
 * @param {element} icon - An icon element to be displayed in the timeline item
 * @param {number} index - A unique key for the timeline item
 */
const TimelineItem = ({ date, content, title, icon, index }) => {
  return (
    <div className='timeline-item' key={index}>
      <div className='timeline-item-icon-container'>
        <div className='timeline-item-circle'>{icon}</div>
      </div>
      <div className='timeline-item-text-container'>
        <div className='timeline-item-date'>{date}</div>
        <div className='timeline-item-title'>{title}</div>
        <div className='timeline-item-content'>{content}</div>
      </div>
    </div>
  )
}

export default TimelineItem
