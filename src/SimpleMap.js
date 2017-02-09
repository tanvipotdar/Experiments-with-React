import React from 'react';
import ReactDOM from 'react-dom';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';

const coords = {
  lat: 19.3818959,
  lng: 72.82815690000007
};

const Map = React.createClass({

  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true
    });
  },

  onDragEnd(e) {
    console.log('onDragEnd', e);
  },

  onCloseClick() {
    console.log('onCloseClick');
  },

  onClick(e) {
    console.log('onClick', e);
  },

  render() {
    return (
      <Gmaps
        width={'100%'}
        height={'400px'}
        lat={coords.lat}
        lng={coords.lng}
        zoom={17}
        loadingMessage={'Loading Map'}
        params={{v: '3.exp', key: 'AIzaSyByH0c5bxYDZ48BLQ401BBsm4DppG6QNkQ'}}
        onMapCreated={this.onMapCreated}>
        <Marker
          lat={coords.lat}
          lng={coords.lng}
          draggable={true}
          onDragEnd={this.onDragEnd} />
        <InfoWindow
          lat={coords.lat}
          lng={coords.lng}
          content={'Shreyas Hospital'}
          onCloseClick={this.onCloseClick} />
        <Circle
          lat={coords.lat}
          lng={coords.lng}
          radius={200}
          onClick={this.onClick} />
      </Gmaps>
    );
  }

});

export default Map