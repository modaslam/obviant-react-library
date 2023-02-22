import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import Hidden from './Hidden'

/**
 * Storybook stories for the Hidden component.
 * @module stories/Hidden
 */

storiesOf('Hidden', module)
  /**
   * Show children when hide is false.
   * @function
   */
  .add('show children', () => (
    <Hidden hide={false}>
      <div>This content is visible because hide is false</div>
    </Hidden>
  ))
  /**
   * Hide children when hide is true.
   * @function
   */
  .add('hide children', () => (
    <Hidden hide={true}>
      <div>This content is hidden because hide is true</div>
    </Hidden>
  ))
  /**
   * Dynamically toggle the hide prop using controls.
   * @function
   */
  .add('toggle with controls', () => {
    const [hide, setHide] = useState(false)
    return (
      <div>
        <Hidden hide={hide}>
          <div>This content is {hide ? 'hidden' : 'visible'}</div>
        </Hidden>
        <button onClick={() => setHide(!hide)}>
          {hide ? 'Show Content' : 'Hide Content'}
        </button>
      </div>
    )
  })
