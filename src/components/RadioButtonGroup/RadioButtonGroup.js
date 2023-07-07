import { useState } from 'react'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'

const RadioButtonGroup = ({ initialValue, radios, onClick }) => {
  const [radioValue, setRadioValue] = useState(initialValue)

  const handleClick = ({ currentTarget: { value } }) => {
    setRadioValue(value)
    onClick(value)
  }

  return (
    <ButtonGroup>
      {
        radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${radio.value}`}
            type='radio'
            variant='outline-primary'
            name={`radio-${radio.value}-name`}
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={handleClick}
          >
            {radio.name}
          </ToggleButton>
        ))
      }
    </ButtonGroup>
  )
}

export default RadioButtonGroup