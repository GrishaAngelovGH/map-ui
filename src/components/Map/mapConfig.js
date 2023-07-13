import MarkerIcon from './MarkerIcon'

export const map = {
  lat: 51.505,
  lng: -0.09,
  zoom: {
    default: 13,
    min: 10,
    max: 16
  },
  url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
}

export const motionPolylineConf = locations => {
  return L.motion.polyline(locations, {
    color: 'lime',
    weight: 10
  }, {
    auto: true,
    duration: 15000,
    speed: 5,
    easing: L.Motion.Ease.linear
  }, {
    removeOnEnd: false,
    showMarker: true,
    icon: MarkerIcon('suv')
  })
}