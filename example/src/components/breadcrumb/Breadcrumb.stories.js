import React from 'react'
import { storiesOf } from '@storybook/react'
import Breadcrumb from './Breadcrumb'

const items = [
  { label: 'Home', url: '/' },
  { label: 'Category', url: '/category' },
  { label: 'Subcategory', url: '/category/subcategory' },
  { label: 'Current Page', active: true }
]

/**
 * Renders the default Breadcrumb component with the provided items.
 *
 * @return {JSX.Element} Breadcrumb story
 */
storiesOf('Breadcrumb', module).add('Default', () => (
  <div style={{ padding: '20px' }}>
    <Breadcrumb items={items} />
  </div>
))
