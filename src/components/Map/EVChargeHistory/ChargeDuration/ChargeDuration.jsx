const ChargeDuration = ({ duration }) => (
  <div className='row mb-4 justify-content-evenly align-items-center border rounded p-2 shadow'>
    <div className='col-md-2'>
      <i className='bi bi-lightning-charge fs-1'></i>
    </div>
    <div className='col-md-6'>
      <p className='m-0 mt-3 fw-bold'>{duration.name}</p>
      <p className='m-0 text-secondary'>{duration.address}</p>

      <div className='d-flex'>
        <div className='w-50 d-flex align-items-center'>
          <i className='bi bi-battery-half text-danger fs-2 d-flex'></i>
          <span className='fw-bold text-danger mx-1'>{duration.prevBatteryCharge}%</span>
        </div>
        <div className='w-50 d-flex align-items-center'>
          <i className='bi bi-battery-half text-success fs-2 d-flex'></i>
          <span className='fw-bold text-success mx-1'>{duration.currentBatteryCharge}%</span>
        </div>
      </div>
    </div>
    <div className='col-md-3 d-flex align-items-center'>
      <i className='bi bi-clock fs-1'></i>
      <span className='fw-bold mx-2'>{duration.durationTimeInMin}m</span>
    </div>
  </div>
)

export default ChargeDuration