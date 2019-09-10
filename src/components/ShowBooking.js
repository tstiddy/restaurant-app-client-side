import React from 'react'
import RestaurantAPI from '../adapters/RestaurantAPI';
import {Card, Button} from 'semantic-ui-react';
import {Link} from 'react-router-dom'

class ShowBooking extends React.Component{

    state={
        bookedRestaurants: []
    }

    componentDidMount() {
        RestaurantAPI.getFavoriteRestaurant(this.props.restaurant_id)
            .then(resta => this.setState({bookedRestaurants: resta}))
    }

    render() {
        return(
            <Card raised>
                <Card.Content>
                    <Card.Header>
                        {this.state.bookedRestaurants.name}
                    </Card.Header>
                    <Card.Description>
                        {`date: ${this.props.bookingDate}`}
                    </Card.Description>
                    <Card.Description>
                        {`time: ${this.props.bookingTime}`}
                    </Card.Description>
                </Card.Content>
                <Card.Content>
                    <Button as={Link} to={`/restaurants/${this.props.restaurant_id}`}>More Details</Button>
                </Card.Content>
            </Card>
        )
    }
}

export default ShowBooking