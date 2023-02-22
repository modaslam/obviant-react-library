/**
 * @fileoverview Button component stories for Storybook.
 * @module Button.stories
 */

import React from 'react'
import { storiesOf } from '@storybook/react'
import { IconThumbUp } from '@tabler/icons'
import Button from './Button'

/**
 * Wraps Button stories in a `Button` component.
 * @param {Object} props - Component props.
 * @param {React.ReactNode} props.children - Button content.
 * @param {string} [props.color] - Button color.
 * @param {string} [props.size] - Button size.
 * @param {string} [props.variant] - Button variant.
 * @param {boolean} [props.disabled] - Whether the button is disabled.
 * @param {React.ReactNode} [props.icon] - Icon to display in button (iconOnly variant only).
 * @returns {JSX.Element}
 */
const ButtonWrapper = ({ children, color, size, variant, disabled, icon }) => (
  <Button
    color={color}
    size={size}
    variant={variant}
    disabled={disabled}
    icon={icon}
  >
    {children}
  </Button>
)

storiesOf('Button', module)
  .add('Default', () => <ButtonWrapper>Default</ButtonWrapper>)
  .add('Disabled', () => <ButtonWrapper disabled>Disabled</ButtonWrapper>)
  .add('Filled', () => <ButtonWrapper variant='filled'>Filled</ButtonWrapper>)
  .add('Subtle', () => <ButtonWrapper variant='subtle'>Subtle</ButtonWrapper>)
  .add('Outline', () => (
    <ButtonWrapper variant='outline'>Outline</ButtonWrapper>
  ))
  .add('Icon Only', () => (
    <ButtonWrapper variant='iconOnly' icon={<IconThumbUp />}>
      Icon Only
    </ButtonWrapper>
  ))
  .add('Custom Color', () => (
    <ButtonWrapper color='purple'>Custom Color</ButtonWrapper>
  ))
  .add('Sizes', () => (
    <>
      <ButtonWrapper size='sm'>Small</ButtonWrapper>
      <ButtonWrapper size='md'>Medium</ButtonWrapper>
      <ButtonWrapper size='lg'>Large</ButtonWrapper>
    </>
  ))
  .add('Custom Colors', () => (
    <>
      <ButtonWrapper color='purple'>Purple</ButtonWrapper>
      <ButtonWrapper variant='outline' color='purple'>
        Outlined Purple
      </ButtonWrapper>
      <ButtonWrapper color='green'>Green</ButtonWrapper>
      <ButtonWrapper variant='outline' color='green'>
        Outlined Green
      </ButtonWrapper>
      <ButtonWrapper color='yellow'>Yellow</ButtonWrapper>
      <ButtonWrapper variant='outline' color='yellow'>
        Outlined Yellow
      </ButtonWrapper>
      <ButtonWrapper color='red'>Red</ButtonWrapper>
      <ButtonWrapper variant='outline' color='red'>
        Outlined Red
      </ButtonWrapper>
    </>
  ))
