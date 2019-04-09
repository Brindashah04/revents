import React, { Component } from 'react';
import{ connect } from 'react-redux'
import { Grid, Button } from 'semantic-ui-react';
import EventList from '../EventList/EventList';
import EventForm from '../EventForm/EventForm';
import { createEvent, deleteEvent, updateEvent } from '../eventActions'
import cuid from 'cuid';

const mapState = (state) => ({
  events: state.events
})

const actions = {
  createEvent,
  deleteEvent
}



class EventDashboard extends Component {
  state = {
    isOpen: false,
    selectedEvent: null
  }

  handleDeleteEvent = (eventId) => () => {
    this.props.deleteEvent(eventId);
  } 

  render() {
    const {events} = this.props;
    return (
        <Grid>
            <Grid.Column width={10}>
                <EventList deleteEvent={this.handleDeleteEvent} 
                 events={events}
                 /> 
            </Grid.Column>
            <Grid.Column width={6}>
            </Grid.Column>
        </Grid>
    );
  }
}

export default connect(mapState, actions)(EventDashboard);