import React from 'react'
import PropTypes from 'prop-types'
import { storiesOf } from '@storybook/react'
import Stack from './Stack'

/**
 * Stack component with vertical stacking of children and customizable spacing.
 *
 * @component
 * @param {Object} props - Component props.
 * @param {('xsmall'|'small'|'medium'|'large'|'xlarge')} [props.spacing='medium'] - Spacing between stacked items.
 * @param {Node} props.children - Child components to be stacked.
 */
const StackComponent = ({ spacing, children }) => {
  const spacingClass = `stack-${spacing}`

  return (
    <div className={`stack ${spacingClass}`}>
      {React.Children.map(children, (child) => (
        <div className='stack-item'>{child}</div>
      ))}
    </div>
  )
}

StackComponent.propTypes = {
  spacing: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge']),
  children: PropTypes.node.isRequired
}

storiesOf('Stack', module)
  .add('default', () => (
    <Stack>
      <div>Child 1</div>
      <div>Child 2</div>
      <div>Child 3</div>
    </Stack>
  ))
  .add('xsmall spacing', () => (
    <Stack spacing='xsmall'>
      <div>Child 1</div>
      <div>Child 2</div>
      <div>Child 3</div>
    </Stack>
  ))
  .add('small spacing', () => (
    <Stack spacing='small'>
      <div>Child 1</div>
      <div>Child 2</div>
      <div>Child 3</div>
    </Stack>
  ))
  .add('medium spacing', () => (
    <Stack spacing='medium'>
      <div>Child 1</div>
      <div>Child 2</div>
      <div>Child 3</div>
    </Stack>
  ))
  .add('large spacing', () => (
    <Stack spacing='large'>
      <div>Child 1</div>
      <div>Child 2</div>
      <div>Child 3</div>
    </Stack>
  ))
  .add('xlarge spacing', () => (
    <Stack spacing='xlarge'>
      <div>Child 1</div>
      <div>Child 2</div>
      <div>Child 3</div>
    </Stack>
  ))
