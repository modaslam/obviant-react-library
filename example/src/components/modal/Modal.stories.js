import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import Modal from './Modal'

/**
 * @function
 * Renders the modal component in different states
 * @param {string} name - name of the story
 * @param {function} callback - function that returns JSX for the story
 */
storiesOf('Modal', module)
  .add('Open Modal', () => {
    const [isOpen, setIsOpen] = useState(true)
    return (
      <div>
        <button onClick={() => setIsOpen(true)}>Open Modal</button>
        <Modal
          isOpen={isOpen}
          onClose={() => {
            setIsOpen(false)
          }}
          title='Modal Title'
        />
      </div>
    )
  })
  .add('Close Modal', () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
      <div>
        <button onClick={() => setIsOpen(true)}>Open Modal</button>
        <Modal
          isOpen={isOpen}
          onClose={() => {
            setIsOpen(false)
          }}
          title='Modal Title'
        />
      </div>
    )
  })
  .add('Open Modal with overlay close disabled', () => {
    const [isOpen, setIsOpen] = useState(true)
    return (
      <div>
        <button onClick={() => setIsOpen(true)}>Open Modal</button>
        <Modal
          isOpen={isOpen}
          onClose={() => {
            setIsOpen(false)
          }}
          title='Modal Title'
          disableOverlayClose={true}
        />
      </div>
    )
  })
