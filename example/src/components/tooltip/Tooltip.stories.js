import React from 'react'
import { storiesOf } from '@storybook/react'
import Tooltip from './Tooltip'

/**
 * Tooltip component storybook.
 *
 * @component
 * @returns {JSX.Element}
 */
const TooltipStorybook = () => (
  <div style={{ marginTop: '3rem' }}>
    <Tooltip content='I am a tooltip'>
      <button>Hover Me</button>
    </Tooltip>
  </div>
)

/**
 * Storybook for Tooltip component.
 */
storiesOf('Tooltip', module)
  .add('default (top)', TooltipStorybook)
  .add(
    'position bottom',
    /**
     * Storybook for Tooltip component with bottom position.
     *
     * @returns {JSX.Element}
     */
    () => (
      <div style={{ marginTop: '3rem' }}>
        <Tooltip content='I am a tooltip' position='bottom'>
          <button>Hover Me</button>
        </Tooltip>
      </div>
    )
  )
