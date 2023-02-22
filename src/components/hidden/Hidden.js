import React from 'react'
import PropTypes from 'prop-types'

/**
 * A component that conditionally hides its children.
 * @param {object} props - The props object.
 * @param {boolean} props.hide - A boolean value indicating whether to hide the children.
 * @param {React.ReactNode} props.children - The children to render if not hidden.
 * @returns {JSX.Element|null} - The rendered component or null if hidden.
 */
const Hidden = ({ hide, children }) => {
  return hide ? null : <div>{children}</div>
}

Hidden.propTypes = {
  hide: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
}

export default Hidden
