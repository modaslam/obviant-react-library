/**
* This is the story for the Timeline component
*
* @author Mohammed Aslam Puthukode Asif
* @version [version]
* @since 26th January 2023
*/

import React from 'react'
import { storiesOf } from '@storybook/react'
import Timeline from './Timeline'
import TimelineItem from './TimelineItem'
import { IconCheck } from '@tabler/icons'


/**
 * @typedef {Object} TimelineItemProps
 * @property {string} date - The date of the timeline item
 * @property {string} content - The content of the timeline item
 * @property {string} title - The title of the timeline item
 * @property {React.ReactNode} icon - The icon to be rendered in the timeline item
 * @property {number} index - The index of the timeline item
 */

/**
 * @type {TimelineItemProps[]}
 */
const items = [
  {
    id: 1,
    date: 'January 2020',
    content: 'The company was founded',
    title: 'Founded',
    icon: <IconCheck />
  },
  {
    id: 2,
    date: 'March 2020',
    content: 'The company released its first product',
    title: 'First Product Released',
    icon: <IconCheck />
  },
  {
    id: 3,
    date: 'September 2021',
    content: 'The company released its second product',
    title: 'First Product Released',
    icon: <IconCheck />
  }
]


/**
 * A storybook story that displays a timeline using the Timeline and TimelineItem components.
 */
storiesOf('Timeline', module)
  .add('default', () => (
    <Timeline>
      {items.map((item, index) => (
        <TimelineItem
          key={item.id}
          date={item.date}
          content={item.content}
          title={item.title}
          icon={item.icon}
          index={index}
        />
      ))}
    </Timeline>
  ))
  .add('with different items', () => (
    <Timeline>
      <TimelineItem
        date='January 2021'
        content='I got my first job'
        title='First Job'
        icon={<IconCheck />}
        index={0}
      />
      <TimelineItem
        date='June 2022'
        content='I moved to a new city'
        title='Moved'
        icon={<IconCheck />}
        index={1}
      />
    </Timeline>
  ))
