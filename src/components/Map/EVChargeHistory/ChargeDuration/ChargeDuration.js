const ChargeDuration = ({ duration }) => (
  <div className='row mb-4 justify-content-evenly align-items-center border rounded p-4 shadow'>
    <div className='col-md-12'>
      <div className='row'>
        <div className='col-md-2'>
          <i className='bi bi-lightning-charge fs-1'></i>
        </div>
        <div className='col-md-7'>
          <p className='m-0 fw-bold'>{duration.name}</p>
          <p className='m-0 text-secondary'>{duration.location}</p>
        </div>
        <div className='col-md-3 d-flex align-items-center'>
          <i className='bi bi-clock fs-2'></i>
          <span className='fw-bold mx-1'>{duration.durationTimeInMin}m</span>
        </div>
      </div>
      <div className='row justify-content-center'>
        <div className='col-md-4 d-flex align-items-center'>
          <i className='bi bi-battery-half text-danger fs-1'></i>
          <span className='fw-bold text-danger mx-1'>{duration.prevBatteryCharge}%</span>
          <i className='bi bi-arrow-right-short fs-1'></i>
        </div>
        <div className='col-md-4 d-flex align-items-center'>
          <i className='bi bi-battery-half text-success fs-1'></i>
          <span className='fw-bold text-success mx-1'>{duration.currentBatteryCharge}%</span>
        </div>
      </div>
    </div>
  </div>
)

export default ChargeDuration