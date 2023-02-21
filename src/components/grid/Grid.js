import React from 'react'
import PropTypes from 'prop-types'
import './grid.css'

/**
 * Grid component to display a grid of items with optional spacing.
 *
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The items to display in the grid.
 * @param {number} props.spacing - The amount of spacing to add between items.
 *
 * @returns {JSX.Element} - The rendered component.
 */
const Grid = ({ children, spacing }) => {
  const classes = ['grid']

  if (spacing) {
    classes.push(`grid-spacing-${spacing}`)
  }

  return <div className={classes.join(' ')}>{children}</div>
}

Grid.propTypes = {
  children: PropTypes.node.isRequired,
  spacing: PropTypes.oneOf([0, 1, 2, 3, 4, 5])
}

Grid.defaultProps = {
  spacing: 0
}

export default Grid
