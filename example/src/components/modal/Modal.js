import React from 'react'
import { IconX } from '@tabler/icons'
import './modal.css'

/**
 * Modal component for displaying a modal dialog box
 * @param {Object} props - The props for the component
 * @param {boolean} props.isOpen - Determines if the modal is open or closed
 * @param {function} props.onClose - The function to be called when the modal is closed
 * @param {string} props.title - The title to be displayed in the modal header
 * @param {boolean} [props.disableOverlayClose=false] - Determines if the modal can be closed by clicking on the overlay
 */
const Modal = ({ isOpen, onClose, title, disableOverlayClose = false }) => {
  return (
    <>
      {isOpen && (
        <div
          className='modal-overlay'
          onClick={() => {
            if (!disableOverlayClose) {
              onClose()
            }
          }}
        >
          <div className='modal-content'>
            <div className='modal-header'>
              <h2>{title}</h2>
              <button onClick={onClose}>
                <IconX />
              </button>
            </div>
            <p>Modal Content</p>
          </div>
        </div>
      )}
    </>
  )
}

export default Modal
