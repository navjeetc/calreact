const AppointmentList = ({appointments}) =>
  <div>
    <h3>Appointment List</h3>
    {
      appointments.map((appointment) => {
        return(
          <Appointment appointment={appointment}
            key={appointment.id} />
        )
      })
    }
  </div>
