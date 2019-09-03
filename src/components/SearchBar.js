import React from 'react';
import {Dropdown, Search, Form} from 'semantic-ui-react';

class SearchBar extends React.Component {
    render() {
        const cuisineOptions = [
            {
                key: '',
                text: '',
                value: null
            },
            {
                key: 'American',
                text: 'American',
                value: 1
            },
            {
                key: 'British',
                text: 'British',
                value: 133
            },
            {
                key: 'Chinese',
                text: 'Chinese',
                value: 25
            },
            {
                key: 'Indian',
                text: 'Indian',
                value: 148
            },
            {
                key: 'Italian',
                text: 'Italian',
                value: 55
            },
            {
                key: 'Japanese',
                text: 'Japanese',
                value: 60
            },
            {
                key: 'Mexican',
                text: 'Mexican',
                value: 73
            }
        ]
        return (
            <div>
                <br />
                <Dropdown
                    placeholder='Select Cuisine'
                    fluid
                    selection
                    options={cuisineOptions}
                    onChange={this.props.handleChange}
                />
                <br />
                <Form onSubmit={this.props.handleFormSubmit}>
                    <Form.Input placeholder="search..." width={6} value={this.props.result} onChange={this.props.searchResults}/>
                </Form>
                <br/>
            </div>
        )
    }
}

export default SearchBar