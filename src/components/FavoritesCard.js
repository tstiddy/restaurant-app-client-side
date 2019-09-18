import React from 'react';
import {Card, Segment} from 'semantic-ui-react';
import FavoritesList from './Favorites';

class FavoritesCard extends React.Component {

    render() {

        return (
            <>
            {
                window.innerWidth >= 900 ?
                <div>
                    <Segment basic padded='very'>
                    <Card.Group itemsPerRow={5}>
                    {
                        this.props.favoriteIds.map(favorite => <FavoritesList key={favorite} favRestaurant={favorite}/>)
                    }
                    </Card.Group>
                    </Segment>
                </div>
                :
                <div>
                    <Segment basic padded='very'>
                    <Card.Group itemsPerRow={2}>
                    {
                        this.props.favoriteIds.map(favorite => <FavoritesList key={favorite} favRestaurant={favorite}/>)
                    }
                </Card.Group>
                </Segment>
                </div>
            }
            </>
        )
    }
}

export default FavoritesCard