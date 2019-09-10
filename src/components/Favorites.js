import React from 'react';
import RestaurantAPI from '../adapters/RestaurantAPI';
import {Card, Button, Container, Dimmer, Loader} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

class Favorites extends React.Component {

    state={
        favoriteRestaurant: []
    }

    componentDidMount() {
        RestaurantAPI.getFavoriteRestaurant(this.props.favRestaurant)
            .then(resta => this.setState({favoriteRestaurant: resta}))
    }

    render() {

        if (this.props.loading) {
            return <Container>
                <Dimmer active inverted>
                    <Loader inverted content='Loading' />
                </Dimmer>
            </Container>

        }

        const extra = (
            <Button as={Link} to={`/restaurants/${this.state.favoriteRestaurant.id}`}>More Details</Button>
        )

        return (
            <Card raised
                image={this.state.favoriteRestaurant.thumb}
                header={this.state.favoriteRestaurant.name}
                meta={this.state.favoriteRestaurant.cuisines}
                extra={extra}
            />

                // <Card centered>
                //     <Image src={this.state.favoriteRestaurant.thumb}/>
                //     <Card.Content>
                //         <Card.Header>{this.state.favoriteRestaurant.name}</Card.Header>
                //         <Card.Description>{this.state.favoriteRestaurant.cuisines}</Card.Description>
                //     </Card.Content>
                //     <Card.Content>
                //             <Button as={Link} to={`/restaurants/${this.state.favoriteRestaurant.id}`}>More Details</Button>
                //     </Card.Content>
                // </Card>
        )
    }
}

export default Favorites

