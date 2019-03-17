import React, { Component } from 'react'
import { List, Image } from 'semantic-ui-react' 

export default class EventListAttendee extends Component {
  render() {
    return (
        <List.Item>
            <Image as='a' size='mini' circle source='https://randomuser.me/api/portraits/women/42.jpg'/>
        </List.Item>
    )
  }
}
export default EventListAttendee