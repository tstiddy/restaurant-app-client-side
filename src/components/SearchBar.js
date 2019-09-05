import React from 'react';
import {Dropdown, Segment, Input} from 'semantic-ui-react';

class SearchBar extends React.Component {

    onKeyPress = (e) => {
        if(e.key === 'Enter'){
            this.props.handleFormSubmit()
        }
    }

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
            <Segment basic>
                    <Dropdown
                        placeholder='Select Cuisine'
                        selection
                        options={cuisineOptions}
                        value={this.props.cuisineType}
                        onChange={this.props.handleChange}
                        style={{width: "15.4em"}}
                    />
                    <Input
                        action={{ icon: 'search', onClick: () => this.props.handleFormSubmit()}}
                        placeholder='Search...'
                        defaultValue={this.props.searchState}
                        onChange={this.props.searchResults}
                        onKeyPress={this.onKeyPress}
                    />
            </Segment>
        )
    }
}

export default SearchBar