var AppointmentList = React.createClass({
  render: function(){
      return(
        <div>
          <h3>Appointment List</h3>
          {
            this.props.appointments.map(function(appointment){
              return(
                <Appointment appointment={appointment}
                  key={appointment.id} />
              )
            })
          }
        </div>
      )
  }
})