import React from 'react';
import ShowBooking from './ShowBooking';
import {Segment, Card} from 'semantic-ui-react'

class ListBookings extends React.Component{
    render() {
        return(
            <>
                {
                    window.innerWidth >= 900 ?
                    <div>
                        <Segment basic padded>
                        <Card.Group itemsPerRow={5}>
                        {
                            this.props.bookings.map(booking => <ShowBooking key={booking.id} {...booking}/>)
                        }
                        </Card.Group>
                        </Segment>
                    </div>
                    :
                    <div>
                        <Segment basic padded>
                        <Card.Group itemsPerRow={2}>
                        {
                            this.props.bookings.map(booking => <ShowBooking key={booking.id} {...booking}/>)
                        }
                        </Card.Group>
                        </Segment>
                    </div>
                }
            </>
        )
    }
}

export default ListBookings