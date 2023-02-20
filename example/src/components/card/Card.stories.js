import React from 'react'
import { storiesOf } from '@storybook/react'
import Card from './Card'

/**
 * A Card component that displays an image, title, subtitle, and description.
 * Can be displayed in a smaller size using the `small` prop.
 *
 * @component
 * @param {object} props - The component props.
 * @param {string} props.title - The title of the card (required).
 * @param {string} props.subtitle - The subtitle of the card.
 * @param {string} props.description - The description of the card (required).
 * @param {string} props.image - The URL of the image to display in the card.
 * @param {boolean} props.small - Whether to display the card in a smaller size.
 * @returns {JSX.Element} - The rendered Card component.
 */
storiesOf('Card', module)
  .add('with image', () => (
    <Card
      title='Example Card'
      subtitle='Subtitle'
      description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris hendrerit, enim eu fermentum tristique, quam nulla facilisis nisl, eu feugiat metus ex vel mauris.'
      image='https://via.placeholder.com/250'
    />
  ))
  .add('without image', () => (
    <Card
      title='Example Card'
      subtitle='Subtitle'
      description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris hendrerit, enim eu fermentum tristique, quam nulla facilisis nisl, eu feugiat metus ex vel mauris.'
    />
  ))
  .add('smaller size', () => (
    <Card
      title='Example Card'
      subtitle='Subtitle'
      description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris hendrerit, enim eu fermentum tristique, quam nulla facilisis nisl, eu feugiat metus ex vel mauris.'
      image='https://via.placeholder.com/250'
      small
    />
  ))
