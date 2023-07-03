import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

const ButtonGroupWrapper = ({ onShowMarkers, onShowRoute }) => (
  <ButtonGroup>
    <Button variant='outline-success' onClick={onShowMarkers}>Show Markers</Button>
    <Button variant='outline-success' onClick={onShowRoute}>Show Route</Button>
  </ButtonGroup>
)

export default ButtonGroupWrapper