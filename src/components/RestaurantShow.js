import React from 'react';
import {Dimmer, Container, Loader, Card, Icon} from 'semantic-ui-react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class RestaurantShow extends React.Component {

    state = {
        isFavorite: false,
    }

    favoriteRestaurant= () => {
        this.props.newFavorite({user_id: this.props.id, restaurant_id: this.props.restaurant.id})
        this.changeState()
    }

    changeState() {
        this.setState({isFavorite: true})
    }

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
        let found = undefined
        if (this.props.favoriteIds === undefined) {
            found = false
        } else {
            found = this.props.favoriteIds.find(fav => fav == this.props.restaurant.id)
        }
        return (
            <div>
                <div>
                {
                    this.props.id === undefined ? '' :
                    found || this.state.isFavorite ? <Icon color="yellow" name="star" size='large' onClick={this.favoriteRestaurant}/> :
                    <Icon color="grey" name='star outline' size='large' onClick={this.favoriteRestaurant}/>
                }
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
                    <Card.Group itemsPerRow={5} >
                        {photos.map(photo => 
                            <Card raised key={photo.photo.thumb_url} image={photo.photo.thumb_url}></Card>
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