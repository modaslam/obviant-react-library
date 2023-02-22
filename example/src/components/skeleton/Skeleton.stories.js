import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, select } from '@storybook/addon-knobs'
import Skeleton from './Skeleton'

const sizeOptions = {
  Small: '100px',
  Medium: '200px',
  Large: '300px'
}

const sizeValues = Object.values(sizeOptions)

storiesOf('Skeleton', module)
  .addDecorator(withKnobs)
  .add('circular', () => <Skeleton type='circular' />)
  .add('rectangular', () => <Skeleton type='rectangular' />)
  .add('rounded', () => <Skeleton type='rounded' />)
  .add('custom size', () => (
    <Skeleton type='rectangular' height='200px' width='400px' />
  ))
  .add('custom size with knobs', () => {
    const [height, setHeight] = useState('200px')
    const [width, setWidth] = useState('400px')

    return (
      <div>
        <Skeleton type='rectangular' height={height} width={width} />
        <div>
          <label htmlFor='height'>Height:</label>
          <input
            id='height'
            type='text'
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='width'>Width:</label>
          <input
            id='width'
            type='text'
            value={width}
            onChange={(e) => setWidth(e.target.value)}
          />
        </div>
      </div>
    )
  })
  .add('custom size with knobs and select', () => {
    const [selectedSize, setSelectedSize] = useState('Medium')

    const handleSizeChange = (e) => {
      setSelectedSize(e.target.value)
    }

    return (
      <div>
        <Skeleton
          type='rectangular'
          height={selectedSize}
          width={selectedSize}
        />
        <div>
          {sizeValues.map((size) => (
            <label key={size}>
              <input
                type='radio'
                value={size}
                checked={selectedSize === size}
                onChange={handleSizeChange}
              />
              {size}
            </label>
          ))}
        </div>
        <div>
          <p>Selected Size: {selectedSize}</p>
        </div>
      </div>
    )
  })
