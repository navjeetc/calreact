class AppointmentForm extends React.Component {

  handleChange(e){
    const name = e.target.name;
    obj = {};
    obj[name] = e.target.value;
    this.props.onUserInput(obj);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.onFormSubmit();
  }

  addDateTime(e){
    const name = 'appt_time';
    obj = {}
    if (obj[name] = e.toDate()){
      this.props.onUserInput(obj);
    }
  }

  render () {
    const inputProps = {
        name: 'appt_time'
      };

    return(
      <div>
        <h3>Make an appoinment</h3>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <input name="title" placeholder='Appointment title'
            value={this.props.input_title}
            onChange={(event) => this.handleChange(event)} />

          <Datetime input={false} open={true}
            inputProps={inputProps}
            value={this.props.appt_time}
            onChange={(event) => this.addDateTime(event)} />

          <input className="appt_button" type="submit" value="Make appointment"/>
        </form>
      </div>

    )
  }
}