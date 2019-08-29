import React from 'react';
import {Dimmer, Container, Loader, Card} from 'semantic-ui-react';

class RestaurantShow extends React.Component {
    render() {

        if (this.props.loading) {
            return <Container>
                <Dimmer active inverted>
                    <Loader inverted content='Loading' />
                </Dimmer>
            </Container>
        }

        const {name, cuisines, location, phone_numbers, photos} = this.props.restaurant
        return (
            <div>
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
                        <Card.Group itemsPerRow={10}>
                            {
                            photos.map(photo => 
                                <Card raised image={photo.photo.thumb_url}></Card>
                            )}
                        </Card.Group>
                </div>
            </div>
        )
    }
}

export default RestaurantShow