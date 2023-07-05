import { Fragment, useState } from 'react'
import Sidebar from '../../Sidebar'
import Place from './Place'
import PlaceModal from './Place/PlaceModal'

const MapSidebar = ({ showSidebar, onHide }) => {
  const [showPlace, setShowPlace] = useState(false)
  const [placeId, setPlaceId] = useState(0)

  const handlePlaceClick = id => {
    setShowPlace(true)
    setPlaceId(id)
  }

  const hidePlace = () => {
    setShowPlace(false)
  }

  const places = [
    { id: 1, title: "Bill Baker's Street Restaurant", open: true },
    { id: 2, title: 'Pizza Restaurant Waterloo', open: false },
    { id: 3, title: 'Leicester Square Restaurant', open: true },
    { id: 4, title: 'Mayfair Restaurant', open: true },
    { id: 5, title: 'Chelsea Restaurant', open: true }
  ]

  const place = places.find(v => v.id === placeId)

  const body = (
    <Fragment>
      {
        places.map(v => (
          <Place
            key={v.id}
            id={v.id}
            title={v.title}
            open={v.open}
            onClick={handlePlaceClick}
          />
        ))
      }

      {
        showPlace && (
          <PlaceModal
            show={showPlace}
            place={place}
            onHide={hidePlace}
          />
        )
      }
    </Fragment>
  )

  return (
    <Sidebar
      title='Favorite Places'
      body={body}
      showSidebar={showSidebar}
      onHide={onHide}
    />
  )
}

export default MapSidebar