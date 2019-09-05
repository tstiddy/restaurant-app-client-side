import React from 'react';
import {Card, Button, Segment} from 'semantic-ui-react';
import RestaurantDetail from './RestaurantDetail';

class RestaurantList extends React.Component {

    // componentDidMount() {
    //     window.addEventListener('scroll', this.onScroll, false)
    // }

    // componentWillUnmount() {
    //     window.removeEventListener('scroll', this.onScroll)
    // }

    // onScroll = () => {
    //     if(
    //         (window.innerHeight + window.scrollY) >= (document.body.offsetHeight * 2.5) &&
    //         this.props.restaurants.length
    //     ) {
    //         console.log("window Scroll " + (window.innerHeight + window.scrollY))
    //         console.log("document Size " + (document.body.offsetHeight))
    //     }
    // }

    render() {
        return (
            <>
                <Segment basic padded>
                <Card.Group itemsPerRow={2}>
                    {
                        this.props.restaurants.map(restaurant => <RestaurantDetail key={restaurant.restaurant.id} {...restaurant} />)
                    }
                </Card.Group>
                </Segment>
                <Button onClick={this.props.showMore}>Show More</Button>
            </>
        )
    }
}

export default RestaurantList