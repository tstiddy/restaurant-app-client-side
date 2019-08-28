import React from 'react';
// import './App.css';
import API from '../adapters/API';
import FormContainer from '../containers/FormContainer'

class Main extends React.Component {

  state = {
    user: undefined
  }

  componentDidMount() {
    API.validateUser()
      .then(user => {
        this.setState({ user })
      })
  }

  signUp = user => {
    API.signUp(user)
      .then(user => this.setState({ user }))
  }

  logIn = user => {
    API.logIn(user)
      .then(user => this.setState({ user}))
  }

  logOut = user => {
    API.clearToken()
    this.setState({ user: undefined })
  }
  render() {
    return (
      <div className = "App">
        <FormContainer user = {this.state.user} signUp = {this.signUp} logIn = {this.logIn} logOut = {this.logOut}/>
      </div>
    )
  }
}

export default Main