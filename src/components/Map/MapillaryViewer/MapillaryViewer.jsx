import { useEffect, useRef } from 'react'

import { Viewer } from 'mapillary-js'

const accessToken = import.meta.env.VITE_REACT_APP_DEMO_MAPILLARY_API_ACCESS_TOKEN

const MapillaryViewer = ({ fullscreen }) => {
  const containerRef = useRef()
  let viewer

  const height = {
    true: 'calc(100vh - 100px)',
    false: 'calc(100vh - 200px)'
  }

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
    <div ref={containerRef} style={{ width: '100%', height: height[fullscreen] }} />
  )
}

export default MapillaryViewer