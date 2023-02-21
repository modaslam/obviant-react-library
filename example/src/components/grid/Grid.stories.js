import React from 'react'
import { storiesOf } from '@storybook/react'
import Grid from './Grid'

/**
 * Storybook component to demonstrate the Grid component.
 * @module stories/Grid
 */
storiesOf('Grid', module)
  /**
   * Default Grid story.
   * @function Default
   * @memberof module:stories/Grid
   */
  .add('Default', () => (
    <div style={{ padding: '20px' }}>
      <Grid>
        <div style={{ backgroundColor: '#f5f5f5' }}>Item 1</div>
        <div style={{ backgroundColor: '#e0e0e0' }}>Item 2</div>
        <div style={{ backgroundColor: '#d5d5d5' }}>Item 3</div>
      </Grid>
    </div>
  ))
  /**
   * Grid story with spacing.
   * @function WithSpacing
   * @memberof module:stories/Grid
   */
  .add('With spacing', () => (
    <div style={{ padding: '20px' }}>
      <Grid spacing={3}>
        <div style={{ backgroundColor: '#f5f5f5' }}>Item 1</div>
        <div style={{ backgroundColor: '#e0e0e0' }}>Item 2</div>
        <div style={{ backgroundColor: '#d5d5d5' }}>Item 3</div>
      </Grid>
    </div>
  ))
