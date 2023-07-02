import { useState } from 'react'

import Header from './components/Header'
import Layout from './components/Layout'
import Map from './components/Map'

function App() {
  const [showMarkers, setShowMarkers] = useState(false)

  const handleShowMarkers = () => {
    setShowMarkers(!showMarkers)
  }

  return (
    <Layout
      header={<Header onShowMarkers={handleShowMarkers} />}
      footer={<h1>Footer</h1>}
    >
      <Map showMarkers={showMarkers} />
    </Layout>
  )
}

export default App
