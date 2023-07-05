import { Fragment } from 'react'
import Sidebar from '../../Sidebar'
import Place from './Place'

const MapSidebar = ({ showSidebar, onHide }) => {
  const places = [
    { title: "Bill Baker's Street Restaurant", open: true },
    { title: 'Pizza Restaurant Waterloo', open: false },
    { title: 'Leicester Square Restaurant', open: true },
    { title: 'Mayfair Restaurant', open: true },
    { title: 'Chelsea Restaurant', open: true }
  ]

  return (
    <Sidebar
      title='Favorite Places'
      body={
        <Fragment>
          {
            places.map((v, i) => (
              <Place key={i} title={v.title} open={v.open} />
            ))
          }
        </Fragment>
      }
      showSidebar={showSidebar}
      onHide={onHide}
    />
  )
}

export default MapSidebar