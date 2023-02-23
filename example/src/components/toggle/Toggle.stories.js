/**
 * @fileOverview A set of stories for the Toggle component.
 */

import React from 'react'
import { storiesOf } from '@storybook/react'
import Toggle from './Toggle'

/**
 * Defines a set of stories for the Toggle component with different sizes.
 * @module stories/Toggle
 */

storiesOf('Toggle', module)
  /**
   * Renders a small Toggle component.
   * @story
   */
  .add('small', () => <Toggle value={false} size='small' />)

  /**
   * Renders a medium Toggle component.
   * @story
   */
  .add('medium', () => <Toggle value={false} size='medium' />)

  /**
   * Renders a large Toggle component.
   * @story
   */
  .add('large', () => <Toggle value={false} size='large' />)
