import React from 'react';
import {Dimmer, Container, Loader, Card, Icon, Button, Image, Segment} from 'semantic-ui-react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import {Link} from 'react-router-dom';

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

        const {name, cuisines, location, phone_numbers, photos, timings, id, thumb} = this.props.restaurant
        const mapStyles = {width: '90%', height: '13em'}
        let found = undefined
        if (this.props.favoriteIds === undefined) {
            found = false
        } else {
            found = this.props.favoriteIds.find(fav => fav == this.props.restaurant.id)
        }
        return (
            <div>
                <br/>
                <br/>
                <Card.Group centered>
                    <Card raised>
                    <div>
                        <Image centered src={photos.map(photo =>
                                photo.photo.thumb_url)} />
                        {
                            photos.map(photo =>
                                <Image key={photo.photo.thumb_url} image={photo.photo.thumb_url}/>)
                        }
                    </div>
                        <Card.Content>
                        <div>
                        {
                            this.props.id === undefined ? '' :
                            found || this.state.isFavorite ?
                            <Icon floated='right' color="yellow" name="star" size='large' onClick={this.favoriteRestaurant}/> 
                            :
                            <Icon floated='right'color="grey" name='star outline' size='large' onClick={this.favoriteRestaurant}/>
                        }
                        </div>
                        <br/>
                            <Card.Header>{name}</Card.Header>
                            <Card.Meta>Address: {location.address}</Card.Meta>
                            <Card.Description>Cuisines: {cuisines}</Card.Description>
                            <Card.Description>Phone Number: {phone_numbers}</Card.Description>
                            <Card.Description>Opening Times: {timings}</Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                        <Segment basic style={{height: '15em'}}>
                            <Map 
                                google={this.props.google}
                                zoom={15}
                                style={mapStyles}
                                initialCenter={{ lat: location.latitude, lng: location.longitude}}    
                                >
                                <Marker position={{ lat: location.latitude, lng: location.longitude}} />
                            </Map>
                        </Segment>
                        </Card.Content>
                            {
                                this.props.id === undefined ? '' :
                                found || this.state.isFavorite ?
                                <Card.Content extra>
                                    <Button as={Link} to={`/${id}/bookings`}>Book a Table</Button>
                                </Card.Content>
                                :
                                <Card.Content extra>
                                    <Button as={Link} to={`/${id}/bookings`}>Book a Table</Button>
                                </Card.Content>
                            }
                    </Card>
                </Card.Group>                        

            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBnQ6DV6p3BQpKRtRYxzTgFFxYxXqwoEJw'
})(RestaurantShow)