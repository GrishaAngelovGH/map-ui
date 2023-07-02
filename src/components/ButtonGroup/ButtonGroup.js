import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

const ButtonGroupWrapper = ({ onShowMarkers }) => (
  <ButtonGroup>
    <Button variant='success' onClick={onShowMarkers}>Show Markers</Button>
  </ButtonGroup>
)

export default ButtonGroupWrapper