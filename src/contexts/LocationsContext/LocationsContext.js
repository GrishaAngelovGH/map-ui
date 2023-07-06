import { createContext } from 'react'

const locations = [
  [51.525, -0.09],
  [51.520, -0.03],
  [51.522, -0.05],
  [51.515, -0.12],
  [51.515, -0.15],
  [51.505, -0.12],
  [51.495, -0.10],
  [51.495, -0.17],
  [51.495, -0.05],
  [51.495, -0.07],
]

const LocationsContext = createContext(locations)

export default LocationsContext