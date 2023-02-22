import React from 'react'
import PropTypes from 'prop-types'
import './button.css'

/**
 * A customizable button component with different variants, sizes and colors.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} [props.variant='filled'] - The variant of the button. Can be 'outline', 'filled', 'subtle' or 'iconOnly'.
 * @param {string} [props.size='md'] - The size of the button. Can be 'sm', 'md' or 'lg'.
 * @param {boolean} [props.disabled=false] - Whether the button is disabled or not.
 * @param {React.ElementType} [props.icon] - The icon to display inside the button.
 * @param {string} [props.color] - The custom color of the button. Can be 'primary', 'secondary', 'purple', 'green', 'yellow' or 'red'.
 * @param {React.ReactNode} props.children - The content to display inside the button.
 * @param {Object} rest - Any other additional props to be passed to the button element.
 * @returns {JSX.Element} - The rendered button component.
 */
const Button = ({
  variant,
  size,
  disabled,
  icon,
  color,
  children,
  ...rest
}) => {
  let classes = ['button']
  if (variant === 'outline') {
    classes.push('button-outline')
    if (color) {
      classes.push(`button-color-outline-${color}`)
    }
  } else if (variant === 'filled') {
    classes.push('button-filled')
    if (color) {
      classes.push(`button-color-${color}`)
    }
  } else if (variant === 'subtle') {
    classes.push('button-subtle')
    if (color) {
      classes.push(`button-color-${color}`)
    }
    classes.push('button-subtle-no-border')
  } else if (variant === 'iconOnly') {
    classes.push('button-iconOnly')
    if (color) {
      classes.push(`button-color-outline-${color}`)
    }
  }
  if (size === 'sm') {
    classes.push('button-sm')
  } else if (size === 'md') {
    classes.push('button-md')
  } else if (size === 'lg') {
    classes.push('button-lg')
  }
  if (disabled) {
    classes.push('button-disabled')
  }
  if (variant === 'iconOnly') {
    return (
      <button className={classes.join(' ')} {...rest}>
        {icon}
      </button>
    )
  } else {
    return (
      <button className={classes.join(' ')} {...rest}>
        {children}
      </button>
    )
  }
}

Button.propTypes = {
  variant: PropTypes.oneOf(['outline', 'filled', 'subtle', 'iconOnly']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  disabled: PropTypes.bool,
  icon: PropTypes.elementType,
  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'purple',
    'green',
    'yellow',
    'red'
  ]),
  children: PropTypes.node
}

Button.defaultProps = {
  variant: 'filled',
  size: 'md',
  disabled: false
}

export default Button
