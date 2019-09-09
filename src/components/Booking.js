import React from 'react';
import {DateInput, TimeInput} from 'semantic-ui-calendar-react';
import {Form, Input, Icon, Button, Dropdown} from 'semantic-ui-react';
import RestaurantAPI from '../adapters/RestaurantAPI';
import {Link, Redirect} from 'react-router-dom'

class Booking extends React.Component{

    constructor(props) {
        super(props)

        this.state ={
            currentRestaurant: [],
            user_id: this.props.id,
            restaurant_id: this.props.match.params.id,
            booking_date: '',
            booking_time: '',
            number_of_people: '',
            redirect: false
        }
    }

    componentDidMount() {
        RestaurantAPI.getFavoriteRestaurant(this.props.match.params.id)
            .then(resta => this.setState({currentRestaurant: resta.name}))
    }

    handleChange = (event, {name, value}) => {
        if (this.state.hasOwnProperty(name)) {
            this.setState({ [name]: value })
        }
    }

    submitForm = () => {
        this.setState({
            user_id: this.props.id,
            restaurant_id: this.props.match.params.id,
        })
        this.handleMyBooking()
    }

    handleDropdownChange = (event, data) => {
        this.setState({number_of_people: data.value})
        
    }

    handleMyBooking = () => {
        this.props.myBooking(this.state)
        this.handleOnClick()
    }

    handleOnClick = () => {
        this.props.history.push('/booking')
    }

    render() {

        const options = [
            {
                key: 1,
                text: 1,
                value: 1
            },
            {
                key: 2,
                text: 2,
                value: 2
            },
            {
                key: 3,
                text: 3,
                value: 3
            },
            {
                key: 4,
                text: 4,
                value: 4
            },
            {
                key: 5,
                text: 5,
                value: 5
            },
            {
                key: 6,
                text: 6,
                value: 6
            },
            {
                key: 7,
                text: 7,
                value: 7
            },
            {
                key: 8,
                text: 8,
                value: 8
            },
            {
                key: 9,
                text: 9,
                value: 9
            },
            {
                key: 10,
                text: 10,
                value: 10
            }
        ]

        const { value } = this.state.number_of_people

        return (
            <Form onSubmit={ e => {
                e.preventDefault();
                this.submitForm()
            }}>
                <div>
                    <Input iconPosition='left'>
                        <Icon name='utensils'/>
                        <input value={this.state.currentRestaurant}/>
                    </Input>
                </div>
                <br />
                <div>
                    <Input iconPosition='left'>
                        <Icon name='user'/>
                        <input value={this.props.lastname}/>
                    </Input>
                </div>
                <br />
                <DateInput
                    animation='scale'
                    autoComplete='off'
                    closable={true}
                    hideMobileKeyboard={true}
                    iconPosition='left'
                    name='booking_date'
                    placeholder='Date'
                    popupPosition='bottom right'
                    value={this.state.booking_date}
                    onChange={this.handleChange}
                    style={{width:"14.3em"}}
                />
                <TimeInput
                    animation='scale'
                    autoComplete='off'
                    closable={true}
                    hideMobileKeyboard={true}
                    iconPosition='left'
                    name='booking_time'
                    placeholder='Time'
                    popupPosition='bottom right'
                    value={this.state.booking_time}
                    onChange={this.handleChange}
                    style={{width:"14.3em"}}
                />
                <Dropdown
                    placeholder='number of people'
                    value={value}
                    selection
                    onChange={this.handleDropdownChange}
                    options={options}
                    style={{width: "14.3em"}}
                />
                <div>
                    <br />
                    <Button type="submit" >Book Table</Button>
                </div>
            </Form>
        )
    }
}

export default Booking