import React from 'react'
import { storiesOf } from '@storybook/react'
import Accordion from './Accordion'
import AccordionItem from './AccordionItem'

const sections = [
  { title: 'Section 1', content: 'Content for section 1' },
  { title: 'Section 2', content: 'Content for section 2' },
  { title: 'Section 3', content: 'Content for section 3' }
]

storiesOf('Accordion', module).add('default', () => (
  <Accordion>
    {sections.map((section, index) => (
      <AccordionItem
        key={index}
        title={section.title}
        content={section.content}
        index={index}
      />
    ))}
  </Accordion>
))
