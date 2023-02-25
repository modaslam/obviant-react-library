import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import Radio from './Radio'

const options = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' }
]

const RadioGroup = () => {
  const [selectedOption, setSelectedOption] = useState(options[0].value)

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value)
  }

  return (
    <div>
      {options.map((option) => (
        <Radio
          key={option.value}
          label={option.label}
          name='radio-group'
          value={option.value}
          checked={selectedOption === option.value}
          onChange={handleOptionChange}
        />
      ))}
    </div>
  )
}

storiesOf('Radio', module)
  .add('Unchecked', () => (
    <Radio
      label='Unchecked radio'
      name='radio-group'
      value='unchecked'
      checked={false}
      onChange={() => {}}
    />
  ))
  .add('Checked', () => (
    <Radio
      label='Checked radio'
      name='radio-group'
      value='checked'
      checked={true}
      onChange={() => {}}
    />
  ))
  .add('Interactable', () => <RadioGroup />)
