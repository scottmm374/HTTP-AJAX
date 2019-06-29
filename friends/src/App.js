import React, { Component, Route } from 'react';
import axios from 'axios';
import FriendsForm from './components/FriendsForm';
import FriendsList from './components/FriendsList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


export default class App extends Component {
  constructor() {
    super();
      this.state = {
        savedFriends: []
    };
  }
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

    addFriend = event => {
      event.preventDefault();
      const { name, age, email } = this.state
      const  newFriend ={ name, age, email };
     console.log('addFriend', name, age, email);

      axios.post('http://localhost:5000/friends', newFriend)
        .then((res => {
          console.log("res", res);
        }))
        .catch((err => {
          console.log("err", err);
        }));
    };

  render () {
   
    const { savedFriends } = this.state
    return (
      <div className="App">
        <FriendsList friends={ savedFriends} />  
        <div>
        <Route path="/friends" render={props => <FriendsForm {...props} addFriend={this.addFriend} /> }/>
        </div>
      </div>
    
    )}

}


