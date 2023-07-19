import { useEffect, useRef } from 'react'

import { Viewer } from 'mapillary-js'

const accessToken = process.env.REACT_APP_DEMO_MAPILLARY_API_ACCESS_TOKEN

const MapillaryViewer = () => {
  const containerRef = useRef()
  let viewer

  useEffect(() => {
    viewer = new Viewer({
      accessToken,
      container: containerRef.current,
      imageId: '2891821574414732',
    })

    return () => {
      if (viewer) {
        viewer.remove()
      }
    }
  }, [containerRef.current])

  return (
    <div ref={containerRef} style={{ width: '100%', height: 'calc(100vh - 200px)' }} />
  )
}

export default MapillaryViewer