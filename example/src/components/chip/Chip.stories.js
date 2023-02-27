import React from 'react'
import Chip from './Chip'

/**
 * Storybook configuration for the Chip component.
 *
 * @type {{title: string, component: Chip, argTypes: {text: {control: string}, color: {control: {type: string, options: string[]}}}}}
 */
export default {
  title: 'Chip',
  component: Chip,

  /**
   * Props that can be passed to the Chip component.
   *
   * @type {{text: {control: string}, color: {control: {type: string, options: string[]}}}}
   */
  argTypes: {
    text: { control: 'text' },
    color: {
      control: {
        type: 'select',
        options: ['red', 'blue', 'green', 'yellow']
      }
    }
  }
}

/**
 * Template for rendering the Chip component.
 *
 * @param args - Props for the Chip component.
 * @return {JSX.Element}
 * @constructor
 */
const Template = (args) => <Chip {...args} />

/**
 * Default story for the Chip component.
 */
export const Default = Template.bind({})
Default.args = {
  text: 'Default Chip'
}

/**
 * Story for the Chip component with a custom color.
 */
export const CustomColor = Template.bind({})
CustomColor.args = {
  text: 'Custom Color Chip',
  color: 'blue'
}

/**
 * Story for the deletable Chip component.
 */
export const Deletable = Template.bind({})
Deletable.args = {
  text: 'Deletable Chip',

  /**
   * Function to be called when the chip is deleted.
   *
   * @return {void}
   */
  onDelete: () => alert('Chip deleted!')
}
