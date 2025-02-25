const BatteryMeasure = ({ measure }) => (
  <div className='row mb-4 justify-content-evenly align-items-center border rounded p-4 shadow'>
    <div className='col-md-2'>
      <i className='bi bi-car-front fs-1'></i>
    </div>
    <div className='col-md-7'>
      <p className='m-0 fw-bold'>{measure.location.city}</p>
      <p className='m-0 text-secondary'>{measure.location.city}, {measure.location.country}</p>
    </div>
    <div className='col-md-3 d-flex align-items-center'>
      <i className={`bi bi-${measure.battery < 100 ? 'battery-half' : 'battery-full'} fs-1`}></i>
      <span className='fw-bold mx-2'>{measure.battery}%</span>
    </div>
  </div>
)

export default BatteryMeasure