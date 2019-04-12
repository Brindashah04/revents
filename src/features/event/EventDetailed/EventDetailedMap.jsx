import React from 'react';
import Segment from 'semantic-ui-react';

const EventDetailedMap = ({lat,lng}) => {
    const center = {lat,lng};
    const zoom = 14;
  return (
    <Segment attached='bottom'>
        <div style={{ height: '300px', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyD4JL29As240BW9LjKEDWavlXE3aNRT4yg' }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
          <Marker
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
          </GoogleMapReact>
        </div>

    </Segment>
  )
}

export default EventDetailedMap
