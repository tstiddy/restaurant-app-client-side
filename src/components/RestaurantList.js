import React from 'react';
import {Card, Button} from 'semantic-ui-react';
import RestaurantDetail from './RestaurantDetail';

class RestaurantList extends React.Component {
    render() {
        return (
            <>
            <Card.Group itemsPerRow={4}>
                {
                    this.props.restaurants.map(restaurant => <RestaurantDetail key={restaurant.restaurant.id} {...restaurant} />)
                }
            </Card.Group>
            <Button onClick={this.props.showMore}>Show More</Button>
            </>
        )
    }
}

export default RestaurantList