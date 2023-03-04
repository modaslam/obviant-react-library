import React from 'react'
import Kbd from './Kbd'

/**
 * Storybook meta data for Kbd component.
 *
 * @type {{
 *  title: string,
 *  component: React.FC,
 *  argTypes: {children: { control: string }},
 * }}
 */
export default {
  title: 'Kbd',
  component: Kbd,
  argTypes: {
    children: { control: 'text' }
  }
}

/**
 * Template for Kbd component story.
 *
 * @param {{children: string}} args - The children prop of the component.
 * @returns {JSX.Element} - The Kbd component with the specified children.
 */
const Template = (args) => <Kbd {...args} />

/**
 * Story for Ctrl key.
 */
export const Ctrl = Template.bind({})
Ctrl.args = {
  children: 'Ctrl'
}

/**
 * Story for Shift key.
 */
export const Shift = Template.bind({})
Shift.args = {
  children: 'Shift'
}

/**
 * Story for Alt key.
 */
export const Alt = Template.bind({})
Alt.args = {
  children: 'Alt'
}

/**
 * Story for Command key.
 */
export const Command = Template.bind({})
Command.args = {
  children: '⌘'
}

/**
 * Story for Number key.
 */
export const Number = Template.bind({})
Number.args = {
  children: '5'
}

/**
 * Story for mix of keys - Ctrl + C.
 *
 * @returns {JSX.Element} - The Kbd component with the specified children.
 */
export const MixOfKeys = () => (
  <>
    <Kbd>Ctrl</Kbd>
    <span> + </span>
    <Kbd>C</Kbd>
  </>
)
