import { useState } from 'react'

import Footer from './components/Footer'
import Header from './components/Header'
import Layout from './components/Layout'
import Map from './components/Map'

function App() {
  const [showLocations, setShowLocations] = useState(false)
  const [showRoute, setShowRoute] = useState(false)
  const [showUndergroundLocations, setShowUndergroundLocations] = useState(false)

  const handleShowLocations = () => {
    setShowLocations(!showLocations)
  }

  const handleShowRoute = () => {
    setShowRoute(!showRoute)
  }

  const handleShowUndergroundLocations = () => {
    setShowUndergroundLocations(!showUndergroundLocations)
  }

  const resetControls = () => {
    setShowLocations(false)
    setShowRoute(false)
    setShowUndergroundLocations(false)
  }

  const header = (
    <Header
      onShowLocations={handleShowLocations}
      onShowRoute={handleShowRoute}
    />
  )

  const footer = (
    <Footer
      onShowUndergroundLocations={handleShowUndergroundLocations}
    />
  )

  return (
    <Layout
      header={header}
      footer={footer}
    >
      <Map
        showLocations={showLocations}
        showRoute={showRoute}
        showUndergroundLocations={showUndergroundLocations}
        resetControls={resetControls}
      />
    </Layout>
  )
}

export default App
