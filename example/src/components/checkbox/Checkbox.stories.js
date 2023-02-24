import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import Checkbox from './Checkbox'

/**
 * A storybook module for the Checkbox component.
 *
 * @module stories/Checkbox
 */

storiesOf('Checkbox', module)
  /**
   * Renders an unchecked Checkbox component.
   *
   * @function
   * @memberof module:stories/Checkbox
   * @inner
   * @returns {JSX.Element}
   */
  .add('unchecked', () => (
    <Checkbox label='Unchecked checkbox' checked={false} onChange={() => {}} />
  ))

  /**
   * Renders a checked Checkbox component.
   *
   * @function
   * @memberof module:stories/Checkbox
   * @inner
   * @returns {JSX.Element}
   */
  .add('checked', () => (
    <Checkbox label='Checked checkbox' checked={true} onChange={() => {}} />
  ))

  /**
   * Renders an interactable Checkbox component with state management.
   *
   * @function
   * @memberof module:stories/Checkbox
   * @inner
   * @returns {JSX.Element}
   */
  .add('interactable', () => {
    const [isChecked, setIsChecked] = useState(false)

    const handleChange = () => {
      setIsChecked(!isChecked)
    }

    return (
      <div className='checkbox-wrapper'>
        <Checkbox
          label='Interactable checkbox'
          checked={isChecked}
          onChange={handleChange}
        />
      </div>
    )
  })
