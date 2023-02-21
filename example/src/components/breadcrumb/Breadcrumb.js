import React from 'react'
import PropTypes from 'prop-types'
import './breadcrumb.css'

/**
 * Breadcrumb component for displaying a list of clickable items with a separator between them.
 * @param {object[]} items - Array of items to display in the breadcrumb. Each item should have a label property that is displayed, and an optional url property that is used as the href for the item.
 * @param {string} items.label - The text to display for the item.
 * @param {string} [items.url] - The URL to link to when the item is clicked. If not provided, the item is not clickable.
 * @param {boolean} [items.active=false] - If true, the item is displayed as active and is not clickable.
 */
const Breadcrumb = ({ items }) => {
  return (
    <nav aria-label='breadcrumb'>
      <ol className='breadcrumb'>
        {items.map((item, index) => (
          <li
            key={index}
            className={`breadcrumb-item${item.active ? ' active' : ''}`}
          >
            {item.active ? item.label : <a href={item.url}>{item.label}</a>}
            {index !== items.length - 1 ? (
              <span className='breadcrumb-separator'>/</span>
            ) : null}
          </li>
        ))}
      </ol>
    </nav>
  )
}

Breadcrumb.propTypes = {
  /**
   * Array of items to display in the breadcrumb. Each item should have a label property that is displayed, and an optional url property that is used as the href for the item.
   */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      url: PropTypes.string,
      active: PropTypes.bool
    })
  ).isRequired
}

export default Breadcrumb
