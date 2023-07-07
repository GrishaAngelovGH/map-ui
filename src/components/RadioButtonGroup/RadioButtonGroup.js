import { useState } from 'react'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'

const RadioButtonGroup = ({ radios }) => {
  const [radioValue, setRadioValue] = useState('1')

  return (
    <ButtonGroup>
      {
        radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type='radio'
            variant='outline-primary'
            name='radio'
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))
      }
    </ButtonGroup>
  )
}

export default RadioButtonGroup