import React from 'react';
import MapView from "react-native-maps";
import {Styles} from "../Config/CommonStyles";
export default class SurferScreen extends React.Component {
    state = {
        value: 10
    };
    constructor(props) {
        super(props);
        this.state = {
            latitude: 32.76,
            longitude: 18.09,
            error: null,
        };

        navigator.geolocation.watchPosition(
            (position) => {
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    error: null,
                });
            },
            (error) => this.setState({error: error.message}),
            {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000, distanceFilter: 10},
        );
    }

    render() {
        return (
                    <MapView style={styles.map}
                             region={{
                                 latitude: this.state.latitude,
                                 longitude: this.state.longitude,
                                 latitudeDelta: 0.1,
                                 longitudeDelta: 0.1,
                             }}

                    >
                        <MapView.Marker
                            coordinate={{
                                latitude: this.state.latitude,
                                longitude: this.state.longitude,
                            }}
                            title={'Ali'}
                            description={'UMT'}
                            image={require('../../assets/images/location.png')}


                        />
                    </MapView>



        );
    }

}

const styles = {
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
};