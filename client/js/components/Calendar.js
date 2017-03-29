import React from 'react';
import AddToCalendar from 'react-add-to-calendar';
import {connect} from 'react-redux';

class Calendar extends React.Component {
  constructor(props){
    super(props);
    }
  render() {
    let date = new Date().toString()
    const event = {
        title: this.props.goal,
        description: 'You can do it!',
        location: 'Chicago, IL',
        startTime: date,
        endTime: date
    };
    return <AddToCalendar className="addToCalendar" event={event} />;
    }
};

export default Calendar
