const formatTime = minutes => {
  const hh = Math.floor(minutes / 60)
  const mm = minutes - (hh * 60)

  return `${hh} h : ${mm} min`
}

const Summary = ({ history }) => {
  const batteryMeasures = history.filter(v => !v.charge)
  const chargeDurationMeasures = history.filter(v => v.charge)

  const km = batteryMeasures.reduce((a, b) => a + b.distanceInKm, 0)
  const durationInMin = batteryMeasures.reduce((a, b) => a + b.durationTimeInMin, 0)
  const chargeInMin = chargeDurationMeasures.reduce((a, b) => a + b.durationTimeInMin, 0)

  return (
    <div className='row justify-content-center text-center'>
      <div className='col-md-3'>
        <p className='m-0 text-secondary'>Distance</p>
        <p className='fw-bold'>{km} km</p>
      </div>
      <div className='col-md-4'>
        <p className='m-0 text-secondary'>Total Duration</p>
        <p className='fw-bold'>{formatTime(durationInMin)}</p>
      </div>
      <div className='col-md-3'>
        <p className='m-0 text-secondary'>Charge</p>
        <p className='fw-bold'>{formatTime(chargeInMin)}</p>
      </div>
    </div>
  )
}

export default Summary
