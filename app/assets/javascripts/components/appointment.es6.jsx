const Appointment = ({appointment}) =>
  // stateless functional component
  // has no render method and
  // no need to extend React.Component
  // use arrow function
  // use destructring to get appointment property from props

  <div className='appointment'>
    <h3>{appointment.title}</h3>
    <p>at {formatDate(appointment.appt_time)}</p>
  </div>
