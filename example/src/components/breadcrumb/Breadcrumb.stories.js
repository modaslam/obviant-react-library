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

const customSeparatorItems = [
  { label: 'Home', url: '/' },
  { label: 'Category', url: '/category' },
  { label: 'Subcategory', url: '/category/subcategory' },
  { label: 'Current Page', active: true }
]

/**
 * Renders the Breadcrumb component with a custom separator and the provided items.
 *
 * @return {JSX.Element} Breadcrumb story
 */
storiesOf('Breadcrumb', module).add('With custom separator', () => (
  <div style={{ padding: '20px' }}>
    <Breadcrumb items={customSeparatorItems} separator='>' />
  </div>
))
