import React from 'react';
import {Card} from 'semantic-ui-react'
import FavoritesList from './Favorites';

class FavoritesCard extends React.Component {

    render() {
        return (
            <div>
            <Card.Group itemsPerRow={4}>
                {
                    this.props.favoriteIds.map(favorite => <FavoritesList key={favorite} favRestaurant={favorite}/>)
                }
            </Card.Group>
            </div>
        )
    }
}

export default FavoritesCard