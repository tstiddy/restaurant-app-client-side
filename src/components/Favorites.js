import React from 'react';
import RestaurantAPI from '../adapters/RestaurantAPI';
import {Card, Image} from 'semantic-ui-react';

class Favorites extends React.Component {

    state={
        favoriteRestaurant: []
    }

    componentDidMount() {
        RestaurantAPI.getFavoriteRestaurant(this.props.favRestaurant)
            .then(resta => this.setState({favoriteRestaurant: resta}))
    }

    render() {
        const {restaurant} = this.state.favoriteRestaurant 
        return (
            <div>
                <Card>
                    <Image src={this.state.favoriteRestaurant.thumb}/>
                </Card>
            </div>
        )
    }
}

export default Favorites

