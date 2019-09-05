import React from 'react';
import {Card, Image, Button} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const RestaurantDetail = ({ restaurant }) => {

    const extra = (
        <Button as={Link} to={`/restaurants/${restaurant.id}`}>More Detail</Button>
    )

    return (
        // <Card>
        //     <Image src={restaurant.thumb}/>
        //     <Card.Content>
        //         <Card.Header>{restaurant.name}</Card.Header>
        //         <Card.Description>{restaurant.cuisines}</Card.Description>
        //         <br />
        //         <Card.Description>{restaurant.location.locality_verbose}</Card.Description>
        //     </Card.Content>
        //     <Card.Content>
        //         <Button as={Link} to={`/restaurants/${restaurant.id}`}>More Detail</Button>
        //     </Card.Content>
        // </Card>
        <Card 
            image={restaurant.thumb}
            header={restaurant.name}
            meta={restaurant.cuisines}
            description={restaurant.location.locality_verbose}
            extra={extra}
        />
    )
}
export default RestaurantDetail