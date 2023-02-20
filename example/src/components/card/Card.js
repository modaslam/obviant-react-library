import React from 'react'
import PropTypes from 'prop-types'
import './card.css'

/**
 * A card component that displays a title, subtitle, description, and image.
 *
 * @param {object} props - The component props.
 * @param {string} props.title - The title to display in the card.
 * @param {string} [props.subtitle] - The subtitle to display in the card (optional).
 * @param {string} props.description - The description to display in the card.
 * @param {string} [props.image] - The URL of the image to display in the card (optional).
 * @param {boolean} [props.small] - Whether the card should be small or not (optional, default is false).
 *
 * @returns {JSX.Element} - The card component.
 */
const Card = ({ title, subtitle, description, image, small }) => {
  const cardClass = small ? 'card-small card-bordered' : 'card card-bordered'

  return (
    <div className={cardClass}>
      {image && <img src={image} alt={title} />}
      <div className='card-body'>
        <h2>{title}</h2>
        {subtitle && <h3>{subtitle}</h3>}
        <p>{description}</p>
      </div>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
  small: PropTypes.bool
}

export default Card
