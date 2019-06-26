import React, { Component } from 'react';
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
        .then(resp => {
          this.setState({
            savedFriends: resp.data
          })
        })
        .catch(err => {
          console.log('Error', err)
        })
    }

  render () {
    const { friend } = this.state
    return (
      <div className="App">
        <Route path='/' exact render={(props) => <FriendsList {...props} friend={ friend } />} />
          
        <div>
        <FriendsForm />
        </div>
         
        
      </div>
    );

  }
  
}


