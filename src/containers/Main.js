import React from 'react';
import {Route} from 'react-router-dom';
import AuthAPI from '../adapters/AuthAPI';
import RestaurantAPI from '../adapters/RestaurantAPI';
import API from '../adapters/API';
import FormContainer from '../containers/FormContainer';
import RestaurantList from '../components/RestaurantList';
import RestaurantShow from '../components/RestaurantShow';
import FavoritesCard from '../components/FavoritesCard';
import SearchBar from '../components/SearchBar';

class Main extends React.Component {

  state = {
    user: undefined,
    restaurants: [],
    searchTerm: '',
    cuisineType: ''
  }

  componentDidMount() {
    AuthAPI.validateUser()
      .then(user => {
        this.setState({ user })
      })

      RestaurantAPI.getRestaurants()
      .then(restaurants => this.setState({ restaurants: restaurants.restaurants }))
  }

  fetchRestaurant() {
    RestaurantAPI.getRestaurants()
      .then(restaurants => this.setState({ restaurants: [...this.state.restaurants, ...restaurants.restaurants] }))
  }

  signUp = user => {
    AuthAPI.signUp(user)
      .then(user => this.setState({ user }))
  }

  logIn = user => {
    AuthAPI.logIn(user)
      .then(user => this.setState({ user}))
  }

  logOut = user => {
    AuthAPI.clearToken()
    this.setState({ user: undefined })
  }

  showMoreResta = () => {
    RestaurantAPI.increaseNumResta(this.state.cuisineType, this.state.searchTerm)
    this.fetchRestaurant()
  }

  newFavorite = newFavorite => {
    API.createFavorite(newFavorite)
  }

  setCuisine = (event, data) => {
    this.setState({ restaurants: [] })
    this.setState({ cuisineType: data.value})
    RestaurantAPI.cuisineSearch(data.value)
      .then(restaurant => this.setState({restaurants: restaurant.restaurants}))
  }

  searchResults = (e) => {
    this.setState({searchTerm: e.target.value})
  }

  handleFormSubmit = () => {
    this.setState({restaurants: [] })
    RestaurantAPI.restaurantSearch(this.state.searchTerm)
      .then(restaurant => this.setState({restaurants: restaurant.restaurants}))
  }

  findRestaurant = id => this.state.restaurants.find(r => r.restaurant.id === id)

  render() {
    return (
      <div className = "App">
        <div className = 'bar'>
          <FormContainer user = {this.state.user} signUp = {this.signUp} logIn = {this.logIn} logOut = {this.logOut} />
        </div>
        <div>
          <SearchBar handleChange={this.setCuisine} result={this.state.searchTerm} searchResults={this.searchResults} handleFormSubmit={this.handleFormSubmit}/>
        </div>
        <div>
          <Route exact path={"/restaurants"} component={(props) => <RestaurantList {...props} restaurants={this.state.restaurants} showMore={this.showMoreResta}/>} />
          <Route path={"/restaurants/:id"} component={(props) => 
            <RestaurantShow {...props} loading={!this.findRestaurant(props.match.params.id)} 
                          {...this.findRestaurant(props.match.params.id)} {...this.state.user} 
                          newFavorite={this.newFavorite}/>
          }/>
        </div>
          <Route exact path={"/favorites"} component={(props) => <FavoritesCard {...props} {...this.state.user} />} />
      </div>
    )
  }
}

export default Main