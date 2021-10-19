import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import './GoogleMap.css';
import { useParams } from 'react-router-dom';

const mapStyles = {
    width: '100%',
    height: '630px',
    borderRadius: '10px',
};
const mapPosition = {
    lat: 23.7252,
    lng: 90.3975,
};

export class GoogleMap extends Component {
    render() {
        return (
            <Map google={this.props.google} zoom={15} style={mapStyles} initialCenter={mapPosition} className="mapContainerWrapper">
                <Marker position={mapPosition} />
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCFF-0W7KqZroCvRYQ744etOSxRDPtjfIU',
})(GoogleMap);
