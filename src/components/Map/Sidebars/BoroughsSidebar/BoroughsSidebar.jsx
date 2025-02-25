import { useContext, useEffect, useState } from 'react'

import RadioButtonGroup from 'components/RadioButtonGroup'
import SearchInput from 'components/SearchInput'
import Sidebar from 'components/Sidebar'
import Borough from './Borough'

import LondonAreaContext from 'contexts/LondonAreaContext'
import useSearch from 'hooks/useSearch'

import persistentBoroughsStorage from './persistentBoroughsStorage'

const BoroughsSidebar = ({ showSidebar, onHide, onBoroughClick }) => {
  const [viewCriteria, setViewCriteria] = useState('all')
  const [sortCriteria, setSortCriteria] = useState('id')
  const [searchCriteria, setSearchCriteria] = useState('')
  const [boroughId, setBoroughId] = useState(0)
  const [favoritesCount, setFavoritesCount] = useState(0)
  const londonArea = useContext(LondonAreaContext)

  const allBoroughs = viewCriteria === 'all' ?
    londonArea.features :
    londonArea.features.filter(v => persistentBoroughsStorage.isFavorite(v.properties.name))

  const [boroughs, boroughsCount] = useSearch(searchCriteria, allBoroughs, 'properties.name')

  const handleViewOnMapClick = (id, coords) => {
    setBoroughId(id)
    onBoroughClick(coords)
  }

  const handleClearFavoritesClick = () => {
    persistentBoroughsStorage.clearBoroughs()
    countFavorites()
  }

  const countFavorites = () => {
    setFavoritesCount(persistentBoroughsStorage.getFavoritesCount())
  }

  useEffect(() => {
    persistentBoroughsStorage.init()
    countFavorites()
  }, [])

  const radioButtonGroups = [
    {
      label: 'View',
      radioButtonGroup: (
        <RadioButtonGroup
          initialValue='all'
          radios={[
            { name: 'All', value: 'all' },
            { name: `Favorites (${favoritesCount})`, value: 'favorites' }
          ]}
          onClick={setViewCriteria}
        />
      )
    },
    {
      label: 'Sort ASC By',
      radioButtonGroup: (
        <RadioButtonGroup
          initialValue='id'
          radios={[
            { name: 'Id', value: 'id' },
            { name: 'Name', value: 'name' },
            { name: 'Area', value: 'area_hectares' }
          ]}
          onClick={setSortCriteria}
        />
      )
    }
  ]

  const body = (
    <div className='row p-1'>
      <div className='col-md-12'>
        <SearchInput placeholder='Search by name' onChange={setSearchCriteria} />

        {
          radioButtonGroups.map((v, i) => (
            <div key={i} className='row mb-3 justify-content-center align-items-center'>
              <div className='col-md-4'>
                <span>{v.label}</span>
              </div>
              <div className='col-md-7'>
                {v.radioButtonGroup}
              </div>
            </div>
          ))
        }

        {
          favoritesCount > 0 && (
            <button
              className='btn btn-danger w-100 mb-3 d-flex justify-content-center align-items-center'
              onClick={handleClearFavoritesClick}
            >
              <span className='mx-2'>Clear Favorites</span>
              <i className='bi bi-trash3 fs-4'></i>
            </button>
          )
        }

        {
          boroughs
            .sort((a, b) => {
              if (a.properties[sortCriteria] > b.properties[sortCriteria]) return 1
              if (a.properties[sortCriteria] < b.properties[sortCriteria]) return -1
              return 0
            })
            .map(v => {
              const id = v.properties.id

              return (
                <Borough
                  key={id}
                  id={id}
                  active={id === boroughId}
                  name={v.properties.name}
                  code={v.properties.code}
                  areaHectares={v.properties.area_hectares}
                  coordinates={v.geometry.coordinates[0][0]}
                  isFavorite={persistentBoroughsStorage.isFavorite(v.properties.name)}
                  onViewOnMapClick={handleViewOnMapClick}
                  onFavoriteChange={countFavorites}
                />
              )
            })
        }
      </div>
    </div>
  )

  return (
    <Sidebar
      title={<h3>London Boroughs ({boroughsCount})</h3>}
      body={body}
      showSidebar={showSidebar}
      onHide={onHide}
    />
  )
}

export default BoroughsSidebar