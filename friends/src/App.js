import React, { Component, Route } from 'react';
import axios from 'axios';
import FriendsForm from './components/FriendsForm';
import FriendsList from './components/FriendsList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


export default class App extends Component {
      state = {
        savedFriends: []
    };

    componentDidMount() {
      axios.get('http://localhost:5000/friends')
        .then(response => {
          this.setState({
            savedFriends: response.data
          })
        })
        .catch(err => {
          console.log('Error', err)
        })
    }

  render () {
   
    const { savedFriends } = this.state
    return (
      <div className="App">
        <FriendsList friends={this.state.savedFriends}/>  
        <div>
        <FriendsForm />
        </div>
      </div>
    );

  }
  
}


