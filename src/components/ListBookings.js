import React from 'react';
import ShowBooking from './ShowBooking';
import {Segment, Card} from 'semantic-ui-react'

class ListBookings extends React.Component{
    render() {
        return(
            <>
                <Segment basic padded>
                    <Card.Group itemsPerRow={2}>
                        {
                            this.props.bookings.map(booking => <ShowBooking key={booking.id} {...booking}/>)
                        }
                    </Card.Group>
                </Segment>
            </>
        )
    }
}

export default ListBookings