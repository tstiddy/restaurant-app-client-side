import React from 'react';
import {Route} from 'react-router-dom';
import AuthAPI from '../adapters/AuthAPI';
import RestaurantAPI from '../adapters/RestaurantAPI';
import FormContainer from '../containers/FormContainer';
import RestaurantList from '../components/RestaurantList';
import RestaurantShow from '../components/RestaurantShow';

class Main extends React.Component {

  state = {
    user: undefined,
    restaurants: []
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
    RestaurantAPI.increaseNumResta()
    this.fetchRestaurant()
  }

  // findRestaurant = id => this.state.restaurants.find(r => console.log(r.restaurant.id))
  findRestaurant = id => this.state.restaurants.find(r => r.restaurant.id === id)

  render() {
    return (
      <div className = "App">
        <div className = 'bar'>
          <FormContainer user = {this.state.user} signUp = {this.signUp} logIn = {this.logIn} logOut = {this.logOut} />
        </div>
        <Route exact path={"/restaurants"} component={(props) => <RestaurantList {...props} restaurants={this.state.restaurants} showMore={this.showMoreResta}/>} />
        <Route path={"/restaurants/:id"} component={(props) => 
          <RestaurantShow {...props} loading={!this.findRestaurant(props.match.params.id)} {...this.findRestaurant(props.match.params.id)}/>
        }/>
      </div>
    )
  }
}

export default Main