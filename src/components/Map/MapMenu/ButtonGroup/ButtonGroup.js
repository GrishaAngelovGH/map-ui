import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ldnUndergroundIcon from './ldn-underground.png'

const ButtonGroupWrapper = ({ onShowUndergroundLocations }) => (
  <ButtonGroup>
    <Button variant='outline-success' title='Underground Locations' onClick={onShowUndergroundLocations}>
      <Image src={ldnUndergroundIcon} width={40} />
    </Button>
  </ButtonGroup>
)

export default ButtonGroupWrapper