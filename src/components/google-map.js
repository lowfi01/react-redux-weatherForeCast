

import React, { Component } from 'react';


class GoogleMap extends Component{
    componentDidMount(){
        // this creates a google map
        // this.refs.map - targets the <div ref="map" />
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        });
    }

    // note - we are making use of the google api script tag in index.html
    render(){
        return(
            // ref = is a react method to reference a html element
            <div ref="map" />
        )
    }
}

export default GoogleMap;