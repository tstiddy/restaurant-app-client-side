import React from 'react';
import {Dimmer, Container, Loader, Card, Segment, Icon} from 'semantic-ui-react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class RestaurantShow extends React.Component {
    render() {

        if (this.props.loading) {
            return <Container>
                <Dimmer active inverted>
                    <Loader inverted content='Loading' />
                </Dimmer>
            </Container>
        }

        const {name, cuisines, location, phone_numbers, photos, timings} = this.props.restaurant
        const mapStyles = {width: '50%', height: '50%'}
        return (
            <div>
                <div>
                    <Icon color="grey" name='star outline'/>
                </div>
                <div className="restName">
                    Name:{name}
                </div>
                <div>
                    Cuisines:{cuisines}
                </div>
                <div>
                    Address:{location.address}
                </div>
                <div>
                    Phone Number:{phone_numbers}
                </div>
                <div>
                    Opening Times:{timings}
                </div>
                <div>
                    <Card.Group itemsPerRow={5}>
                        {photos.map(photo => 
                            <Card raised image={photo.photo.thumb_url}></Card>
                        )}
                    </Card.Group>
                </div>
                <Map 
                    google={this.props.google}
                    zoom={15}
                    style={mapStyles}
                    initialCenter={{ lat: location.latitude, lng: location.longitude}}    
                >
                <Marker position={{ lat: location.latitude, lng: location.longitude}} />
                </Map>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBnQ6DV6p3BQpKRtRYxzTgFFxYxXqwoEJw'
})(RestaurantShow)