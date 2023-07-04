import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

const ButtonGroupWrapper = ({ onShowLocations, onShowRoute }) => (
  <ButtonGroup>
    <Button variant='outline-success' onClick={onShowLocations}>Show Locations</Button>
    <Button variant='outline-success' onClick={onShowRoute}>Show Route</Button>
  </ButtonGroup>
)

export default ButtonGroupWrapper