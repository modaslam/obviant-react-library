import React from 'react'
import { storiesOf } from '@storybook/react'
import Accordion from './Accordion'
import AccordionItem from './AccordionItem'
import { withKnobs, select } from '@storybook/addon-knobs'

/**
 * List of sections for the Accordion
 * @type {Array<{title:string,content:string}>}
 */
const sections = [
  { title: 'Section 1', content: 'Content for section 1' },
  { title: 'Section 2', content: 'Content for section 2' },
  { title: 'Section 3', content: 'Content for section 3' }
]

/**
 * @param {string} [props.float=right] - float position of icon
 */
storiesOf('Accordion', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    const float = select('Float', { left: 'left', right: 'right' }, 'right')
    return (
      <Accordion>
        {sections.map((section, index) => (
          <AccordionItem
            key={index}
            title={section.title}
            content={section.content}
            index={index}
            float={float}
          />
        ))}
      </Accordion>
    )
  })
